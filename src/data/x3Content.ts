export type Service = {
  number: string;
  title: string;
  englishTitle: string;
  description: string;
  price: string;
  note?: string;
  tags: string[];
};

export type ProcessStep = {
  number: string;
  title: string;
  englishTitle: string;
  description: string;
};

export type StudioProject = {
  title: string;
  category: string;
  location: string;
  year: string;
  coverImage: string;
  description: string;
  tags: string[];
};

export const studio = {
  name: "X3 Design",
  formalName: "X3 Design Interior Studio",
  tagline: "以細膩尺度，整理生活的空間秩序。",
  intro:
    "X3 Design 專注於住宅與預售屋空間規劃，從格局、動線、材質到工程細節，建立沉穩、耐看且貼近日常的居住體驗。",
  philosophy:
    "我們相信好的空間不只追求風格，更需要回應居住者的生活節奏。透過清楚的溝通、精準的圖面與穩定的現場協調，讓每一個設計決策都能被理解、被執行，也能在日後生活中自然延續。",
  email: "hello@x3design.studio",
  location: "Hsinchu, Taiwan",
  serviceArea: "新竹、竹北、桃園與台灣各地住宅空間",
};

export const services: Service[] = [
  {
    number: "01",
    title: "空間提案",
    englishTitle: "Proposal Service",
    description:
      "根據空間條件與生活需求，提出初步格局方向與設計主軸，協助確認最適合的空間規劃。",
    price: "$12,000 / 式",
    note: "可折抵設計費",
    tags: ["平面配置", "動線建議", "可折抵設計費"],
  },
  {
    number: "02",
    title: "客變規劃",
    englishTitle: "Customization Planning",
    description:
      "針對預售屋施工階段，協助調整格局、建材與設備配置，提前優化未來居住品質。",
    price: "$3,000 / 坪",
    note: "可折抵設計費",
    tags: ["預售屋", "格局調整", "可折抵設計費"],
  },
  {
    number: "03",
    title: "整體設計",
    englishTitle: "Interior Design",
    description:
      "從格局、動線到材質與色彩搭配，提供完整空間設計規劃，建立一致且具質感的居住體驗。",
    price: "$6,000 / 坪",
    tags: ["空間規劃", "材質搭配", "風格整合"],
  },
  {
    number: "04",
    title: "工程監管",
    englishTitle: "Site Supervision",
    description:
      "協助掌控施工進度與現場品質，確保設計圖面與材質細節能被確實執行與落地。",
    price: "工程總價 10%",
    tags: ["進度管理", "品質控管", "現場協調"],
  },
];

export const processIntro =
  "每一個空間的完成，始於對生活方式與場域條件的理解。我們從需求溝通、設計發展到工程執行，循序推進每個階段，讓理想空間被完整落實。";

export const processSteps: ProcessStep[] = [
  {
    number: "01",
    title: "初步接洽",
    englishTitle: "Initial Consultation",
    description:
      "了解業主的生活需求、空間期待、風格偏好與預算方向，並提供初步格局與動線建議，同時說明服務內容與整體合作流程。",
  },
  {
    number: "02",
    title: "提案規劃",
    englishTitle: "Proposal & Planning",
    description:
      "透過現場丈量與空間條件紀錄，進一步討論平面配置方向，並進行初步工程預算分析，協助確認設計可行性與合作範圍。",
  },
  {
    number: "03",
    title: "設計定案",
    englishTitle: "Concept Confirmation",
    description:
      "在平面配置確認後，進一步討論整體風格與設計概念，釐清空間定位與需求重點，並簽訂設計合約，正式進入設計階段。",
  },
  {
    number: "04",
    title: "設計深化",
    englishTitle: "Design Development",
    description:
      "進行 3D 示意圖繪製、材質與色彩搭配，並提供廚具、衛浴、家具、家飾與窗簾等建議，同步完成平面、立面與細部施工圖面。",
  },
  {
    number: "05",
    title: "工程討論與執行",
    englishTitle: "Construction Planning",
    description:
      "依據定案圖面與設計內容，說明工程報價細項與施工進度安排，確認後簽訂工程合約，並於施工期間持續進行進度管理與現場協調。",
  },
  {
    number: "06",
    title: "完工驗收與售後",
    englishTitle: "Completion & Aftercare",
    description:
      "工程完成後，陪同業主進行現場驗收與交屋確認，並提供一年保固服務，於完工後持續維持良好聯繫與後續協助。",
  },
];

export const studioProjects: StudioProject[] = [
  {
    title: "Warm Apartment Renewal",
    category: "Residential",
    location: "Hsinchu, Taiwan",
    year: "2026",
    coverImage: "/images/x3/project-quiet-apartment.png",
    description:
      "以收納整合、動線修整與溫潤木質表情，重新整理小坪數住宅的日常尺度。",
    tags: ["Residential", "Apartment", "Storage Planning"],
  },
  {
    title: "Quiet Family Residence",
    category: "Residential",
    location: "Zhubei, Taiwan",
    year: "2026",
    coverImage: "/images/x3/project-family-residence.png",
    description:
      "透過柔和材質、低彩度色彩與休憩角落，建立安定且可長時間生活的家庭住宅。",
    tags: ["Residential", "Family Home", "Material Styling"],
  },
  {
    title: "Light Kitchen House",
    category: "Customization",
    location: "Taoyuan, Taiwan",
    year: "2025",
    coverImage: "/images/x3/project-light-kitchen.png",
    description:
      "從預售屋階段調整廚房、餐廳與收納關係，讓公共區域更明亮、開放且順手。",
    tags: ["Customization", "Kitchen", "Open Plan"],
  },
];
