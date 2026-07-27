import { PortfolioItem, PortfolioCategory } from '../types';

export const PORTFOLIO_CATEGORIES: { id: PortfolioCategory; name: string; count?: number }[] = [
  { id: 'all', name: '전체 (All)' },
  { id: 'production', name: '4K 미디어 프로덕션' },
  { id: 'edu', name: '교육 콘텐츠 & 컨설팅' },
  { id: 'hucampus', name: '후캠퍼스 평생교육' },
  { id: 'press', name: '디지털 언론 & PR' },
];

export const PORTFOLIO_ITEMS: PortfolioItem[] = [
  // 1. 4K 미디어 프로덕션 (production)
  {
    id: 'ScMzIvxBSi4',
    title: '전자칠판 인강&프로덕션',
    cat: 'production',
    tag: '4K프로덕션',
    label: '4K프로덕션',
    duration: '05:20',
    year: '2024',
    description: '86인치 최신 전자칠판 및 방송용 4K 멀티 스튜디오 연출 전과목 동영상 강의 프로덕션',
    imageUrl: 'https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'LXb3EKWsInQ',
    title: '전자칠판/크로마키 그라비티',
    cat: 'production',
    tag: '4K프로덕션',
    label: '4K프로덕션',
    duration: '03:45',
    year: '2024',
    description: '초대형 가상 크로마키 세트 연출 및 멀티 스튜디오 라이브 스위칭 모션 그래픽',
    imageUrl: 'https://images.unsplash.com/photo-1598899134739-24c46f58b8c0?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'M7lc1UVf-VE',
    title: '아동학 선도대학 홍보영상',
    cat: 'production',
    tag: '4K프로덕션',
    label: '4K프로덕션',
    duration: '04:10',
    year: '2024',
    description: '대학 및 교육기관 맞춤형 고화질 4K 브랜드 홍보 영상 촬영 및 종합 후반 마감',
    imageUrl: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'L_LUpnjgPso',
    title: '수능/내신 전과목인 스튜디오',
    cat: 'production',
    tag: '4K프로덕션',
    label: '4K프로덕션',
    duration: '06:15',
    year: '2024',
    description: '무반사 특수 칠판과 4K 무빙 카메라 구도를 활용한 최고 가독성의 강좌 스튜디오 연출',
    imageUrl: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'jNQXAC9IVRw',
    title: 'CG 아트워크와 모션 그래픽 타이',
    cat: 'production',
    tag: '4K프로덕션',
    label: '4K프로덕션',
    duration: '02:30',
    year: '2024',
    description: '브랜드 가치 증진을 위한 고해상도 3D CG 인트로, 트랜지션, 타이틀 모션 그래픽',
    imageUrl: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'tgbNymZ7vqY',
    title: '4K 전자칠판/스튜디오 촬영 현장',
    cat: 'production',
    tag: '4K프로덕션',
    label: '4K프로덕션',
    duration: '04:50',
    year: '2024',
    description: '160평 메인 스튜디오 86인치 전자칠판 촬영 시스템 및 전담 감독 모니터링 현장',
    imageUrl: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'k3_zwsbszis',
    title: '태권도 인터넷 홍보영상',
    cat: 'production',
    tag: '4K프로덕션',
    label: '4K프로덕션',
    duration: '03:20',
    year: '2024',
    description: '스포츠 및 다채로운 테마의 멀티미디어 홍보 영상 스케치 및 브랜드 브랜딩',
    imageUrl: 'https://images.unsplash.com/photo-1517649763962-0c6232662000?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: '_tV5LEBDs7w',
    title: 'EBS 등용 학선 영상 인강홍보',
    cat: 'production',
    tag: '4K프로덕션',
    label: '4K프로덕션',
    duration: '05:00',
    year: '2024',
    description: 'EBS 등 대표 에듀테크 브랜드 메인 강좌 프로모션 및 4K 동영상 촬영연출',
    imageUrl: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=800&q=80'
  },

  // 2. 교육 콘텐츠 & 컨설팅 (edu)
  {
    id: 'dQw4w9WgXcQ',
    title: '동아출판, 신뢰성을 높이는 AI 교과서',
    cat: 'edu',
    tag: '교육콘텐츠',
    label: '교육콘텐츠',
    duration: '05:12',
    year: '2024',
    description: '초·중·고 및 대학 맞춤형 AI/디지털 교과서 모듈 및 인터랙티브 학습 콘텐츠 설계·개발',
    imageUrl: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: '4gH1aWn383c',
    title: 'NE능률, 스마트학습 AI/스마트 융합',
    cat: 'edu',
    tag: '교육콘텐츠',
    label: '교육콘텐츠',
    duration: '04:18',
    year: '2024',
    description: '오프라인 교재와 연동되는 디지털 시각화 및 멀티미디어 인터랙티브 스마트 학습 솔루션',
    imageUrl: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: '0z8asqx3tAA',
    title: 'EBS 종합스마트에 디지털 아트',
    cat: 'production',
    tag: '4K프로덕션',
    label: '4K프로덕션',
    duration: '03:45',
    year: '2024',
    description: '하루 10분 부모교육 시리즈 및 EBS 종합 스마트 디지털 아트 모션 프로덕션',
    imageUrl: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'W_aX49mE1_0',
    title: '하우투 동아리 오프닝 인트로',
    cat: 'production',
    tag: '4K프로덕션',
    label: '4K프로덕션',
    duration: '02:10',
    year: '2024',
    description: '감각적인 블랙 & 옐로우 3D 모션 타이틀과 클럽 오프닝 시그니처 연출',
    imageUrl: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'K6-5EreEshg',
    title: '휴먼스쿨학원 AI 스마트홈 런칭',
    cat: 'edu',
    tag: '교육콘텐츠',
    label: '교육콘텐츠',
    duration: '03:20',
    year: '2024',
    description: '기업 및 교육기관 맞춤형 AI 활용 스마트홈 에듀테크 시스템 런칭 홍보',
    imageUrl: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'C1920_pLZ_x',
    title: '휴먼스쿨학원 서포터즈 발대식 현장스케치',
    cat: 'edu',
    tag: '교육콘텐츠',
    label: '교육콘텐츠',
    duration: '04:15',
    year: '2024',
    description: '학원 서포터즈 발대식 현장 생생한 스케치 및 인터뷰 멀티미디어 스페셜 영상',
    imageUrl: 'https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'D9182_aQL_p',
    title: '미래엔디지털 비전교재 홍보영상',
    cat: 'edu',
    tag: '교육콘텐츠',
    label: '교육콘텐츠',
    duration: '03:15',
    year: '2024',
    description: '학교 현장 스마트 기기와 미래엔 교재 모듈을 결합한 에듀테크 비전 프로모션',
    imageUrl: 'https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'H2049_mXZ-0',
    title: '세종사이버대학교 대형 스튜디오',
    cat: 'production',
    tag: '4K프로덕션',
    label: '4K프로덕션',
    duration: '06:00',
    year: '2024',
    description: '대학 전용 대형 칠판 및 스튜디오 시스템 구축 및 전과목 모듈 촬영',
    imageUrl: 'https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=800&q=80'
  },

  // 3. 디지털 언론 & PR (press) / 후캠퍼스 (hucampus)
  {
    id: 'xJ8fQnZ44vU',
    title: '한국AI교육신문 4K 프로덕션',
    cat: 'press',
    tag: '언론PR',
    label: '언론PR',
    duration: '02:45',
    year: '2024',
    description: '공신력 있는 디지털 언론 인프라를 통한 기업 신기술 및 교육 성과 기획 기사 송출',
    imageUrl: 'https://images.unsplash.com/photo-1504711434969-e33886168f5c?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'B1830_sMK_o',
    title: '피플투데이 디지털언론PR 기사스케치',
    cat: 'press',
    tag: '언론PR',
    label: '언론PR',
    duration: '03:11',
    year: '2024',
    description: '공공 조달 가산점 확보 및 대외 신뢰도 향상을 위한 전문 취재진 브랜딩 PR 패키지',
    imageUrl: 'https://images.unsplash.com/photo-1585829365295-ab7cd400c167?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'Rk8m2_g1-sk',
    title: '후캠퍼스1 기업·지자체 임직원교육',
    cat: 'hucampus',
    tag: '후캠퍼스',
    label: '후캠퍼스',
    duration: '03:50',
    year: '2024',
    description: '조직 진단 기반 맞춤형 직무 역량 강화 커리큘럼 및 온·오프라인 하이브리드 교육',
    imageUrl: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'V1928_kQL_m',
    title: 'EBS 미디어리더십 캠프 참가지원',
    cat: 'hucampus',
    tag: '후캠퍼스',
    label: '후캠퍼스',
    duration: '01:30',
    year: '2024',
    description: '청소년 및 대학생 대상 생애주기별 미디어 리더십 스펙 고도화 프로젝트',
    imageUrl: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=800&q=80'
  }
];

export const KEYWORDS = [
  '교육 콘텐츠 개발',
  '종합 미디어 솔루션',
  'AI·디지털 교육 솔루션',
  '4K 스마트 스튜디오',
  '기업·공공 미디어 브랜딩'
];
