export type ProjectMetric = {
  label: string;
  value: string;
};

export type SitemapNode = {
  label: string;
  description?: string;
  children?: SitemapNode[];
};

export type DesignToken = {
  name: string;
  value: string;
  usage: string;
};

export type DesignTokenSection = {
  title: string;
  description?: string;
  tokens: DesignToken[];
};

export type ColorGroup = {
  name: string;
  description?: string;
  colors: {
    name: string;
    value: string;
    usage: string;
  }[];
};

export type ComponentSpec = {
  name: string;
  purpose: string;
  anatomy: string[];
  states: string[];
  usageGuidelines?: string[];
};

export type ProjectScreen = {
  name: string;
  purpose: string;
  keyElements: string[];
  userGoal?: string;
};

export type ProjectImageAssets = {
  coverImage?: string;
  heroImage?: string;
  heroMobileImage?: string;
  galleryImages?: string[];
};

export type CaseStudySectionType =
  | "overview"
  | "challenge"
  | "goals"
  | "key-screens"
  | "dashboard-design"
  | "key-improvements"
  | "theme-system"
  | "feature-extension"
  | "wireframe-prototype"
  | "component-extension"
  | "visual-direction"
  | "shopping-experience"
  | "checkout-experience"
  | "frontend-layout"
  | "information-architecture"
  | "user-flow"
  | "design-system"
  | "ui-components"
  | "final-design"
  | "reflection";

export type CaseStudyVisualKind =
  | "home"
  | "login"
  | "list"
  | "map"
  | "news"
  | "certificate"
  | "tcb-hero"
  | "tcb-dashboard-light"
  | "tcb-dashboard-dark"
  | "tcb-vm-list"
  | "tcb-vm-detail"
  | "tcb-deploy-flow"
  | "tcb-announcement"
  | "tcb-theme-system"
  | "tcb-design-system"
  | "tcb-ui-components"
  | "tcb-final-light"
  | "tcb-final-dark"
  | "rmic-hero"
  | "rmic-platform-overview"
  | "rmic-map-system"
  | "rmic-case-list"
  | "rmic-feature-extension"
  | "rmic-wireframe"
  | "rmic-prototype"
  | "rmic-component-extension"
  | "rmic-final-ui-01"
  | "rmic-final-ui-02"
  | "jule-hero"
  | "jule-homepage"
  | "jule-visual-direction"
  | "jule-product-list"
  | "jule-product-detail"
  | "jule-cart"
  | "jule-checkout"
  | "jule-rewards-coupons"
  | "jule-mobile-rwd"
  | "jule-bootstrap-layout"
  | "jule-final-ui-01"
  | "jule-final-ui-02";

export type CaseStudyCardIcon =
  | "palette"
  | "layers"
  | "code"
  | "accessibility"
  | "map-pinned"
  | "refresh"
  | "sparkles"
  | "gauge"
  | "monitor"
  | "moon"
  | "workflow"
  | "bell"
  | "server";

export type CaseStudyCard = {
  title: string;
  description: string;
  eyebrow?: string;
  icon?: CaseStudyCardIcon;
};

export type DesignGoalIcon = "navigation" | "layers" | "check";

export type DesignGoal = {
  title: string;
  description: string;
  icon: DesignGoalIcon;
};

export type CaseStudyGalleryItem = {
  title: string;
  description: string;
  eyebrow?: string;
  image?: string;
  visual?: CaseStudyVisualKind;
};

export type CaseStudyContentBlock =
  | {
    type: "facts";
    items: { label: string; value: string }[];
  }
  | {
    type: "cards";
    columns?: 2 | 3 | 5;
    items: CaseStudyCard[];
  }
  | {
    type: "comparison";
    sourceTitle: string;
    targetTitle: string;
    items: { source: string; target: string }[];
  }
  | {
    type: "design-goals";
    goals: DesignGoal[];
    previewImage?: string;
    previewVisual?: CaseStudyVisualKind;
  }
  | {
    type: "feature-gallery";
    items: CaseStudyGalleryItem[];
  }
  | {
      type: "architecture";
      groups: { title: string; items: string[] }[];
      showInteractiveSitemap?: boolean;
    }
  | {
      type: "sitemap-tree";
      root: string;
      items: string[];
    }
  | {
    type: "flow";
    items: string[];
  }
  | {
    type: "design-system";
  }
  | {
    type: "ui-components";
  }
  | {
    type: "gallery";
    items: CaseStudyGalleryItem[];
  }
  | {
    type: "visual-showcase";
    layout?: "hero-grid" | "two-column" | "single";
    items: CaseStudyGalleryItem[];
  }
  | {
    type: "tags";
    items: string[];
  }
  | {
    type: "image";
    src: string;
    alt: string;
    caption?: string;
  };

export type CaseStudySection = {
  number: string;
  title: string;
  subtitle: string;
  description: string;
  type: CaseStudySectionType;
  contentBlocks: CaseStudyContentBlock[];
};

export type Project = ProjectImageAssets & {
  slug: string;
  isHidden?: boolean;
  figmaPrototypeUrl?: string;
  visualFallback?: CaseStudyVisualKind;
  title: string;
  subtitle: string;
  eyebrow: string;
  description: string;
  role: string;
  scope: string;
  timeline: string;
  year: string;
  duration: string;
  summary: string;
  challenge: string;
  outcome: string;
  metrics: ProjectMetric[];
  tags: string[];
  tools: string[];
  process: string[];
  deliverables: string[];
  theme: {
    primary: string;
    secondary: string;
    accent: string;
  };
  overview?: string[];
  problemStatements?: string[];
  informationArchitecture?: string[];
  sitemap?: SitemapNode[];
  designTokens?: DesignTokenSection[];
  colorSystem?: ColorGroup[];
  components?: ComponentSpec[];
  screens?: ProjectScreen[];
  reflection?: string[];
  caseStudySections: CaseStudySection[];
};

export const projectImageAssets = {
  "esg-forest-matching-platform": {
    coverImage: "/projects/esg/cover.webp",
    heroImage: "/projects/esg/hero.webp",
    heroMobileImage: "/projects/esg/hero-mobile.webp",
    galleryImages: [
      "/projects/esg/sitemap.webp",
      "/projects/esg/design-system.webp",
      "/projects/esg/components.webp",
      "/projects/esg/final-ui-01.webp",
      "/projects/esg/final-ui-02.webp",
      "/projects/esg/final-ui-03.webp",
      "/projects/esg/final-ui-04.webp",
      "/projects/esg/final-ui-05.webp",
      "/projects/esg/final-ui-06.webp",
    ],
  },
  tcb: {
    coverImage: "/projects/tcb/cover.webp",
    heroImage: "/projects/tcb/hero.webp",
    heroMobileImage: "/projects/tcb/hero-mobile.webp",
    galleryImages: [
      "/projects/tcb/dashboard-light.webp",
      "/projects/tcb/dashboard-dark.webp",
      "/projects/tcb/vm-list.webp",
      "/projects/tcb/vm-detail.webp",
      "/projects/tcb/deploy-flow.webp",
      "/projects/tcb/announcement.webp",
      "/projects/tcb/theme-system.webp",
      "/projects/tcb/design-system.webp",
      "/projects/tcb/ui-components.webp",
      "/projects/tcb/final-ui-01.webp",
      "/projects/tcb/final-ui-02.webp",
      "/projects/tcb/final-ui-03.webp",
      "/projects/tcb/final-ui-04.webp",
    ],
  },
  rmic: {
    coverImage: "/projects/rmic/cover.webp",
    heroImage: "/projects/rmic/hero.webp",
    heroMobileImage: "/projects/rmic/hero-mobile.webp",
    galleryImages: [
      "/projects/rmic/platform-overview.webp",
      "/projects/rmic/map-system.webp",
      "/projects/rmic/case-list.webp",
      "/projects/rmic/feature-extension.webp",
      "/projects/rmic/wireframe.webp",
      "/projects/rmic/prototype.webp",
      "/projects/rmic/component-extension.webp",
      "/projects/rmic/final-ui-01.webp",
      "/projects/rmic/final-ui-02.webp",
      "/projects/rmic/final-ui-03.webp",
      "/projects/rmic/final-ui-04.webp",
    ],
  },
  "jule-ecommerce": {
    coverImage: "/projects/jule-ecommerce/cover.webp",
    heroImage: "/projects/jule-ecommerce/hero.webp",
    heroMobileImage: "/projects/jule-ecommerce/hero-mobile.webp",
    galleryImages: [
      "/projects/jule-ecommerce/homepage.webp",
      "/projects/jule-ecommerce/visual-direction.webp",
      "/projects/jule-ecommerce/product-list.webp",
      "/projects/jule-ecommerce/product-detail.webp",
      "/projects/jule-ecommerce/cart.webp",
      "/projects/jule-ecommerce/checkout.webp",
      "/projects/jule-ecommerce/rewards-coupons.webp",
      "/projects/jule-ecommerce/mobile-rwd.webp",
      "/projects/jule-ecommerce/bootstrap-layout.webp",
      "/projects/jule-ecommerce/final-ui-01.webp",
      "/projects/jule-ecommerce/final-ui-02.webp",
      "/projects/jule-ecommerce/final-ui-03.webp",
      "/projects/jule-ecommerce/final-ui-04.webp",
    ],
  },
} satisfies Record<string, ProjectImageAssets>;

const esgCaseStudySections: CaseStudySection[] = [
  {
    number: "01",
    title: "Project Overview",
    subtitle: "專案概覽",
    type: "overview",
    description:
      "ESG 林地媒合平台整合政策資訊、林地標的、媒合流程、地圖查詢、成果展示與憑證查詢，讓使用者在資訊量較大的情況下，仍能快速理解平台功能並找到合適的合作機會。",
    contentBlocks: [
      {
        type: "facts",
        items: [
          { label: "Role", value: "UI/UX Designer" },
          { label: "Year", value: "2026" },
          { label: "Duration", value: "6 weeks" },
          { label: "Tools", value: "Figma · FigJam · Design Tokens" },
        ],
      },
      {
        type: "cards",
        columns: 3,
        items: [
          {
            title: "平台定位",
            description:
              "協助使用者探索森林與自然碳匯相關 ESG 專案，建立使用者與專案標的之間的媒合入口。",
          },
          {
            title: "使用情境",
            description:
              "使用者可透過條件篩選、列表查詢與地圖查詢，理解不同專案的位置、類型與合作資訊。",
          },
          {
            title: "設計目標",
            description:
              "建立清楚、可信任且易於維護的介面系統，支援前台展示、管理頁面與後續功能擴充。",
          },
        ],
      },
      {
        type: "cards",
        columns: 5,
        items: [
          {
            title: "UI Design",
            description: "負責平台主要頁面視覺設計、資訊層級整理與介面規劃。",
            icon: "palette",
          },
          {
            title: "Design System",
            description:
              "整理色彩、字級、間距、按鈕、表單、卡片與表格等基礎元件。",
            icon: "layers",
          },
          {
            title: "Front-end Layout",
            description:
              "參與部分前台頁面切版，協助將 Figma 設計稿轉換為 HTML / CSS 結構。",
            icon: "code",
          },
          {
            title: "Accessibility AA",
            description:
              "配合無障礙規範調整文字對比、表單狀態、按鈕回饋與操作提示。",
            icon: "accessibility",
          },
          {
            title: "CI Refresh",
            description:
              "因應專案中途品牌 CI 更新，協助調整既有頁面與元件視覺。",
            icon: "refresh",
          },
        ],
      },
    ],
  },
  {
    number: "02",
    title: "The Challenge",
    subtitle: "設計挑戰",
    type: "challenge",
    description:
      "平台需要同時處理高資訊密度、政府服務可及性、品牌更新與地理圖資等限制，設計重點是把複雜條件轉化為可理解、可操作的介面。",
    contentBlocks: [
      {
        type: "cards",
        columns: 2,
        items: [
          {
            eyebrow: "Challenge 01",
            title: "資訊量大，需快速理解",
            description:
              "平台包含多角色、多頁面與多種資料類型，包含專案資訊、查詢條件、地圖資料、ESG 成果與憑證資訊，因此需要建立清楚的資訊層級與瀏覽節奏。",
            icon: "layers",
          },
          {
            eyebrow: "Challenge 02",
            title: "符合無障礙 AA 規範",
            description:
              "介面設計需兼顧文字可讀性、色彩對比、表單提示、按鈕狀態與操作回饋，讓使用者在不同情境下都能清楚辨識資訊。",
            icon: "accessibility",
          },
          {
            eyebrow: "Challenge 03",
            title: "專案中途遇到 CI 更新",
            description:
              "專案進行期間品牌視覺進行更新，既有頁面、色彩、元件與視覺資產需要同步調整，也考驗設計系統的延展性與維護效率。",
            icon: "palette",
          },
          {
            eyebrow: "Challenge 04",
            title: "整合地理圖資查詢",
            description:
              "平台同時支援列表查詢與地圖查詢，因此設計上需要讓搜尋條件、專案資訊與地理位置能夠清楚連動。",
            icon: "map-pinned",
          },
        ],
      },
    ],
  },
  {
    number: "03",
    title: "Design Goals",
    subtitle: "設計目標",
    type: "goals",
    description:
      "從使用者查找專案的決策路徑出發，建立可掃讀、可比較且能延伸到管理情境的產品體驗。",
    contentBlocks: [
      {
        type: "design-goals",
        previewImage: "/projects/esg/design-goals.webp",
        goals: [
          {
            title: "清晰瀏覽",
            description:
              "讓使用者能快速理解 ESG 專案內容與合作方式。",
            icon: "navigation",
          },
          {
            title: "理解專案",
            description:
              "降低資訊門檻並建立可信的專案資訊架構。",
            icon: "layers",
          },
          {
            title: "促進行動",
            description:
              "讓使用者能快速比較、收藏與媒合申請。",
            icon: "check",
          },
        ],
      },
    ],
  },
  {
    number: "04",
    title: "User Flow",
    subtitle: "使用流程",
    type: "user-flow",
    description:
      "流程聚焦使用者如何從進入平台、探索標的、提出媒合，到最後查看成果與憑證。",
    contentBlocks: [
      {
        type: "flow",
        items: [
          "使用者進入平台",
          "選擇查詢方式",
          "使用條件篩選或地圖查詢",
          "查看專案資訊",
          "收藏或申請媒合",
          "查看 ESG 成果",
          "查詢 ESG 憑證",
        ],
      },
    ],
  },
  {
    number: "05",
    title: "Key Screens",
    subtitle: "核心畫面",
    type: "key-screens",
    description:
      "以搜尋、地圖、成果與憑證四個高價值情境，建立使用者從探索到驗證的主要操作路徑。",
    contentBlocks: [
      {
        type: "feature-gallery",
        items: [
          {
            eyebrow: "Feature 01",
            title: "物件查詢",
            description:
              "使用者可透過地區、類型、關鍵字與排序條件查詢 ESG 專案標的，快速找到合適的合作機會。",
            visual: "list",
          },
          {
            eyebrow: "Feature 02",
            title: "地圖查詢",
            description:
              "地圖模式協助使用者從空間位置理解專案分布與區域條件，補足列表查詢無法呈現的地理脈絡。",
            visual: "map",
          },
          {
            eyebrow: "Feature 03",
            title: "ESG 成果展示",
            description:
              "透過數據摘要、精選物件、最新消息與相關連結，提升平台的專業感與永續成果展示性。",
            visual: "home",
          },
          {
            eyebrow: "Feature 04",
            title: "ESG 憑證查詢",
            description:
              "提供使用者查詢憑證編號、發放日期、有效期限、狀態與相關詳細資料的入口。",
            visual: "certificate",
          },
        ],
      },
    ],
  },
  {
    number: "06",
    title: "Information Architecture",
    subtitle: "資訊架構",
    type: "information-architecture",
    description:
      "先以公開內容、媒合功能與會員管理三個層級整理平台，再透過互動式 Sitemap 呈現九大主模組與平台 Root 的包含關係。",
    contentBlocks: [
      {
        type: "architecture",
        showInteractiveSitemap: true,
        groups: [
          {
            title: "Public Pages / 公開資訊",
            items: [
              "政策說明",
              "專案方法介紹",
              "媒合流程介紹",
              "使用者 ESG 成果展示",
              "Q&A",
            ],
          },
          {
            title: "Matching Features / 媒合功能",
            items: [
              "物件查詢",
              "地圖查詢",
              "物件詳情",
              "媒合申請",
              "收藏物件",
            ],
          },
          {
            title: "Member / Management / 會員與管理",
            items: [
              "個人最新消息",
              "ESG 憑證查詢",
              "系統管理",
              "使用者中心",
            ],
          },
        ],
      },
    ],
  },
  {
    number: "07",
    title: "Design System",
    subtitle: "設計系統",
    type: "design-system",
    description:
      "透過統一的品牌色彩與字級層級，讓平台在大量資訊呈現下仍維持清楚的閱讀節奏與一致的視覺語言。",
    contentBlocks: [{ type: "design-system" }],
  },
  {
    number: "08",
    title: "UI Components",
    subtitle: "介面元件",
    type: "ui-components",
    description: "",
    contentBlocks: [{ type: "ui-components" }],
  },
  {
    number: "09",
    title: "Final Design",
    subtitle: "最終介面",
    type: "final-design",
    description:
      "最終介面涵蓋使用者從公開資訊、身分登入、物件探索到會員通知與憑證查詢的完整體驗。",
    contentBlocks: [
      {
        type: "gallery",
        items: [
          {
            title: "首頁 / ESG 成果展示",
            description:
              "整合 ESG 專案摘要、精選內容與成果入口，讓使用者快速理解平台價值。",
            image: "/projects/esg/final-ui-01.webp",
            visual: "home",
          },
          {
            title: "登入身分選擇",
            description:
              "依照使用者、管理者與一般使用者角色，建立清楚的進入路徑。",
            image: "/projects/esg/final-ui-02.webp",
            visual: "login",
          },
          {
            title: "物件列表查詢",
            description:
              "透過列表卡片、篩選條件與排序，協助使用者比較不同 ESG 專案。",
            image: "/projects/esg/final-ui-03.webp",
            visual: "list",
          },
          {
            title: "物件地圖查詢",
            description:
              "以地理位置補足專案查詢脈絡，讓使用者理解區域與專案分布。",
            image: "/projects/esg/final-ui-04.webp",
            visual: "map",
          },
          {
            title: "地理圖資系統與平台後台設計",
            description:
              "地圖圖資系統視覺設計及與平台後台操作流程。",
            image: "/projects/esg/final-ui-05.webp",
            visual: "news",
          },
          {
            title: "ESG 憑證查詢",
            description:
              "提供憑證編號、狀態與有效期限查詢，提升專案成果的可信度。",
            image: "/projects/esg/final-ui-06.webp",
            visual: "certificate",
          },
        ],
      },
    ],
  },
  {
    number: "10",
    title: "Reflection",
    subtitle: "成果與反思",
    type: "reflection",
    description:
      "透過此專案，我學習到如何將資訊量較大的平台整理為清楚的使用流程與可重複使用的元件系統。Design System 的整理也讓品牌更新、前台切版與後續頁面延伸更有效率，降低設計與實作之間的落差。",
    contentBlocks: [
      {
        type: "cards",
        columns: 3,
        items: [
          {
            title: "提升介面一致性",
            description:
              "透過統一色彩、字級、元件與狀態規範，讓不同頁面保持一致的操作體驗。",
            icon: "sparkles",
          },
          {
            title: "支援後續擴充",
            description:
              "將高頻使用介面整理為可重複使用元件，方便後續頁面與功能延伸。",
            icon: "sparkles",
          },
          {
            title: "縮短設計與開發落差",
            description:
              "透過參與部分前台切版，更能在設計階段考量實作可行性與維護性。",
            icon: "sparkles",
          },
        ],
      },
    ],
  },
];

const tcbCaseStudySections: CaseStudySection[] = [
  {
    number: "01",
    title: "Project Overview",
    subtitle: "專案概覽",
    type: "overview",
    description:
      "本專案針對既有虛擬機管理平台進行介面與功能體驗優化，重點包含 Dashboard 設計、公告功能整合、Light / Dark Theme 雙主題、Design System 建立，以及虛擬機部署流程優化。",
    contentBlocks: [
      {
        type: "facts",
        items: [
          { label: "Project", value: "TCB 虛擬機管理平台" },
          { label: "Role", value: "UI/UX Designer" },
          { label: "Platform", value: "Enterprise Admin Platform" },
          { label: "Focus", value: "Dashboard · Theme · Workflow" },
        ],
      },
      {
        type: "cards",
        columns: 3,
        items: [
          {
            title: "Dashboard 與資訊層級",
            description:
              "重新整理平台首頁的資訊優先順序，讓資源、公告與虛擬機狀態更容易被快速判讀。",
            icon: "gauge",
          },
          {
            title: "雙主題與品牌融合",
            description:
              "延伸合作金庫品牌識別，建立兼顧金融穩定感與科技產品感的 Light / Dark Theme。",
            icon: "moon",
          },
          {
            title: "流程與系統一致性",
            description:
              "優化部署設定步驟，並統一表格、表單、狀態與操作元件，降低模組間的視覺落差。",
            icon: "workflow",
          },
        ],
      },
    ],
  },
  {
    number: "02",
    title: "The Challenge",
    subtitle: "設計挑戰",
    type: "challenge",
    description:
      "在既有功能與工程架構限制下，重新建立資訊層級、視覺一致性與長時間管理情境下的操作舒適度。",
    contentBlocks: [
      {
        type: "cards",
        columns: 2,
        items: [
          {
            eyebrow: "Challenge 01",
            title: "資訊層級不夠清楚",
            description:
              "Dashboard 資訊需要重新整理，協助使用者快速掌握系統狀態。",
            icon: "layers",
          },
          {
            eyebrow: "Challenge 02",
            title: "既有介面偏工程導向",
            description:
              "功能完整但視覺與操作層級較分散，需要提升產品感與一致性。",
            icon: "monitor",
          },
          {
            eyebrow: "Challenge 03",
            title: "長時間使用可讀性",
            description:
              "平台屬於管理工具，需要支援亮色與暗色主題，降低長時間操作負擔。",
            icon: "moon",
          },
          {
            eyebrow: "Challenge 04",
            title: "部署流程理解成本高",
            description:
              "虛擬機部署涉及多項設定，需要重新整理步驟與欄位關係。",
            icon: "workflow",
          },
        ],
      },
    ],
  },
  {
    number: "03",
    title: "Design Goals",
    subtitle: "設計目標",
    type: "goals",
    description:
      "從管理者日常查看狀態與執行任務的情境出發，建立清楚、穩定且能長時間使用的產品體驗。",
    contentBlocks: [
      {
        type: "design-goals",
        previewImage: "/projects/tcb/design-goals.webp",
        previewVisual: "tcb-dashboard-light",
        goals: [
          {
            title: "清楚掌握狀態",
            description:
              "讓使用者進入平台後，能快速理解資源、公告與虛擬機狀態。",
            icon: "navigation",
          },
          {
            title: "建立品牌一致性",
            description:
              "融合合作金庫既有視覺，建立穩定且現代的後台產品體驗。",
            icon: "layers",
          },
          {
            title: "降低操作成本",
            description:
              "重新整理部署流程與元件狀態，讓操作路徑更清楚。",
            icon: "check",
          },
        ],
      },
    ],
  },
  {
    number: "04",
    title: "Sitemap",
    subtitle: "平台架構",
    type: "information-architecture",
    description:
      "將虛擬機管理平台整理為七個平行主模組，協助團隊清楚理解功能邊界與系統導覽層級。",
    contentBlocks: [
      {
        type: "sitemap-tree",
        root: "虛擬機管理",
        items: [
          "Dashboard",
          "電子表單管理",
          "雲服務管理",
          "權限管理",
          "系統管理",
          "報表管理",
          "使用者功能",
        ],
      },
    ],
  },
  {
    number: "05",
    title: "Dashboard Design",
    subtitle: "Dashboard 設計",
    type: "dashboard-design",
    description:
      "Dashboard 被重新設計為平台的資訊總覽入口，整合虛擬機狀態、系統公告與關鍵資源資訊，讓使用者在進入平台後能快速掌握目前系統狀況。",
    contentBlocks: [
      {
        type: "visual-showcase",
        layout: "hero-grid",
        items: [
          {
            title: "Light Theme Dashboard",
            description:
              "以明亮表面與清楚的資訊分區呈現資源用量、虛擬機狀態與常用操作。",
            image: "/projects/tcb/dashboard-light.webp",
            visual: "tcb-dashboard-light",
          },
          {
            title: "Dark Theme Dashboard",
            description:
              "透過深藍黑背景、低透明卡片與細邊框，維持長時間監控情境的閱讀舒適度。",
            image: "/projects/tcb/dashboard-dark.webp",
            visual: "tcb-dashboard-dark",
          },
          {
            title: "優化登入頁面並整合公告",
            description:
              "優化登入視覺，並將公告整合進登入卡片，提升重要訊息的辨識效率。",
            image: "/projects/tcb/announcement.webp",
            visual: "tcb-announcement",
          },
        ],
      },
    ],
  },
  {
    number: "06",
    title: "Key Improvements",
    subtitle: "關鍵優化",
    type: "key-improvements",
    description:
      "優化範圍聚焦日常管理中最常被使用的資訊入口、部署任務與跨模組元件，讓既有功能更容易理解與操作。",
    contentBlocks: [
      {
        type: "cards",
        columns: 2,
        items: [
          // {
          //   eyebrow: "01",
          //   title: "Dashboard 資訊重整",
          //   description:
          //     "重新整理首頁資訊優先順序，讓資源狀態、公告與虛擬機狀態更容易被判讀。",
          //   icon: "gauge",
          // },
          // {
          //   eyebrow: "02",
          //   title: "公告功能整合",
          //   description:
          //     "將公告整合進平台介面，讓重要訊息能在管理情境中被快速查看。",
          //   icon: "bell",
          // },
          {
            eyebrow: "01",
            title: "虛擬機部署流程優化",
            description:
              "重新整理部署設定欄位與步驟，引導使用者更清楚完成建立流程。",
            icon: "workflow",
          },
          {
            eyebrow: "02",
            title: "狀態與操作元件統一",
            description:
              "統一表格、狀態標籤、按鈕與表單樣式，降低不同模組之間的視覺落差。",
            icon: "server",
          },
        ],
      },
      {
        type: "visual-showcase",
        layout: "hero-grid",
        items: [
          {
            title: "虛擬機部署流程",
            description:
              "以 stepper、設定群組與即時摘要協助使用者理解建立進度。",
            image: "/projects/tcb/deploy-flow.webp",
            visual: "tcb-deploy-flow",
          },
          // {
          //   title: "公告功能",
          //   description:
          //     "依訊息重要性與閱讀狀態建立更清楚的公告層級。",
          //   image: "/projects/tcb/announcement.webp",
          //   visual: "tcb-announcement",
          // },
          // {
          //   title: "虛擬機列表",
          //   description:
          //     "統一狀態、資源資訊與操作入口，提升大量資料的掃讀效率。",
          //   image: "/projects/tcb/vm-list.webp",
          //   visual: "tcb-vm-list",
          // },
        ],
      },
    ],
  },
  // {
  //   number: "06",
  //   title: "Theme & Design System",
  //   subtitle: "雙主題與設計系統",
  //   type: "theme-system",
  //   description:
  //     "Dark Theme 不只是將介面反白，而是重新處理背景層級、卡片透明度、文字對比與狀態色，確保在長時間使用下仍維持可讀性。",
  //   contentBlocks: [
  //     {
  //       type: "visual-showcase",
  //       layout: "two-column",
  //       items: [
  //         {
  //           title: "Light / Dark Theme",
  //           description:
  //             "以相同資訊架構對照兩種主題的背景層級、卡片透明度與文字對比。",
  //           image: "/projects/tcb/theme-system.webp",
  //           visual: "tcb-theme-system",
  //         },
  //         {
  //           title: "Design System",
  //           description:
  //             "整理合作金庫品牌色延伸、字級、間距、狀態色與互動元件狀態。",
  //           image: "/projects/tcb/design-system.webp",
  //           visual: "tcb-design-system",
  //         },
  //       ],
  //     },
  //   ],
  // },
  {
    number: "07",
    title: "UI Components",
    subtitle: "介面元件",
    type: "ui-components",
    description:
      "元件庫涵蓋 Button、Input、Select、Table、Status Badge、Dashboard Card、Announcement Card、Modal、Stepper、Theme Switch 與 VM Status。",
    contentBlocks: [
      {
        type: "visual-showcase",
        layout: "single",
        items: [
          {
            title: "TCB Core Components",
            description:
              "以一致的狀態、間距與互動規則，支援 Dashboard、虛擬機管理與部署任務。",
            image: "/projects/tcb/ui-components.webp",
            visual: "tcb-ui-components",
          },
        ],
      },
    ],
  },
  {
    number: "08",
    title: "Final Design & Reflection",
    subtitle: "最終介面與反思",
    type: "reflection",
    description:
      "這次專案讓我更明確理解到，後台系統的優化不只是視覺翻新，而是需要在既有功能限制下，重新建立資訊層級、操作節奏與設計規範。尤其在亮暗主題與金融品牌視覺的整合上，需要同時兼顧品牌識別、可讀性與系統延展性。",
    contentBlocks: [
      {
        type: "gallery",
        items: [
          {
            title: "Final Dashboard / Light",
            description:
              "明亮模式強調資訊掃讀、狀態辨識與日常管理效率。",
            image: "/projects/tcb/final-ui-03.webp",
            visual: "tcb-final-light",
          },

          {
            title: "Dashboard Overview / Light",
            description:
              "整合系統資源、公告與虛擬機狀態的亮色資訊總覽。",
            image: "/projects/tcb/final-ui-04.webp",
            visual: "tcb-dashboard-light",
          },
          {
            title: "Final Dashboard / Dark",
            description:
              "暗色模式以玻璃霧化層級與低刺激對比支援長時間使用。",
            image: "/projects/tcb/final-ui-01.webp",
            visual: "tcb-final-dark",
          },
          {
            title: "Dashboard Overview / Dark",
            description:
              "維持相同資訊架構，在暗色環境中重新校準表面與狀態對比。",
            image: "/projects/tcb/final-ui-02.webp",
            visual: "tcb-dashboard-dark",
          },


        ],
      },
    ],
  },
];

const rmicCaseStudySections: CaseStudySection[] = [
  {
    number: "01",
    title: "Project Overview",
    subtitle: "專案概覽",
    type: "overview",
    description:
      "RMIC 桃園市道管資訊中心系統用於道路挖掘、施工案件與相關申請流程管理，平台整合案件進度、表單資料與地圖圖資，支援跨部門在審核、追蹤與道路管理上的協作需求。本次專案是在既有平台架構下進行功能擴充，透過 Wireframe 與 Prototype 協助需求單位與開發團隊確認新增功能的操作邏輯。",
    contentBlocks: [
      {
        type: "facts",
        items: [
          { label: "Project", value: "RMIC 桃園市道管資訊中心系統" },
          { label: "Role", value: "UI/UX Designer" },
          { label: "Platform", value: "Government · Map-based System" },
          { label: "Focus", value: "Wireframe · Prototype · Feature Extension" },
        ],
      },
      {
        type: "cards",
        columns: 3,
        items: [
          {
            title: "市政案件管理",
            description:
              "整合道路挖掘、施工申請、案件狀態與跨單位待辦，支援日常審核與追蹤。",
            icon: "layers",
          },
          {
            title: "地圖圖資整合",
            description:
              "讓案件位置、道路圖層與申請資料在同一管理情境中被查詢與比對。",
            icon: "map-pinned",
          },
          {
            title: "既有功能擴充",
            description:
              "以既有流程與元件為基礎新增功能，避免破壞原有操作習慣與開發架構。",
            icon: "workflow",
          },
        ],
      },
      {
        type: "visual-showcase",
        layout: "two-column",
        items: [
          {
            title: "平台總覽",
            description:
              "以案件數據、地圖、流程狀態與待辦任務呈現道路管理工作的全貌。",
            image: "/projects/rmic/platform-overview.webp",
            visual: "rmic-platform-overview",
          },
          {
            title: "地圖圖資系統",
            description:
              "結合道路圖層、案件標記與篩選工具，協助承辦人掌握施工位置與案件關係。",
            image: "/projects/rmic/map-system.webp",
            visual: "rmic-map-system",
          },
        ],
      },
    ],
  },
  {
    number: "02",
    title: "The Challenge",
    subtitle: "設計挑戰",
    type: "challenge",
    description:
      "功能擴充需要同時回應既有系統限制、跨部門需求、地圖與案件資料關係，以及平台元件一致性。",
    contentBlocks: [
      {
        type: "cards",
        columns: 2,
        items: [
          {
            eyebrow: "Challenge 01",
            title: "既有系統限制",
            description:
              "新增功能必須符合原有流程、資料結構與開發架構，不能獨立重做。",
            icon: "layers",
          },
          {
            eyebrow: "Challenge 02",
            title: "跨部門需求對齊",
            description:
              "道路管理涉及多個單位與角色，需要在開發前釐清需求與操作邏輯。",
            icon: "workflow",
          },
          {
            eyebrow: "Challenge 03",
            title: "案件與地圖資料整合",
            description:
              "功能需與案件資料、申請流程與地圖圖資連動，資訊關係較複雜。",
            icon: "map-pinned",
          },
          {
            eyebrow: "Challenge 04",
            title: "元件一致性維護",
            description:
              "新增介面需沿用既有元件與互動模式，避免造成平台體驗斷裂。",
            icon: "refresh",
          },
        ],
      },
    ],
  },
  {
    number: "03",
    title: "Design Goals",
    subtitle: "設計目標",
    type: "goals",
    description:
      "以低成本原型先消除需求與操作邏輯的不確定性，再將確認後的功能穩定整合回既有平台。",
    contentBlocks: [
      {
        type: "design-goals",
        previewImage: "/projects/rmic/design-goals.webp",
        previewVisual: "rmic-wireframe",
        goals: [
          {
            title: "降低需求落差",
            description:
              "透過 Wireframe 與需求單位快速確認流程與欄位邏輯。",
            icon: "navigation",
          },
          {
            title: "確認操作可行性",
            description:
              "以 Prototype 驗證使用路徑，讓功能邏輯在開發前被清楚確認。",
            icon: "check",
          },
          {
            title: "維持系統一致性",
            description:
              "以既有元件與平台規範延伸新功能，降低開發與維護成本。",
            icon: "layers",
          },
        ],
      },
    ],
  },
  // {
  //   number: "04",
  //   title: "Feature Extension",
  //   subtitle: "功能擴充設計",
  //   type: "feature-extension",
  //   description:
  //     "本次設計聚焦在既有平台中的新增功能模組。設計過程先盤點原有頁面、欄位與操作邏輯，再依需求補足新增功能的入口、表單狀態與操作回饋，確保功能能自然整合至既有案件管理流程中。",
  //   contentBlocks: [
  //     {
  //       type: "visual-showcase",
  //       layout: "hero-grid",
  //       items: [
  //         {
  //           title: "新增功能模組",
  //           description:
  //             "整合新增入口、表單欄位、狀態切換與操作回饋，維持既有案件流程的連續性。",
  //           image: "/projects/rmic/feature-extension.webp",
  //           visual: "rmic-feature-extension",
  //         },
  //         // {
  //         //   title: "案件列表",
  //         //   description:
  //         //     "將案件狀態、申請類型、承辦單位與常用操作整理為可快速掃讀的資料表格。",
  //         //   image: "/projects/rmic/case-list.webp",
  //         //   visual: "rmic-case-list",
  //         // },
  //         // {
  //         //   title: "地圖與案件連動",
  //         //   description:
  //         //     "透過地圖標記、圖層與篩選條件，連結施工位置與案件資料。",
  //         //   image: "/projects/rmic/map-system.webp",
  //         //   visual: "rmic-map-system",
  //         // },
  //       ],
  //     },
  //   ],
  // },
  {
    number: "04",
    title: "Wireframe & Prototype",
    subtitle: "線框稿與原型驗證",
    type: "wireframe-prototype",
    description:
      "在進入視覺與開發前，先以 Wireframe 建立低成本溝通稿，協助需求單位確認功能範圍、欄位順序與操作路徑。後續再透過 Prototype 模擬實際操作情境，確認流程是否符合使用者任務與系統邏輯。",
    contentBlocks: [
      {
        type: "visual-showcase",
        layout: "two-column",
        items: [
          {
            title: "Wireframe Screens",
            description:
              "以低彩度線框稿確認頁面框架、表單欄位、狀態與主要操作位置。",
            image: "/projects/rmic/wireframe.webp",
            visual: "rmic-wireframe",
          },
          {
            title: "Prototype Validation",
            description:
              "以多畫面點擊路徑模擬彈窗、表單、狀態切換與確認頁，驗證完整操作邏輯。",
            image: "/projects/rmic/prototype.webp",
            visual: "rmic-prototype",
          },
        ],
      },
    ],
  },
  {
    number: "05",
    title: "Component Extension",
    subtitle: "既有元件延伸",
    type: "component-extension",
    description:
      "由於系統已有既定介面規範，本次新增功能並未重新建立設計語言，而是以既有元件為基礎延伸頁面、表單、按鈕、表格與狀態提示，讓新功能在視覺與操作上能與原平台保持一致。",
    contentBlocks: [
      {
        type: "visual-showcase",
        layout: "single",
        items: [
          {
            title: "RMIC Component Extension",
            description:
              "展示 Table、Form、Button、Status Badge、Modal、Map Marker、Tabs、Filter、Search 與 Pagination。",
            image: "/projects/rmic/component-extension.webp",
            visual: "rmic-component-extension",
          },
        ],
      },
    ],
  },
  {
    number: "06",
    title: "Final Design & Reflection",
    subtitle: "最終設計與反思",
    type: "reflection",
    description:
      "這次專案讓我更明確理解到，既有系統的功能擴充不只是新增畫面，而是在既有流程、元件與開發限制下，找到最穩定的整合方式。透過 Wireframe 與 Prototype 先行驗證，可以有效降低需求落差，也讓設計更容易被需求單位與開發團隊理解。",
    contentBlocks: [
      {
        type: "gallery",
        items: [
          {
            title: "案件管理介面",
            description:
              "將新增功能整合至既有案件管理情境，維持資料層級與操作模式的一致性。",
            image: "/projects/rmic/final-ui-01.webp",
            visual: "rmic-final-ui-01",
          },
          {
            title: "地圖圖資介面",
            description:
              "透過地圖圖層、案件標記與資訊面板呈現道路施工案件的空間關係。",
            image: "/projects/rmic/final-ui-02.webp",
            visual: "rmic-final-ui-02",
          },
          {
            title: "地圖系統",
            description:
              "整合篩選、圖層控制與案件資訊，支援道路管理與案件追蹤。",
            image: "/projects/rmic/final-ui-03.webp",
            visual: "rmic-map-system",
          },
          {
            title: "功能擴充頁",
            description:
              "以既有元件與流程規範承接新增功能，降低使用與開發端的轉換成本。",
            image: "/projects/rmic/final-ui-04.webp",
            visual: "rmic-feature-extension",
          },
        ],
      },
    ],
  },
];

const juleCaseStudySections: CaseStudySection[] = [
  {
    number: "01",
    title: "Project Overview",
    subtitle: "專案概覽",
    type: "overview",
    description:
      "聚樂電商以「歡樂、活潑」作為品牌核心，本專案延續其品牌精神，設計網站主視覺與 UI 介面，並依照團購與電商購物情境，重新規劃瀏覽、選購、結帳與優惠折抵流程，提升整體購買體驗。",
    contentBlocks: [
      {
        type: "facts",
        items: [
          { label: "Project", value: "聚樂電商" },
          { label: "Role", value: "UI/UX · Visual · Front-end Layout" },
          { label: "Platform", value: "Responsive E-commerce" },
          { label: "Framework", value: "Bootstrap 5" },
        ],
      },
      {
        type: "cards",
        columns: 3,
        items: [
          {
            title: "品牌視覺延伸",
            description:
              "延續歡樂、活潑的品牌精神，建立主視覺、活動標籤與商品展示語言。",
            icon: "palette",
          },
          {
            title: "團購購物體驗",
            description:
              "依照團購情境整理商品探索、規格選擇、購物車與結帳路徑。",
            icon: "workflow",
          },
          {
            title: "設計落地",
            description:
              "使用 Bootstrap 5 進行 RWD 切版，讓視覺稿能轉化為可維護的前端結構。",
            icon: "code",
          },
        ],
      },
    ],
  },
  {
    number: "02",
    title: "The Challenge",
    subtitle: "設計挑戰",
    type: "challenge",
    description:
      "設計需要同時維持品牌的活潑辨識度、商品資訊的清楚度，以及多種折扣機制下的結帳透明度。",
    contentBlocks: [
      {
        type: "cards",
        columns: 2,
        items: [
          {
            eyebrow: "Challenge 01",
            title: "品牌感與購物效率平衡",
            description:
              "介面需要延續歡樂活潑的品牌個性，同時維持清楚的商品瀏覽與購買效率。",
            icon: "palette",
          },
          {
            eyebrow: "Challenge 02",
            title: "團購情境資訊較多",
            description:
              "商品、活動、價格與購買條件需要被清楚呈現，避免使用者在選購時產生理解成本。",
            icon: "layers",
          },
          {
            eyebrow: "Challenge 03",
            title: "優惠機制需清楚整合",
            description:
              "回饋點數與折價券折扣需要自然納入結帳流程，讓使用者理解套用狀態與最終金額。",
            icon: "workflow",
          },
          {
            eyebrow: "Challenge 04",
            title: "RWD 與前端實作一致性",
            description:
              "頁面需使用 Bootstrap 5 進行切版，並在桌機與行動裝置上維持一致的瀏覽與操作體驗。",
            icon: "code",
          },
        ],
      },
    ],
  },
  {
    number: "03",
    title: "Design Goals",
    subtitle: "設計目標",
    type: "goals",
    description:
      "以品牌感吸引瀏覽，以清楚資訊協助選購，再以透明優惠與結帳回饋促成購買。",
    contentBlocks: [
      {
        type: "design-goals",
        previewImage: "/projects/jule-ecommerce/design-goals.webp",
        previewVisual: "jule-homepage",
        goals: [
          {
            title: "延續品牌活潑感",
            description:
              "以明亮、親和且具活動感的視覺語言，建立符合品牌精神的電商介面。",
            icon: "layers",
          },
          {
            title: "提升商品瀏覽效率",
            description:
              "讓商品列表、詳情與活動資訊更容易閱讀與比較。",
            icon: "navigation",
          },
          {
            title: "清楚呈現優惠折抵",
            description:
              "將點數、折價券與金額明細整合至購物與結帳流程。",
            icon: "check",
          },
          {
            title: "落實 RWD 切版",
            description:
              "透過 Bootstrap 5 建立可響應、可維護的前端頁面。",
            icon: "navigation",
          },
        ],
      },
    ],
  },
  {
    number: "04",
    title: "Visual Direction",
    subtitle: "視覺方向",
    type: "visual-direction",
    description:
      "視覺設計延續聚樂「歡樂、活潑」的品牌精神，透過明亮色彩、圓角元素、活動感 Banner 與親和的商品卡片設計，建立更具吸引力的電商首頁與商品瀏覽體驗。",
    contentBlocks: [
      {
        type: "visual-showcase",
        layout: "hero-grid",
        items: [
          {
            title: "Homepage Visual",
            description:
              "整合主視覺 Banner、團購活動、熱門商品與購物 CTA，建立品牌第一印象。",
            image: "/projects/jule-ecommerce/homepage.webp",
            visual: "jule-homepage",
          },
          {
            title: "Visual Direction",
            description:
              "整理品牌色彩、促銷標籤、圓潤卡片、商品攝影框架與文字層級。",
            image: "/projects/jule-ecommerce/visual-direction.webp",
            visual: "jule-visual-direction",
          },
        ],
      },
    ],
  },
  {
    number: "05",
    title: "Shopping Flow",
    subtitle: "購物流程設計",
    type: "shopping-experience",
    description:
      "購物流程依照團購與一般電商情境進行整理，讓使用者能從商品瀏覽、商品詳情、加入購物車到結帳確認，逐步完成購買任務。",
    contentBlocks: [
      {
        type: "visual-showcase",
        layout: "two-column",
        items: [
          {
            title: "Product List",
            description:
              "以活動標籤、價格、銷售進度與快速操作提升團購商品的掃讀效率。",
            image: "/projects/jule-ecommerce/product-list.webp",
            visual: "jule-product-list",
          },
          {
            title: "Product Detail",
            description:
              "整合商品圖、規格選擇、數量、活動倒數與購買 CTA。",
            image: "/projects/jule-ecommerce/product-detail.webp",
            visual: "jule-product-detail",
          },
          {
            title: "Shopping Cart",
            description:
              "集中管理商品規格、數量、小計、優惠提示與前往結帳操作。",
            image: "/projects/jule-ecommerce/cart.webp",
            visual: "jule-cart",
          },
          {
            title: "Checkout",
            description:
              "將收件資料、付款方式、訂單明細與總金額整理為清楚的確認階段。",
            image: "/projects/jule-ecommerce/checkout.webp",
            visual: "jule-checkout",
          },
        ],
      },
    ],
  },
  {
    number: "06",
    title: "Rewards & Coupons",
    subtitle: "點數與折價券流程",
    type: "checkout-experience",
    description:
      "購物流程中整合回饋點數與折價券折扣，讓使用者能在結帳時清楚查看可使用優惠、折抵金額與最終付款金額，降低優惠規則造成的理解成本。",
    contentBlocks: [
      {
        type: "visual-showcase",
        layout: "hero-grid",
        items: [
          {
            title: "Rewards & Coupons",
            description:
              "呈現可用點數、折價券選擇、折扣套用狀態與不可使用提示。",
            image: "/projects/jule-ecommerce/rewards-coupons.webp",
            visual: "jule-rewards-coupons",
          },
          {
            title: "Checkout Summary",
            description:
              "同步更新金額明細、優惠折抵與最終付款金額。",
            image: "/projects/jule-ecommerce/checkout.webp",
            visual: "jule-checkout",
          },
        ],
      },
    ],
  },
  {
    number: "07",
    title: "RWD & Bootstrap Layout",
    subtitle: "RWD 與 Bootstrap 5 切版",
    type: "frontend-layout",
    description:
      "本專案使用 Bootstrap 5 進行頁面切版，依照桌機與行動裝置購物情境調整商品列表、購物車與結帳頁面排列，確保介面在不同螢幕尺寸下仍維持清楚的閱讀與操作體驗。",
    contentBlocks: [
      {
        type: "visual-showcase",
        layout: "two-column",
        items: [
          {
            title: "Bootstrap 5 Layout",
            description:
              "以 container、grid、utility 與元件結構支援設計稿落地與後續維護。",
            image: "/projects/jule-ecommerce/bootstrap-layout.webp",
            visual: "jule-bootstrap-layout",
          },
          {
            title: "Mobile Shopping Flow",
            description:
              "展示手機版商品瀏覽、詳情、購物車與結帳內容的響應式排列。",
            image: "/projects/jule-ecommerce/mobile-rwd.webp",
            visual: "jule-mobile-rwd",
          },
        ],
      },
    ],
  },
  {
    number: "08",
    title: "Final Design & Reflection",
    subtitle: "最終設計與反思",
    type: "reflection",
    description:
      "這次專案讓我更明確理解到，電商設計不只是建立吸引人的視覺畫面，也需要讓購物流程、優惠規則與付款資訊被清楚理解。尤其在導入回饋點數與折價券折扣後，介面需要在品牌活潑感與資訊清楚度之間取得平衡，才能讓使用者更安心地完成購買。",
    contentBlocks: [
      {
        type: "gallery",
        items: [
          {
            title: "Homepage & Campaign",
            description:
              "以主視覺、團購活動與熱門商品建立活潑且具導購力的首頁。",
            image: "/projects/jule-ecommerce/final-ui-01.webp",
            visual: "jule-final-ui-01",
          },
          {
            title: "Shopping & Checkout",
            description:
              "將商品選購、優惠折抵與付款摘要整合為清楚的購物體驗。",
            image: "/projects/jule-ecommerce/final-ui-02.webp",
            visual: "jule-final-ui-02",
          },
          {
            title: "Product Discovery",
            description:
              "透過商品分類、活動標籤與商品卡片支援快速比較。",
            image: "/projects/jule-ecommerce/final-ui-03.webp",
            visual: "jule-product-list",
          },
          {
            title: "Checkout Experience",
            description:
              "清楚呈現回饋點數、折價券、運費與最終付款金額。",
            image: "/projects/jule-ecommerce/final-ui-04.webp",
            visual: "jule-checkout",
          },
        ],
      },
    ],
  },
];

export const profile = {
  name: "HHW",
  title: "UI/UX Designer",
  location: "Taipei / Remote",
  email: "hello@hhw.design",
  availability: "Open to Product Design roles",
  intro:
    "我把複雜產品拆成清楚的使用者任務、可驗證的介面流程，以及能讓工程團隊順利落地的設計系統。",
  bio:
    "專注於研究、資訊架構、互動原型到 Design System ，讓產品在商業目標與使用者體驗之間取得精準平衡。",
};

export const projects: Project[] = [
  {
    slug: "esg-forest-matching-platform",
    ...projectImageAssets["esg-forest-matching-platform"],
    caseStudySections: esgCaseStudySections,
    title: "ESG 林地媒合平台",
    subtitle: "ESG Matching Platform",
    eyebrow: "使用者參與森林及自然碳匯 ESG 專案媒合平台",
    description:
      "協助使用者查詢森林與自然碳匯相關 ESG 專案，整合列表、地圖與媒合流程，提升查詢效率與合作透明度。",
    role: "UI/UX Design / Visual Design",
    scope: "平台 / 會員中心 / 地圖 / 專案詳情 / CMS",
    timeline: "6 月",
    year: "2026",
    duration: "6 months",
    summary:
      "本專案協助使用者查詢森林與自然碳匯相關 ESG 專案，透過列表、地圖、媒合流程與憑證查詢，降低使用者理解與參與 ESG 專案的門檻。",
    challenge:
      "ESG 林地合作牽涉使用者永續目標、地主資料、林地條件、專案認證、風險揭露與後續追蹤。若資訊架構不清楚，使用者難以判斷可信度，供給方也難以有效呈現專案價值。",
    outcome:
      "建立以需求篩選、林地卡片、專案詳情、媒合詢問與 ESG impact tracking 為核心的服務流程，並整理出可擴充的設計 tokens、色彩系統與元件庫。",
    metrics: [
      { label: "Core flows", value: "5" },
      { label: "IA groups", value: "7" },
      { label: "Components", value: "12" },
    ],
    tags: [
      "Web Platform",
      "UI/UX Design",
      "Design System",
      "Front-end Support",
      "Accessibility",
    ],
    tools: ["Figma", "FigJam", "Notion", "Design Tokens"],
    process: [
      "定義使用者端與林地方的雙邊需求，拆解搜尋、比較、詢問與追蹤四個主要任務。",
      "建立資訊架構與 sitemap，讓林地資料、合作條件、永續成果與信任訊號有一致呈現方式。",
      "設計 token、色彩與元件規格，讓平台可支援不同林地類型、狀態與 ESG 指標擴充。",
    ],
    deliverables: [
      "設計系統",
      "前端支援",
      "無障礙",
      "視覺更新",
    ],
    theme: {
      primary: "#0f766e",
      secondary: "#2563eb",
      accent: "#b45309",
    },
    overview: [
      "此專案聚焦在使用者 ESG 需求方與林地專案供給方之間的信任建立。平台需要同時呈現林地基本資料、專案可行性、合作條件、永續成果與聯繫流程。",
      "產品定位不是單純列表型 marketplace，而是支援使用者做初步 ESG due diligence 的媒合工作台。使用者需要快速篩選，也需要在深入閱讀時看見足夠的風險與效益資訊。",
      "設計目標是降低使用者從瀏覽林地、比較方案、送出媒合需求到後續追蹤 impact 的認知成本。",
    ],
    problemStatements: [
      "使用者需要在有限時間內判斷林地專案是否符合 ESG 目標、地理條件、合作預算與認證要求，但現有資訊常分散在簡報、表格與人工往返訊息中。",
      "林地供給方需要以可信、可比較、可維護的方式展示專案，但不同林地資料欄位不一致，容易讓需求方無法橫向比較。",
      "媒合流程若缺少清楚狀態與下一步提示，使用者端會不知道詢問是否送出、資料是否足夠、後續會由誰聯繫。",
    ],
    informationArchitecture: [
      "首頁以使用者需求導向入口為主，提供 ESG 目標、地區、合作方式與林地類型的快速篩選。",
      "林地列表以可比較卡片呈現核心資料，包括地區、面積、碳匯潛力、認證狀態、合作模式與風險標籤。",
      "林地詳情頁分為 Overview、Impact、Land Profile、Certification、Partnership Terms、Timeline 與 Contact CTA。",
      "使用者會員區保留已收藏林地、媒合詢問紀錄、文件上傳、專案追蹤與 impact reports。",
    ],
    sitemap: [
      {
        label: "Home",
        description: "使用者 ESG 需求入口、推薦林地與平台價值摘要。",
        children: [
          { label: "Hero Search", description: "以 ESG 目標與地區開始搜尋。" },
          {
            label: "Featured Forest Projects",
            description: "展示高可信度與高媒合度專案。",
          },
          {
            label: "How Matching Works",
            description: "說明瀏覽、詢問、評估與合作流程。",
          },
        ],
      },
      {
        label: "Forest Marketplace",
        description: "林地搜尋、篩選、排序與比較。",
        children: [
          { label: "Search Results", description: "林地卡片列表與地圖輔助檢視。" },
          { label: "Compare Panel", description: "比較面積、價格、認證與 impact 指標。" },
          { label: "Saved Projects", description: "暫存候選林地與後續評估清單。" },
        ],
      },
      {
        label: "Forest Detail",
        description: "單一林地專案完整 case profile。",
        children: [
          { label: "Project Overview" },
          { label: "ESG Impact" },
          { label: "Land Profile" },
          { label: "Certification & Risk" },
          { label: "Partnership Terms" },
          { label: "Inquiry CTA" },
        ],
      },
      {
        label: "Company Workspace",
        description: "使用者端媒合管理與專案追蹤。",
        children: [
          { label: "Inquiry Status" },
          { label: "Document Upload" },
          { label: "Impact Tracking" },
          { label: "Reports" },
        ],
      },
    ],
    designTokens: [
      {
        title: "Spacing",
        description: "以 4px base 建立可預期的表單、卡片與資料區塊間距。",
        tokens: [
          { name: "space-2", value: "8px", usage: "icon 與 label 間距" },
          { name: "space-4", value: "16px", usage: "卡片內層 padding 與表單群組" },
          { name: "space-6", value: "24px", usage: "詳情頁 section 內部區塊" },
          { name: "space-10", value: "40px", usage: "主要資訊區塊之間的垂直節奏" },
        ],
      },
      {
        title: "Typography",
        description: "兼顧 ESG 報告語氣與平台操作效率。",
        tokens: [
          { name: "text-display", value: "48/56 semibold", usage: "首頁與林地詳情主標" },
          { name: "text-heading", value: "28/36 semibold", usage: "case section 標題" },
          { name: "text-body", value: "16/28 regular", usage: "長段落與說明文字" },
          { name: "text-meta", value: "13/20 medium", usage: "狀態、標籤與輔助資料" },
        ],
      },
      {
        title: "Elevation",
        description: "在明亮介面中用留白、邊框、柔和陰影與 focus ring 表示資訊層級。",
        tokens: [
          { name: "surface-base", value: "#F6F7F9", usage: "頁面背景" },
          { name: "surface-card", value: "#FFFFFF", usage: "林地卡片與資料面板" },
          { name: "border-muted", value: "#E5E7EB", usage: "預設邊框" },
          { name: "focus-ring", value: "#0F766E", usage: "鍵盤 focus 與主要互動提示" },
        ],
      },
    ],
    colorSystem: [
      {
        name: "Forest Trust",
        description: "用於主要 CTA、可信狀態與保育相關訊息。",
        colors: [
          { name: "Forest 500", value: "#16a34a", usage: "primary action" },
          { name: "Teal 700", value: "#0f766e", usage: "positive impact / verified badge" },
          { name: "Moss 700", value: "#14532d", usage: "沉穩輔助色與深色文字搭配" },
        ],
      },
      {
        name: "Data Clarity",
        description: "用於數據、比較、互動 focus 與中性資訊。",
        colors: [
          { name: "Blue 600", value: "#2563eb", usage: "active filters / data highlight" },
          { name: "Slate 300", value: "#cbd5e1", usage: "secondary text" },
          { name: "Slate 500", value: "#64748b", usage: "metadata / disabled text" },
        ],
      },
      {
        name: "Risk & Attention",
        description: "用於未完成、需審核、風險揭露與重要提醒。",
        colors: [
          { name: "Amber 600", value: "#d97706", usage: "pending certification" },
          { name: "Rose 700", value: "#be123c", usage: "risk tag / incomplete requirement" },
          { name: "Brass 700", value: "#b45309", usage: "premium report / highlighted note" },
        ],
      },
    ],
    components: [
      {
        name: "Forest Project Card",
        purpose: "在列表中快速呈現林地專案的比較資訊與信任訊號。",
        anatomy: ["Project title", "Location", "Area", "Impact metrics", "Certification badge", "CTA"],
        states: ["Default", "Hovered", "Saved", "Unavailable", "High match"],
        usageGuidelines: [
          "卡片首屏只顯示決策必要資訊，詳細風險與文件放在詳情頁。",
          "認證狀態需使用文字與顏色雙重提示，避免只依賴色彩。",
        ],
      },
      {
        name: "ESG Filter Panel",
        purpose: "讓使用者以地區、林地類型、合作模式、認證狀態與 impact 指標縮小搜尋範圍。",
        anatomy: ["Filter group", "Checkbox", "Range input", "Selected chips", "Reset action"],
        states: ["Collapsed", "Expanded", "Selected", "Empty results"],
        usageGuidelines: [
          "高影響篩選條件放在上方，進階條件可收合。",
          "已選條件以 chips 回饋，支援快速移除。",
        ],
      },
      {
        name: "Impact Metric Tile",
        purpose: "呈現碳匯潛力、保育面積、生物多樣性與社會共益等 ESG 指標。",
        anatomy: ["Metric label", "Value", "Unit", "Confidence note", "Source"],
        states: ["Verified", "Estimated", "Pending review"],
        usageGuidelines: [
          "估算值必須標示資料來源與信心水準。",
          "單位需固定格式，降低使用者比較時的認知成本。",
        ],
      },
      {
        name: "Matching Inquiry Form",
        purpose: "收集使用者媒合需求，並讓供給方理解合作條件。",
        anatomy: ["Company profile", "ESG goal", "Budget range", "Timeline", "Message", "Submit CTA"],
        states: ["Draft", "Validation error", "Submitted", "Follow-up required"],
        usageGuidelines: [
          "送出前顯示摘要，避免使用者提交不完整需求。",
          "成功狀態需明確告知後續聯繫窗口與預估回覆時間。",
        ],
      },
    ],
    screens: [
      {
        name: "Marketplace Search",
        purpose: "讓使用者從 ESG 目標與林地條件開始探索。",
        userGoal: "快速縮小候選林地，找到值得深入評估的專案。",
        keyElements: ["Search bar", "Filter panel", "Forest project cards", "Compare shortcut"],
      },
      {
        name: "Forest Detail",
        purpose: "提供單一林地完整資訊與信任依據。",
        userGoal: "判斷專案是否符合使用者合作與報告需求。",
        keyElements: ["Impact summary", "Land profile", "Certification section", "Inquiry CTA"],
      },
      {
        name: "Company Workspace",
        purpose: "追蹤詢問狀態、文件與 ESG impact。",
        userGoal: "管理多個媒合案並回到可行的下一步。",
        keyElements: ["Inquiry status", "Saved projects", "Document checklist", "Impact reports"],
      },
    ],
    reflection: [
      "ESG 產品的介面不只要好看，更重要的是建立信任。設計上必須把資料來源、估算狀態、認證進度與風險揭露放在使用者做決策的位置。",
      "雙邊 marketplace 容易只偏向需求方搜尋效率，但供給方資料結構也會直接影響媒合品質。這次 IA 的關鍵是讓林地資料能被一致比較，同時保留各專案的特殊價值。",
      "下一步會優先補上媒合後的 collaboration flow，包括文件交換、補件提醒、合約前評估與年度 impact report 產出。",
    ],
  },
  {
    slug: "tcb",
    ...projectImageAssets.tcb,
    visualFallback: "tcb-hero",
    caseStudySections: tcbCaseStudySections,
    title: "TCB 虛擬機管理平台",
    subtitle: "Virtual Machine Management Platform",
    eyebrow: "虛擬機管理平台的功能與視覺優化",
    description:
      "針對既有虛擬機管理平台重新整理 Dashboard、公告與部署流程，並導入 Light / Dark Theme，提升長時間管理情境的可讀性與操作效率。",
    role: "UI/UX Design / Design System",
    scope: "Dashboard / 虛擬機部署 / 公告 / 雙主題",
    timeline: "3 月",
    year: "2026",
    duration: "3 months",
    summary:
      "本專案針對既有的虛擬機管理平台進行功能與視覺優化，重新梳理 Dashboard 資訊呈現、公告功能、虛擬機部署流程與系統介面一致性，並導入 Light / Dark Theme 亮色／暗色主題切換，提升長時間管理情境下的可讀性與操作體驗。",
    challenge:
      "既有平台功能完整，但資訊層級與元件狀態較分散。使用者需要在高資訊密度與長時間操作情境中快速掌握系統狀態，也需要更清楚地完成虛擬機部署設定。",
    outcome:
      "延續合作金庫品牌識別，融合金融產業的穩定感與科技後台產品的現代感，透過雙主題、玻璃霧化表面與一致的元件規範，建立更具產品感與辨識度的管理系統。",
    metrics: [
      { label: "Themes", value: "2" },
      { label: "Core areas", value: "4" },
      { label: "Sections", value: "8" },
    ],
    tags: [
      "UI/UX Design",
      "Dashboard Design",
      "Light / Dark Theme",
      "Design System",
      "Enterprise Platform",
      "Workflow Optimization",
    ],
    tools: ["Figma", "Design System", "Prototype", "UI Specification"],
    process: [
      "優化虛擬機管理平台整體視覺與介面層級，重新安排 Dashboard 的關鍵資訊。",
      "融合合作金庫品牌視覺，建立 Light / Dark Theme 與可延伸的元件規範。",
      "整合公告功能並優化虛擬機部署流程，降低設定與操作理解成本。",
    ],
    deliverables: [
      "Dashboard",
      "Design System",
      "Light / Dark Theme",
      "Deployment Flow",
    ],
    theme: {
      primary: "#0f7b68",
      secondary: "#0b5f55",
      accent: "#2cc7ad",
    },
    reflection: [
      "後台系統的優化不只是視覺翻新，而是需要在既有功能限制下重新建立資訊層級、操作節奏與設計規範。",
      "亮暗主題需要分別處理表面層級、文字對比、玻璃透明度與狀態色，而不是單純反轉顏色。",
      "金融品牌識別與科技產品感可以透過穩定的主色、清楚的狀態設計與克制的玻璃霧化效果取得平衡。",
    ],
  },
  {
    slug: "rmic",
    ...projectImageAssets.rmic,
    figmaPrototypeUrl:
      "https://www.figma.com/proto/HhzIYp8NJMg2UkxtKaGqnj/-M--RMIC-%E6%A1%83%E5%9C%92%E5%B8%82%E9%81%93%E7%AE%A1%E8%B3%87%E8%A8%8A%E4%B8%AD%E5%BF%83%E7%B3%BB%E7%B5%B1-Final?node-id=85-1113&p=f&viewport=301%2C157%2C0.06&t=qTctTlCG2VODrGFh-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=85%3A1113&page-id=85%3A1083",
    visualFallback: "rmic-hero",
    caseStudySections: rmicCaseStudySections,
    title: "RMIC 桃園市道管資訊中心系統",
    subtitle: "Road Management Information Center",
    eyebrow: "既有平台的功能擴充設計",
    description:
      "在既有道路管理平台架構下擴充案件與地圖功能，透過 Wireframe 與 Prototype 對齊跨部門需求，降低開發前的流程與操作落差。",
    role: "UI/UX Design / Prototyping",
    scope: "案件管理 / 地圖圖資 / 表單 / 功能擴充",
    timeline: "1 月",
    year: "2026",
    duration: "1 months",
    summary:
      "RMIC 桃園市道管資訊中心系統用於道路挖掘、施工案件與相關申請流程的管理，平台整合案件進度、表單資料與地圖圖資，支援跨部門在道路管理、審核與案件追蹤上的協作需求。",
    challenge:
      "新增功能必須整合既有案件流程、表單模組、地圖圖資與開發架構，同時讓多個需求單位在開發前對操作邏輯與範圍形成共同理解。",
    outcome:
      "透過 Wireframe 快速對齊欄位與狀態，再以 Prototype 驗證實際操作路徑，並使用既有平台元件延伸功能介面，降低需求、設計與開發之間的落差。",
    metrics: [
      { label: "Core methods", value: "2" },
      { label: "Focus areas", value: "4" },
      { label: "Sections", value: "7" },
    ],
    tags: [
      "UI/UX Design",
      "Wireframe",
      "Prototype",
      "Feature Extension",
      "Government Platform",
      "Map-based System",
    ],
    tools: ["Figma", "Wireframe", "Prototype", "UI Specification"],
    process: [
      "依據需求單位提出的功能需求，梳理新增功能的操作流程、欄位、狀態與介面結構。",
      "使用 Wireframe 快速對齊功能範圍，再以 Prototype 驗證使用情境與操作路徑。",
      "以既有平台元件與視覺規範延伸新介面，協助 PM 與開發端確認實作範圍。",
    ],
    deliverables: [
      "Wireframe",
      "Prototype",
      "Component Extension",
      "Final UI",
    ],
    theme: {
      primary: "#147d84",
      secondary: "#2c6f9e",
      accent: "#49a6a3",
    },
    reflection: [
      "既有系統的功能擴充需要先理解限制，再找到最穩定的整合方式，而不是從視覺表面重新開始。",
      "Wireframe 與 Prototype 能在開發前暴露欄位、狀態與流程上的模糊處，降低跨部門需求落差。",
      "沿用既有元件與互動模式，能讓新增功能更容易被使用者理解，也能降低後續開發與維護成本。",
    ],
  },
  {
    slug: "jule-ecommerce",
    isHidden: true,
    ...projectImageAssets["jule-ecommerce"],
    visualFallback: "jule-hero",
    caseStudySections: juleCaseStudySections,
    title: "聚樂電商",
    subtitle: "Group-buying E-commerce Experience",
    eyebrow: "活潑品牌電商的視覺設計與購物流程優化",
    description:
      "延續歡樂活潑的品牌精神，整合商品瀏覽、購物車、優惠折抵與結帳流程，建立清楚且具導購力的響應式電商體驗。",
    role: "UI/UX Design / Visual Design / Front-end Layout",
    scope: "首頁 / 商品頁 / 購物車 / 結帳",
    timeline: "Project-based",
    year: "2026",
    duration: "E-commerce design",
    summary:
      "延續「歡樂、活潑」的品牌精神，設計網站主視覺與 UI 介面，並規劃符合團購情境的購物流程，提升整體瀏覽與購買體驗。",
    challenge:
      "需要在活潑促銷視覺、高密度商品資訊與團購情境之間建立清楚層級，並讓回饋點數、折價券與最終付款金額在結帳時容易理解。",
    outcome:
      "完成品牌主視覺、商品瀏覽、購物車、結帳與優惠折抵流程，並以 Bootstrap 5 建立可開發、可維護且支援多裝置的響應式版型。",
    metrics: [
      { label: "Core flows", value: "4" },
      { label: "Discount types", value: "2" },
      { label: "Sections", value: "8" },
    ],
    tags: [
      "UI/UX Design",
      "Visual Design",
      "E-commerce Design",
      "Shopping Flow",
      "Bootstrap 5 Layout",
    ],
    tools: ["Figma", "Photoshop", "Illustrator", "Bootstrap 5"],
    process: [
      "設計網站主視覺與商品展示介面，延伸歡樂、活潑的品牌視覺語言。",
      "規劃商品瀏覽、購物車、回饋點數、折價券與結帳流程。",
      "使用 Bootstrap 5 進行 RWD 頁面切版，協助設計落實為可維護的前端版型。",
    ],
    deliverables: [
      "Visual Design",
      "Shopping Flow",
      "RWD",
      "Bootstrap 5 Layout",
    ],
    theme: {
      primary: "#f06449",
      secondary: "#ffbe3d",
      accent: "#7257d9",
    },
    reflection: [
      "品牌視覺需要一路延伸到商品卡片、優惠提示與結帳回饋，才能形成完整一致的購物體驗。",
      "點數與折價券機制若缺乏即時金額回饋，容易增加使用者在付款前的不確定感。",
      "實際參與 Bootstrap 5 切版，有助於在設計階段更早考量 breakpoint、內容優先順序與元件維護性。",
    ],
  },
];

export const visibleProjects = projects.filter((project) => !project.isHidden);

export type Experience = {
  period: string;
  title: string;
  company: string;
  summary: string;
};

export type PortfolioAward = {
  year: string;
  title: string;
  subtitle: string;
  image?: string;
};

export const experiences: Experience[] = [
  {
    period: "2024 – 2025",
    title: "Senior UI/UX Designer",
    company: "AscendisTech Pte. Ltd. Taiwan Branch",
    summary:
      "與產品、行銷與前端團隊協作，推動平台型專案的使用流程、設計系統與介面優化落地。",
  },
  {
    period: "2019 – 2023",
    title: "UI/UX Designer",
    company: "Motivation Software Co., Ltd.",
    summary:
      "負責平台介面流程、wireframe 與 prototype 設計，並串接前端協作與多元專案需求落地。",
  },
  {
    period: "2015 – 2018",
    title: "Junior UI Designer",
    company: "IDT, Interactive Digital Technologies Inc.",
    summary:
      "參與地理圖資與政府專案介面設計，支援切版、視覺優化與產品維護執行。",
  },
];

export const skills = [
  "Interaction Design",
  "Design Systems",
  "Information Architecture",
  "Prototype Testing",
];

export const awards: PortfolioAward[] = [
  {
    year: "2014",
    title: "Red Dot Award 2014 Winner",
    subtitle: "Communication Design",
    image: "/awards/red-dot-award.svg"
  },
];
