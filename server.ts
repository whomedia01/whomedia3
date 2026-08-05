import express from "express";
import path from "path";
import { createServer as createViteServer } from "vite";

interface InquiryData {
  company: string;
  name: string;
  phone: string;
  category: string;
  message: string;
  createdAt: string;
}

// In-memory log for multi-admin real-time tracking
const inquiryLogs: InquiryData[] = [];

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  // API endpoint for Multi-Admin Inquiry Notification System
  app.post("/api/inquiry", async (req, res) => {
    try {
      const { company, name, phone, category, message } = req.body;
      const createdAt = new Date().toLocaleString("ko-KR", { timeZone: "Asia/Seoul" });

      if (!company || !name || !phone || !category || !message) {
        return res.status(400).json({ success: false, message: "필수 입력 항목이 누락되었습니다." });
      }

      const newInquiry: InquiryData = { company, name, phone, category, message, createdAt };
      inquiryLogs.unshift(newInquiry);

      console.log(`[INQUIRY RECEIVED - Multi-Admin Notification Broadcast]`, newInquiry);

      // Webhook broadcast to multiple administrative channels (Slack / Telegram / Google Sheets Webhook)
      const webhookUrl = process.env.SLACK_WEBHOOK_URL || process.env.INQUIRY_WEBHOOK_URL;
      let webhookSent = false;

      if (webhookUrl) {
        try {
          await fetch(webhookUrl, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              text: `🚨 *[WHOMEDIA 신규 프로젝트 문의 접수]*\n• *기관/회사명:* ${company}\n• *담당자:* ${name} (${phone})\n• *문의유형:* ${category}\n• *상세내용:* ${message}\n• *접수시각:* ${createdAt}`
            })
          });
          webhookSent = true;
        } catch (err) {
          console.error("Webhook dispatch failed:", err);
        }
      }

      return res.json({
        success: true,
        message: "문의가 성공적으로 접수되어 담당 관리자진 전체에게 실시간 공유되었습니다.",
        data: {
          inquiryId: Date.now().toString(36),
          createdAt,
          webhookSent,
          totalLogged: inquiryLogs.length
        }
      });
    } catch (error) {
      console.error("Inquiry processing error:", error);
      return res.status(500).json({ success: false, message: "문의 접수 중 서버 오류가 발생했습니다." });
    }
  });

  // API endpoint to retrieve inquiry logs (for admin monitoring)
  app.get("/api/inquiries", (_req, res) => {
    res.json({ success: true, count: inquiryLogs.length, data: inquiryLogs });
  });

  // Vite middleware for development / Production static serve
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (_req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
