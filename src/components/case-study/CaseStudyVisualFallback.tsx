import {
  Bell,
  Check,
  ChevronRight,
  ClipboardList,
  Cloud,
  Cpu,
  Database,
  FileText,
  Filter,
  Gift,
  HardDrive,
  Heart,
  Layers,
  Map,
  MapPin,
  Minus,
  Monitor,
  Moon,
  MoreHorizontal,
  MousePointerClick,
  Network,
  Package,
  PanelRight,
  Plus,
  Route,
  Search,
  Server,
  Settings,
  ShoppingCart,
  Smartphone,
  Star,
  Sun,
  Tablet,
  TicketPercent,
} from "lucide-react";

export type CaseStudyFallbackKind =
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

type CaseStudyVisualFallbackProps = {
  kind: CaseStudyFallbackKind;
  className?: string;
};

const metrics = [
  { label: "執行中", value: "24", icon: Server },
  { label: "CPU 使用率", value: "68%", icon: Cpu },
  { label: "儲存空間", value: "1.8 TB", icon: HardDrive },
  { label: "可用網路", value: "12", icon: Network },
];

function WindowBar({ dark = false }: { dark?: boolean }) {
  return (
    <div
      className={`flex h-9 items-center gap-1.5 border-b px-4 ${
        dark
          ? "border-white/10 bg-white/[0.03]"
          : "border-slate-200 bg-white"
      }`}
    >
      <span className="size-2 rounded-full bg-rose-400" />
      <span className="size-2 rounded-full bg-amber-400" />
      <span className="size-2 rounded-full bg-emerald-400" />
      <span
        className={`ml-3 h-2 w-24 rounded-full ${
          dark ? "bg-white/10" : "bg-slate-100"
        }`}
      />
    </div>
  );
}

function DashboardPreview({
  dark = false,
  detailed = false,
}: {
  dark?: boolean;
  detailed?: boolean;
}) {
  const surface = dark ? "border-white/10 bg-white/[0.06]" : "border-slate-200 bg-white";
  const muted = dark ? "text-slate-400" : "text-slate-500";
  const strong = dark ? "text-white" : "text-slate-950";

  return (
    <div
      className={`flex h-full min-h-[20rem] ${
        dark ? "bg-[#07131f]" : "bg-[#f3f7f6]"
      }`}
    >
      <aside
        className={`hidden w-32 shrink-0 border-r p-3 sm:block ${
          dark ? "border-white/10 bg-[#091925]" : "border-slate-200 bg-[#0b5f55]"
        }`}
      >
        <div className="flex items-center gap-2 text-white">
          <span className="grid size-7 place-items-center rounded-lg bg-white/15 text-[9px] font-bold">
            TCB
          </span>
          <span className="text-[10px] font-semibold">Cloud Ops</span>
        </div>
        <div className="mt-6 space-y-2">
          {["總覽", "虛擬機", "資源管理", "公告", "系統設定"].map(
            (item, index) => (
              <div
                key={item}
                className={`rounded-md px-2 py-2 text-[9px] ${
                  index === 0
                    ? "bg-emerald-400/20 font-semibold text-emerald-200"
                    : "text-white/50"
                }`}
              >
                {item}
              </div>
            ),
          )}
        </div>
      </aside>

      <div className="min-w-0 flex-1 p-3 sm:p-4">
        <div className="flex items-start justify-between">
          <div>
            <p className={`text-[9px] ${muted}`}>Dashboard</p>
            <h3 className={`mt-1 text-sm font-semibold ${strong}`}>
              系統資源總覽
            </h3>
          </div>
          <div className="flex gap-2">
            <span className={`grid size-7 place-items-center rounded-lg border ${surface}`}>
              <Bell className={`size-3.5 ${muted}`} />
            </span>
            <span className="grid size-7 place-items-center rounded-lg bg-[#0f7b68] text-white">
              <Plus className="size-3.5" />
            </span>
          </div>
        </div>

        <div className="mt-4 grid grid-cols-2 gap-2 lg:grid-cols-4">
          {metrics.map(({ label, value, icon: Icon }) => (
            <div key={label} className={`rounded-lg border p-2.5 ${surface}`}>
              <div className="flex items-center justify-between">
                <Icon className="size-3.5 text-[#12a389]" />
                <span className="text-[8px] text-emerald-500">+4.2%</span>
              </div>
              <p className={`mt-3 text-sm font-semibold ${strong}`}>{value}</p>
              <p className={`mt-1 text-[8px] ${muted}`}>{label}</p>
            </div>
          ))}
        </div>

        <div className="mt-3 grid gap-3 lg:grid-cols-[1.45fr_0.75fr]">
          <div className={`rounded-lg border p-3 ${surface}`}>
            <div className="flex items-center justify-between">
              <p className={`text-[10px] font-semibold ${strong}`}>資源使用趨勢</p>
              <span className={`text-[8px] ${muted}`}>過去 7 天</span>
            </div>
            <div className="mt-4 flex h-24 items-end gap-1.5">
              {[42, 56, 48, 72, 61, 84, 68, 78, 58, 88, 76, 92].map(
                (height, index) => (
                  <span
                    key={`${height}-${index}`}
                    className="flex-1 rounded-t bg-gradient-to-t from-[#0f7b68] to-[#5dd6c2]"
                    style={{ height: `${height}%`, opacity: 0.55 + index * 0.025 }}
                  />
                ),
              )}
            </div>
          </div>
          <div className={`rounded-lg border p-3 ${surface}`}>
            <p className={`text-[10px] font-semibold ${strong}`}>最新公告</p>
            <div className="mt-3 space-y-2">
              {["例行維護通知", "資源配置更新", "安全性提醒"].map(
                (item, index) => (
                  <div
                    key={item}
                    className={`rounded-md border p-2 ${
                      dark
                        ? "border-white/10 bg-black/10"
                        : "border-slate-100 bg-slate-50"
                    }`}
                  >
                    <div className="flex items-center gap-2">
                      <span
                        className={`size-1.5 rounded-full ${
                          index === 0 ? "bg-amber-400" : "bg-[#12a389]"
                        }`}
                      />
                      <p className={`truncate text-[8px] font-medium ${strong}`}>
                        {item}
                      </p>
                    </div>
                  </div>
                ),
              )}
            </div>
          </div>
        </div>

        {detailed ? (
          <div className={`mt-3 rounded-lg border ${surface}`}>
            <div className={`grid grid-cols-4 gap-2 border-b p-2 text-[8px] ${dark ? "border-white/10" : "border-slate-100"} ${muted}`}>
              <span>VM 名稱</span>
              <span>狀態</span>
              <span>CPU</span>
              <span>記憶體</span>
            </div>
            {["tcb-core-01", "finance-api-02"].map((name) => (
              <div key={name} className={`grid grid-cols-4 gap-2 p-2 text-[8px] ${strong}`}>
                <span>{name}</span>
                <span className="text-emerald-500">執行中</span>
                <span>42%</span>
                <span>6.2 GB</span>
              </div>
            ))}
          </div>
        ) : null}
      </div>
    </div>
  );
}

function VmListPreview() {
  return (
    <div className="h-full bg-[#f5f8f7] p-4">
      <div className="flex items-center justify-between gap-3">
        <div>
          <p className="text-[9px] text-slate-500">Virtual Machines</p>
          <h3 className="mt-1 text-sm font-semibold text-slate-950">虛擬機列表</h3>
        </div>
        <button className="rounded-lg bg-[#0f7b68] px-3 py-2 text-[9px] font-semibold text-white">
          建立虛擬機
        </button>
      </div>
      <div className="mt-4 flex items-center gap-2">
        <div className="flex h-8 flex-1 items-center gap-2 rounded-lg border border-slate-200 bg-white px-3">
          <Search className="size-3 text-slate-400" />
          <span className="text-[8px] text-slate-400">搜尋名稱或 IP</span>
        </div>
        <span className="rounded-lg border border-slate-200 bg-white px-3 py-2 text-[8px] text-slate-500">
          全部狀態
        </span>
      </div>
      <div className="mt-3 overflow-hidden rounded-lg border border-slate-200 bg-white">
        <div className="grid grid-cols-[1.25fr_0.7fr_0.8fr_0.8fr_0.35fr] gap-2 bg-slate-50 p-3 text-[8px] font-semibold text-slate-500">
          <span>虛擬機</span><span>狀態</span><span>CPU</span><span>記憶體</span><span />
        </div>
        {[
          ["tcb-production-01", "執行中", "42%", "6.2 GB"],
          ["finance-api-02", "執行中", "28%", "4.8 GB"],
          ["backup-node-03", "已停止", "0%", "0 GB"],
          ["staging-app-04", "建置中", "16%", "2.1 GB"],
        ].map(([name, status, cpu, memory]) => (
          <div key={name} className="grid grid-cols-[1.25fr_0.7fr_0.8fr_0.8fr_0.35fr] items-center gap-2 border-t border-slate-100 p-3 text-[8px] text-slate-600">
            <span className="truncate font-semibold text-slate-900">{name}</span>
            <span className={status === "執行中" ? "text-emerald-600" : status === "建置中" ? "text-amber-600" : "text-slate-400"}>{status}</span>
            <span>{cpu}</span><span>{memory}</span><MoreHorizontal className="size-3.5" />
          </div>
        ))}
      </div>
    </div>
  );
}

function VmDetailPreview() {
  return (
    <div className="h-full bg-[#f5f8f7] p-4">
      <div className="flex items-start justify-between">
        <div>
          <p className="text-[9px] text-slate-500">Virtual Machine / Detail</p>
          <h3 className="mt-1 text-sm font-semibold text-slate-950">tcb-production-01</h3>
        </div>
        <span className="rounded-full bg-emerald-50 px-2.5 py-1 text-[8px] font-semibold text-emerald-700">執行中</span>
      </div>
      <div className="mt-4 grid grid-cols-3 gap-2">
        {[
          ["CPU", "42%", Cpu],
          ["Memory", "6.2 / 8 GB", Database],
          ["Storage", "82 / 120 GB", HardDrive],
        ].map(([label, value, Icon]) => {
          const MetricIcon = Icon as typeof Cpu;
          return (
            <div key={label as string} className="rounded-lg border border-slate-200 bg-white p-3">
              <MetricIcon className="size-3.5 text-[#0f7b68]" />
              <p className="mt-3 text-[10px] font-semibold text-slate-900">{value as string}</p>
              <p className="mt-1 text-[8px] text-slate-400">{label as string}</p>
            </div>
          );
        })}
      </div>
      <div className="mt-3 grid gap-3 md:grid-cols-[1fr_0.72fr]">
        <div className="rounded-lg border border-slate-200 bg-white p-3">
          <p className="text-[9px] font-semibold text-slate-900">資源監控</p>
          <div className="mt-4 flex h-24 items-end gap-2">
            {[35, 52, 44, 68, 54, 78, 62, 71].map((height) => (
              <span key={height} className="flex-1 rounded-t bg-[#0f7b68]/70" style={{ height: `${height}%` }} />
            ))}
          </div>
        </div>
        <div className="rounded-lg border border-slate-200 bg-white p-3">
          <p className="text-[9px] font-semibold text-slate-900">設定資訊</p>
          <div className="mt-3 space-y-2">
            {["Ubuntu 22.04 LTS", "10.22.14.08", "TCB-Private-Network", "每日 02:00 備份"].map((item) => (
              <div key={item} className="rounded-md bg-slate-50 px-2 py-2 text-[8px] text-slate-500">{item}</div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function DeployFlowPreview() {
  return (
    <div className="h-full bg-[#f6f9f8] p-4">
      <div className="flex items-center justify-between">
        <h3 className="text-sm font-semibold text-slate-950">建立虛擬機</h3>
        <span className="text-[9px] text-slate-400">Step 2 of 4</span>
      </div>
      <div className="mt-4 grid grid-cols-4 gap-2">
        {["基本設定", "資源配置", "網路設定", "確認送出"].map((step, index) => (
          <div key={step}>
            <div className={`h-1 rounded-full ${index <= 1 ? "bg-[#0f7b68]" : "bg-slate-200"}`} />
            <p className={`mt-2 text-[8px] ${index === 1 ? "font-semibold text-[#0f7b68]" : "text-slate-400"}`}>{step}</p>
          </div>
        ))}
      </div>
      <div className="mt-5 grid gap-3 md:grid-cols-[1fr_0.72fr]">
        <div className="rounded-lg border border-slate-200 bg-white p-4">
          <p className="text-[10px] font-semibold text-slate-900">資源配置</p>
          <div className="mt-4 grid grid-cols-2 gap-3">
            {["CPU 核心", "記憶體", "系統磁碟", "映像檔"].map((label, index) => (
              <label key={label} className="text-[8px] text-slate-500">
                {label}
                <div className="mt-1.5 flex h-9 items-center justify-between rounded-lg border border-slate-200 px-3 text-[9px] text-slate-700">
                  <span>{["4 vCPU", "8 GB", "120 GB", "Ubuntu 22.04"][index]}</span>
                  <ChevronRight className="size-3 text-slate-400" />
                </div>
              </label>
            ))}
          </div>
        </div>
        <div className="rounded-lg border border-emerald-100 bg-emerald-50/50 p-4">
          <p className="text-[10px] font-semibold text-slate-900">配置摘要</p>
          <div className="mt-4 space-y-3">
            {["4 vCPU", "8 GB RAM", "120 GB SSD", "Private Network"].map((item) => (
              <div key={item} className="flex items-center gap-2 text-[9px] text-slate-600">
                <Check className="size-3.5 text-[#0f7b68]" />{item}
              </div>
            ))}
          </div>
          <button className="mt-5 w-full rounded-lg bg-[#0f7b68] py-2.5 text-[9px] font-semibold text-white">下一步</button>
        </div>
      </div>
    </div>
  );
}

function AnnouncementPreview() {
  return (
    <div className="h-full bg-[#f6f9f8] p-4">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-[9px] text-slate-500">Announcement Center</p>
          <h3 className="mt-1 text-sm font-semibold text-slate-950">系統公告</h3>
        </div>
        <span className="rounded-lg border border-slate-200 bg-white px-3 py-2 text-[8px] text-slate-500">全部已讀</span>
      </div>
      <div className="mt-4 space-y-2.5">
        {[
          ["重要", "核心網路例行維護通知", "2026.06.08", "bg-rose-50 text-rose-600"],
          ["更新", "虛擬機映像檔版本更新", "2026.06.03", "bg-amber-50 text-amber-700"],
          ["一般", "五月份資源使用報表已產生", "2026.06.01", "bg-emerald-50 text-emerald-700"],
        ].map(([priority, title, date, style], index) => (
          <article key={title} className="rounded-lg border border-slate-200 bg-white p-3 shadow-sm">
            <div className="flex items-start gap-3">
              <span className={`rounded-full px-2 py-1 text-[8px] font-semibold ${style}`}>{priority}</span>
              <div className="min-w-0 flex-1">
                <div className="flex items-center justify-between gap-3">
                  <p className="truncate text-[10px] font-semibold text-slate-900">{title}</p>
                  {index < 2 ? <span className="size-1.5 rounded-full bg-[#0f7b68]" /> : null}
                </div>
                <p className="mt-2 text-[8px] text-slate-400">{date} · 系統管理中心</p>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}

function ThemeSystemPreview() {
  return (
    <div className="grid h-full grid-cols-2">
      <div className="min-w-0 border-r border-slate-200 bg-[#f4f7f6] p-3">
        <div className="flex items-center justify-between text-slate-900">
          <span className="text-[9px] font-semibold">Light Theme</span>
          <Sun className="size-3.5 text-amber-500" />
        </div>
        <div className="mt-3 space-y-2">
          <div className="rounded-lg border border-slate-200 bg-white p-2">
            <div className="grid grid-cols-3 gap-1.5">
              {[58, 72, 46].map((height) => <span key={height} className="h-12 rounded bg-emerald-50" />)}
            </div>
          </div>
          <div className="rounded-lg border border-slate-200 bg-white p-2">
            <div className="h-2 w-16 rounded bg-slate-200" />
            <div className="mt-3 h-16 rounded bg-slate-50" />
          </div>
        </div>
      </div>
      <div className="min-w-0 bg-[#07131f] p-3">
        <div className="flex items-center justify-between text-white">
          <span className="text-[9px] font-semibold">Dark Theme</span>
          <Moon className="size-3.5 text-cyan-300" />
        </div>
        <div className="mt-3 space-y-2">
          <div className="rounded-lg border border-white/10 bg-white/[0.06] p-2">
            <div className="grid grid-cols-3 gap-1.5">
              {[58, 72, 46].map((height) => <span key={height} className="h-12 rounded bg-emerald-300/10" />)}
            </div>
          </div>
          <div className="rounded-lg border border-white/10 bg-white/[0.06] p-2">
            <div className="h-2 w-16 rounded bg-white/15" />
            <div className="mt-3 h-16 rounded bg-black/15" />
          </div>
        </div>
      </div>
    </div>
  );
}

function DesignSystemPreview() {
  const colors = ["#0B5F55", "#0F7B68", "#44B9A2", "#07131F", "#F2B94B", "#E45858"];
  return (
    <div className="h-full bg-[#f7f9f8] p-4">
      <div className="grid gap-3 md:grid-cols-[0.8fr_1.2fr]">
        <div className="rounded-lg border border-slate-200 bg-white p-4">
          <p className="text-[9px] font-semibold uppercase tracking-[0.14em] text-[#0f7b68]">Brand & Status Colors</p>
          <div className="mt-4 grid grid-cols-3 gap-2">
            {colors.map((color) => (
              <div key={color}>
                <div className="aspect-square rounded-lg" style={{ backgroundColor: color }} />
                <p className="mt-1 text-[7px] text-slate-400">{color}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="rounded-lg border border-slate-200 bg-white p-4">
          <p className="text-[9px] font-semibold uppercase tracking-[0.14em] text-[#0f7b68]">Typography & Spacing</p>
          <p className="mt-4 text-2xl font-semibold text-slate-950">Aa</p>
          <div className="mt-3 space-y-2">
            {[
              ["Page title", "32 / 40"],
              ["Section title", "24 / 32"],
              ["Body", "16 / 26"],
              ["Caption", "12 / 18"],
            ].map(([name, value]) => (
              <div key={name} className="flex justify-between border-b border-slate-100 pb-2 text-[8px]">
                <span className="text-slate-700">{name}</span><span className="text-slate-400">{value}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="mt-3 grid grid-cols-4 gap-2">
        {["Hover", "Focus", "Disabled", "Error"].map((state, index) => (
          <div key={state} className={`rounded-lg border p-3 text-center text-[8px] ${index === 3 ? "border-rose-200 bg-rose-50 text-rose-600" : "border-slate-200 bg-white text-slate-500"}`}>{state}</div>
        ))}
      </div>
    </div>
  );
}

function ComponentsPreview() {
  return (
    <div className="h-full bg-[#f6f9f8] p-4">
      <div className="grid gap-3 md:grid-cols-3">
        <div className="rounded-lg border border-slate-200 bg-white p-3">
          <p className="text-[9px] font-semibold text-slate-900">Buttons & Inputs</p>
          <button className="mt-3 w-full rounded-lg bg-[#0f7b68] py-2 text-[8px] font-semibold text-white">Primary Button</button>
          <button className="mt-2 w-full rounded-lg border border-[#0f7b68] py-2 text-[8px] font-semibold text-[#0f7b68]">Secondary</button>
          <div className="mt-2 rounded-lg border border-slate-200 px-3 py-2 text-[8px] text-slate-400">Input field</div>
          <div className="mt-2 flex items-center justify-between rounded-lg border border-slate-200 px-3 py-2 text-[8px] text-slate-500">Select option <ChevronRight className="size-3" /></div>
        </div>
        <div className="rounded-lg border border-slate-200 bg-white p-3">
          <p className="text-[9px] font-semibold text-slate-900">Status & Cards</p>
          <div className="mt-3 flex flex-wrap gap-1.5">
            {["執行中", "建置中", "已停止", "錯誤"].map((status, index) => (
              <span key={status} className={`rounded-full px-2 py-1 text-[7px] font-semibold ${["bg-emerald-50 text-emerald-700", "bg-amber-50 text-amber-700", "bg-slate-100 text-slate-500", "bg-rose-50 text-rose-600"][index]}`}>{status}</span>
            ))}
          </div>
          <div className="mt-3 rounded-lg border border-slate-200 bg-slate-50 p-3">
            <Server className="size-4 text-[#0f7b68]" />
            <p className="mt-3 text-sm font-semibold text-slate-900">24</p>
            <p className="text-[8px] text-slate-400">Active VMs</p>
          </div>
          <div className="mt-2 flex items-center justify-between rounded-lg bg-slate-950 p-3 text-white">
            <span className="text-[8px]">Theme</span>
            <span className="flex rounded-full bg-white/10 p-1"><Sun className="size-3" /><Moon className="ml-2 size-3 text-cyan-300" /></span>
          </div>
        </div>
        <div className="rounded-lg border border-slate-200 bg-white p-3">
          <p className="text-[9px] font-semibold text-slate-900">Modal & Stepper</p>
          <div className="mt-3 rounded-lg border border-slate-200 p-3 shadow-sm">
            <p className="text-[9px] font-semibold text-slate-900">確認重新啟動？</p>
            <p className="mt-2 text-[8px] leading-4 text-slate-400">重新啟動期間服務將暫時中斷。</p>
            <div className="mt-3 flex justify-end gap-2">
              <span className="rounded-md border border-slate-200 px-2 py-1 text-[7px]">取消</span>
              <span className="rounded-md bg-[#0f7b68] px-2 py-1 text-[7px] text-white">確認</span>
            </div>
          </div>
          <div className="mt-4 flex items-center">
            {[1, 2, 3].map((step, index) => (
              <div key={step} className="flex flex-1 items-center last:flex-none">
                <span className={`grid size-5 place-items-center rounded-full text-[7px] ${index < 2 ? "bg-[#0f7b68] text-white" : "bg-slate-100 text-slate-400"}`}>{step}</span>
                {index < 2 ? <span className={`h-px flex-1 ${index === 0 ? "bg-[#0f7b68]" : "bg-slate-200"}`} /> : null}
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="mt-3 overflow-hidden rounded-lg border border-slate-200 bg-white">
        <div className="grid grid-cols-4 bg-slate-50 p-2 text-[7px] font-semibold text-slate-500"><span>VM</span><span>Status</span><span>Resource</span><span>Action</span></div>
        <div className="grid grid-cols-4 p-2 text-[7px] text-slate-600"><span>tcb-core-01</span><span className="text-emerald-600">Running</span><span>4 CPU / 8 GB</span><span>Manage</span></div>
      </div>
    </div>
  );
}

function RmicNavigation() {
  return (
    <aside className="hidden w-32 shrink-0 border-r border-slate-200 bg-[#174f66] p-3 text-white sm:block">
      <div className="flex items-center gap-2">
        <span className="grid size-7 place-items-center rounded-md bg-white/15 text-[8px] font-bold">
          RMIC
        </span>
        <span className="text-[9px] font-semibold">道管資訊中心</span>
      </div>
      <div className="mt-6 space-y-1.5">
        {["平台總覽", "案件管理", "地圖圖資", "申請審核", "統計報表"].map(
          (item, index) => (
            <div
              key={item}
              className={`rounded-md px-2 py-2 text-[8px] ${
                index === 0
                  ? "bg-white/15 font-semibold text-white"
                  : "text-white/55"
              }`}
            >
              {item}
            </div>
          ),
        )}
      </div>
    </aside>
  );
}

function RmicMapCanvas({ compact = false }: { compact?: boolean }) {
  const pins = compact
    ? [["58%", "34%"], ["76%", "64%"], ["38%", "72%"]]
    : [
        ["24%", "30%"],
        ["48%", "22%"],
        ["68%", "38%"],
        ["36%", "62%"],
        ["78%", "70%"],
      ];

  return (
    <div className="relative h-full min-h-40 overflow-hidden bg-[#e8eff0]">
      <div className="absolute inset-0 bg-[linear-gradient(22deg,transparent_0_42%,rgba(255,255,255,0.9)_42%_45%,transparent_45%_100%),linear-gradient(102deg,transparent_0_54%,rgba(255,255,255,0.86)_54%_57%,transparent_57%_100%),linear-gradient(158deg,transparent_0_68%,rgba(125,160,170,0.35)_68%_70%,transparent_70%_100%)]" />
      <div className="absolute left-[8%] top-[14%] h-[72%] w-[38%] rotate-12 rounded-[48%] border-2 border-dashed border-[#91aeb5]/50" />
      {pins.map(([left, top], index) => (
        <span
          key={`${left}-${top}`}
          className={`absolute grid place-items-center rounded-full border-2 border-white bg-[#147d84] text-white shadow-md ${
            compact ? "size-6" : "size-7"
          }`}
          style={{ left, top }}
        >
          <MapPin className={compact ? "size-3" : "size-3.5"} />
          {index === 0 ? (
            <span className="absolute -right-1 -top-1 size-2 rounded-full bg-amber-400 ring-2 ring-white" />
          ) : null}
        </span>
      ))}
      <div className="absolute bottom-3 right-3 grid gap-1">
        {["+", "−"].map((item) => (
          <span
            key={item}
            className="grid size-7 place-items-center rounded-md border border-slate-200 bg-white text-[11px] text-slate-600 shadow-sm"
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}

function RmicOverviewPreview({ final = false }: { final?: boolean }) {
  const overviewMetrics = [
    ["今日新增", "18", FileText],
    ["審核中", "42", ClipboardList],
    ["施工中", "27", Route],
    ["待處理", "11", Bell],
  ];

  return (
    <div className="flex h-full min-h-[20rem] bg-[#f4f7f8]">
      <RmicNavigation />
      <div className="min-w-0 flex-1 p-3 sm:p-4">
        <div className="flex items-start justify-between">
          <div>
            <p className="text-[8px] text-slate-500">Road Management Center</p>
            <h3 className="mt-1 text-sm font-semibold text-slate-950">
              道路案件管理總覽
            </h3>
          </div>
          <div className="flex gap-2">
            <span className="grid size-7 place-items-center rounded-lg border border-slate-200 bg-white">
              <Search className="size-3 text-slate-500" />
            </span>
            <span className="rounded-lg bg-[#147d84] px-3 py-2 text-[8px] font-semibold text-white">
              新增案件
            </span>
          </div>
        </div>
        <div className="mt-4 grid grid-cols-2 gap-2 lg:grid-cols-4">
          {overviewMetrics.map(([label, value, Icon]) => {
            const MetricIcon = Icon as typeof FileText;
            return (
              <div
                key={label as string}
                className="rounded-lg border border-slate-200 bg-white p-2.5 shadow-sm"
              >
                <MetricIcon className="size-3.5 text-[#147d84]" />
                <p className="mt-2 text-sm font-semibold text-slate-950">
                  {value as string}
                </p>
                <p className="mt-0.5 text-[8px] text-slate-400">
                  {label as string}
                </p>
              </div>
            );
          })}
        </div>
        <div className="mt-3 grid gap-3 lg:grid-cols-[1.35fr_0.65fr]">
          <div className="overflow-hidden rounded-lg border border-slate-200 bg-white shadow-sm">
            <div className="flex items-center justify-between border-b border-slate-100 px-3 py-2">
              <p className="text-[9px] font-semibold text-slate-900">案件地圖</p>
              <span className="text-[8px] text-[#147d84]">查看完整圖台</span>
            </div>
            <div className="h-36">
              <RmicMapCanvas compact />
            </div>
          </div>
          <div className="rounded-lg border border-slate-200 bg-white p-3 shadow-sm">
            <p className="text-[9px] font-semibold text-slate-900">待辦任務</p>
            <div className="mt-3 space-y-2">
              {["審核道路挖掘申請", "確認施工展延資料", "回覆會勘紀錄"].map(
                (item, index) => (
                  <div
                    key={item}
                    className="rounded-md border border-slate-100 bg-slate-50 p-2"
                  >
                    <div className="flex items-center gap-2">
                      <span
                        className={`size-1.5 rounded-full ${
                          index === 0 ? "bg-amber-500" : "bg-[#49a6a3]"
                        }`}
                      />
                      <p className="truncate text-[8px] text-slate-600">{item}</p>
                    </div>
                  </div>
                ),
              )}
            </div>
          </div>
        </div>
        {final ? (
          <div className="mt-3 overflow-hidden rounded-lg border border-slate-200 bg-white">
            <div className="grid grid-cols-4 bg-slate-50 p-2 text-[7px] font-semibold text-slate-500">
              <span>案件編號</span><span>申請類型</span><span>狀態</span><span>承辦單位</span>
            </div>
            <div className="grid grid-cols-4 p-2 text-[7px] text-slate-600">
              <span>RM-2026-0182</span><span>道路挖掘</span><span className="text-amber-600">審核中</span><span>養工處</span>
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
}

function RmicMapPreview({ final = false }: { final?: boolean }) {
  return (
    <div className="grid h-full min-h-[20rem] bg-[#f4f7f8] md:grid-cols-[12rem_1fr]">
      <aside className="border-r border-slate-200 bg-white p-3">
        <div className="flex items-center gap-2">
          <Map className="size-4 text-[#147d84]" />
          <p className="text-[9px] font-semibold text-slate-900">道路圖資查詢</p>
        </div>
        <div className="mt-4 flex h-8 items-center gap-2 rounded-lg border border-slate-200 px-2">
          <Search className="size-3 text-slate-400" />
          <span className="text-[7px] text-slate-400">搜尋道路或案件</span>
        </div>
        <div className="mt-3 space-y-2">
          {["案件狀態", "施工類型", "承辦單位", "申請日期"].map((item) => (
            <div
              key={item}
              className="flex items-center justify-between rounded-md border border-slate-200 bg-slate-50 px-2 py-2 text-[8px] text-slate-500"
            >
              {item}<ChevronRight className="size-3" />
            </div>
          ))}
        </div>
        <div className="mt-4 border-t border-slate-100 pt-3">
          <p className="text-[8px] font-semibold text-slate-700">圖層控制</p>
          {["道路中心線", "施工案件", "管線圖資"].map((layer, index) => (
            <div key={layer} className="mt-2 flex items-center gap-2 text-[8px] text-slate-500">
              <span className={`size-3 rounded border ${index < 2 ? "border-[#147d84] bg-[#147d84]" : "border-slate-300 bg-white"}`}>
                {index < 2 ? <Check className="size-3 text-white" /> : null}
              </span>
              {layer}
            </div>
          ))}
        </div>
      </aside>
      <div className="relative min-h-64">
        <RmicMapCanvas />
        <div className="absolute left-3 top-3 flex gap-1.5">
          <span className="rounded-md border border-slate-200 bg-white px-2 py-1.5 text-[8px] text-slate-600 shadow-sm">
            <Layers className="mr-1 inline size-3" />圖層
          </span>
          <span className="rounded-md border border-slate-200 bg-white px-2 py-1.5 text-[8px] text-slate-600 shadow-sm">
            <Filter className="mr-1 inline size-3" />篩選
          </span>
        </div>
        {final ? (
          <div className="absolute bottom-3 left-3 right-12 rounded-lg border border-slate-200 bg-white p-3 shadow-lg">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-[9px] font-semibold text-slate-900">RM-2026-0182 道路挖掘申請</p>
                <p className="mt-1 text-[7px] text-slate-400">中正路二段 · 審核中 · 養工處</p>
              </div>
              <span className="rounded-full bg-amber-50 px-2 py-1 text-[7px] font-semibold text-amber-700">審核中</span>
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
}

function RmicCaseListPreview() {
  const rows = [
    ["RM-2026-0182", "道路挖掘", "審核中", "養工處"],
    ["RM-2026-0176", "施工展延", "待補件", "工務局"],
    ["RM-2026-0168", "竣工申報", "已核准", "道管中心"],
    ["RM-2026-0159", "會勘申請", "處理中", "交通局"],
  ];

  return (
    <div className="h-full bg-[#f4f7f8] p-4">
      <div className="flex items-start justify-between">
        <div>
          <p className="text-[8px] text-slate-500">Case Management</p>
          <h3 className="mt-1 text-sm font-semibold text-slate-950">道路案件列表</h3>
        </div>
        <span className="rounded-lg bg-[#147d84] px-3 py-2 text-[8px] font-semibold text-white">新增申請</span>
      </div>
      <div className="mt-4 flex gap-2">
        <div className="flex h-8 flex-1 items-center gap-2 rounded-lg border border-slate-200 bg-white px-3">
          <Search className="size-3 text-slate-400" />
          <span className="text-[8px] text-slate-400">搜尋案件編號、道路或申請人</span>
        </div>
        <span className="grid size-8 place-items-center rounded-lg border border-slate-200 bg-white">
          <Filter className="size-3.5 text-slate-500" />
        </span>
      </div>
      <div className="mt-3 overflow-hidden rounded-lg border border-slate-200 bg-white shadow-sm">
        <div className="grid grid-cols-[1.2fr_0.85fr_0.7fr_0.85fr_0.3fr] gap-2 bg-slate-50 p-3 text-[7px] font-semibold text-slate-500">
          <span>案件編號</span><span>申請類型</span><span>狀態</span><span>承辦單位</span><span />
        </div>
        {rows.map(([id, type, status, unit]) => (
          <div key={id} className="grid grid-cols-[1.2fr_0.85fr_0.7fr_0.85fr_0.3fr] items-center gap-2 border-t border-slate-100 p-3 text-[8px] text-slate-600">
            <span className="font-semibold text-slate-900">{id}</span>
            <span>{type}</span>
            <span className={status === "已核准" ? "text-emerald-600" : status === "待補件" ? "text-rose-600" : "text-amber-600"}>{status}</span>
            <span>{unit}</span>
            <MoreHorizontal className="size-3.5" />
          </div>
        ))}
      </div>
      <div className="mt-3 flex justify-end gap-1">
        {["1", "2", "3", "›"].map((page, index) => (
          <span key={page} className={`grid size-6 place-items-center rounded-md border text-[8px] ${index === 0 ? "border-[#147d84] bg-[#147d84] text-white" : "border-slate-200 bg-white text-slate-500"}`}>{page}</span>
        ))}
      </div>
    </div>
  );
}

function RmicFeaturePreview() {
  return (
    <div className="h-full bg-[#f4f7f8] p-4">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-[8px] text-slate-500">Feature Extension</p>
          <h3 className="mt-1 text-sm font-semibold text-slate-950">施工展延申請</h3>
        </div>
        <span className="rounded-full bg-sky-50 px-2.5 py-1 text-[8px] font-semibold text-sky-700">草稿</span>
      </div>
      <div className="mt-4 grid gap-3 md:grid-cols-[1fr_0.72fr]">
        <div className="rounded-lg border border-slate-200 bg-white p-4 shadow-sm">
          <div className="flex border-b border-slate-100 text-[8px]">
            {["基本資料", "展延原因", "附件資料"].map((tab, index) => (
              <span key={tab} className={`px-3 pb-2 ${index === 0 ? "border-b-2 border-[#147d84] font-semibold text-[#147d84]" : "text-slate-400"}`}>{tab}</span>
            ))}
          </div>
          <div className="mt-4 grid grid-cols-2 gap-3">
            {["案件編號", "原施工期限", "申請展延至", "承辦單位"].map((label, index) => (
              <label key={label} className="text-[8px] text-slate-500">
                {label}
                <div className="mt-1.5 flex h-9 items-center justify-between rounded-lg border border-slate-200 px-3 text-[8px] text-slate-700">
                  <span>{["RM-2026-0182", "2026/06/20", "2026/07/05", "養工處"][index]}</span>
                  {index > 0 ? <ChevronRight className="size-3 text-slate-400" /> : null}
                </div>
              </label>
            ))}
          </div>
          <label className="mt-3 block text-[8px] text-slate-500">
            展延原因
            <div className="mt-1.5 h-16 rounded-lg border border-slate-200 p-3 text-[8px] text-slate-400">請輸入申請原因與施工影響說明</div>
          </label>
        </div>
        <div className="rounded-lg border border-slate-200 bg-white p-4 shadow-sm">
          <p className="text-[9px] font-semibold text-slate-900">案件狀態</p>
          <div className="mt-4 space-y-3">
            {["原案件已核准", "展延資料填寫", "單位審核", "結果通知"].map((step, index) => (
              <div key={step} className="flex items-center gap-3">
                <span className={`grid size-6 place-items-center rounded-full border text-[8px] ${index < 2 ? "border-[#147d84] bg-[#147d84] text-white" : "border-slate-200 bg-white text-slate-400"}`}>
                  {index === 0 ? <Check className="size-3" /> : index + 1}
                </span>
                <span className={`text-[8px] ${index === 1 ? "font-semibold text-[#147d84]" : "text-slate-500"}`}>{step}</span>
              </div>
            ))}
          </div>
          <button className="mt-6 w-full rounded-lg bg-[#147d84] py-2.5 text-[8px] font-semibold text-white">儲存並送出</button>
        </div>
      </div>
    </div>
  );
}

function RmicWireframePreview() {
  return (
    <div className="h-full bg-[#edf1f2] p-4 text-[#718087]">
      <div className="rounded-lg border-2 border-[#aab5b9] bg-[#f8fafb] p-3">
        <div className="flex items-center justify-between border-b-2 border-[#c4cdd0] pb-3">
          <div className="h-3 w-28 rounded-sm bg-[#bdc7ca]" />
          <div className="flex gap-2">
            <div className="h-7 w-16 rounded border-2 border-[#aab5b9]" />
            <div className="h-7 w-20 rounded bg-[#9aa8ad]" />
          </div>
        </div>
        <div className="mt-3 grid gap-3 md:grid-cols-[0.34fr_1fr]">
          <div className="rounded border-2 border-[#bdc7ca] p-3">
            <div className="h-3 w-20 bg-[#c5ced1]" />
            <div className="mt-4 space-y-2">
              {[1, 2, 3, 4].map((item) => <div key={item} className="h-8 rounded border-2 border-[#ccd4d6]" />)}
            </div>
          </div>
          <div className="space-y-3">
            <div className="grid grid-cols-3 gap-2">
              {[1, 2, 3].map((item) => <div key={item} className="h-16 rounded border-2 border-[#bdc7ca]" />)}
            </div>
            <div className="rounded border-2 border-[#bdc7ca] p-3">
              <div className="grid grid-cols-2 gap-3">
                {["欄位 A", "欄位 B", "欄位 C", "欄位 D"].map((label) => (
                  <div key={label}>
                    <div className="h-2 w-12 bg-[#c5ced1]" />
                    <div className="mt-2 h-8 rounded border-2 border-[#c5ced1]" />
                  </div>
                ))}
              </div>
              <div className="mt-3 h-16 rounded border-2 border-[#c5ced1]" />
            </div>
          </div>
        </div>
      </div>
      <div className="mt-3 flex items-center justify-center gap-2 text-[8px] font-semibold uppercase tracking-[0.14em] text-[#7d8b90]">
        <PanelRight className="size-3.5" /> Low-fidelity wireframe
      </div>
    </div>
  );
}

function RmicPrototypePreview() {
  const screens = [
    ["案件列表", "搜尋並選擇案件"],
    ["新增功能", "填寫展延資料"],
    ["確認彈窗", "檢查送出內容"],
  ];

  return (
    <div className="h-full bg-[#eef3f4] p-4">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-[8px] uppercase tracking-[0.14em] text-[#147d84]">Prototype Validation</p>
          <h3 className="mt-1 text-sm font-semibold text-slate-950">新增功能操作路徑</h3>
        </div>
        <MousePointerClick className="size-5 text-[#147d84]" />
      </div>
      <div className="mt-5 grid gap-3 md:grid-cols-3">
        {screens.map(([title, caption], index) => (
          <div key={title} className="relative">
            <div className="overflow-hidden rounded-lg border border-slate-300 bg-white shadow-sm">
              <div className="flex h-6 items-center gap-1 border-b border-slate-200 px-2">
                <span className="size-1.5 rounded-full bg-slate-300" />
                <span className="size-1.5 rounded-full bg-slate-300" />
              </div>
              <div className="p-2">
                <div className="h-2 w-16 rounded bg-slate-200" />
                {index === 0 ? (
                  <div className="mt-3 space-y-2">
                    {[1, 2, 3].map((item) => <div key={item} className="h-8 rounded border border-slate-200 bg-slate-50" />)}
                  </div>
                ) : index === 1 ? (
                  <div className="mt-3 grid grid-cols-2 gap-2">
                    {[1, 2, 3, 4].map((item) => <div key={item} className="h-8 rounded border border-slate-200" />)}
                  </div>
                ) : (
                  <div className="mt-4 rounded border border-slate-200 p-3 shadow-md">
                    <div className="mx-auto size-7 rounded-full bg-teal-50" />
                    <div className="mx-auto mt-3 h-2 w-20 rounded bg-slate-200" />
                    <div className="mt-4 flex justify-center gap-2">
                      <div className="h-6 w-12 rounded border border-slate-200" />
                      <div className="h-6 w-12 rounded bg-[#147d84]" />
                    </div>
                  </div>
                )}
              </div>
            </div>
            <p className="mt-2 text-[8px] font-semibold text-slate-700">{title}</p>
            <p className="mt-0.5 text-[7px] text-slate-400">{caption}</p>
            {index < screens.length - 1 ? (
              <ChevronRight className="absolute -right-3 top-1/2 hidden size-4 -translate-y-1/2 text-[#147d84] md:block" />
            ) : null}
            <span className={`absolute grid size-5 place-items-center rounded-full bg-[#147d84] text-[7px] font-bold text-white shadow-md ${index === 0 ? "right-3 top-16" : index === 1 ? "bottom-16 right-6" : "bottom-14 left-1/2"}`}>
              {index + 1}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

function RmicComponentsPreview() {
  return (
    <div className="h-full bg-[#f4f7f8] p-4">
      <div className="grid gap-3 md:grid-cols-3">
        <div className="rounded-lg border border-slate-200 bg-white p-3">
          <p className="text-[9px] font-semibold text-slate-900">Form & Actions</p>
          <div className="mt-3 rounded-lg border border-slate-200 px-3 py-2 text-[8px] text-slate-400">搜尋案件</div>
          <div className="mt-2 flex items-center justify-between rounded-lg border border-slate-200 px-3 py-2 text-[8px] text-slate-500">申請類型 <ChevronRight className="size-3" /></div>
          <div className="mt-3 flex gap-2">
            <span className="rounded-lg bg-[#147d84] px-3 py-2 text-[8px] font-semibold text-white">確認</span>
            <span className="rounded-lg border border-slate-200 px-3 py-2 text-[8px] text-slate-500">取消</span>
          </div>
        </div>
        <div className="rounded-lg border border-slate-200 bg-white p-3">
          <p className="text-[9px] font-semibold text-slate-900">Status & Map Marker</p>
          <div className="mt-3 flex flex-wrap gap-1.5">
            {[
              ["審核中", "bg-amber-50 text-amber-700"],
              ["已核准", "bg-emerald-50 text-emerald-700"],
              ["待補件", "bg-rose-50 text-rose-600"],
            ].map(([label, style]) => <span key={label} className={`rounded-full px-2 py-1 text-[7px] font-semibold ${style}`}>{label}</span>)}
          </div>
          <div className="mt-4 flex items-center gap-3">
            {[1, 2, 3].map((item) => (
              <span key={item} className="grid size-8 place-items-center rounded-full border-2 border-white bg-[#147d84] text-white shadow-md"><MapPin className="size-3.5" /></span>
            ))}
          </div>
          <div className="mt-4 flex border-b border-slate-200 text-[8px]">
            <span className="border-b-2 border-[#147d84] px-2 pb-2 font-semibold text-[#147d84]">基本資料</span>
            <span className="px-2 pb-2 text-slate-400">附件</span>
            <span className="px-2 pb-2 text-slate-400">歷程</span>
          </div>
        </div>
        <div className="rounded-lg border border-slate-200 bg-white p-3">
          <p className="text-[9px] font-semibold text-slate-900">Modal & Pagination</p>
          <div className="mt-3 rounded-lg border border-slate-200 p-3 shadow-sm">
            <p className="text-[9px] font-semibold text-slate-900">確認送出申請？</p>
            <p className="mt-2 text-[7px] leading-4 text-slate-400">送出後將進入承辦單位審核流程。</p>
            <div className="mt-3 flex justify-end gap-2">
              <span className="rounded-md border border-slate-200 px-2 py-1 text-[7px]">返回</span>
              <span className="rounded-md bg-[#147d84] px-2 py-1 text-[7px] text-white">送出</span>
            </div>
          </div>
          <div className="mt-4 flex justify-center gap-1">
            {["1", "2", "3", "›"].map((item, index) => <span key={item} className={`grid size-6 place-items-center rounded border text-[7px] ${index === 0 ? "border-[#147d84] bg-[#147d84] text-white" : "border-slate-200 text-slate-500"}`}>{item}</span>)}
          </div>
        </div>
      </div>
      <div className="mt-3 overflow-hidden rounded-lg border border-slate-200 bg-white">
        <div className="grid grid-cols-5 bg-slate-50 p-2 text-[7px] font-semibold text-slate-500"><span>案件</span><span>類型</span><span>狀態</span><span>單位</span><span>操作</span></div>
        <div className="grid grid-cols-5 p-2 text-[7px] text-slate-600"><span>RM-0182</span><span>道路挖掘</span><span className="text-amber-600">審核中</span><span>養工處</span><span>查看</span></div>
      </div>
    </div>
  );
}

const juleProducts = [
  {
    name: "週末分享零食箱",
    price: "$699",
    tone: "from-[#ffd86f] to-[#ffb85c]",
    tag: "限時團購",
  },
  {
    name: "人氣水果氣泡飲",
    price: "$520",
    tone: "from-[#a8e6d5] to-[#58c9bc]",
    tag: "熱銷",
  },
  {
    name: "午茶甜點組合",
    price: "$880",
    tone: "from-[#e2d0ff] to-[#a98ae8]",
    tag: "新品",
  },
  {
    name: "歡樂家庭派對包",
    price: "$1,280",
    tone: "from-[#ffc6ba] to-[#f27662]",
    tag: "成團優惠",
  },
];

function JuleHeader({ compact = false }: { compact?: boolean }) {
  return (
    <header className="flex items-center justify-between border-b border-[#f4dfd9] bg-white px-3 py-2.5 sm:px-4">
      <div className="flex items-center gap-2">
        <span className="grid size-7 place-items-center rounded-lg bg-[#f06449] text-[9px] font-black text-white">
          聚
        </span>
        <span className="text-[10px] font-black text-[#442f39]">聚樂電商</span>
      </div>
      {!compact ? (
        <nav className="hidden items-center gap-4 text-[8px] font-semibold text-[#806b73] sm:flex">
          <span>團購活動</span>
          <span>熱門商品</span>
          <span>品牌故事</span>
        </nav>
      ) : null}
      <div className="flex items-center gap-2">
        <span className="hidden rounded-full bg-[#fff3cf] px-2.5 py-1 text-[7px] font-bold text-[#a86d00] sm:inline">
          點數 1,280
        </span>
        <span className="relative grid size-7 place-items-center rounded-lg bg-[#fff1ed] text-[#f06449]">
          <ShoppingCart className="size-3.5" />
          <span className="absolute -right-1 -top-1 grid size-3.5 place-items-center rounded-full bg-[#7257d9] text-[6px] font-bold text-white">
            2
          </span>
        </span>
      </div>
    </header>
  );
}

function JuleProductCard({
  product,
  compact = false,
}: {
  product: (typeof juleProducts)[number];
  compact?: boolean;
}) {
  return (
    <article className="min-w-0 overflow-hidden rounded-lg border border-[#f2dfda] bg-white shadow-[0_8px_24px_rgba(100,55,45,0.08)]">
      <div
        className={`relative bg-gradient-to-br ${product.tone} ${
          compact ? "h-16" : "h-20 sm:h-24"
        }`}
      >
        <span className="absolute left-2 top-2 rounded-full bg-white/90 px-2 py-1 text-[6px] font-bold text-[#d84c36]">
          {product.tag}
        </span>
        <Package className="absolute bottom-2 right-2 size-7 text-white/80" />
      </div>
      <div className={compact ? "p-2" : "p-2.5"}>
        <p className="truncate text-[8px] font-bold text-[#442f39]">
          {product.name}
        </p>
        <div className="mt-2 flex items-center justify-between">
          <span className="text-[9px] font-black text-[#f06449]">
            {product.price}
          </span>
          <Heart className="size-3 text-[#bba9ae]" />
        </div>
      </div>
    </article>
  );
}

function JuleHomepagePreview({ final = false }: { final?: boolean }) {
  return (
    <div className="h-full bg-[#fffaf5]">
      <JuleHeader />
      <div className="p-3 sm:p-4">
        <section className="relative overflow-hidden rounded-lg bg-[#f06449] px-4 py-5 text-white sm:px-6">
          <div className="relative z-10 max-w-[58%]">
            <span className="rounded-full bg-white/20 px-2.5 py-1 text-[7px] font-bold">
              本週歡樂團
            </span>
            <h3 className="mt-3 text-lg font-black leading-tight sm:text-xl">
              一起買，更划算
            </h3>
            <p className="mt-2 text-[8px] leading-4 text-white/80">
              精選人氣商品，邀朋友一起成團享優惠。
            </p>
            <button className="mt-3 rounded-full bg-[#ffcf52] px-3 py-2 text-[8px] font-black text-[#633d00]">
              立即逛團購
            </button>
          </div>
          <div className="absolute -right-5 -top-9 size-36 rounded-full bg-[#ffcf52]/85" />
          <div className="absolute right-5 top-8 grid size-20 rotate-6 place-items-center rounded-lg bg-white/90 text-[#f06449] shadow-lg">
            <Gift className="size-9" />
          </div>
          <div className="absolute bottom-2 right-28 size-8 rounded-full bg-[#77d5c8]" />
        </section>
        <div className="mt-3 grid grid-cols-3 gap-2">
          {[
            ["倒數優惠", "02 : 18 : 42", TicketPercent],
            ["目前成團", "286 組", Gift],
            ["會員回饋", "最高 8%", Star],
          ].map(([label, value, Icon]) => {
            const ItemIcon = Icon as typeof Gift;
            return (
              <div
                key={label as string}
                className="rounded-lg border border-[#f2dfda] bg-white p-2.5"
              >
                <ItemIcon className="size-3.5 text-[#f06449]" />
                <p className="mt-2 text-[9px] font-black text-[#442f39]">
                  {value as string}
                </p>
                <p className="mt-0.5 text-[7px] text-[#9b858c]">
                  {label as string}
                </p>
              </div>
            );
          })}
        </div>
        <div className="mt-3 flex items-center justify-between">
          <p className="text-[10px] font-black text-[#442f39]">熱門團購</p>
          <span className="text-[7px] font-bold text-[#f06449]">查看全部</span>
        </div>
        <div className="mt-2 grid grid-cols-2 gap-2 sm:grid-cols-4">
          {juleProducts.map((product) => (
            <JuleProductCard key={product.name} product={product} compact />
          ))}
        </div>
        {final ? (
          <div className="mt-3 flex items-center justify-between rounded-lg bg-[#7257d9] px-3 py-2.5 text-white">
            <div>
              <p className="text-[8px] font-bold">本月會員專屬回饋</p>
              <p className="mt-0.5 text-[7px] text-white/70">
                點數折抵再享免運
              </p>
            </div>
            <span className="rounded-full bg-white px-2.5 py-1 text-[7px] font-bold text-[#7257d9]">
              領取優惠
            </span>
          </div>
        ) : null}
      </div>
    </div>
  );
}

function JuleVisualDirectionPreview() {
  const colors = ["#F06449", "#FFBE3D", "#7257D9", "#77D5C8", "#FFF8F0"];

  return (
    <div className="h-full bg-[#fffaf6] p-4">
      <div className="grid h-full gap-3 md:grid-cols-[0.8fr_1.2fr]">
        <div className="rounded-lg border border-[#f0dfda] bg-white p-4">
          <p className="text-[8px] font-black uppercase tracking-[0.14em] text-[#f06449]">
            Joyful Palette
          </p>
          <div className="mt-4 grid grid-cols-5 gap-2">
            {colors.map((color) => (
              <div key={color}>
                <div
                  className="aspect-square rounded-lg border border-black/5"
                  style={{ backgroundColor: color }}
                />
                <p className="mt-1 text-[6px] text-[#9b858c]">{color}</p>
              </div>
            ))}
          </div>
          <div className="mt-5 border-t border-[#f2e5e1] pt-4">
            <p className="text-[8px] font-black text-[#442f39]">品牌字級</p>
            <p className="mt-2 text-2xl font-black text-[#442f39]">歡樂開團</p>
            <p className="mt-1 text-[9px] font-bold text-[#806b73]">
              商品好選，優惠好懂
            </p>
            <p className="mt-1 text-[7px] text-[#aa969c]">
              清楚的價格與活動資訊層級
            </p>
          </div>
        </div>
        <div className="grid gap-3">
          <div className="rounded-lg border border-[#f0dfda] bg-white p-4">
            <p className="text-[8px] font-black text-[#442f39]">活動標籤與 CTA</p>
            <div className="mt-3 flex flex-wrap gap-2">
              {[
                ["限時團購", "bg-[#fff0ec] text-[#d84c36]"],
                ["會員限定", "bg-[#eee9ff] text-[#7257d9]"],
                ["滿額免運", "bg-[#e5f8f4] text-[#278a7d]"],
                ["新品", "bg-[#fff5cf] text-[#9a6a00]"],
              ].map(([label, style]) => (
                <span
                  key={label}
                  className={`rounded-full px-2.5 py-1.5 text-[7px] font-bold ${style}`}
                >
                  {label}
                </span>
              ))}
            </div>
            <div className="mt-4 flex gap-2">
              <span className="rounded-full bg-[#f06449] px-4 py-2 text-[8px] font-black text-white">
                立即購買
              </span>
              <span className="rounded-full border border-[#f06449] px-4 py-2 text-[8px] font-black text-[#f06449]">
                加入購物車
              </span>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-3">
            <div className="rounded-lg bg-[#ffcf52] p-4 text-[#5b3c00]">
              <Gift className="size-5" />
              <p className="mt-3 text-[10px] font-black">歡樂成團</p>
              <p className="mt-1 text-[7px]">圓潤、明亮、具行動感</p>
            </div>
            <div className="rounded-lg bg-[#7257d9] p-4 text-white">
              <TicketPercent className="size-5" />
              <p className="mt-3 text-[10px] font-black">優惠辨識</p>
              <p className="mt-1 text-[7px] text-white/70">點數與折價券狀態清楚</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function JuleProductListPreview() {
  return (
    <div className="h-full bg-[#fffaf6]">
      <JuleHeader compact />
      <div className="grid gap-3 p-3 sm:grid-cols-[8rem_1fr] sm:p-4">
        <aside className="hidden rounded-lg border border-[#f0dfda] bg-white p-3 sm:block">
          <p className="text-[8px] font-black text-[#442f39]">篩選商品</p>
          {["商品分類", "價格區間", "活動狀態", "配送方式"].map(
            (label, index) => (
              <div
                key={label}
                className="mt-3 border-b border-[#f3e8e4] pb-3 text-[7px] text-[#806b73]"
              >
                <div className="flex items-center justify-between">
                  <span>{label}</span>
                  <Plus className="size-3" />
                </div>
                {index === 0 ? (
                  <div className="mt-2 space-y-1.5 text-[#a18c93]">
                    <p>零食飲品</p>
                    <p>居家生活</p>
                    <p>美食禮盒</p>
                  </div>
                ) : null}
              </div>
            ),
          )}
        </aside>
        <div className="min-w-0">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-[7px] text-[#9b858c]">Group Buying</p>
              <h3 className="mt-1 text-sm font-black text-[#442f39]">熱門團購商品</h3>
            </div>
            <span className="rounded-lg border border-[#f0dfda] bg-white px-3 py-2 text-[7px] text-[#806b73]">
              熱門排序
            </span>
          </div>
          <div className="mt-3 grid grid-cols-2 gap-2 lg:grid-cols-3">
            {juleProducts.slice(0, 3).map((product) => (
              <JuleProductCard key={product.name} product={product} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function JuleProductDetailPreview() {
  return (
    <div className="h-full bg-[#fffaf6]">
      <JuleHeader compact />
      <div className="grid gap-4 p-4 md:grid-cols-[1fr_0.9fr]">
        <div className="relative min-h-52 overflow-hidden rounded-lg bg-gradient-to-br from-[#ffd86f] via-[#ffc7a9] to-[#f27662]">
          <span className="absolute left-3 top-3 rounded-full bg-white px-2.5 py-1 text-[7px] font-black text-[#d84c36]">
            限時團購
          </span>
          <Package className="absolute left-1/2 top-1/2 size-24 -translate-x-1/2 -translate-y-1/2 text-white/80" />
          <div className="absolute bottom-3 left-3 flex gap-2">
            {[1, 2, 3].map((item) => (
              <span
                key={item}
                className="size-9 rounded-lg border-2 border-white bg-white/35"
              />
            ))}
          </div>
        </div>
        <div className="flex flex-col">
          <div className="flex items-center gap-1 text-[#ffad20]">
            {[1, 2, 3, 4, 5].map((item) => (
              <Star key={item} className="size-3 fill-current" />
            ))}
            <span className="ml-1 text-[7px] text-[#9b858c]">(128)</span>
          </div>
          <h3 className="mt-3 text-base font-black text-[#442f39]">
            週末分享零食箱
          </h3>
          <p className="mt-2 text-[8px] leading-4 text-[#806b73]">
            精選人氣零食與飲品，滿足聚會、辦公室分享與家庭午茶。
          </p>
          <div className="mt-3 flex items-end gap-2">
            <span className="text-xl font-black text-[#f06449]">$699</span>
            <span className="pb-0.5 text-[8px] text-[#baa8ad] line-through">$880</span>
          </div>
          <div className="mt-4">
            <p className="text-[8px] font-bold text-[#442f39]">選擇規格</p>
            <div className="mt-2 flex gap-2">
              {["經典組", "甜食組", "綜合組"].map((item, index) => (
                <span
                  key={item}
                  className={`rounded-lg border px-3 py-2 text-[7px] font-bold ${
                    index === 0
                      ? "border-[#f06449] bg-[#fff1ed] text-[#d84c36]"
                      : "border-[#eadbd7] bg-white text-[#806b73]"
                  }`}
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
          <div className="mt-auto flex gap-2 pt-4">
            <span className="flex items-center gap-3 rounded-full border border-[#eadbd7] bg-white px-3 text-[8px] text-[#806b73]">
              <Minus className="size-3" /> 1 <Plus className="size-3" />
            </span>
            <button className="flex-1 rounded-full bg-[#f06449] py-2.5 text-[8px] font-black text-white">
              加入購物車
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

function JuleCartPreview() {
  return (
    <div className="h-full bg-[#fffaf6] p-4">
      <h3 className="text-sm font-black text-[#442f39]">我的購物車</h3>
      <div className="mt-4 grid gap-3 md:grid-cols-[1fr_0.55fr]">
        <div className="space-y-2">
          {juleProducts.slice(0, 2).map((product, index) => (
            <div
              key={product.name}
              className="grid grid-cols-[4rem_1fr_auto] items-center gap-3 rounded-lg border border-[#f0dfda] bg-white p-3"
            >
              <div className={`h-14 rounded-lg bg-gradient-to-br ${product.tone}`} />
              <div className="min-w-0">
                <p className="truncate text-[9px] font-black text-[#442f39]">
                  {product.name}
                </p>
                <p className="mt-1 text-[7px] text-[#9b858c]">
                  {index === 0 ? "經典組" : "12 入組"}
                </p>
                <div className="mt-2 flex w-fit items-center gap-2 rounded-full border border-[#eadbd7] px-2 py-1 text-[7px] text-[#806b73]">
                  <Minus className="size-2.5" /> 1 <Plus className="size-2.5" />
                </div>
              </div>
              <p className="text-[10px] font-black text-[#f06449]">{product.price}</p>
            </div>
          ))}
        </div>
        <div className="rounded-lg border border-[#f0dfda] bg-white p-4">
          <p className="text-[9px] font-black text-[#442f39]">訂單摘要</p>
          <div className="mt-4 space-y-3 text-[8px] text-[#806b73]">
            <div className="flex justify-between"><span>商品金額</span><span>$1,219</span></div>
            <div className="flex justify-between"><span>運費</span><span>$80</span></div>
            <div className="flex justify-between text-[#f06449]"><span>會員點數</span><span>-$100</span></div>
          </div>
          <div className="mt-4 flex justify-between border-t border-[#f2e5e1] pt-4">
            <span className="text-[9px] font-black text-[#442f39]">合計</span>
            <span className="text-sm font-black text-[#f06449]">$1,199</span>
          </div>
          <button className="mt-4 w-full rounded-full bg-[#f06449] py-2.5 text-[8px] font-black text-white">
            前往結帳
          </button>
        </div>
      </div>
    </div>
  );
}

function JuleRewardsPreview() {
  return (
    <div className="h-full bg-[#fffaf6] p-4">
      <div className="rounded-lg bg-[#7257d9] p-4 text-white">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-[8px] text-white/70">目前可用點數</p>
            <p className="mt-1 text-xl font-black">1,280 pts</p>
          </div>
          <Gift className="size-8 text-[#ffcf52]" />
        </div>
        <div className="mt-4 h-1.5 overflow-hidden rounded-full bg-white/15">
          <div className="h-full w-3/4 rounded-full bg-[#ffcf52]" />
        </div>
        <p className="mt-2 text-[7px] text-white/65">再消費 $320 升級金卡會員</p>
      </div>
      <div className="mt-3 grid gap-3 sm:grid-cols-2">
        {[
          ["滿 $1,000 折 $120", "本次訂單可使用", "#F06449"],
          ["全館免運券", "有效期限 2026.06.30", "#77BDAF"],
        ].map(([title, caption, color], index) => (
          <article
            key={title}
            className="relative overflow-hidden rounded-lg border border-[#f0dfda] bg-white p-4"
          >
            <TicketPercent className="size-5" style={{ color }} />
            <p className="mt-3 text-[10px] font-black text-[#442f39]">{title}</p>
            <p className="mt-1 text-[7px] text-[#9b858c]">{caption}</p>
            <span
              className="absolute right-3 top-3 rounded-full px-2 py-1 text-[7px] font-bold"
              style={{
                color,
                backgroundColor: `${color}14`,
              }}
            >
              {index === 0 ? "已套用" : "使用"}
            </span>
          </article>
        ))}
      </div>
      <div className="mt-3 rounded-lg border border-[#f0dfda] bg-white p-4">
        <div className="flex items-center justify-between">
          <p className="text-[9px] font-black text-[#442f39]">優惠試算</p>
          <span className="text-[7px] font-bold text-[#f06449]">已省下 $220</span>
        </div>
        <div className="mt-3 grid grid-cols-3 gap-2 text-center">
          {[
            ["商品金額", "$1,299"],
            ["優惠折抵", "-$220"],
            ["應付金額", "$1,079"],
          ].map(([label, value], index) => (
            <div key={label} className="rounded-lg bg-[#fff8f2] p-2.5">
              <p className={`text-[10px] font-black ${index === 2 ? "text-[#f06449]" : "text-[#442f39]"}`}>
                {value}
              </p>
              <p className="mt-1 text-[7px] text-[#9b858c]">{label}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function JuleCheckoutPreview({ final = false }: { final?: boolean }) {
  return (
    <div className="h-full bg-[#fffaf6] p-4">
      <div className="flex items-center justify-between">
        <h3 className="text-sm font-black text-[#442f39]">安心結帳</h3>
        <div className="flex items-center gap-1.5">
          {["購物車", "填寫資料", "完成"].map((step, index) => (
            <div key={step} className="flex items-center">
              <span
                className={`grid size-5 place-items-center rounded-full text-[7px] font-bold ${
                  index < 2
                    ? "bg-[#f06449] text-white"
                    : "bg-[#eadfdb] text-[#9b858c]"
                }`}
              >
                {index + 1}
              </span>
              {index < 2 ? (
                <span className={`h-px w-5 ${index === 0 ? "bg-[#f06449]" : "bg-[#eadfdb]"}`} />
              ) : null}
            </div>
          ))}
        </div>
      </div>
      <div className="mt-4 grid gap-3 md:grid-cols-[1fr_0.56fr]">
        <div className="rounded-lg border border-[#f0dfda] bg-white p-4">
          <p className="text-[9px] font-black text-[#442f39]">收件與付款資訊</p>
          <div className="mt-3 grid grid-cols-2 gap-3">
            {["收件人姓名", "手機號碼", "配送方式", "付款方式"].map(
              (label, index) => (
                <label key={label} className="text-[7px] text-[#806b73]">
                  {label}
                  <div className="mt-1.5 flex h-8 items-center justify-between rounded-lg border border-[#eadbd7] px-2.5 text-[7px] text-[#9b858c]">
                    <span>
                      {["王小樂", "0912 345 678", "宅配到府", "信用卡"][index]}
                    </span>
                    {index > 1 ? <ChevronRight className="size-3" /> : null}
                  </div>
                </label>
              ),
            )}
          </div>
          <label className="mt-3 block text-[7px] text-[#806b73]">
            配送地址
            <div className="mt-1.5 h-8 rounded-lg border border-[#eadbd7] px-2.5 py-2 text-[7px] text-[#9b858c]">
              台北市信義區歡樂路 88 號
            </div>
          </label>
          {final ? (
            <div className="mt-3 rounded-lg bg-[#e9f8f4] px-3 py-2 text-[7px] font-bold text-[#278a7d]">
              <Check className="mr-1 inline size-3" />
              配送與付款資訊已完成
            </div>
          ) : null}
        </div>
        <div className="rounded-lg border border-[#f0dfda] bg-white p-4">
          <p className="text-[9px] font-black text-[#442f39]">付款摘要</p>
          <div className="mt-3 space-y-2 text-[7px] text-[#806b73]">
            <div className="flex justify-between"><span>商品金額</span><span>$1,299</span></div>
            <div className="flex justify-between"><span>折價券</span><span className="text-[#f06449]">-$120</span></div>
            <div className="flex justify-between"><span>點數折抵</span><span className="text-[#f06449]">-$100</span></div>
            <div className="flex justify-between"><span>運費</span><span>$0</span></div>
          </div>
          <div className="mt-3 flex items-end justify-between border-t border-[#f2e5e1] pt-3">
            <span className="text-[8px] font-bold text-[#442f39]">應付金額</span>
            <span className="text-lg font-black text-[#f06449]">$1,079</span>
          </div>
          <button className="mt-4 w-full rounded-full bg-[#f06449] py-2.5 text-[8px] font-black text-white">
            確認付款
          </button>
        </div>
      </div>
    </div>
  );
}

function JuleResponsivePreview() {
  return (
    <div className="flex h-full items-end justify-center gap-3 bg-[#fff8f2] p-4 sm:gap-5">
      <div className="hidden w-[52%] overflow-hidden rounded-lg border-[5px] border-[#44343a] bg-white shadow-xl sm:block">
        <JuleHeader compact />
        <div className="p-2">
          <div className="h-14 rounded-lg bg-gradient-to-r from-[#f06449] to-[#ffbe3d]" />
          <div className="mt-2 grid grid-cols-3 gap-1.5">
            {juleProducts.slice(0, 3).map((product) => (
              <JuleProductCard key={product.name} product={product} compact />
            ))}
          </div>
        </div>
        <div className="mx-auto h-2 w-1/3 rounded-t bg-[#44343a]" />
      </div>
      <div className="w-[38%] max-w-44 overflow-hidden rounded-lg border-[5px] border-[#44343a] bg-white shadow-xl sm:w-[24%]">
        <div className="flex items-center justify-between border-b border-[#f2e5e1] p-2">
          <span className="grid size-5 place-items-center rounded-md bg-[#f06449] text-[7px] font-black text-white">聚</span>
          <ShoppingCart className="size-3 text-[#f06449]" />
        </div>
        <div className="p-2">
          <div className="h-16 rounded-lg bg-gradient-to-br from-[#f06449] to-[#ffbe3d]" />
          <div className="mt-2 grid grid-cols-2 gap-1">
            {juleProducts.slice(0, 2).map((product) => (
              <JuleProductCard key={product.name} product={product} compact />
            ))}
          </div>
        </div>
      </div>
      <div className="w-[28%] max-w-28 overflow-hidden rounded-[1.25rem] border-[5px] border-[#44343a] bg-white shadow-xl sm:w-[16%]">
        <div className="mx-auto mt-1 h-1 w-7 rounded-full bg-[#44343a]" />
        <div className="p-1.5">
          <div className="h-12 rounded-md bg-gradient-to-br from-[#f06449] to-[#ffbe3d]" />
          <div className="mt-1.5 space-y-1.5">
            {juleProducts.slice(0, 2).map((product) => (
              <div key={product.name} className="rounded-md border border-[#f0dfda] p-1">
                <div className={`h-7 rounded bg-gradient-to-br ${product.tone}`} />
                <div className="mt-1 h-1 w-3/4 rounded bg-[#eadbd7]" />
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="absolute left-5 top-4 flex items-center gap-2 text-[#f06449]">
        <Monitor className="size-4" />
        <Tablet className="size-4" />
        <Smartphone className="size-4" />
        <span className="text-[8px] font-black uppercase tracking-[0.12em]">
          Responsive
        </span>
      </div>
    </div>
  );
}

function JuleBootstrapPreview() {
  return (
    <div className="h-full bg-[#fffaf6] p-4">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-[8px] font-black uppercase tracking-[0.14em] text-[#7257d9]">
            Bootstrap 5 Layout
          </p>
          <h3 className="mt-1 text-sm font-black text-[#442f39]">
            可維護的響應式結構
          </h3>
        </div>
        <span className="rounded-lg bg-[#7257d9] px-3 py-2 text-[8px] font-black text-white">
          BS 5
        </span>
      </div>
      <div className="mt-4 rounded-lg border border-[#e4dcf4] bg-white p-3">
        <div className="grid grid-cols-12 gap-1">
          {Array.from({ length: 12 }, (_, index) => (
            <span
              key={index}
              className="h-28 rounded-sm bg-[#7257d9]/10 text-center text-[6px] text-[#7257d9]"
            >
              {index + 1}
            </span>
          ))}
        </div>
        <div className="relative -mt-24 grid grid-cols-12 gap-1 px-1">
          <div className="col-span-4 h-20 rounded-md border border-[#f06449]/30 bg-[#fff1ed]/90 p-2 text-[7px] font-bold text-[#d84c36]">
            Filter
          </div>
          <div className="col-span-8 grid grid-cols-3 gap-1.5">
            {[1, 2, 3].map((item) => (
              <div
                key={item}
                className="h-20 rounded-md border border-[#ffbe3d]/40 bg-[#fff8dc]/95 p-2 text-[7px] font-bold text-[#8b6300]"
              >
                Product Card
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="mt-3 grid grid-cols-4 gap-2">
        {[
          ["sm", "576px"],
          ["md", "768px"],
          ["lg", "992px"],
          ["xl", "1200px"],
        ].map(([name, value]) => (
          <div key={name} className="rounded-lg border border-[#f0dfda] bg-white p-3">
            <p className="text-[10px] font-black text-[#7257d9]">{name}</p>
            <p className="mt-1 text-[7px] text-[#9b858c]">{value}</p>
          </div>
        ))}
      </div>
      <div className="mt-3 flex flex-wrap gap-2">
        {["container", "row", "col", "gap", "order", "utilities"].map((item) => (
          <span key={item} className="rounded-full bg-[#eee9ff] px-2.5 py-1 text-[7px] font-bold text-[#7257d9]">
            .{item}
          </span>
        ))}
      </div>
    </div>
  );
}

export function CaseStudyVisualFallback({
  kind,
  className = "",
}: CaseStudyVisualFallbackProps) {
  const dark = kind === "tcb-dashboard-dark" || kind === "tcb-final-dark";
  const isRmic = kind.startsWith("rmic-");
  const isJule = kind.startsWith("jule-");

  return (
    <div
      className={`relative h-full min-h-[18rem] w-full overflow-hidden ${
        isRmic ? "bg-[#f4f7f8]" : isJule ? "bg-[#fffaf6]" : "bg-white"
      } ${className}`}
      role="img"
      aria-label={`${kind.replaceAll("-", " ")} placeholder preview`}
    >
      {kind === "tcb-hero" ? (
        <div className="h-full bg-[radial-gradient(circle_at_80%_10%,rgba(44,199,173,0.22),transparent_28rem),linear-gradient(135deg,#04101a,#0a2230)] p-4 sm:p-7">
          <div className="mx-auto h-full max-w-4xl rounded-xl border border-white/15 bg-white/[0.06] shadow-[0_32px_90px_rgba(0,0,0,0.38)] backdrop-blur-xl">
            <WindowBar dark />
            <DashboardPreview dark detailed />
          </div>
        </div>
      ) : null}
      {kind === "tcb-dashboard-light" || kind === "tcb-final-light" ? (
        <>
          <WindowBar />
          <div className="h-[calc(100%-2.25rem)]"><DashboardPreview detailed={kind === "tcb-final-light"} /></div>
        </>
      ) : null}
      {dark ? (
        <>
          <WindowBar dark />
          <div className="h-[calc(100%-2.25rem)]"><DashboardPreview dark detailed={kind === "tcb-final-dark"} /></div>
        </>
      ) : null}
      {kind === "tcb-vm-list" ? <VmListPreview /> : null}
      {kind === "tcb-vm-detail" ? <VmDetailPreview /> : null}
      {kind === "tcb-deploy-flow" ? <DeployFlowPreview /> : null}
      {kind === "tcb-announcement" ? <AnnouncementPreview /> : null}
      {kind === "tcb-theme-system" ? <ThemeSystemPreview /> : null}
      {kind === "tcb-design-system" ? <DesignSystemPreview /> : null}
      {kind === "tcb-ui-components" ? <ComponentsPreview /> : null}
      {kind === "rmic-hero" ? (
        <div className="h-full bg-[linear-gradient(135deg,#e7eff1,#dce8eb)] p-4 sm:p-7">
          <div className="mx-auto h-full max-w-4xl overflow-hidden rounded-xl border border-white/80 bg-white shadow-[0_28px_80px_rgba(31,70,82,0.18)]">
            <WindowBar />
            <div className="h-[calc(100%-2.25rem)]">
              <RmicOverviewPreview final />
            </div>
          </div>
        </div>
      ) : null}
      {kind === "rmic-platform-overview" ? (
        <>
          <WindowBar />
          <div className="h-[calc(100%-2.25rem)]">
            <RmicOverviewPreview />
          </div>
        </>
      ) : null}
      {kind === "rmic-map-system" || kind === "rmic-final-ui-02" ? (
        <>
          <WindowBar />
          <div className="h-[calc(100%-2.25rem)]">
            <RmicMapPreview final={kind === "rmic-final-ui-02"} />
          </div>
        </>
      ) : null}
      {kind === "rmic-case-list" ? <RmicCaseListPreview /> : null}
      {kind === "rmic-feature-extension" ? <RmicFeaturePreview /> : null}
      {kind === "rmic-wireframe" ? <RmicWireframePreview /> : null}
      {kind === "rmic-prototype" ? <RmicPrototypePreview /> : null}
      {kind === "rmic-component-extension" ? (
        <RmicComponentsPreview />
      ) : null}
      {kind === "rmic-final-ui-01" ? (
        <>
          <WindowBar />
          <div className="h-[calc(100%-2.25rem)]">
            <RmicOverviewPreview final />
          </div>
        </>
      ) : null}
      {kind === "jule-hero" ? (
        <div className="h-full bg-[radial-gradient(circle_at_82%_16%,rgba(255,190,61,0.48),transparent_22rem),linear-gradient(135deg,#fff5e9,#ffe7df)] p-4 sm:p-7">
          <div className="mx-auto h-full max-w-4xl overflow-hidden rounded-xl border border-white bg-white shadow-[0_28px_80px_rgba(144,66,47,0.18)]">
            <WindowBar />
            <div className="h-[calc(100%-2.25rem)]">
              <JuleHomepagePreview final />
            </div>
          </div>
        </div>
      ) : null}
      {kind === "jule-homepage" || kind === "jule-final-ui-01" ? (
        <>
          <WindowBar />
          <div className="h-[calc(100%-2.25rem)]">
            <JuleHomepagePreview final={kind === "jule-final-ui-01"} />
          </div>
        </>
      ) : null}
      {kind === "jule-visual-direction" ? <JuleVisualDirectionPreview /> : null}
      {kind === "jule-product-list" ? <JuleProductListPreview /> : null}
      {kind === "jule-product-detail" ? <JuleProductDetailPreview /> : null}
      {kind === "jule-cart" ? <JuleCartPreview /> : null}
      {kind === "jule-checkout" || kind === "jule-final-ui-02" ? (
        <JuleCheckoutPreview final={kind === "jule-final-ui-02"} />
      ) : null}
      {kind === "jule-rewards-coupons" ? <JuleRewardsPreview /> : null}
      {kind === "jule-mobile-rwd" ? <JuleResponsivePreview /> : null}
      {kind === "jule-bootstrap-layout" ? <JuleBootstrapPreview /> : null}
    </div>
  );
}
