import type { CSSProperties, ReactNode } from "react";
import {
  ArrowRight,
  Bell,
  Check,
  ChevronDown,
  Heart,
  Info,
  Leaf,
  List,
  Map,
  MapPin,
  Search,
  User,
  X,
} from "lucide-react";

const tokens = {
  primaryGreen: "#137D6A",
  secondaryAqua: "#80CACE",
  backgroundIvory: "#FBF9F4",
  neutralGray: "#D7D7D7",
  textPrimary: "#212529",
  textSecondary: "#6B7280",
  border: "#E5E5E5",
  surface: "#FFFFFF",
  accentYellow: "#F2B600",
  notificationRed: "#F05B63",
};

const colorPalette = [
  {
    name: "Primary Green",
    value: tokens.primaryGreen,
    background: "linear-gradient(145deg, #137D6A, #0F6F5D)",
  },
  {
    name: "Secondary Aqua",
    value: tokens.secondaryAqua,
    background: "linear-gradient(145deg, #80CACE, #A9DFDD)",
  },
  {
    name: "Background Ivory",
    value: tokens.backgroundIvory,
    background: "linear-gradient(145deg, #FBF9F4, #F3EFE5)",
  },
  {
    name: "Neutral Gray",
    value: tokens.neutralGray,
    background: "linear-gradient(145deg, #F2F2F2, #CFCFCF)",
  },
];

const uiColors = [
  {
    name: "Text / Primary",
    value: tokens.textPrimary,
    background: "linear-gradient(145deg, #212529, #111827)",
  },
  {
    name: "Text / Secondary",
    value: tokens.textSecondary,
    background: "linear-gradient(145deg, #6B7280, #4B5563)",
  },
  {
    name: "Border",
    value: tokens.border,
    background: "linear-gradient(145deg, #F6F6F6, #E5E5E5)",
  },
  {
    name: "Surface",
    value: tokens.surface,
    background: "#FFFFFF",
  },
  {
    name: "Success",
    value: tokens.primaryGreen,
    background: "linear-gradient(145deg, #137D6A, #0F8E79)",
  },
  {
    name: "Accent",
    value: tokens.accentYellow,
    background: "linear-gradient(145deg, #F2B600, #FFCC35)",
  },
];

const typeScale = [
  { name: "Display", size: "48px" },
  { name: "Page Title", size: "40px" },
  { name: "Section Title", size: "28px" },
  { name: "Card Title", size: "20px" },
  { name: "Body", size: "16px" },
  { name: "Caption", size: "14px" },
  { name: "Label", size: "12px" },
];

const navItems = [
  "政策與指引",
  "解決方案",
  "媒體中心",
  "ESG 成果展示",
  "Q & A",
  "系統管理",
];

const statusItems = [
  { label: "進行中", tone: "success" as const },
  { label: "符合條件", tone: "green" as const },
  { label: "已完成", tone: "blue" as const },
  { label: "已過期", tone: "neutral" as const },
  { label: "待審核", tone: "warning" as const },
  { label: "已取消", tone: "error" as const },
];

const tableRows = [
  {
    date: "2022/12/20",
    certificate: "0000000000000001",
    company: "Forest & Nature Co., Ltd.",
    status: "有效",
    validUntil: "2024/12/19",
  },
  {
    date: "2022/12/20",
    certificate: "0000000000000002",
    company: "Green Future Ltd.",
    status: "有效",
    validUntil: "2024/12/19",
  },
  {
    date: "2022/12/20",
    certificate: "0000000000000003",
    company: "Eco Solutions Co.",
    status: "已過期",
    validUntil: "2023/12/19",
  },
  {
    date: "2022/12/20",
    certificate: "0000000000000004",
    company: "Sustainable Forest Inc.",
    status: "待審核",
    validUntil: "2024/12/19",
  },
];

function cx(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(" ");
}

function LeafMark({ className = "" }: { className?: string }) {
  return (
    <span
      className={cx(
        "inline-grid place-items-center rounded-full border border-[#137D6A]/30 bg-[#137D6A]/10 text-[#137D6A]",
        className,
      )}
    >
      <Leaf className="size-5" aria-hidden="true" />
    </span>
  );
}

function BoardShell({ children }: { children: ReactNode }) {
  return (
    <div className="w-full min-w-0 rounded-[24px] border border-[#E5E5E5] bg-[#FBF9F4] p-2 shadow-[0_24px_70px_rgba(33,37,41,0.08)]">
      {children}
    </div>
  );
}

export function ComponentPanel({
  title,
  number,
  className,
  children,
}: {
  title: string;
  number?: string;
  className?: string;
  children: ReactNode;
}) {
  return (
    <article
      className={cx(
        "w-full min-w-0 rounded-[18px] border border-[#E5E5E5] bg-white p-5 shadow-sm md:p-6",
        className,
      )}
    >
      <h3 className="text-xl font-bold leading-tight text-[#137D6A]">
        {number ? `${number}. ` : ""}
        {title}
      </h3>
      <div className="mt-5 min-w-0">{children}</div>
    </article>
  );
}

export function ColorSwatch({
  name,
  value,
  background,
  compact = false,
}: {
  name: string;
  value: string;
  background: string;
  compact?: boolean;
}) {
  return (
    <div>
      <div
        className={cx(
          "rounded-[12px] border border-black/5 shadow-[0_12px_24px_rgba(33,37,41,0.08)]",
          compact ? "h-20" : "h-28 md:h-32",
        )}
        style={{ background }}
      />
      <p
        className={cx(
          "mt-3 font-semibold leading-5 text-[#212529]",
          compact ? "text-xs" : "text-sm",
        )}
      >
        {name}
      </p>
      <p
        className={cx(
          "mt-1 break-all text-[#6B7280]",
          compact ? "text-xs" : "text-sm",
        )}
      >
        {value}
      </p>
    </div>
  );
}

export function ColorPaletteSection() {
  return (
    <ComponentPanel title="Color Palette / 色彩系統" number="1">
      <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
        {colorPalette.map((color) => (
          <ColorSwatch key={color.name} {...color} />
        ))}
      </div>
    </ComponentPanel>
  );
}

export function UIColorSection() {
  return (
    <ComponentPanel title="UI Colors / UI 色彩" number="2">
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 2xl:grid-cols-6">
        {uiColors.map((color) => (
          <ColorSwatch key={color.name} {...color} compact />
        ))}
      </div>
    </ComponentPanel>
  );
}

export function TypeScaleRow({ name, size }: { name: string; size: string }) {
  return (
    <div className="flex items-center justify-between border-b border-[#E5E5E5] py-2.5 last:border-b-0">
      <span className="text-sm text-[#212529]">{name}</span>
      <span className="text-sm text-[#6B7280]">{size}</span>
    </div>
  );
}

export function TypographySection() {
  return (
    <ComponentPanel title="Typography" number="3">
      <div className="grid gap-6 md:grid-cols-[1fr_1px_1.15fr] md:items-center">
        <div>
          <p className="text-base text-[#212529]">Font Family</p>
          <p className="mt-2 text-2xl font-bold text-[#137D6A]">
            Noto Sans TC
          </p>
          <div className="my-7 h-px bg-[#E5E5E5]" />
          <p className="text-[72px] font-bold leading-none tracking-[-0.04em] text-[#212529] md:text-[96px]">
            Aa
          </p>
        </div>
        <div className="hidden h-full bg-[#E5E5E5] md:block" />
        <div>
          {typeScale.map((type) => (
            <TypeScaleRow key={type.name} {...type} />
          ))}
        </div>
      </div>
    </ComponentPanel>
  );
}

export function TypographyExampleSection() {
  return (
    <ComponentPanel title="Typography Example / 字級範例" number="4">
      <div className="space-y-4">
        <p className="text-[40px] font-bold leading-[1.05] tracking-[-0.02em] text-[#212529] md:text-[48px]">
          森林及自然碳匯專案媒合平台
        </p>
        <p className="text-[28px] font-bold leading-tight text-[#212529]">
          專案查詢與成果展示
        </p>
        <p className="max-w-2xl text-base leading-8 text-[#212529]">
          平台協助企業探索 ESG 專案標的、比較合作機會，並以清楚的資訊層級呈現永續成果。
        </p>
        <p className="text-sm text-[#6B7280]">輔助說明文字範例</p>
        <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#137D6A]">
          LABEL / 狀態標籤
        </p>
      </div>
    </ComponentPanel>
  );
}

function ColorTypographyBoard() {
  return (
    <BoardShell>
      <div className="grid gap-2 lg:grid-cols-2">
        <ColorPaletteSection />
        <UIColorSection />
        <TypographySection />
        <TypographyExampleSection />
      </div>
    </BoardShell>
  );
}

function LabeledDemo({
  label,
  children,
}: {
  label: string;
  children: ReactNode;
}) {
  return (
    <div className="min-w-0">
      <p className="mb-2 text-xs font-bold text-[#212529]">{label}</p>
      {children}
    </div>
  );
}

function LogoMark() {
  return (
    <span className="grid size-10 shrink-0 place-items-center rounded-full bg-[#137D6A] text-white shadow-sm">
      <Leaf className="size-5" aria-hidden="true" />
    </span>
  );
}

export function GlobalNavigationShowcase() {
  return (
    <ComponentPanel
      title="Navigation / 全站導覽"
      number="1"
      className="xl:col-span-2"
    >
      <div className="space-y-5">
        <LabeledDemo label="Header / 頁首">
          <header className="flex flex-col gap-3 rounded-[12px] border border-[#E5E5E5] bg-white p-3 shadow-[0_10px_28px_rgba(33,37,41,0.08)] md:flex-row md:items-center">
            <div className="flex flex-wrap items-center gap-3">
              <LogoMark />
              <p className="text-lg font-bold text-[#212529]">ESG Platform</p>
            </div>
            <div className="flex min-w-0 flex-1 items-center gap-2 rounded-full border border-[#D7D7D7] px-4 py-2 text-sm text-[#6B7280] md:ml-8">
              <span className="truncate">搜尋平台內容</span>
              <Search className="ml-auto size-4" aria-hidden="true" />
            </div>
            <div className="flex items-center gap-3">
              <button className="relative rounded-full p-2 text-[#6B7280]" aria-label="Notifications">
                <Bell className="size-5" aria-hidden="true" />
                <span className="absolute -right-0.5 -top-0.5 grid size-5 place-items-center rounded-full bg-[#F05B63] text-[10px] font-bold text-white">
                  2
                </span>
              </button>
              <button className="rounded-full px-3 py-2 text-sm font-semibold text-[#212529]">
                登入
              </button>
              <button className="rounded-full bg-[#F2B600] px-4 py-2 text-sm font-bold text-white shadow-sm">
                申請媒合
              </button>
            </div>
          </header>
        </LabeledDemo>

        <LabeledDemo label="Primary Navigation / 主要導覽">
          <nav className="grid gap-1 rounded-[8px] bg-[#137D6A] p-2 text-xs font-bold text-white shadow-sm sm:grid-cols-2 lg:grid-cols-6">
            {navItems.map((item) => (
              <a key={item} className="rounded-[8px] px-3 py-3 text-center hover:bg-white/10" href="#">
                {item}
              </a>
            ))}
          </nav>
        </LabeledDemo>

      </div>
    </ComponentPanel>
  );
}

function DemoInput({
  placeholder,
  icon = true,
}: {
  placeholder: string;
  icon?: boolean;
}) {
  return (
    <div className="flex h-11 items-center rounded-[8px] border border-[#D7D7D7] bg-white px-3 text-sm text-[#6B7280]">
      <span className="truncate">{placeholder}</span>
      {icon ? <Search className="ml-auto size-4" aria-hidden="true" /> : null}
    </div>
  );
}

function SelectDemo({ label }: { label: string }) {
  return (
    <button className="flex h-11 w-full items-center rounded-[8px] border border-[#D7D7D7] bg-white px-3 text-left text-sm text-[#212529]">
      <span className="truncate">{label}</span>
      <ChevronDown className="ml-auto size-4 text-[#137D6A]" aria-hidden="true" />
    </button>
  );
}

function SegmentControl({
  options,
  active,
}: {
  options: Array<{ label: string; icon?: ReactNode }>;
  active: string;
}) {
  return (
    <div className="grid w-full grid-cols-2 rounded-[8px] border border-[#D7D7D7] bg-white p-1">
      {options.map((option) => (
        <button
          key={option.label}
          className={cx(
            "flex min-w-0 items-center justify-center gap-2 rounded-[6px] px-2 py-2 text-sm font-semibold sm:px-4",
            option.label === active
              ? "bg-[#137D6A] text-white"
              : "text-[#6B7280]",
          )}
        >
          {option.icon}
          {option.label}
        </button>
      ))}
    </div>
  );
}

export function SearchFilterShowcase() {
  return (
    <ComponentPanel
      title="Search & Filter / 查詢與篩選"
      number="2"
      className="xl:col-span-2"
    >
      <div className="grid gap-5 md:grid-cols-2">
        <LabeledDemo label="Search Input / 搜尋欄位">
          <DemoInput placeholder="搜尋專案、企業或指標..." />
        </LabeledDemo>
        <LabeledDemo label="Dropdown / 下拉選單">
          <SelectDemo label="臺北市，全區" />
        </LabeledDemo>
        <LabeledDemo label="Checkbox Filter / 核取篩選">
          <div className="space-y-3">
            {["縣市", "鄉鎮區", "森林類型", "已取得憑證"].map(
              (item, index) => (
                <label key={item} className="flex items-center gap-2 text-sm text-[#212529]">
                  <input
                    type="checkbox"
                    className="size-4 rounded border-[#D7D7D7] accent-[#137D6A]"
                    defaultChecked={index === 0 || index === 2}
                    disabled
                  />
                  {item}
                </label>
              ),
            )}
          </div>
        </LabeledDemo>
        <LabeledDemo label="Search Panel / 查詢面板">
          <div className="rounded-[12px] border border-[#E5E5E5] bg-white p-4 shadow-sm">
            <p className="text-center text-sm font-bold text-[#212529]">
              專案標的查詢
            </p>
            <div className="mx-auto mt-2 h-0.5 w-10 bg-[#F2B600]" />
            <div className="mt-4 space-y-3">
              <SelectDemo label="臺北市，全區" />
              <div className="grid gap-2 sm:grid-cols-[1fr_auto]">
                <DemoInput placeholder="輸入關鍵字，例如專案或企業名稱" icon={false} />
                <button className="inline-flex h-11 items-center justify-center gap-2 rounded-[8px] bg-[#137D6A] px-5 text-sm font-bold text-white">
                  <Search className="size-4" aria-hidden="true" />
                  查詢
                </button>
              </div>
            </div>
          </div>
        </LabeledDemo>
        <LabeledDemo label="Sorting / 排序">
          <SelectDemo label="排序：最新更新" />
        </LabeledDemo>
        <div className="grid gap-4 sm:grid-cols-2 md:col-span-2">
          <LabeledDemo label="View Mode / 檢視模式">
            <SegmentControl
              active="列表檢視"
              options={[
                { label: "列表檢視", icon: <List className="size-4" /> },
                { label: "地圖檢視", icon: <Map className="size-4" /> },
              ]}
            />
          </LabeledDemo>
          <LabeledDemo label="Map Layer / 地圖圖層">
            <SegmentControl
              active="地圖"
              options={[
                { label: "地圖" },
                { label: "衛星" },
              ]}
            />
          </LabeledDemo>
        </div>
      </div>
    </ComponentPanel>
  );
}

export function ButtonsInputsShowcase() {
  return (
    <ComponentPanel
      title="Buttons / 按鈕"
      number="3"
      className="xl:col-span-2"
    >
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <LabeledDemo label="Primary Button / 主要按鈕">
          <button className="h-11 w-full rounded-[8px] bg-[#137D6A] px-6 text-sm font-bold text-white shadow-sm sm:w-auto">
            主要按鈕
          </button>
        </LabeledDemo>
        <LabeledDemo label="Secondary / 次要按鈕">
          <button className="h-11 w-full rounded-[8px] border border-[#137D6A] bg-white px-6 text-sm font-bold text-[#137D6A] sm:w-auto">
            次要按鈕
          </button>
        </LabeledDemo>
        <LabeledDemo label="CTA Pill Button / 行動按鈕">
          <button className="h-11 w-full rounded-full bg-[#F2B600] px-6 text-sm font-bold text-white shadow-sm sm:w-auto">
            立即申請
          </button>
        </LabeledDemo>
        <LabeledDemo label="Text Link / 文字連結">
          <a className="inline-flex items-center gap-2 text-sm font-bold text-[#137D6A]" href="#">
            了解更多
            <ArrowRight className="size-4" aria-hidden="true" />
          </a>
        </LabeledDemo>
        <LabeledDemo label="Input Field / 輸入欄位">
          <DemoInput placeholder="請輸入文字..." icon={false} />
        </LabeledDemo>
        <LabeledDemo label="Icon Button / 圖示按鈕">
          <button className="grid size-11 place-items-center rounded-[8px] border border-[#D7D7D7] bg-white text-[#212529] shadow-sm" aria-label="Favorite">
            <Heart className="size-5" aria-hidden="true" />
          </button>
        </LabeledDemo>
      </div>
    </ComponentPanel>
  );
}

function ForestPreview({ compact = false }: { compact?: boolean }) {
  return (
    <div
      className={cx(
        "relative overflow-hidden rounded-[12px] border border-[#E5E5E5] bg-[#80CACE]/30",
        compact ? "h-20 w-full" : "h-44 w-full",
      )}
    >
      <div className="absolute inset-0 bg-[linear-gradient(180deg,#bfe4e4_0%,#dff4ef_34%,#97c988_35%,#6ea768_60%,#4f8d5d_100%)]" />
      <div className="absolute inset-x-0 bottom-6 h-12 bg-[repeating-linear-gradient(155deg,rgba(255,255,255,0.25)_0_2px,transparent_2px_15px)]" />
      <div className="absolute left-0 top-12 h-20 w-full bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.55),transparent_55%)]" />
    </div>
  );
}

export function StatusBadge({
  label,
  tone = "success",
}: {
  label: string;
  tone?: "success" | "green" | "blue" | "neutral" | "warning" | "error";
}) {
  const toneClass = {
    success: "bg-[#137D6A]/10 text-[#137D6A]",
    green: "bg-[#2F855A]/10 text-[#2F855A]",
    blue: "bg-[#2B78C6]/10 text-[#2B78C6]",
    neutral: "bg-[#6B7280]/10 text-[#6B7280]",
    warning: "bg-[#F2B600]/20 text-[#9A6B00]",
    error: "bg-[#F05B63]/10 text-[#C73740]",
  }[tone];

  return (
    <span className={cx("inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-bold", toneClass)}>
      {tone === "error" ? <X className="size-3" /> : <Check className="size-3" />}
      {label}
    </span>
  );
}

function FavoriteButton({ active = false }: { active?: boolean }) {
  return (
    <button
      className="grid size-9 place-items-center rounded-full border border-[#E5E5E5] bg-white text-[#6B7280] shadow-sm"
      aria-label="Favorite"
    >
      <Heart
        className={cx("size-5", active ? "fill-[#F05B63] text-[#F05B63]" : "")}
        aria-hidden="true"
      />
    </button>
  );
}

export function PropertyCard() {
  return (
    <article className="w-full overflow-hidden rounded-[12px] border border-[#E5E5E5] bg-white shadow-sm xl:max-w-[19rem]">
      <div className="relative">
        <ForestPreview />
        <div className="absolute right-3 top-3">
          <FavoriteButton />
        </div>
        <LeafMark className="absolute bottom-3 left-3 size-10 bg-white" />
      </div>
      <div className="space-y-3 p-4">
        <div>
          <p className="text-sm font-bold text-[#212529]">示範私有林地專案</p>
          <div className="mt-2 flex flex-wrap items-center gap-2">
            <StatusBadge label="進行中" />
            <span className="text-xs text-[#6B7280]">2024/05/12 更新</span>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-3 text-xs">
          <div>
            <p className="text-[#6B7280]">減碳效益</p>
            <p className="mt-1 font-bold text-[#212529]">12,450 tCO2e</p>
          </div>
          <div>
            <p className="text-[#6B7280]">狀態</p>
            <p className="mt-1 font-bold text-[#137D6A]">進行中</p>
          </div>
        </div>
        <a className="inline-flex items-center gap-2 text-xs font-bold text-[#137D6A]" href="#">
          View Details <ArrowRight className="size-3" />
        </a>
      </div>
    </article>
  );
}

export function PropertyListItem() {
  return (
    <article className="grid w-full min-w-0 gap-4 rounded-[12px] border border-[#E5E5E5] bg-white p-3 shadow-sm sm:grid-cols-[9rem_minmax(0,1fr)_auto]">
      <ForestPreview compact />
      <div className="min-w-0">
        <p className="truncate text-sm font-bold text-[#212529]">
          示範私有林地專案
        </p>
        <div className="mt-2 flex flex-wrap gap-2">
          <StatusBadge label="進行中" />
          <span className="text-xs text-[#6B7280]">2024/05/12 更新</span>
        </div>
        <div className="mt-3 grid grid-cols-3 gap-3 text-xs">
          <div>
            <p className="text-[#6B7280]">減碳效益</p>
            <p className="font-bold text-[#137D6A]">12,450</p>
          </div>
          <div>
            <p className="text-[#6B7280]">狀態</p>
            <p className="font-bold text-[#137D6A]">進行中</p>
          </div>
          <div>
            <p className="text-[#6B7280]">SDGs</p>
            <div className="mt-1 flex gap-1">
              {["13", "15", "17"].map((item) => (
                <span key={item} className="grid size-5 place-items-center rounded bg-[#137D6A] text-[10px] font-bold text-white">
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
      <FavoriteButton />
    </article>
  );
}

function CompactMapResultCard() {
  return (
    <article className="grid w-full min-w-0 grid-cols-[4.5rem_minmax(0,1fr)_2.25rem] gap-3 rounded-[12px] border border-[#E5E5E5] bg-white p-3 shadow-sm sm:max-w-[16rem]">
      <ForestPreview compact />
      <div>
        <p className="text-xs font-bold text-[#212529]">示範林地</p>
        <p className="text-[11px] text-[#6B7280]">專案標的</p>
        <StatusBadge label="進行中" />
        <p className="mt-1 text-xs font-bold text-[#212529]">12,450 tCO2e</p>
      </div>
      <FavoriteButton />
    </article>
  );
}

export function MetricStrip() {
  const metrics = [
    { label: "私有林地", value: "80", caption: "件", color: "#137D6A" },
    { label: "參與單位", value: "33", caption: "家", color: "#B77900" },
    { label: "媒體報導", value: "4", caption: "篇", color: "#2B78C6" },
    { label: "合作企業", value: "7", caption: "家", color: "#F05B63" },
    { label: "已認證專案", value: "2", caption: "件", color: "#137D6A" },
  ];

  return (
    <div className="grid w-full min-w-0 rounded-[12px] border border-[#E5E5E5] bg-white shadow-sm md:grid-cols-5">
      {metrics.map((metric) => (
        <div key={metric.label} className="border-b border-[#E5E5E5] p-4 last:border-b-0 md:border-b-0 md:border-r md:last:border-r-0">
          <p className="text-xs text-[#6B7280]">{metric.label}</p>
          <p className="mt-1 text-2xl font-bold" style={{ color: metric.color }}>
            {metric.value}
            <span className="ml-1 text-xs font-normal text-[#6B7280]">
              {metric.caption}
            </span>
          </p>
        </div>
      ))}
    </div>
  );
}

export function DataCardsShowcase() {
  return (
    <ComponentPanel title="Data Cards / 資料卡片" number="4" className="xl:col-span-2">
      <div className="grid min-w-0 gap-6 xl:grid-cols-[18rem_minmax(0,1fr)]">
        <LabeledDemo label="Featured Card / 精選標的卡片">
          <PropertyCard />
        </LabeledDemo>
        <div className="min-w-0 space-y-5">
          <LabeledDemo label="List Item / 橫式列表項目">
            <PropertyListItem />
          </LabeledDemo>
          <div className="grid min-w-0 gap-5 lg:grid-cols-[17rem_minmax(0,1fr)]">
            <LabeledDemo label="Map Result / 地圖結果卡片">
              <CompactMapResultCard />
            </LabeledDemo>
            <LabeledDemo label="Metric Strip / 數據摘要">
              <MetricStrip />
            </LabeledDemo>
          </div>
          <LabeledDemo label="Favorite / 收藏狀態">
            <div className="flex gap-3">
              <FavoriteButton />
              <FavoriteButton active />
            </div>
          </LabeledDemo>
        </div>
      </div>
    </ComponentPanel>
  );
}

export function DataDisplayShowcase() {
  return (
    <ComponentPanel
      title="Table / 資料表格"
      number="5"
      className="xl:col-span-2"
    >
      <div className="space-y-6">
        <LabeledDemo label="Table / 結果表格">
          <div className="max-w-full overflow-x-auto rounded-[12px] border border-[#E5E5E5]">
            <table className="min-w-[40rem] w-full border-collapse bg-white text-left text-xs">
              <thead className="bg-[#137D6A]/10 text-[#212529]">
                <tr>
                  {["發放日期", "憑證編號", "企業名稱", "狀態", "有效期限", "詳細"].map((head) => (
                    <th key={head} scope="col" className="px-4 py-3 font-bold">
                      {head}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {tableRows.map((row) => (
                  <tr key={row.certificate} className="border-t border-[#E5E5E5]">
                    <td className="px-4 py-3 text-[#212529]">{row.date}</td>
                    <td className="px-4 py-3 text-[#212529]">{row.certificate}</td>
                    <td className="px-4 py-3 text-[#212529]">{row.company}</td>
                    <td
                      className="px-4 py-3 font-bold"
                      style={{
                        color:
                          row.status === "已過期"
                            ? tokens.notificationRed
                            : row.status === "待審核"
                              ? "#B77900"
                              : tokens.primaryGreen,
                      }}
                    >
                      {row.status}
                    </td>
                    <td className="px-4 py-3 text-[#212529]">{row.validUntil}</td>
                    <td className="px-4 py-3">
                      <Info className="size-4 text-[#137D6A]" aria-hidden="true" />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </LabeledDemo>
      </div>
    </ComponentPanel>
  );
}

function StatusBadgeShowcase() {
  return (
    <ComponentPanel title="Status Badge / 狀態標籤" number="6">
      <div className="flex min-h-40 flex-wrap content-center gap-3 rounded-[12px] bg-[#FBF9F4] p-5">
        {statusItems.map((status) => (
          <StatusBadge key={status.label} {...status} />
        ))}
      </div>
    </ComponentPanel>
  );
}

function MapMarkerShowcase() {
  const markers = [
    { left: "18%", top: "26%", tone: "#137D6A", label: "12" },
    { left: "52%", top: "18%", tone: "#F2B600", label: "8" },
    { left: "68%", top: "58%", tone: "#80CACE", label: "24" },
    { left: "32%", top: "68%", tone: "#137D6A", label: "5" },
  ];

  return (
    <ComponentPanel title="Map Marker / 地圖標記" number="7">
      <div className="relative min-h-40 overflow-hidden rounded-[12px] border border-[#E5E5E5] bg-[#EDF5F0]">
        <div className="absolute inset-0 bg-[linear-gradient(32deg,transparent_0_44%,rgba(19,125,106,0.10)_44%_46%,transparent_46%_100%),linear-gradient(118deg,transparent_0_56%,rgba(128,202,206,0.25)_56%_58%,transparent_58%_100%)]" />
        <div className="absolute inset-0 opacity-50 [background-image:radial-gradient(#80CACE_1px,transparent_1px)] [background-size:18px_18px]" />
        {markers.map((marker) => (
          <div
            key={`${marker.left}-${marker.top}`}
            className="absolute flex items-center gap-1 rounded-full border-2 border-white px-2.5 py-1.5 text-xs font-bold text-white shadow-lg"
            style={{
              left: marker.left,
              top: marker.top,
              backgroundColor: marker.tone,
            }}
          >
            <MapPin className="size-3.5" aria-hidden="true" />
            {marker.label}
          </div>
        ))}
      </div>
    </ComponentPanel>
  );
}

export function CoreComponentsSection() {
  return (
    <BoardShell>
      <div className="grid w-full min-w-0 gap-3 xl:grid-cols-2">
        <GlobalNavigationShowcase />
        <SearchFilterShowcase />
        <ButtonsInputsShowcase />
        <DataCardsShowcase />
        <DataDisplayShowcase />
        <StatusBadgeShowcase />
        <MapMarkerShowcase />
      </div>
    </BoardShell>
  );
}

export function DesignSystemFoundations() {
  return (
    <section
      aria-labelledby="esg-design-system-title"
      className="font-noto text-[#212529]"
      style={
        {
          "--ds-primary": tokens.primaryGreen,
          "--ds-aqua": tokens.secondaryAqua,
        } as CSSProperties
      }
    >
      <div className="space-y-5 rounded-[24px] bg-[#FBF9F4] p-3 sm:p-4 md:p-5">
        <article className="rounded-[24px] border border-[#E5E5E5] bg-white p-3 shadow-sm md:p-4">
          <div className="mb-4 flex flex-col gap-2 px-2 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#137D6A]">
                Board 01
              </p>
              <h3
                id="esg-design-system-title"
                className="mt-2 text-2xl font-bold text-[#212529]"
              >
                Color & Typography / 色彩與字級
              </h3>
            </div>
            <p className="max-w-xl text-sm leading-7 text-[#6B7280]">
              以色彩、字級與基礎視覺規範建立一致閱讀節奏。
            </p>
          </div>
          <ColorTypographyBoard />
        </article>
      </div>
    </section>
  );
}

export function DesignSystemPage() {
  return (
    <section className="space-y-5 font-noto text-[#212529]">
      <DesignSystemFoundations />
      <div className="rounded-[24px] bg-[#FBF9F4] p-3 sm:p-4 md:p-5">
        <article className="rounded-[24px] border border-[#E5E5E5] bg-white p-3 shadow-sm md:p-4">
          <div className="mb-4 flex flex-col gap-2 px-2 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#137D6A]">
                Board 02
              </p>
              <h3 className="mt-2 text-2xl font-bold text-[#212529]">
                Core Components / 核心元件
              </h3>
            </div>
            <p className="max-w-xl text-sm leading-7 text-[#6B7280]">
              將查詢、篩選、卡片、表格與狀態整理為可延伸元件。
            </p>
          </div>
          <CoreComponentsSection />
        </article>
      </div>
    </section>
  );
}
