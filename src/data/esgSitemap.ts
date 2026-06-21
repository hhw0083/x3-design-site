import { Position, type Edge, type Node } from "@xyflow/react";
import { projects } from "./projects";

export type EsgSitemapNodeData = {
  label: string;
  description: string;
  group: string;
  accent: string;
  kind: "root" | "module" | "feature";
  users: string[];
  features: string[];
  components: string[];
  designPurpose: string;
  parentLabel?: string;
};

export type EsgSitemapTreeNode = EsgSitemapNodeData & {
  id: string;
  children?: EsgSitemapTreeNode[];
};

const esgProject = projects.find(
  (project) => project.slug === "esg-forest-matching-platform",
);

const sourceSitemapDescriptions = new Map(
  (esgProject?.sitemap ?? []).map((node) => [node.label, node.description]),
);

const modules = [
  {
    id: "home",
    label: "首頁模組",
    accent: "#0f766e",
    description:
      sourceSitemapDescriptions.get("Home") ??
      "企業 ESG 需求入口、推薦林地與平台價值摘要。",
    x: 380,
    y: 16,
    users: ["企業 ESG 採購窗口", "一般訪客", "平台營運者"],
    features: ["需求導向搜尋入口", "推薦林地專案", "平台信任訊號", "媒合流程摘要"],
    components: [
      "Hero Search",
      "Featured Project Card",
      "Trust Badge",
      "Process Stepper",
    ],
    designPurpose:
      "把企業第一次進站時最需要的判斷線索放在首屏，讓使用者先建立信任，再進入林地媒合與政策內容。",
    children: [
      {
        id: "home-hero",
        label: "Hero Search",
        description: "以 ESG 目標、合作地區與林地類型啟動搜尋。",
      },
      {
        id: "home-featured",
        label: "推薦林地專案",
        description: "展示高可信度、高媒合度與高 impact potential 的林地。",
      },
      {
        id: "home-trust",
        label: "信任指標摘要",
        description: "呈現認證、合作案例、平台審核與資料來源。",
      },
    ],
  },
  {
    id: "policy",
    label: "政策說明模組",
    accent: "#b45309",
    description:
      "整理企業需要理解的 ESG、淨零、自然碳匯、保育合作與揭露政策，降低進入門檻。",
    x: 380,
    y: 82,
    users: ["企業永續團隊", "政府管理者", "平台內容管理者"],
    features: ["ESG 政策導讀", "揭露與合規說明", "永續名詞庫", "政策更新內容"],
    components: [
      "Policy Article",
      "Glossary Item",
      "Compliance Checklist",
      "Related CTA",
    ],
    designPurpose:
      "降低大型政府與 ESG 專案常見的知識落差，讓企業在送出媒合需求前理解政策、揭露與合作責任。",
    children: [
      {
        id: "policy-esg",
        label: "ESG 政策導讀",
        description: "用短篇內容解釋企業常見 ESG 與自然解方政策脈絡。",
      },
      {
        id: "policy-compliance",
        label: "揭露與合規",
        description: "說明企業在報告、審核與內部採購流程需要準備的資訊。",
      },
      {
        id: "policy-glossary",
        label: "永續名詞庫",
        description: "統一平台內碳匯、保育、認證與媒合相關用語。",
      },
    ],
  },
  {
    id: "method",
    label: "專案方法介紹模組",
    accent: "#047857",
    description:
      "說明林地專案的盤點、評估、維護、監測與成果計算方式，建立專案可信度。",
    x: 380,
    y: 148,
    users: ["企業評估者", "林地專案方", "政府審核者"],
    features: ["林地評估方法", "資料驗證流程", "長期維護機制", "成果計算說明"],
    components: [
      "Method Card",
      "Verification Status",
      "Metric Explainer",
      "Timeline Block",
    ],
    designPurpose:
      "把林地專案的評估方式透明化，支援企業做初步 due diligence，也讓政府管理者理解資料來源與審核狀態。",
    children: [
      {
        id: "method-evaluation",
        label: "林地評估方法",
        description: "展示面積、地貌、樹種、碳匯潛力與保育價值的評估框架。",
      },
      {
        id: "method-verification",
        label: "資料驗證流程",
        description: "說明資料來源、審核狀態、第三方認證與待補資料。",
      },
      {
        id: "method-maintenance",
        label: "長期維護機制",
        description: "呈現巡檢、復育、監測與年度報告的工作節奏。",
      },
    ],
  },
  {
    id: "matching-flow",
    label: "媒合流程介紹模組",
    accent: "#be123c",
    description:
      "讓企業理解從探索、收藏、詢問、補件、評估到合作確認的完整流程。",
    x: 380,
    y: 214,
    users: ["企業 ESG 採購窗口", "平台媒合顧問", "林地專案方"],
    features: ["流程步驟", "詢問狀態", "補件提醒", "聯繫交接"],
    components: [
      "Matching Stepper",
      "Inquiry Status Chip",
      "Requirement Summary",
      "Contact Handoff",
    ],
    designPurpose:
      "把複雜媒合流程拆成可追蹤階段，降低企業端對下一步、責任歸屬與回覆時間的不確定感。",
    children: [
      {
        id: "matching-flow-steps",
        label: "流程步驟",
        description: "以階段式說明降低企業第一次媒合的不確定感。",
      },
      {
        id: "matching-flow-status",
        label: "詢問狀態",
        description: "追蹤已送出、待補件、審核中、已回覆與已媒合。",
      },
      {
        id: "matching-flow-handoff",
        label: "聯繫交接",
        description: "明確標示平台、林地方與企業端下一步責任。",
      },
    ],
  },
  {
    id: "matching-object",
    label: "物件媒合模組",
    accent: "#2563eb",
    description:
      sourceSitemapDescriptions.get("Forest Marketplace") ??
      "林地搜尋、篩選、排序與比較。",
    x: 380,
    y: 280,
    users: ["企業搜尋者", "林地主", "平台營運者"],
    features: ["林地搜尋與篩選", "林地物件卡片", "林地詳情頁", "比較面板"],
    components: [
      "Filter Panel",
      "Forest Project Card",
      "Compare Table",
      "Saved Project Button",
    ],
    designPurpose:
      "將林地資料標準化成可搜尋、可比較、可保存的資訊單位，支援企業在多個候選物件之間做決策。",
    children: [
      {
        id: "matching-object-search",
        label: "林地搜尋與篩選",
        description: "支援地區、面積、合作方式、認證與 impact 指標篩選。",
      },
      {
        id: "matching-object-card",
        label: "林地物件卡片",
        description: "讓使用者快速比較核心資料、風險與可信標籤。",
      },
      {
        id: "matching-object-detail",
        label: "林地詳情頁",
        description:
          sourceSitemapDescriptions.get("Forest Detail") ??
          "單一林地專案完整 case profile。",
      },
      {
        id: "matching-object-compare",
        label: "比較面板",
        description: "比較價格、面積、碳匯潛力、維護條件與合作週期。",
      },
    ],
  },
  {
    id: "esg-showcase",
    label: "企業 ESG 成果展示模組",
    accent: "#7c3aed",
    description:
      "把企業參與林地合作後的成果轉成可展示、可報告、可追蹤的 ESG story 與資料。",
    x: 380,
    y: 346,
    users: ["企業品牌與永續團隊", "一般訪客", "平台內容管理者"],
    features: ["Impact Dashboard", "成果故事頁", "年度報告素材", "合作案例展示"],
    components: ["Impact Metric Tile", "Story Card", "Report Asset List", "Case Study Banner"],
    designPurpose:
      "讓媒合後的成果不只停留在後台紀錄，而能被企業轉化為報告、品牌溝通與對外揭露素材。",
    children: [
      {
        id: "esg-showcase-impact",
        label: "Impact Dashboard",
        description: "追蹤碳匯、保育面積、生物多樣性與社會共益指標。",
      },
      {
        id: "esg-showcase-story",
        label: "成果故事頁",
        description: "將企業合作案例整理成可對外溝通的故事與圖文內容。",
      },
      {
        id: "esg-showcase-report",
        label: "年度報告素材",
        description: "輸出 ESG 報告可引用的摘要、數字與附件清單。",
      },
    ],
  },
  {
    id: "qa",
    label: "QA 模組",
    accent: "#ea580c",
    description:
      "回應企業、林地方與一般訪客在 ESG、林地媒合、資料可信度與合作流程上的常見問題。",
    x: 380,
    y: 412,
    users: ["企業使用者", "林地專案方", "一般訪客"],
    features: ["一般問題", "風險與認證問題", "客服與諮詢入口", "內容搜尋"],
    components: ["FAQ Group", "Search Input", "Risk Notice", "Support CTA"],
    designPurpose:
      "用自助式內容承接高頻疑問，減少人工往返，同時把高意圖使用者導向媒合詢問或諮詢。",
    children: [
      {
        id: "qa-general",
        label: "一般問題",
        description: "說明平台定位、媒合模式與服務範圍。",
      },
      {
        id: "qa-risk",
        label: "風險與認證問題",
        description: "集中回答資料驗證、認證狀態與風險揭露。",
      },
      {
        id: "qa-contact",
        label: "客服與諮詢入口",
        description: "將高意圖問題導向人工諮詢與媒合詢問。",
      },
    ],
  },
  {
    id: "map",
    label: "林地圖台應用模組",
    accent: "#0891b2",
    description:
      "用地圖方式呈現林地位置、地形、區域條件、鄰近資源與保育範圍。",
    x: 380,
    y: 478,
    users: ["企業評估者", "政府管理者", "平台營運者"],
    features: ["圖層切換", "地圖物件詳情", "地圖篩選", "林地範圍檢視"],
    components: ["Layer Switcher", "Map Marker", "Map Detail Sheet", "Geo Filter"],
    designPurpose:
      "把抽象林地資料放回地理脈絡中，支援位置、範圍、保育區與區域條件的判讀。",
    children: [
      {
        id: "map-layer",
        label: "圖層切換",
        description: "支援地形、行政區、保育區、林地邊界與專案狀態圖層。",
      },
      {
        id: "map-object",
        label: "地圖物件詳情",
        description: "點選林地後顯示面積、位置、狀態與媒合 CTA。",
      },
      {
        id: "map-filter",
        label: "地圖篩選",
        description: "在地圖視角中套用林地類型、區域與 impact 條件。",
      },
    ],
  },
  {
    id: "admin",
    label: "系統管理模組",
    accent: "#64748b",
    description:
      sourceSitemapDescriptions.get("Company Workspace") ??
      "企業端媒合管理、林地資料維護、審核流程與成果追蹤。",
    x: 380,
    y: 544,
    users: ["政府管理者", "平台營運者", "內容管理者"],
    features: ["林地資料管理", "媒合詢問管理", "內容與 QA 管理", "Impact Report 管理"],
    components: ["Admin Table", "Review Queue", "Content Editor", "Report Builder"],
    designPurpose:
      "讓政府與平台端能維護林地資料、審核媒合流程、管理內容與追蹤成果，支撐前台資訊可信度。",
    children: [
      {
        id: "admin-land",
        label: "林地資料管理",
        description: "管理物件資料、文件、狀態、審核欄位與更新紀錄。",
      },
      {
        id: "admin-inquiry",
        label: "媒合詢問管理",
        description: "處理企業詢問、補件、指派與回覆紀錄。",
      },
      {
        id: "admin-content",
        label: "內容與 QA 管理",
        description: "維護政策內容、方法介紹、QA 與成果展示素材。",
      },
      {
        id: "admin-report",
        label: "Impact Report 管理",
        description: "管理企業專案追蹤、年度成果與報告輸出資料。",
      },
    ],
  },
] as const;

export const esgSitemapTree: EsgSitemapTreeNode[] = modules.map((module) => ({
  id: module.id,
  label: module.label,
  description: module.description,
  group: module.label,
  accent: module.accent,
  kind: "module",
  users: [...module.users],
  features: [...module.features],
  components: [...module.components],
  designPurpose: module.designPurpose,
  children: module.children.map((child) => ({
    id: child.id,
    label: child.label,
    description: child.description,
    group: module.label,
    accent: module.accent,
    kind: "feature",
    users: [...module.users],
    features: [child.label],
    components: [...module.components],
    designPurpose: child.description,
    parentLabel: module.label,
  })),
}));

export const esgSitemapNodes: Node<EsgSitemapNodeData>[] = modules.map(
  (module) => ({
    id: module.id,
    type: "default",
    position: { x: module.x, y: module.y },
    width: 220,
    height: 54,
    initialWidth: 220,
    initialHeight: 54,
    measured: { width: 220, height: 54 },
    targetPosition: Position.Left,
    sourcePosition: Position.Right,
    data: {
      label: module.label,
      description: module.description,
      group: module.label,
      accent: module.accent,
      kind: "module",
      users: [...module.users],
      features: [...module.features],
      components: [...module.components],
      designPurpose: module.designPurpose,
    },
    draggable: false,
    selectable: true,
    style: {
      width: 220,
      height: 54,
      borderRadius: 8,
      border: "1px solid rgba(226, 232, 240, 1)",
      borderLeft: `4px solid ${module.accent}`,
      background: "#ffffff",
      color: "#111827",
      fontSize: 14,
      fontWeight: 650,
      padding: "12px 16px",
      boxShadow: "0 12px 32px rgba(15,23,42,0.08)",
    },
  }),
);

esgSitemapNodes.unshift({
  id: "platform-root",
  type: "default",
  position: { x: 32, y: 265 },
  width: 250,
  height: 84,
  initialWidth: 250,
  initialHeight: 84,
  measured: { width: 250, height: 84 },
  sourcePosition: Position.Right,
  data: {
    label: "企業 ESG 媒合平台系統",
    description:
      "整合企業 ESG 需求、地主林地資料、政府審核管理與成果追蹤的資訊架構總覽。",
    group: "平台總覽",
    accent: "#e2e8f0",
    kind: "root",
    users: ["企業", "地主", "政府管理者", "平台營運者"],
    features: ["角色任務入口", "林地媒合架構", "審核管理架構", "成果追蹤架構"],
    components: ["Platform IA", "Role-based Navigation", "Module Map"],
    designPurpose:
      "先以平台總覽建立共同語言，再將三種角色的任務路徑拆解成九大主模組，支援大型政府系統的跨角色協作。",
  },
  draggable: false,
  selectable: true,
  style: {
    width: 250,
    height: 84,
    borderRadius: 8,
    border: "1px solid rgba(203, 213, 225, 1)",
    background: "#ffffff",
    color: "#111827",
    fontSize: 16,
    fontWeight: 700,
    padding: 16,
    boxShadow: "0 14px 34px rgba(15,23,42,0.1)",
  },
});

const moduleEdges: Edge[] = modules.map((module) => ({
  id: `platform-root-${module.id}`,
  source: "platform-root",
  target: module.id,
  type: "smoothstep",
  style: { stroke: "rgba(148, 163, 184, 0.5)", strokeWidth: 1.1 },
}));

export const esgSitemapEdges: Edge[] = moduleEdges;
