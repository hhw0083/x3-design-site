import {
  Bell,
  Cpu,
  HardDrive,
  Monitor,
  Server,
  UserRound,
} from "lucide-react";
import type { ReactNode } from "react";

const paletteColors = [
  { name: "Primary Green", value: "#137D6A" },
  { name: "Deep Green", value: "#0B5E4B" },
  { name: "Accent Gold", value: "#E6B44A" },
  { name: "Mint Green", value: "#A9DCCB" },
  { name: "Ivory Background", value: "#FBF7F0" },
  { name: "Neutral Gray", value: "#D7D7D7" },
];

const uiColors = [
  { name: "Text / Primary", value: "#1A1F23" },
  { name: "Text / Secondary", value: "#616B76" },
  { name: "Border", value: "#E5E7EB" },
  { name: "Surface", value: "#FFFFFF" },
  { name: "Success", value: "#1DBB6F" },
  { name: "Warning", value: "#F5B400" },
  { name: "Danger", value: "#E74C3C" },
  { name: "Info", value: "#3B82F6" },
];

const typeScale = [
  ["Display", "40px"],
  ["Page Title", "32px"],
  ["Section Title", "28px"],
  ["Card Title", "20px"],
  ["Body", "16px"],
  ["Caption", "14px"],
  ["Label", "12px"],
];

const statusPills = [
  { label: "運行中", className: "bg-[#1DBB6F]/10 text-[#137D6A]" },
  { label: "維護中", className: "bg-[#F5B400]/14 text-[#A66D00]" },
  { label: "異常", className: "bg-[#E74C3C]/12 text-[#C23A2E]" },
  { label: "資訊", className: "bg-[#3B82F6]/12 text-[#2567C8]" },
  { label: "停用", className: "bg-[#616B76]/12 text-[#616B76]" },
];

const resourceCards = [
  { title: "CPU", label: "已使用", value: "6", icon: Cpu },
  { title: "RAM", label: "已使用", value: "800", icon: Server },
  { title: "HD", label: "已使用", value: "3", icon: HardDrive },
  { title: "IP", label: "已使用", value: "448", icon: Bell },
];

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
      className={`rounded-[24px] border border-[#E5E7EB] bg-white/95 p-5 shadow-[0_16px_44px_rgba(26,31,35,0.04)] sm:p-7 ${className}`}
    >
      <h3 className="text-lg font-bold text-[#137D6A] sm:text-xl">
        {number}. {title}
      </h3>
      <div className="mt-6">{children}</div>
    </article>
  );
}

function ColorSwatch({ name, value }: { name: string; value: string }) {
  return (
    <div className="min-w-0">
      <div
        className="h-24 rounded-[14px] border border-black/5 shadow-[inset_0_1px_0_rgba(255,255,255,0.58),0_14px_28px_rgba(26,31,35,0.08)] sm:h-28"
        style={{ backgroundColor: value }}
      />
      <p className="mt-4 text-sm font-bold text-[#1A1F23]">{name}</p>
      <p className="mt-2 text-sm font-medium text-[#616B76]">{value}</p>
    </div>
  );
}

function UiColorChip({ name, value }: { name: string; value: string }) {
  return (
    <div className="min-w-0">
      <div
        className="h-20 rounded-[10px] border border-black/5 shadow-[inset_0_1px_0_rgba(255,255,255,0.55),0_10px_22px_rgba(26,31,35,0.08)]"
        style={{ backgroundColor: value }}
      />
      <p className="mt-4 min-h-10 text-sm font-bold leading-5 text-[#1A1F23]">
        {name}
      </p>
      <p className="mt-1 text-sm font-medium text-[#616B76]">{value}</p>
    </div>
  );
}

function ThemePreview({ theme }: { theme: "dark" | "light" }) {
  const isDark = theme === "dark";
  const shell = isDark
    ? "border-[#111B20] bg-[#11161A] text-white"
    : "border-[#E5E7EB] bg-[#FFFEF7] text-[#1A1F23]";
  const sidebar = isDark ? "bg-[#181F24]" : "bg-[#F8FBF2]";
  const card = isDark
    ? "border-white/8 bg-white/[0.055]"
    : "border-[#EEF0E8] bg-white";
  const muted = isDark ? "text-white/54" : "text-[#616B76]";

  return (
    <div
      className={`h-full min-h-[13rem] overflow-hidden rounded-[16px] border shadow-[0_18px_38px_rgba(26,31,35,0.08)] ${shell}`}
    >
      <div className="flex h-11 items-center justify-between bg-[#0F7B68] px-4 text-white">
        <div>
          <p className="text-[10px] font-black tracking-[0.08em]">
            合作金庫商業銀行
          </p>
          <p className="text-[6px] uppercase tracking-[0.22em] opacity-70">
            Taiwan Cooperative Bank
          </p>
        </div>
        <div className="flex items-center gap-3 text-[9px] font-semibold text-white/86">
          <span>Q & A</span>
          <span>線上報修</span>
          <span className="h-3 w-7 rounded-full bg-white/28" />
          <UserRound className="size-3.5" aria-hidden="true" />
        </div>
      </div>
      <div className="grid h-[calc(100%-2.75rem)] grid-cols-[7rem_minmax(0,1fr)]">
        <aside className={`border-r border-black/5 p-3 ${sidebar}`}>
          <div className="flex items-center gap-2">
            <span className="grid size-8 place-items-center rounded-full bg-[#F7D2B8]">
              <UserRound className="size-4 text-[#0B5E4B]" aria-hidden="true" />
            </span>
            <div>
              <p className="text-[9px] font-bold">使用者名稱</p>
              <p className={`mt-0.5 text-[7px] ${muted}`}>系統管理者</p>
            </div>
          </div>
          <div className="mt-5 space-y-2">
            {["儀表板", "虛擬機管理", "主機管理", "網路管理", "系統管理"].map(
              (item, index) => (
                <div
                  key={item}
                  className={`flex items-center gap-2 rounded-md px-2 py-2 text-[8px] font-semibold ${
                    index === 0
                      ? isDark
                        ? "bg-white/10 text-[#A9DCCB]"
                        : "bg-[#DFF5EA] text-[#137D6A]"
                      : muted
                  }`}
                >
                  <Monitor className="size-3" aria-hidden="true" />
                  {item}
                </div>
              ),
            )}
          </div>
        </aside>
        <main className="min-w-0 p-4">
          <p className="text-sm font-bold">Dashboard</p>
          <div className="mt-3 grid grid-cols-[1fr_1.15fr] gap-3">
            <div className={`rounded-xl border p-4 ${card}`}>
              <p className={`text-[9px] font-semibold ${muted}`}>資源總覽</p>
              <div className="mt-5 flex items-end gap-3">
                <span className="text-5xl font-bold text-[#137D6A]">3</span>
                <span className={`pb-2 text-[10px] ${muted}`}>臺</span>
              </div>
              <div className="mt-4 space-y-2 text-[9px]">
                {["CPU", "RAM", "DISK"].map((item, index) => (
                  <div key={item} className="flex items-center justify-between">
                    <span>{item}</span>
                    <span className="flex gap-1">
                      {[0, 1, 2].map((dot) => (
                        <span
                          key={dot}
                          className={`size-4 rounded-full text-center text-[7px] leading-4 text-white ${
                            ["bg-[#1DBB6F]", "bg-[#F5B400]", "bg-[#E74C3C]"][
                              (dot + index) % 3
                            ]
                          }`}
                        >
                          {dot + 1}
                        </span>
                      ))}
                    </span>
                  </div>
                ))}
              </div>
            </div>
            <div className="grid gap-3">
              {resourceCards.map(({ title, label, value, icon: Icon }) => {
                return (
                  <div
                    key={title}
                    className={`rounded-xl border p-3 ${card}`}
                  >
                    <div className="flex items-center justify-between">
                      <p className="text-[9px] font-bold">{title}</p>
                      <Icon
                        className="size-3.5 text-[#137D6A]"
                        aria-hidden="true"
                      />
                    </div>
                    <div className="mt-3 flex items-end gap-1">
                      <span className="text-lg font-bold">{value}</span>
                      <span className={`text-[8px] ${muted}`}>{label}</span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

function ThemeOverview() {
  return (
    <div className="grid gap-4 lg:grid-cols-[auto_minmax(0,1fr)_auto_minmax(0,1fr)] lg:items-start">
      <span className="w-fit rounded-full bg-[#1A1F23] px-5 py-2 text-sm font-bold text-white">
        Dark Theme
      </span>
      <ThemePreview theme="dark" />
      <span className="w-fit rounded-full border border-[#D7D7D7] bg-white px-5 py-2 text-sm font-bold text-[#616B76]">
        Light Theme
      </span>
      <ThemePreview theme="light" />
    </div>
  );
}

export function TcbDesignSystemBoard() {
  return (
    <section
      aria-label="TCB design system board"
      className="font-noto text-[#1A1F23]"
    >
      <div className="rounded-[28px] bg-[#FBF7F0] p-3 shadow-[0_24px_70px_rgba(26,31,35,0.06)] sm:p-4 md:p-5">
        <div className="grid gap-3 xl:grid-cols-2">
          <BoardPanel number="1" title="Color Palette / 色彩系統">
            <div className="grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-6 xl:grid-cols-3 2xl:grid-cols-6">
              {paletteColors.map((color) => (
                <ColorSwatch key={color.name} {...color} />
              ))}
            </div>
          </BoardPanel>

          <BoardPanel number="2" title="UI Colors / 介面色彩">
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-4 lg:grid-cols-8 xl:grid-cols-4 2xl:grid-cols-8">
              {uiColors.map((color) => (
                <UiColorChip key={color.name} {...color} />
              ))}
            </div>
          </BoardPanel>

          <BoardPanel number="3" title="Typography / 字體系統">
            <div className="grid gap-8 md:grid-cols-[0.9fr_1.1fr] md:items-center">
              <div>
                <p className="text-sm font-medium text-[#1A1F23]">
                  Font Family
                </p>
                <p className="mt-3 text-2xl font-black text-[#137D6A]">
                  Noto Sans TC
                </p>
                <div className="my-7 h-px bg-[#E5E7EB]" />
                <p className="text-[5rem] font-black leading-none tracking-tight text-[#1A1F23] sm:text-[6rem]">
                  Aa
                </p>
              </div>
              <div className="divide-y divide-[#E5E7EB]">
                {typeScale.map(([label, value]) => (
                  <div
                    key={label}
                    className="flex items-center justify-between py-3 text-sm"
                  >
                    <span className="font-medium text-[#1A1F23]">{label}</span>
                    <span className="font-medium text-[#616B76]">{value}</span>
                  </div>
                ))}
              </div>
            </div>
          </BoardPanel>

          <BoardPanel number="4" title="Typography Example / 字級範例">
            <h4 className="text-4xl font-black leading-tight tracking-tight text-[#1A1F23] sm:text-5xl">
              合作金庫虛擬機管理平台
            </h4>
            <p className="mt-5 text-2xl font-black text-[#1A1F23]">
              後台管理與資源監控系統
            </p>
            <p className="mt-6 max-w-3xl text-base font-medium leading-8 text-[#616B76]">
              整合虛擬機資源、主機狀態與網路資訊，提供即時監控與高效管理。
              <br />
              協助系統管理者掌握資源狀態，提升營運效率與穩定性。
            </p>
            <p className="mt-7 text-sm font-black uppercase tracking-[0.08em] text-[#137D6A]">
              LABEL / 狀態標籤範例
            </p>
            <div className="mt-4 flex flex-wrap gap-3">
              {statusPills.map((pill) => (
                <span
                  key={pill.label}
                  className={`rounded-md border border-current/10 px-4 py-2 text-sm font-bold ${pill.className}`}
                >
                  {pill.label}
                </span>
              ))}
            </div>
          </BoardPanel>

          <BoardPanel
            number="5"
            title="Theme Overview / 雙色主題"
            className="xl:col-span-2"
          >
            <ThemeOverview />
          </BoardPanel>
        </div>
      </div>
    </section>
  );
}
