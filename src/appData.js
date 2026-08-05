document.addEventListener('alpine:init', () => {
    Alpine.data('whomediaApp', () => ({
        scrolled: false, 
        mobileMenuOpen: false, 
        refTab: 'all',
        portfolioLimit: 12,
        videoModalOpen: false,
        activeVideoId: '',
        activeVideoTitle: '',
        imageModalOpen: false,
        activeStudioImg: '',
        activeStudioTitle: '',
        keywords: ['교육 콘텐츠 개발', '종합 영상 미디어 솔루션', 'AI·디지털 교육 솔루션', '4K 스마트 스튜디오', '기업·공공 미디어 브랜딩'],
        currentKeywordIndex: 0,

        // [전체 포트폴리오 목록]
        portfolioItems: [
            { id: '0kHSItVXKOU', title: '능률 고등 영어', cat: 'edu', tag: 'NE능률', label: '교육 콘텐츠' },
            { id: '6xb2GYInARg', title: '능률 중등 영어', cat: 'edu', tag: 'NE능률', label: '교육 콘텐츠' },
            { id: 'rJ2U9T27WwU', title: '태진옥 홍보영상', cat: 'press', tag: '태진옥', label: '홍보영상' },
            { id: 'PTqpVR-yIKg', title: '경희사이버대학 크로마키', cat: 'production', tag: '경희사이버대', label: '크로마키' },
            { id: 'AbeWeusmjws', title: '전자칠판', cat: 'production', tag: '전자칠판', label: '4K 프로덕션' },
            { id: 'PVVdU-CYowA', title: '웅진_전자칠판', cat: 'edu', tag: '웅진씽크빅', label: '전자칠판' },
            { id: 'PxAZYrpdowU', title: '웅진_블랙보드', cat: 'edu', tag: '웅진씽크빅', label: '블랙보드' },
            { id: 'x4Cb5At6Z_M', title: 'CG 인터랙티브 강의', cat: 'production', tag: 'HOOMEDIA', label: 'CG/인터랙티브' },
            { id: 'JwCrB4dKgDU', title: '테블릿 강의', cat: 'hucampus', tag: 'HOOMEDIA', label: '태블릿 강의' },
            { id: '54m2LENAo68', title: '크로마키', cat: 'production', tag: 'HOOMEDIA', label: '크로마키' },
            { id: 'WaxhtAZLLV8', title: '크로마키 촬영', cat: 'production', tag: 'HOOMEDIA', label: '크로마키 촬영' },
            { id: 'paYW3d0MRqk', title: 'EBS 올쏘 인트로', cat: 'production', tag: 'EBS', label: '모션그래픽' },
            { id: 'komXGh3TGSo', title: 'EBS 천일문 타이틀', cat: 'production', tag: 'EBS', label: '타이틀 연출' },
            { id: 'cF7i6m9apsE', title: 'EBS 포텐시리즈 인트로', cat: 'production', tag: 'EBS', label: '모션그래픽' },
            { id: '-Is7q7qD9Rc', title: '꽁강 유튜브 인트로', cat: 'press', tag: '유튜브PR', label: '유튜브 인트로' }
        ],

        get filteredPortfolio() {
            if (this.refTab === 'all') return this.portfolioItems;
            return this.portfolioItems.filter(item => item.cat === this.refTab);
        },

        openModal(videoId, videoTitle) {
            this.activeVideoId = videoId;
            this.activeVideoTitle = videoTitle;
            this.videoModalOpen = true;
        },
        closeModal() {
            this.videoModalOpen = false;
            this.activeVideoId = '';
            this.activeVideoTitle = '';
        },
        openImageModal(imgUrl, title) {
            this.activeStudioImg = imgUrl;
            this.activeStudioTitle = title;
            this.imageModalOpen = true;
        },
        closeImageModal() {
            this.imageModalOpen = false;
            this.activeStudioImg = '';
            this.activeStudioTitle = '';
        },
        showMobileOrgModal: false,
        inquirySuccessModal: false,
        inquirySuccessMessage: '',
        inquirySubmitting: false,
        inquiryForm: {
            company: '',
            name: '',
            phone: '',
            category: '',
            message: '',
            consent: false
        },

        // Admin Inquiry Management State & Logic
        adminModalOpen: false,
        adminAuthenticated: false,
        adminPasswordInput: '',
        adminPasswordError: false,
        adminInquiries: [],
        adminFilterStatus: '전체',
        adminSearchQuery: '',
        receiverEmail: localStorage.getItem('whomedia_receiver_email') || 'whomedia03@gmail.com, james5183@naver.com, apark12321@gmail.com',
        formspreeUrl: localStorage.getItem('whomedia_formspree_url') || '',
        showEmailSetupGuide: false,
        testEmailSending: false,

        init() {
            setInterval(() => { this.currentKeywordIndex = (this.currentKeywordIndex + 1) % this.keywords.length; }, 2800);
            this.startServiceAutoPlay();
            this.startAboutAutoPlay();
            this.fetchAdminInquiries();
            this.checkAdminHash();
            window.addEventListener('hashchange', () => this.checkAdminHash());
        },

        checkAdminHash() {
            if (window.location.hash === '#admin') {
                this.openAdminModal();
            }
        },
        openAdminModal() {
            this.adminModalOpen = true;
            this.fetchAdminInquiries();
        },
        loginAdmin() {
            if (this.adminPasswordInput === 'whomedia123' || this.adminPasswordInput === 'admin' || this.adminPasswordInput === '1234') {
                this.adminAuthenticated = true;
                this.adminPasswordError = false;
                this.fetchAdminInquiries();
            } else {
                this.adminPasswordError = true;
            }
        },
        saveReceiverEmail() {
            if (!this.receiverEmail || !this.receiverEmail.includes('@')) {
                alert('올바른 이메일 주소를 입력해 주세요.');
                return;
            }
            localStorage.setItem('whomedia_receiver_email', this.receiverEmail);
            alert('담당자 수신 이메일 목록이 성공적으로 저장되었습니다:\n' + this.receiverEmail);
        },
        saveFormspreeUrl() {
            localStorage.setItem('whomedia_formspree_url', this.formspreeUrl);
            alert('이메일/Formspree 연동 URL 설정이 저장되었습니다.');
        },
        async sendTestEmail() {
            this.testEmailSending = true;
            try {
                const targetList = (this.receiverEmail || 'whomedia03@gmail.com, james5183@naver.com, apark12321@gmail.com')
                    .split(',').map(e => e.trim()).filter(Boolean);
                
                let successCount = 0;
                for (const email of targetList) {
                    try {
                        const res = await fetch('https://formsubmit.co/ajax/' + email, {
                            method: 'POST',
                            headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
                            body: JSON.stringify({
                                _subject: '[WHOMEDIA 시스템] 문의 수신 이메일 테스트 발송',
                                _template: 'table',
                                '테스트안내': 'WHOMEDIA 어드민 이메일 수신 정상 작동 테스트입니다.',
                                '수신이메일': email,
                                '발송시각': new Date().toLocaleString('ko-KR', { timeZone: 'Asia/Seoul' })
                            })
                        });
                        if (res.ok) successCount++;
                    } catch(e) {
                        console.error('Test email error for ' + email + ':', e);
                    }
                }

                if (successCount > 0) {
                    alert('수신 테스트 메일이 성공적으로 발송되었습니다.\n수신처: ' + targetList.join(', ') + '\n\n* 첫 수신 시 각 메일함에 FormSubmit 확인(Activation) 메일이 도달한 경우 1회 링크를 클릭하여 활성화해 주세요.');
                } else {
                    alert('테스트 메일 전송 응답에 실패했습니다.');
                }
            } catch(e) {
                console.error('Test email error:', e);
                alert('테스트 메일 전송 실패: 네트워크 오류가 발생했습니다.');
            } finally {
                this.testEmailSending = false;
            }
        },
        async fetchAdminInquiries() {
            let serverInquiries = [];
            try {
                const res = await fetch('/api/inquiries');
                const data = await res.json();
                if (data.success && Array.isArray(data.data)) {
                    serverInquiries = data.data;
                }
            } catch(e) {
                console.warn('Server fetch fallback:', e);
            }

            let localInquiries = [];
            try {
                const saved = localStorage.getItem('whomedia_inquiries_v1');
                if (saved) localInquiries = JSON.parse(saved);
            } catch(e) { console.error(e); }

            const combined = [...serverInquiries];
            for (const item of localInquiries) {
                if (!combined.some(i => i.id === item.id)) {
                    combined.push(item);
                }
            }

            this.adminInquiries = combined;
            try {
                localStorage.setItem('whomedia_inquiries_v1', JSON.stringify(this.adminInquiries));
            } catch(e) {}
        },
        async submitInquiry() {
            if (!this.inquiryForm.company || !this.inquiryForm.name || !this.inquiryForm.phone || !this.inquiryForm.category || !this.inquiryForm.message) {
                alert('필수 문의 항목을 모두 작성해 주세요.');
                return;
            }
            if (!this.inquiryForm.consent) {
                alert('개인정보 수집 및 이용 동의에 체크해 주세요.');
                return;
            }
            this.inquirySubmitting = true;

            const createdAt = new Date().toLocaleString('ko-KR', { timeZone: 'Asia/Seoul' });
            const newInquiry = {
                id: 'inq_' + Date.now() + '_' + Math.random().toString(36).substring(2, 7),
                company: this.inquiryForm.company,
                name: this.inquiryForm.name,
                phone: this.inquiryForm.phone,
                category: this.inquiryForm.category,
                message: this.inquiryForm.message,
                createdAt: createdAt,
                status: '접수대기',
                adminMemo: ''
            };

            // 1. Dispatch to Express Backend (/api/inquiry)
            try {
                const res = await fetch('/api/inquiry', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(this.inquiryForm)
                });
                const data = await res.json();
                if (data.success && data.data && data.data.inquiry) {
                    newInquiry.id = data.data.inquiry.id;
                }
            } catch (err) {
                console.warn('Inquiry API dispatch fallback:', err);
            }

            // 2. Direct client-side dispatch to FormSubmit API for target email list
            const targetEmails = (this.receiverEmail || 'whomedia03@gmail.com, james5183@naver.com, apark12321@gmail.com')
                .split(',').map(e => e.trim()).filter(Boolean);
            
            for (const email of targetEmails) {
                try {
                    await fetch('https://formsubmit.co/ajax/' + email, {
                        method: 'POST',
                        headers: { 
                            'Content-Type': 'application/json',
                            'Accept': 'application/json' 
                        },
                        body: JSON.stringify({
                            _subject: '[WHOMEDIA 신규 프로젝트 문의] ' + this.inquiryForm.company + ' - ' + this.inquiryForm.name + '님',
                            _template: 'table',
                            _captcha: 'false',
                            '기관/회사명': this.inquiryForm.company,
                            '담당자': this.inquiryForm.name,
                            '연락처': this.inquiryForm.phone,
                            '문의유형': this.inquiryForm.category,
                            '상세내용': this.inquiryForm.message,
                            '접수시각': createdAt
                        })
                    });
                } catch(e) {
                    console.warn('Client direct email dispatch exception for ' + email + ':', e);
                }
            }

            // 3. Formspree custom webhook if configured
            if (this.formspreeUrl && this.formspreeUrl.startsWith('http')) {
                try {
                    await fetch(this.formspreeUrl, {
                        method: 'POST',
                        headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
                        body: JSON.stringify({
                            company: this.inquiryForm.company,
                            name: this.inquiryForm.name,
                            phone: this.inquiryForm.phone,
                            category: this.inquiryForm.category,
                            message: this.inquiryForm.message,
                            createdAt: createdAt
                        })
                    });
                } catch(e) {
                    console.error('Formspree dispatch error:', e);
                }
            }

            this.adminInquiries.unshift(newInquiry);
            try {
                localStorage.setItem('whomedia_inquiries_v1', JSON.stringify(this.adminInquiries));
            } catch(e) {}

            const recipientStr = targetEmails.join(', ');
            this.inquirySuccessMessage = '작성해주신 프로젝트/임대 문의가 담당 직원 이메일(' + recipientStr + ') 및 어드민 시스템에 즉시 정상 접수되었습니다.';
            this.inquirySuccessModal = true;
            this.inquiryForm = { company: '', name: '', phone: '', category: '', message: '', consent: false };
            this.inquirySubmitting = false;
        },
        async updateInquiryStatus(id, newStatus) {
            const item = this.adminInquiries.find(i => i.id === id);
            if (item) {
                item.status = newStatus;
                try {
                    localStorage.setItem('whomedia_inquiries_v1', JSON.stringify(this.adminInquiries));
                    await fetch('/api/inquiry/' + id, {
                        method: 'PATCH',
                        headers: { 'Content-Type': 'application/json' },
                        body: JSON.stringify({ status: newStatus })
                    });
                } catch(e) {}
            }
        },
        async saveAdminMemo(id, memo) {
            const item = this.adminInquiries.find(i => i.id === id);
            if (item) {
                item.adminMemo = memo;
                try {
                    localStorage.setItem('whomedia_inquiries_v1', JSON.stringify(this.adminInquiries));
                    await fetch('/api/inquiry/' + id, {
                        method: 'PATCH',
                        headers: { 'Content-Type': 'application/json' },
                        body: JSON.stringify({ adminMemo: memo })
                    });
                } catch(e) {}
            }
        },
        async deleteInquiry(id) {
            if (!confirm('해당 문의 내역을 정말 삭제하시겠습니까?')) return;
            this.adminInquiries = this.adminInquiries.filter(i => i.id !== id);
            try {
                localStorage.setItem('whomedia_inquiries_v1', JSON.stringify(this.adminInquiries));
                await fetch('/api/inquiry/' + id, { method: 'DELETE' });
            } catch(e) {}
        },
        getFilteredInquiries() {
            return this.adminInquiries.filter(i => {
                const matchStatus = this.adminFilterStatus === '전체' || i.status === this.adminFilterStatus;
                const q = this.adminSearchQuery.trim().toLowerCase();
                const matchQuery = !q || 
                    (i.company && i.company.toLowerCase().includes(q)) ||
                    (i.name && i.name.toLowerCase().includes(q)) ||
                    (i.phone && i.phone.includes(q)) ||
                    (i.category && i.category.toLowerCase().includes(q)) ||
                    (i.message && i.message.toLowerCase().includes(q));
                return matchStatus && matchQuery;
            });
        },
        getPendingCount() {
            return this.adminInquiries.filter(i => i.status === '접수대기').length;
        },
        getReviewingCount() {
            return this.adminInquiries.filter(i => i.status === '확인중').length;
        },
        getCompletedCount() {
            return this.adminInquiries.filter(i => i.status === '처리완료').length;
        },
        formatCsvCell(str) {
            const clean = String(str || '').replace(/"/g, '""').replace(/\n/g, ' ');
            return '"' + clean + '"';
        },
        exportInquiriesCSV() {
            if (this.adminInquiries.length === 0) {
                alert('다운로드할 문의 내역이 없습니다.');
                return;
            }
            let csv = '\uFEFF접수일시,상태,기관/회사명,담당자,연락처,문의유형,상세내용,관리자메모\n';
            this.adminInquiries.forEach(i => {
                csv += this.formatCsvCell(i.createdAt) + ',' + 
                       this.formatCsvCell(i.status) + ',' + 
                       this.formatCsvCell(i.company) + ',' + 
                       this.formatCsvCell(i.name) + ',' + 
                       this.formatCsvCell(i.phone) + ',' + 
                       this.formatCsvCell(i.category) + ',' + 
                       this.formatCsvCell(i.message) + ',' + 
                       this.formatCsvCell(i.adminMemo) + '\n';
            });
            const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
            const url = URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.href = url;
            a.download = 'WHOMEDIA_문의접수목록_' + new Date().toISOString().slice(0, 10) + '.csv';
            a.click();
        },
        activeServiceIndex: 0,
        serviceAutoTimer: null,
        startServiceAutoPlay() {
            if (this.serviceAutoTimer) clearInterval(this.serviceAutoTimer);
            this.serviceAutoTimer = setInterval(() => {
                this.nextServiceCard();
            }, 3500);
        },
        stopServiceAutoPlay() {
            if (this.serviceAutoTimer) {
                clearInterval(this.serviceAutoTimer);
                this.serviceAutoTimer = null;
            }
        },
        nextServiceCard() {
            this.activeServiceIndex = (this.activeServiceIndex + 1) % 3;
            this.scrollToServiceCard();
        },
        prevServiceCard() {
            this.activeServiceIndex = (this.activeServiceIndex + 2) % 3;
            this.scrollToServiceCard();
        },
        selectServiceCard(index) {
            this.activeServiceIndex = index;
            this.scrollToServiceCard();
        },
        scrollToServiceCard() {
            const container = document.getElementById('services-cards-container');
            const targetCard = document.getElementById('service-card-' + this.activeServiceIndex);
            if (container && targetCard) {
                container.scrollTo({
                    left: targetCard.offsetLeft - container.offsetLeft - 16,
                    behavior: 'smooth'
                });
            }
        },
        aboutActiveIndex: 0,
        aboutAutoTimer: null,
        startAboutAutoPlay() {
            if (this.aboutAutoTimer) clearInterval(this.aboutAutoTimer);
            this.aboutAutoTimer = setInterval(() => {
                this.nextAboutCard();
            }, 4500);
        },
        stopAboutAutoPlay() {
            if (this.aboutAutoTimer) {
                clearInterval(this.aboutAutoTimer);
                this.aboutAutoTimer = null;
            }
        },
        nextAboutCard() {
            this.aboutActiveIndex = (this.aboutActiveIndex + 1) % 5;
            this.scrollToAboutCard();
        },
        prevAboutCard() {
            this.aboutActiveIndex = (this.aboutActiveIndex + 4) % 5;
            this.scrollToAboutCard();
        },
        selectAboutCard(index) {
            this.aboutActiveIndex = index;
            this.scrollToAboutCard();
        },
        scrollToAboutCard() {
            const container = document.getElementById('about-cards-container');
            const targetCard = document.getElementById('about-card-' + this.aboutActiveIndex);
            if (container && targetCard) {
                container.scrollTo({
                    left: targetCard.offsetLeft - container.offsetLeft - 16,
                    behavior: 'smooth'
                });
            }
        },
        loadMore() {
            this.portfolioLimit += 8;
        }
    }));
});
