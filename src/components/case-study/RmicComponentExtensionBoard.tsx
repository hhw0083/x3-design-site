import type { ReactNode } from "react";
import {
  ArrowLeft,
  Check,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  CircleDot,
  Edit3,
  Eye,
  FileUp,
  GripVertical,
  Info,
  Layers,
  Lightbulb,
  Link2,
  LocateFixed,
  Map,
  MapPinned,
  MoreVertical,
  MoveHorizontal,
  Pencil,
  RefreshCw,
  Save,
  Search,
  Send,
  SplitSquareHorizontal,
  X,
  ZoomIn,
  ZoomOut,
} from "lucide-react";

const green = "#0D8A5B";
const amber = "#E89B1C";

function BoardShell({ children }: { children: ReactNode }) {
  return (
    <section
      aria-label="RMIC component extension board"
      className="min-w-0 font-noto text-[#1f2933]"
    >
      <div className="min-w-0 rounded-[28px] bg-[#FBFAF4] p-3 shadow-[0_24px_70px_rgba(31,41,51,0.055)] sm:p-4 md:p-5">
        <div className="grid min-w-0 gap-3 xl:grid-cols-12">{children}</div>
      </div>
    </section>
  );
}

function BoardPanel({
  number,
  title,
  children,
  className = "",
}: {
  number: string;
  title: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <article
      className={`min-w-0 rounded-[18px] border border-[#E7ECE9] bg-white/96 p-4 shadow-[0_14px_36px_rgba(31,41,51,0.04)] sm:p-5 ${className}`}
    >
      <div className="flex items-center gap-3">
        <span className="grid size-7 shrink-0 place-items-center rounded-md bg-[#0D8A5B] text-sm font-black text-white shadow-[0_8px_18px_rgba(13,138,91,0.22)]">
          {number}
        </span>
        <h3 className="text-xl font-black leading-tight text-[#111827]">
          {title}
        </h3>
      </div>
      <div className="mt-4">{children}</div>
    </article>
  );
}

function DemoBlock({
  title,
  children,
  className = "",
}: {
  title: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`min-w-0 rounded-xl border border-[#E9EEEA] bg-white p-4 shadow-[0_8px_22px_rgba(31,41,51,0.025)] ${className}`}
    >
      <p className="text-sm font-black text-[#111827]">{title}</p>
      <div className="mt-3">{children}</div>
    </div>
  );
}

function IconButton({
  children,
  active = false,
  muted = false,
}: {
  children: ReactNode;
  active?: boolean;
  muted?: boolean;
}) {
  return (
    <span
      className={`grid size-10 shrink-0 place-items-center border border-[#E2E8E3] text-sm shadow-sm first:rounded-l-lg last:rounded-r-lg ${
        active
          ? "bg-[#0D8A5B] text-white"
          : muted
            ? "bg-[#F7F8F5] text-[#616B76]"
            : "bg-white text-[#1f2933]"
      }`}
    >
      {children}
    </span>
  );
}

function PrimaryButton({
  children,
  tone = "primary",
}: {
  children: ReactNode;
  tone?: "primary" | "secondary" | "accent" | "neutral";
}) {
  const toneClass = {
    primary: "border-[#0D8A5B] bg-[#0D8A5B] text-white",
    secondary: "border-[#0D8A5B] bg-white text-[#0D8A5B]",
    accent: "border-[#F59E0B] bg-[#F59E0B] text-white",
    neutral: "border-[#737373] bg-[#737373] text-white",
  }[tone];

  return (
    <button
      className={`h-12 w-full rounded-md border px-5 text-sm font-black shadow-sm ${toneClass}`}
      type="button"
    >
      {children}
    </button>
  );
}

function Field({
  label,
  multiline = false,
}: {
  label: string;
  multiline?: boolean;
}) {
  return (
    <label className="block">
      <span className="text-sm font-black text-[#111827]">{label}</span>
      <span
        className={`mt-2 block rounded-md border border-[#DDE5E0] bg-white px-3 text-sm text-[#98A2AD] ${
          multiline ? "h-24 py-3" : "h-10 py-2.5"
        }`}
      >
        {multiline ? "請輸入備註內容..." : "請輸入內容"}
      </span>
    </label>
  );
}

function StepRow({
  index,
  title,
  action,
}: {
  index: number;
  title: string;
  action?: ReactNode;
}) {
  return (
    <div className="flex min-h-12 items-center justify-between gap-3 border-t border-[#E9EEEA] px-3 py-2">
      <div className="flex min-w-0 items-center gap-3">
        <span className="grid size-6 shrink-0 place-items-center rounded-full bg-[#E89B1C] text-xs font-black text-white">
          {index}
        </span>
        <span className="truncate text-sm font-semibold text-[#1f2933]">
          {title}
        </span>
      </div>
      {action}
    </div>
  );
}

function TinyMap({ split = false }: { split?: boolean }) {
  const map = (
    <div className="relative h-full min-h-[11rem] overflow-hidden rounded-lg border border-[#DDE5E0] bg-[#F3F5F3]">
      <div className="absolute inset-0 bg-[linear-gradient(135deg,transparent_0_47%,rgba(148,163,184,0.28)_47%_48%,transparent_48%_100%),linear-gradient(22deg,transparent_0_38%,rgba(13,138,91,0.22)_38%_39%,transparent_39%_100%),linear-gradient(158deg,transparent_0_58%,rgba(239,68,68,0.2)_58%_59%,transparent_59%_100%)]" />
      <div className="absolute left-8 top-6 text-[10px] font-semibold text-[#89939E]">
        7甲
      </div>
      <div className="absolute right-8 top-7 text-[10px] font-semibold text-[#89939E]">
        1R
      </div>
      <div className="absolute bottom-7 left-16 text-[10px] font-semibold text-[#89939E]">
        11巷
      </div>
      <span className="absolute left-[52%] top-[52%] grid size-7 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full border-2 border-white bg-[#0D8A5B] text-[10px] font-black text-white shadow-lg">
        4
      </span>
      <div className="absolute right-2 top-2 flex overflow-hidden rounded-md border border-[#DDE5E0] bg-white shadow-sm">
        {[ArrowLeft, Save, Layers, Pencil, Info].map((Icon, index) => (
          <span
            key={index}
            className={`grid size-7 place-items-center border-r border-[#DDE5E0] last:border-r-0 ${
              index < 2 ? "bg-[#0D8A5B] text-white" : "text-[#1f2933]"
            }`}
          >
            <Icon className="size-3.5" aria-hidden="true" />
          </span>
        ))}
      </div>
      <div className="absolute bottom-3 right-3 overflow-hidden rounded border border-[#DDE5E0] bg-white">
        <span className="grid size-7 place-items-center border-b border-[#DDE5E0]">
          <ZoomIn className="size-3.5" aria-hidden="true" />
        </span>
        <span className="grid size-7 place-items-center">
          <ZoomOut className="size-3.5" aria-hidden="true" />
        </span>
      </div>
    </div>
  );

  if (!split) {
    return map;
  }

  return (
    <div className="grid gap-2 sm:grid-cols-2">
      {map}
      <div className="relative">
        {map}
        <span className="absolute left-1/2 top-1/2 grid size-8 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full bg-white text-[#616B76] shadow">
          <ChevronRight className="size-4" aria-hidden="true" />
        </span>
      </div>
    </div>
  );
}

function NavigationPanel() {
  return (
    <BoardPanel
      number="1"
      title="Navigation / 導覽元件"
      className="xl:col-span-7"
    >
      <div className="space-y-4">
        <DemoBlock title="Top Header / 頂部導覽列">
          <div className="flex flex-wrap items-center gap-4 rounded-lg border border-[#E9EEEA] bg-white px-4 py-3 shadow-sm">
            <span className="grid size-9 place-items-center rounded-full bg-gradient-to-br from-[#F8C837] to-[#E95532] text-[9px] font-black text-white">
              RMIC
            </span>
            <strong className="mr-auto min-w-52 text-base text-[#165D9C]">
              桃園市道路資訊中心系統
            </strong>
            {["GIS圖台", "3D GIS圖台", "首頁", "網站導覽", "案件/施工"].map(
              (item) => (
                <span key={item} className="text-xs font-bold text-[#111827]">
                  {item}
                </span>
              ),
            )}
            <span className="text-xs font-bold text-[#111827]">19:56:19</span>
            <span className="text-xs font-bold text-[#111827]">會員名稱</span>
            <button
              className="rounded-md bg-[#0D8A5B] px-4 py-2 text-xs font-black text-white"
              type="button"
            >
              新增案件
            </button>
          </div>
        </DemoBlock>

        <DemoBlock title="Info Bar / 資訊列（麵包屑）">
          <div className="flex flex-wrap items-center gap-3 rounded-lg border border-[#E9EEEA] bg-white px-4 py-3 text-sm font-bold text-[#111827] shadow-sm">
            <span>施工審查</span>
            <span>/</span>
            <span>圖資更新製圖</span>
            <span>/</span>
            <span>AC11275297</span>
            <span>/</span>
            <span className="text-[#0D8A5B]">擷取路段及設施更新範圍</span>
            <button
              className="ml-auto rounded-md border border-[#DDE5E0] bg-white px-5 py-2 text-xs font-bold"
              type="button"
            >
              收合
            </button>
            <span className="rounded-md bg-[#F8FAF8] px-3 py-2 text-xs text-[#616B76]">
              地圖共用工具列：底圖　圖層　定位　地圖
            </span>
          </div>
        </DemoBlock>

        <div className="grid gap-4 lg:grid-cols-[1.2fr_0.9fr]">
          <DemoBlock title="Tabs / 分頁導覽">
            <div className="grid grid-cols-4 overflow-hidden rounded-lg border border-[#E9EEEA] bg-[#F5F5F3] text-center text-sm font-black text-[#111827]">
              {["圖資更新", "衝突交會分析", "測量點位", "GML上傳"].map(
                (tab, index) => (
                  <span
                    key={tab}
                    className={`px-3 py-4 ${
                      index === 0
                        ? "border-b-2 border-[#E89B1C] bg-white"
                        : "bg-[#EEEEEC]"
                    }`}
                  >
                    {tab}
                  </span>
                ),
              )}
            </div>
          </DemoBlock>
          <DemoBlock title="Utility Navigation / 頁面輔助操作">
            <div className="flex flex-wrap overflow-hidden rounded-lg border border-[#E9EEEA] bg-white shadow-sm">
              {[ChevronLeft, RefreshCw, Eye, Search].map((Icon, index) => (
                <span
                  key={index}
                  className="inline-flex h-11 items-center gap-2 border-r border-[#E9EEEA] px-3 text-xs font-bold last:border-r-0"
                >
                  <Icon className="size-4 text-[#0D8A5B]" aria-hidden="true" />
                  {["", "重新整理", "閱讀案件資訊", "顯示案件資訊"][index]}
                </span>
              ))}
            </div>
          </DemoBlock>
        </div>
      </div>
    </BoardPanel>
  );
}

function MapToolsPanel() {
  return (
    <BoardPanel number="2" title="Map Tools / 地圖工具" className="xl:col-span-5">
      <div className="space-y-4">
        <DemoBlock title="編輯工具列 (Toolbar)">
          <div className="flex max-w-full overflow-x-auto rounded-lg border border-[#DDE5E0] shadow-sm">
            {[ArrowLeft, Save, Layers, Pencil, Edit3, Lightbulb, Info].map(
              (Icon, index) => (
                <IconButton key={index} active={index <= 1}>
                  <Icon className="size-5" aria-hidden="true" />
                </IconButton>
              ),
            )}
            <span className="grid size-10 shrink-0 place-items-center bg-[#48B02A] text-white">
              <ChevronDown className="size-5" aria-hidden="true" />
            </span>
          </div>
        </DemoBlock>

        <div className="grid gap-4 sm:grid-cols-2">
          <DemoBlock title="檢視切換 (View Toggle)">
            <div className="flex w-fit overflow-hidden rounded-md border border-[#A8D0C2]">
              <IconButton active>
                <Map className="size-5" aria-hidden="true" />
              </IconButton>
              <IconButton>
                <SplitSquareHorizontal className="size-5" aria-hidden="true" />
              </IconButton>
            </div>
          </DemoBlock>
          <DemoBlock title="地圖模式 (Map Mode)">
            <div className="flex flex-wrap gap-3">
              <button
                className="inline-flex items-center gap-2 rounded-md border border-[#DDE5E0] px-4 py-3 text-sm font-bold"
                type="button"
              >
                <Map className="size-4 text-[#0D8A5B]" aria-hidden="true" />
                地圖模式
              </button>
              <button
                className="inline-flex items-center gap-2 rounded-md border border-[#DDE5E0] px-4 py-3 text-sm font-bold"
                type="button"
              >
                <MapPinned
                  className="size-4 text-[#0D8A5B]"
                  aria-hidden="true"
                />
                影像模式
              </button>
            </div>
          </DemoBlock>
          <DemoBlock title="縮放控制 (Zoom Control)">
            <div className="w-fit overflow-hidden rounded border border-[#DDE5E0] bg-white">
              {[ZoomIn, ZoomOut, LocateFixed].map((Icon, index) => (
                <span
                  key={index}
                  className="grid size-9 place-items-center border-b border-[#DDE5E0] last:border-b-0"
                >
                  <Icon className="size-4" aria-hidden="true" />
                </span>
              ))}
            </div>
          </DemoBlock>
          <DemoBlock title="分割/對照地圖工具 (Split Map Tools)">
            <div className="flex max-w-full overflow-x-auto rounded-md border border-[#DDE5E0]">
              {[SplitSquareHorizontal, MoveHorizontal, Link2, LocateFixed].map(
                (Icon, index) => (
                  <IconButton key={index}>
                    <Icon className="size-5" aria-hidden="true" />
                  </IconButton>
                ),
              )}
              <span className="grid h-10 shrink-0 place-items-center border-l border-[#DDE5E0] px-3 text-sm font-black">
                1:1
              </span>
            </div>
          </DemoBlock>
        </div>
      </div>
    </BoardPanel>
  );
}

function FormsPanel() {
  return (
    <BoardPanel
      number="3"
      title="Forms & Upload / 表單與上傳"
      className="xl:col-span-7"
    >
      <div className="grid gap-4 lg:grid-cols-[1.1fr_0.9fr]">
        <DemoBlock title="可收合區塊 (Accordion)">
          <div className="overflow-hidden rounded-lg border border-[#E9EEEA] bg-white">
            <div className="flex items-center justify-between bg-gradient-to-r from-[#DDF2CD] to-[#FFF9CA] px-4 py-4 text-sm font-black text-[#1f2933]">
              圖資更新資訊
              <ChevronDown className="size-5 text-[#0D8A5B]" aria-hidden="true" />
            </div>
            <StepRow index={1} title="無須圖資更新" action={<span className="text-xs">否　◎　是</span>} />
            <StepRow
              index={2}
              title="擷取範圍及設施更新範圍"
              action={
                <button
                  className="rounded-md border border-[#DDE5E0] px-3 py-1.5 text-xs font-bold"
                  type="button"
                >
                  點選地圖繪製
                </button>
              }
            />
            <StepRow
              index={3}
              title="上傳竣工平面圖"
              action={
                <button
                  className="rounded-md border border-[#0D8A5B] px-3 py-1.5 text-xs font-bold text-[#0D8A5B]"
                  type="button"
                >
                  選擇檔案
                </button>
              }
            />
            <StepRow
              index={4}
              title="上傳相關附件："
              action={
                <button
                  className="rounded-md border border-[#0D8A5B] px-3 py-1.5 text-xs font-bold text-[#0D8A5B]"
                  type="button"
                >
                  選擇檔案
                </button>
              }
            />
            <StepRow index={5} title="測量方式" action={<span className="text-xs">○ GPS測量　○ 交會法</span>} />
          </div>
        </DemoBlock>

        <DemoBlock title="表單欄位範例 (Fields)">
          <div className="space-y-4">
            <Field label="輸入框 (Input)" />
            <Field label="多行文字 (Textarea)" multiline />
            <label className="block">
              <span className="text-sm font-black text-[#111827]">
                檔案上傳 (File Upload)
              </span>
              <span className="mt-2 flex min-h-16 items-center justify-between gap-3 rounded-md border border-dashed border-[#C9D5CF] bg-white px-4 text-sm font-black text-[#1f2933]">
                <span className="inline-flex items-center gap-2">
                  <FileUp className="size-5 text-[#0D8A5B]" aria-hidden="true" />
                  將檔案拖曳至此，或
                </span>
                <button
                  className="rounded-md bg-[#0D8A5B] px-4 py-2 text-xs font-black text-white"
                  type="button"
                >
                  選擇檔案
                </button>
              </span>
              <span className="mt-2 block text-xs font-semibold text-[#616B76]">
                檔案格式：.jpg、.png，容量小於10MB。
              </span>
            </label>
          </div>
        </DemoBlock>
      </div>
    </BoardPanel>
  );
}

function ButtonsPanel() {
  return (
    <BoardPanel number="4" title="Buttons / 按鈕" className="xl:col-span-5">
      <div className="space-y-5">
        <div className="grid gap-4 sm:grid-cols-2">
          <DemoBlock title="主要按鈕 (Primary)">
            <PrimaryButton>儲存</PrimaryButton>
          </DemoBlock>
          <DemoBlock title="次要按鈕 (Secondary)">
            <PrimaryButton tone="secondary">回圖資更新列表</PrimaryButton>
          </DemoBlock>
          <DemoBlock title="強調按鈕 (Accent)">
            <PrimaryButton tone="accent">編輯</PrimaryButton>
          </DemoBlock>
          <DemoBlock title="中立按鈕 (Neutral)">
            <PrimaryButton tone="neutral">刪除</PrimaryButton>
          </DemoBlock>
        </div>
        <DemoBlock title="小按鈕 / 圖示按鈕 (Small & Icon Buttons)">
          <div className="flex flex-wrap items-center gap-4">
            <button
              className="h-11 rounded-md border border-[#0D8A5B] px-5 text-sm font-black text-[#0D8A5B]"
              type="button"
            >
              位址檢索
            </button>
            {[Search, Pencil, MapPinned, MoreVertical].map((Icon, index) => (
              <button
                key={index}
                className="grid size-11 place-items-center rounded-md border border-[#E2E8E3] bg-white shadow-sm"
                type="button"
              >
                <Icon
                  className={`size-5 ${index === 2 ? "text-[#F5C02E]" : "text-[#111827]"}`}
                  aria-hidden="true"
                />
              </button>
            ))}
          </div>
        </DemoBlock>
      </div>
    </BoardPanel>
  );
}

function ListEditingPanel() {
  return (
    <BoardPanel
      number="5"
      title="List & Editing Cards / 清單與編輯元件"
      className="xl:col-span-6"
    >
      <div className="grid gap-4 lg:grid-cols-[0.8fr_1.2fr]">
        <DemoBlock title="群組清單 (Group List)">
          <div className="space-y-3">
            {["群組-1 (2)", "群組-2 (1)"].map((item, index) => (
              <div
                key={item}
                className={`flex h-14 items-center justify-between rounded-md border border-[#E2E8E3] bg-white px-4 text-sm font-bold shadow-sm ${
                  index === 0 ? "border-l-4 border-l-[#0D8A5B]" : ""
                }`}
              >
                <span className="inline-flex items-center gap-2">
                  <GripVertical className="size-4 text-[#B7C0C7]" />
                  {item}
                </span>
                {index === 0 ? (
                  <ChevronDown className="size-5 text-[#0D8A5B]" />
                ) : (
                  <ChevronRight className="size-5 text-[#616B76]" />
                )}
              </div>
            ))}
            <button
              className="ml-auto flex items-center gap-2 text-sm font-black text-[#0D8A5B]"
              type="button"
            >
              <span className="grid size-5 place-items-center rounded-full bg-[#0D8A5B] text-white">
                +
              </span>
              新增群組
            </button>
          </div>
        </DemoBlock>
        <div className="space-y-4">
          <DemoBlock title="編輯列項目 (Editable Row)">
            <div className="flex flex-wrap items-center gap-3 rounded-md bg-[#EFF9F4] px-4 py-3">
              <GripVertical className="size-5 text-[#B7C0C7]" />
              <span className="mr-auto text-sm font-bold">電力管線-人手孔</span>
              <span className="rounded-full border border-[#0D8A5B] px-3 py-1 text-xs font-black text-[#0D8A5B]">
                新增
              </span>
              <X className="size-5 text-[#E74C3C]" />
              <Edit3 className="size-5 text-[#0D8A5B]" />
              <MapPinned className="size-5 text-[#F5B400]" />
              <Send className="size-5 text-[#3B82F6]" />
            </div>
          </DemoBlock>
          <DemoBlock title="底部貼性操作列 (Sticky Action Bar)">
            <div className="flex flex-wrap justify-end gap-4 rounded-xl bg-[#EEF3F2] p-5">
              <button
                className="rounded-md border border-[#0D8A5B] bg-white px-8 py-3 text-sm font-black text-[#0D8A5B]"
                type="button"
              >
                回圖資更新列表
              </button>
              <button
                className="rounded-md bg-[#0D8A5B] px-12 py-3 text-sm font-black text-white"
                type="button"
              >
                儲存
              </button>
            </div>
          </DemoBlock>
        </div>
      </div>
    </BoardPanel>
  );
}

function StatusPanel() {
  return (
    <BoardPanel
      number="6"
      title="Status & Selection / 狀態與選擇"
      className="xl:col-span-6"
    >
      <div className="grid gap-4 sm:grid-cols-3">
        <DemoBlock title="接取方塊 (Checkbox)" className="sm:col-span-1">
          <div className="flex flex-wrap gap-3 text-xs font-bold">
            {["中控箱", "資訊箱", "資訊線", "資訊箱"].map((item, index) => (
              <span key={`${item}-${index}`} className="inline-flex items-center gap-1.5">
                <span
                  className={`grid size-4 place-items-center rounded border ${
                    index === 0
                      ? "border-[#0D8A5B] bg-[#0D8A5B] text-white"
                      : "border-[#CDD6D0] bg-white"
                  }`}
                >
                  {index === 0 ? <Check className="size-3" /> : null}
                </span>
                {item}
              </span>
            ))}
          </div>
        </DemoBlock>
        <DemoBlock title="單選按鈕 (Radio)">
          <div className="space-y-3 text-sm font-bold">
            <span className="flex items-center gap-2">
              <CircleDot className="size-5 text-[#0D8A5B]" /> GPS測量
            </span>
            <span className="flex items-center gap-2 text-[#616B76]">
              <span className="size-5 rounded-full border border-[#CDD6D0]" />
              交會法
            </span>
          </div>
        </DemoBlock>
        <DemoBlock title="切換選擇 (Toggle-like)">
          <div className="grid grid-cols-2 overflow-hidden rounded-md border border-[#A8D0C2] text-center text-sm font-black">
            <span className="py-3">否</span>
            <span className="bg-[#EFF9F4] py-3 text-[#0D8A5B]">是</span>
          </div>
        </DemoBlock>
      </div>
      <DemoBlock title="狀態標籤 (Status Chips)" className="mt-4">
        <div className="flex flex-wrap gap-3">
          {[
            ["已完成", "bg-[#0D8A5B]/10 text-[#0D8A5B]", Check],
            ["審核中", "bg-[#0D8A5B]/8 text-[#0D8A5B]", RefreshCw],
            ["待處理", "bg-[#F5B400]/12 text-[#A66D00]", LocateFixed],
            ["草稿", "bg-white text-[#616B76]", Info],
            ["資訊", "bg-[#3B82F6]/10 text-[#2C6CD6]", Info],
          ].map(([label, className, Icon]) => {
            const StatusIcon = Icon as typeof Check;

            return (
              <span
                key={label as string}
                className={`inline-flex items-center gap-2 rounded-md border border-[#E2E8E3] px-5 py-2 text-sm font-black shadow-sm ${className}`}
              >
                <StatusIcon className="size-4" aria-hidden="true" />
                {label as string}
              </span>
            );
          })}
        </div>
        <div className="mt-4 flex flex-wrap gap-3">
          {["案件編號：AC10430756", "圖層：人手孔", "狀態：更新中", "版本：v1.0"].map(
            (item) => (
              <span
                key={item}
                className="rounded-md border border-[#E2E8E3] bg-white px-5 py-2 text-sm font-bold text-[#616B76]"
              >
                {item}
              </span>
            ),
          )}
        </div>
      </DemoBlock>
    </BoardPanel>
  );
}

function LayoutPanel() {
  return (
    <BoardPanel number="7" title="Layout Pattern / 版面樣式" className="xl:col-span-12">
      <div className="grid gap-5 lg:grid-cols-2">
        <DemoBlock title="雙欄版面：編輯表單 + 地圖 (Two-Pane Layout)">
          <div className="grid gap-3 md:grid-cols-[0.9fr_1.2fr]">
            <div className="overflow-hidden rounded-lg border border-[#E2E8E3] bg-white">
              <div className="flex items-center justify-between bg-gradient-to-r from-[#DDF2CD] to-[#FFF9CA] px-4 py-3 text-sm font-black">
                圖資更新資訊
                <ChevronDown className="size-4 text-[#0D8A5B]" />
              </div>
              <StepRow index={1} title="無須圖資更新" action={<span className="text-xs">否 ◎ 是</span>} />
              <StepRow
                index={2}
                title="擷取範圍及設施更新範圍"
                action={<span className="rounded border border-[#DDE5E0] px-2 py-1 text-[10px]">點選地圖繪製</span>}
              />
              <StepRow index={3} title="上傳竣工平面圖" action={<span className="rounded border border-[#0D8A5B] px-2 py-1 text-[10px] text-[#0D8A5B]">選擇檔案</span>} />
              <StepRow index={4} title="上傳相關附件：" action={<span className="rounded border border-[#0D8A5B] px-2 py-1 text-[10px] text-[#0D8A5B]">選擇檔案</span>} />
            </div>
            <TinyMap />
          </div>
        </DemoBlock>

        <DemoBlock title="分割對照版面 (Split Map Comparison Layout)">
          <TinyMap split />
        </DemoBlock>
      </div>
    </BoardPanel>
  );
}

export function RmicComponentExtensionBoard() {
  return (
    <BoardShell>
      <NavigationPanel />
      <MapToolsPanel />
      <FormsPanel />
      <ButtonsPanel />
      <ListEditingPanel />
      <StatusPanel />
      <LayoutPanel />
    </BoardShell>
  );
}
