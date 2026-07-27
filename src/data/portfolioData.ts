import { PortfolioItem, PortfolioCategory } from '../types';

export const PORTFOLIO_CATEGORIES: { id: PortfolioCategory; name: string; count?: number }[] = [
  { id: 'all', name: 'All (전체)' },
  { id: 'board', name: '칠판강의' },
  { id: 'eboard', name: '전자칠판' },
  { id: 'chroma', name: '크로마키' },
  { id: 'intro', name: '인트로/모션' },
  { id: 'promo', name: '홍보영상' },
];

export const PORTFOLIO_ITEMS: PortfolioItem[] = [
  // 1. 홍보영상 (promo)
  {
    id: '0z8asqx3tAA',
    title: 'NE능률 Brand Interview & Corporate Story',
    cat: 'promo',
    tag: 'NE능률',
    label: '홍보영상',
    duration: '03:45',
    year: '2024',
    description: 'NE능률 대표 인터뷰 및 인공지능 교육 콘텐츠 브랜드 스토리를 다각도로 담아낸 홍보 영상'
  },
  {
    id: 'jtdlXtNebG4',
    title: '에듀템 AI SPEAKING TOP 서비스 홍보',
    cat: 'promo',
    tag: '에듀템',
    label: '홍보영상',
    duration: '02:30',
    year: '2024',
    description: 'AI 음성인식 기반 영어 말하기 솔루션의 핵심 기능과 교육 현장 적용 사례 영상'
  },
  {
    id: 'dQw4w9WgXcQ', // Sample high quality embed
    title: '멀티캠퍼스 IT 직무 교육 가이드 프로모션',
    cat: 'promo',
    tag: '멀티캠퍼스',
    label: '홍보영상',
    duration: '04:15',
    year: '2024',
    description: '디지털 신기술 인재 양성 과정을 안내하는 감각적이고 다이나믹한 브랜딩 영상'
  },
  {
    id: 'L_LUpnjgPso',
    title: '한국기술교육대학교 온라인 평생교육원 소개',
    cat: 'promo',
    tag: '한기대 STEP',
    label: '홍보영상',
    duration: '05:10',
    year: '2023',
    description: '스마트 직업훈련 플랫폼 STEP의 4차 산업혁명 특화 강좌 가이드 시네마틱 홍보'
  },

  // 2. 칠판강의 (board)
  {
    id: 'kJQP7kiw5Fk',
    title: '수능/내신 대비 고등 수학 핵심 개념 완강',
    cat: 'board',
    tag: '메가스터디',
    label: '칠판강의',
    duration: '45:20',
    year: '2024',
    description: '4K 스튜디오 특수 조명과 무반사 특수 칠판 세팅을 통해 강사의 선명한 판서와 몰입감을 선사'
  },
  {
    id: '3JZ_D3ELwOQ',
    title: 'EBS 중학 영문법 완전 정복 라이브 강좌',
    cat: 'board',
    tag: 'EBS중학',
    label: '칠판강의',
    duration: '38:15',
    year: '2024',
    description: '선명한 분필 가독성과 고음질 핀마이크 입체 음향 설계로 정갈한 수험 강의 분위기 구현'
  },
  {
    id: 'fJ9rUzIMcDQ',
    title: '천재교육 초등 수학 사고력 특강 마스터',
    cat: 'board',
    tag: '천재교육',
    label: '칠판강의',
    duration: '29:40',
    year: '2023',
    description: '시각 자료 교구와 정교한 멀티캠 구도로 아이들의 원리 이해를 돕는 판서 강의'
  },
  {
    id: '2g811Eo7K8U',
    title: '비상교육 수능 국어 문학 지문 스피드 독해',
    cat: 'board',
    tag: '비상교육',
    label: '칠판강의',
    duration: '42:00',
    year: '2023',
    description: '지문 가독성을 극대화한 그린보드 특수 조명 촬영 및 하이라이트 그래픽 자막 파이프라인'
  },

  // 3. 전자칠판 (eboard)
  {
    id: 'LXb3EKWsInQ',
    title: '86인치 UHD 스마트 전자칠판 알고리즘 강좌',
    cat: 'eboard',
    tag: '비상교육',
    label: '전자칠판',
    duration: '35:10',
    year: '2024',
    description: '초고화질 전자칠판과 실시간 프레젠테이션 오버레이 기법으로 정교한 코딩 교육 구현'
  },
  {
    id: 'M7lc1UVf-VE',
    title: 'AI 데이터 분석 기초 핵심 전자칠판 터치 강의',
    cat: 'eboard',
    tag: '멀티캠퍼스',
    label: '전자칠판',
    duration: '28:45',
    year: '2024',
    description: '실시간 제스처 모션 반응과 무반사 글래스 처리로 가독성 높은 차세대 스마트 클래스'
  },
  {
    id: '5qap5aO4i9A',
    title: 'K-MOOC 대학 물리 및 공학 시뮬레이션강의',
    cat: 'eboard',
    tag: 'K-MOOC',
    label: '전자칠판',
    duration: '50:30',
    year: '2023',
    description: '3D 시뮬레이션 프로그램과 스마트 전자칠판 필기를 판서와 동시에 자연스럽게 매칭'
  },
  {
    id: 'Vbl6rE293X4',
    title: '대교 눈높이 스마트 러닝 원리 해설',
    cat: 'eboard',
    tag: '대교',
    label: '전자칠판',
    duration: '22:15',
    year: '2023',
    description: '대형 모니터 판서와 크로마키 합성 기술을 결합하여 직관성을 극대화한 아동 교육'
  },

  // 4. 크로마키 (chroma)
  {
    id: 'y83x7Yy6Zto',
    title: '가상 XR 스튜디오 배경 크로마키 과학 실험',
    cat: 'chroma',
    tag: '서울시교육청',
    label: '크로마키',
    duration: '18:50',
    year: '2024',
    description: '그린 스크린 크로마키 합성을 통해 완벽하게 디테일한 에이징 처리와 가상 3D 세트 구현'
  },
  {
    id: 'CevxZvSJLk8',
    title: '글로벌 비즈니스 영어 컨버세이션 롤플레잉',
    cat: 'chroma',
    tag: 'YBM시사',
    label: '크로마키',
    duration: '15:20',
    year: '2024',
    description: '뉴욕/공항/오피스 등 실제 가상 스튜디오 환경을 자연스럽게 합성한 대화형 어학 강좌'
  },
  {
    id: 'K4TOrB7at0Y',
    title: '공공기관 직무 교육 메타버스 인터랙션',
    cat: 'chroma',
    tag: '한국교육학술정보원',
    label: '크로마키',
    duration: '24:10',
    year: '2023',
    description: '머리카락 한 올까지 섬세하게 분리해내는 하이엔드 키잉 기술과 조명 맞춤 세팅'
  },
  {
    id: 'EngW7tLk6R8',
    title: 'AI 아나운서 메인 앵커 튜토리얼 스튜디오',
    cat: 'chroma',
    tag: '후미디어랩',
    label: '크로마키',
    duration: '12:05',
    year: '2024',
    description: '실제 아나운서 촬영본과 AI 그래픽 융합으로 가공한 첨단 미래 교육 미디어 샘플'
  },

  // 5. 인트로 / 모션그래픽 (intro)
  {
    id: 'e-ORhEE9VVg',
    title: '2024 EBS 수능특강 시그니처 오프닝 타이틀',
    cat: 'intro',
    tag: 'EBS',
    label: '인트로/모션',
    duration: '00:30',
    year: '2024',
    description: '3D 모션 그래픽과 트렌디한 사운드 디자인으로 수험생들의 눈길을 사로잡는 시그니처 오프닝'
  },
  {
    id: 'IFAc234aK5k',
    title: '디지털 새싹 캠프 3D 캐릭터 애니메이션 모션',
    cat: 'intro',
    tag: '교육부',
    label: '인트로/모션',
    duration: '01:15',
    year: '2024',
    description: '학생 친화적 마스코트 캐릭터 3D 트래킹 및 인터랙티브 인터페이스 연출'
  },
  {
    id: 'JGwWNGJdvx8',
    title: '교원 빨간펜 스마트 펜 러닝 로고 모션',
    cat: 'intro',
    tag: '교원',
    label: '인트로/모션',
    duration: '00:20',
    year: '2023',
    description: '브랜드 가치와 디지털 혁신 이미지를 3D 트랜지션으로 녹여낸 브랜드 인트로'
  },
  {
    id: 'fJ9rUzIMcDQ',
    title: '웅진씽크빅 AI 책클럽 오프닝 트레일러',
    cat: 'intro',
    tag: '웅진씽크빅',
    label: '인트로/모션',
    duration: '00:45',
    year: '2023',
    description: '화려한 파티클 이펙트와 타이포그래피 모션으로 직관적인 호기심 유발 연출'
  },

  // 추가 보충 항목 (Total 24 items)
  {
    id: 'kJQP7kiw5Fk',
    title: '한빛미디어 코딩 자격증 종합 가이드',
    cat: 'board',
    tag: '한빛미디어',
    label: '칠판강의',
    duration: '31:10',
    year: '2024',
    description: 'IT 실무 출판 전문 노하우와 맞춤형 판서 조명으로 전달력을 극대화한 강좌'
  },
  {
    id: 'LXb3EKWsInQ',
    title: '동아출판 고등 영어 독해 분석 인강',
    cat: 'eboard',
    tag: '동아출판',
    label: '전자칠판',
    duration: '40:15',
    year: '2024',
    description: '분석 지문 컬러 하이라이팅 및 터치 모션 기능으로 입체적 문장 구조 설명'
  },
  {
    id: 'y83x7Yy6Zto',
    title: '한국방송통신대학교 라이브 세미나 크로마키',
    cat: 'chroma',
    tag: 'KNOU',
    label: '크로마키',
    duration: '55:00',
    year: '2024',
    description: '실시간 방송 및 4K 가상 배경 스튜디오 레코딩을 동시에 지원하는 미디어 세팅'
  },
  {
    id: '0z8asqx3tAA',
    title: '미래엔 디지털 교과서 활용 우수 사례 홍보',
    cat: 'promo',
    tag: '미래엔',
    label: '홍보영상',
    duration: '03:15',
    year: '2024',
    description: '학교 현장에서 스마트 기기와 디지털 교과서를 활용하는 활기찬 인터뷰 및 스케치'
  }
];

export const KEYWORDS = [
  '교육 콘텐츠 개발',
  '종합 영상 미디어 솔루션',
  'AI·디지털 교육 솔루션',
  '4K 스마트 스튜디오',
  '기업·공공 미디어 브랜딩'
];
