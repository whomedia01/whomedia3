export type PortfolioCategory = 'all' | 'board' | 'eboard' | 'chroma' | 'intro' | 'promo';

export interface PortfolioItem {
  id: string;          // YouTube Video ID
  title: string;       // Video title
  cat: PortfolioCategory; // Category key
  tag: string;         // Client / Publisher name
  label: string;       // Category badge label
  duration?: string;   // Video duration string
  year?: string;       // Production year
  description?: string;// Brief description
}

export interface DivisionItem {
  id: string;
  code: string;        // 'DIVISION 01'
  name: string;        // '교육사업부'
  description: string;
  subCategories: string[];
}

export interface BusinessPillar {
  id: string;
  code: string;        // 'PRODUCTION & CREATIVE'
  title: string;       // '미디어 프로덕션 & 크리에이티브 스튜디오'
  image: string;
  description: string;
  features: string[];
}

export interface StudioPackage {
  id: string;
  title: string;       // '스튜디오 1 & 2'
  badge: string;       // '86인치 전자칠판 세트'
  image: string;
  specs: string[];
}

export interface StudioGalleryItem {
  id: string;
  title: string;       // '메인 입구'
  tag: string;         // '스튜디오 1' or '공용 공간'
  url: string;
  description: string;
}

export interface ClientPartner {
  id: string;
  name: string;
  category?: string;
  logoText: string;
}

export interface InquiryFormData {
  clientName: string;
  contactPerson: string;
  phone: string;
  email: string;
  serviceType: string;
  message: string;
  privacyAgreed: boolean;
}
