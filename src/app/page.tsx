"use client";

import {
  Coins, DollarSign, Trophy, BarChart2, Lock, ChevronRight, ChevronLeft,
  X, Check, Target, MessageCircle, Flag, Eye, Clock, Star, BookOpen,
  User, Sparkles, Bell,
} from "lucide-react";

// ─── Primitives ────────────────────────────────────────────────────────────

function SectionHeader({ id, children }: { id: string; children: React.ReactNode }) {
  return (
    <h2
      id={id}
      className="text-[22px] font-bold mb-6 pb-3"
      style={{ color: "var(--label-primary)", borderBottom: "1px solid var(--gray-5)" }}
    >
      {children}
    </h2>
  );
}

function SubHeader({ children }: { children: React.ReactNode }) {
  return (
    <h3 className="text-[13px] font-bold uppercase tracking-widest mb-4" style={{ color: "var(--label-secondary)" }}>
      {children}
    </h3>
  );
}

function TokenLabel({ name, value }: { name: string; value: string }) {
  return (
    <div>
      <p className="text-[12px] font-semibold" style={{ color: "var(--label-primary)" }}>{name}</p>
      <p className="text-[11px] font-mono mt-0.5" style={{ color: "var(--label-secondary)" }}>{value}</p>
    </div>
  );
}

// ─── Color Swatch ──────────────────────────────────────────────────────────

function Swatch({ bg, border, name, hex, dark }: { bg: string; border?: string; name: string; hex: string; dark?: boolean }) {
  return (
    <div className="flex flex-col gap-2">
      <div
        className="h-14 rounded-xl w-full"
        style={{ background: bg, border: border || "1px solid rgba(0,0,0,0.06)" }}
      />
      <TokenLabel name={name} value={hex} />
    </div>
  );
}

// ─── Type Specimen ─────────────────────────────────────────────────────────

function TypeRow({ size, weight, lh, tracking, label, sample }: {
  size: string; weight: string; lh: string; tracking: string; label: string; sample: string;
}) {
  return (
    <div
      className="flex items-start gap-6 py-3"
      style={{ borderBottom: "1px solid var(--gray-5)" }}
    >
      <div className="w-44 flex-shrink-0 pt-0.5">
        <p className="text-[12px] font-semibold" style={{ color: "var(--label-primary)" }}>{label}</p>
        <p className="text-[11px] font-mono mt-0.5" style={{ color: "var(--label-secondary)" }}>
          {size} · {weight} · lh {lh} · ls {tracking}
        </p>
      </div>
      <p style={{ fontSize: size, lineHeight: lh, letterSpacing: tracking, fontWeight: weight === "Regular" ? 400 : 590 }}>
        {sample}
      </p>
    </div>
  );
}

// ─── Component previews ────────────────────────────────────────────────────

function ComponentBlock({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="mb-8">
      <p className="text-[11px] font-bold uppercase tracking-widest mb-3" style={{ color: "var(--label-secondary)" }}>{label}</p>
      <div
        className="rounded-2xl p-6 flex flex-wrap gap-4 items-start"
        style={{ background: "#f9f9f9", border: "1px solid var(--gray-5)" }}
      >
        {children}
      </div>
    </div>
  );
}

// ─── NAV ───────────────────────────────────────────────────────────────────

const NAV_ITEMS = [
  { id: "token-architecture", label: "Token Architecture" },
  { id: "colors", label: "Colors" },
  { id: "typography", label: "Typography" },
  { id: "spacing-radius", label: "Spacing & Radius" },
  { id: "buttons", label: "Buttons" },
  { id: "cards", label: "Cards" },
  { id: "chips", label: "Chips & Badges" },
  { id: "progress", label: "Progress Bars" },
  { id: "sheets", label: "Bottom Sheets" },
  { id: "navigation", label: "Navigation" },
  { id: "earn-mode", label: "Earn Mode" },
  { id: "icons", label: "Icons" },
];

// ─── PAGE ──────────────────────────────────────────────────────────────────

export default function DesignSystem() {
  return (
    <div className="min-h-screen flex" style={{ background: "#fafafa", fontFamily: "-apple-system, BlinkMacSystemFont, 'SF Pro', sans-serif" }}>

      {/* Sidebar */}
      <aside
        className="w-52 flex-shrink-0 sticky top-0 h-screen overflow-y-auto py-8 px-5 flex flex-col gap-1"
        style={{ background: "white", borderRight: "1px solid var(--gray-5)" }}
      >
        <div className="mb-6">
          <div className="flex items-center gap-2 mb-1">
            <div
              className="w-7 h-7 rounded-lg flex items-center justify-center"
              style={{ background: "var(--earn-teal-10)" }}
            >
              <Coins size={14} style={{ color: "var(--earn-teal-deep)" }} />
            </div>
            <span className="text-[13px] font-bold" style={{ color: "var(--label-primary)" }}>DiagnosUs iOS</span>
          </div>
          <p className="text-[11px] pl-9" style={{ color: "var(--label-secondary)" }}>Design System</p>
        </div>

        {NAV_ITEMS.map((item) => (
          <a
            key={item.id}
            href={`#${item.id}`}
            className="block px-3 py-1.5 rounded-lg text-[13px] font-medium transition-colors hover:bg-gray-50"
            style={{ color: "var(--label-secondary)", textDecoration: "none" }}
          >
            {item.label}
          </a>
        ))}

        <div className="mt-auto pt-6">
          <a
            href="/"
            className="text-[11px] flex items-center gap-1 hover:opacity-80"
            style={{ color: "var(--earn-teal-deep)", textDecoration: "none" }}
          >
            <ChevronLeft size={12} />
            Back to mockup
          </a>
        </div>
      </aside>

      {/* Main content */}
      <main className="flex-1 max-w-4xl px-12 py-10 overflow-y-auto">

        {/* Page header */}
        <div className="mb-12">
          <p className="text-[12px] font-semibold uppercase tracking-widest mb-2" style={{ color: "var(--earn-teal-deep)" }}>
            iOS · DiagnosUs
          </p>
          <h1 className="text-[36px] font-bold mb-3" style={{ color: "var(--label-primary)" }}>Design System</h1>
          <p className="text-[15px] leading-relaxed max-w-xl" style={{ color: "var(--label-secondary)" }}>
            Tokens, typography, components, and patterns for the DiagnosUs iOS app.
            Earn Mode sub-theme included. Reference this doc during any iOS implementation.
          </p>
        </div>

        {/* ── TOKEN ARCHITECTURE ── */}
        <section id="token-architecture" className="mb-16">
          <SectionHeader id="token-architecture">Token Architecture</SectionHeader>

          {/* Intro banner */}
          <div
            className="rounded-xl p-4 mb-8 text-[13px] leading-relaxed"
            style={{ background: "var(--earn-indigo-10)", border: "1px solid var(--earn-indigo-30)", color: "var(--earn-indigo)" }}
          >
            <p className="font-bold mb-1">3-Tier Architecture — Global → Semantic → Element</p>
            <p className="font-normal" style={{ color: "var(--label-secondary)" }}>
              Status: <strong style={{ color: "var(--earn-indigo)" }}>Skeleton</strong> — color values TBD pending review session.
              Structure and token paths are locked. Values marked <strong>TBD</strong> are placeholders extracted from Figma.
            </p>
          </div>

          {/* ── Tier 1: Global ── */}
          <SubHeader>Tier 1 — Global Tokens</SubHeader>
          <p className="text-[13px] mb-5" style={{ color: "var(--label-secondary)" }}>
            Raw primitives. No semantic meaning. All spatial values in <code>pt</code>.
          </p>

          {/* Global: Neutral palette */}
          <p className="text-[12px] font-semibold mb-3 uppercase tracking-wide" style={{ color: "var(--label-primary)" }}>Color Palette — Neutral</p>
          <div className="overflow-x-auto mb-6">
            <table className="w-full text-[12px] border-collapse">
              <thead>
                <tr style={{ borderBottom: "2px solid var(--gray-5)" }}>
                  <th className="text-left py-2 pr-4 font-semibold" style={{ color: "var(--label-primary)" }}>Token</th>
                  <th className="text-left py-2 pr-4 font-semibold" style={{ color: "var(--label-primary)" }}>Value</th>
                  <th className="text-left py-2 font-semibold" style={{ color: "var(--label-primary)" }}>Notes</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["global.color.neutral.0", "#ffffff", "Pure white"],
                  ["global.color.neutral.50", "#f2f2f7", "iOS Gray 6 — grouped bg"],
                  ["global.color.neutral.100", "#e5e5ea", "iOS Gray 5 — borders"],
                  ["global.color.neutral.200", "#d1d1d6", "iOS Gray 4"],
                  ["global.color.neutral.800", "rgba(60,60,67,0.60)", "iOS secondary label"],
                  ["global.color.neutral.850", "rgba(60,60,67,0.30)", "iOS tertiary label"],
                  ["global.color.neutral.900", "#000000", "Pure black"],
                  ["global.color.neutral.dark.0", "#000000", "Dark mode root bg"],
                  ["global.color.neutral.dark.50", "#1c1c1e", "Dark mode card/elevated"],
                  ["global.color.neutral.dark.100", "#2c2c2e", "Dark mode border"],
                  ["global.color.neutral.dark.800", "rgba(235,235,245,0.60)", "Dark mode secondary label"],
                  ["global.color.neutral.dark.850", "rgba(235,235,245,0.30)", "Dark mode tertiary label"],
                ].map(([token, value, notes]) => (
                  <tr key={token} style={{ borderBottom: "1px solid var(--gray-5)" }}>
                    <td className="py-2 pr-4 font-mono" style={{ color: "var(--label-primary)" }}>{token}</td>
                    <td className="py-2 pr-4 font-mono" style={{ color: "var(--label-secondary)" }}>{value}</td>
                    <td className="py-2" style={{ color: "var(--label-secondary)" }}>{notes}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Global: Brand & Accent palette */}
          <p className="text-[12px] font-semibold mb-3 uppercase tracking-wide" style={{ color: "var(--label-primary)" }}>Color Palette — Brand & Accent</p>
          <div className="overflow-x-auto mb-6">
            <table className="w-full text-[12px] border-collapse">
              <thead>
                <tr style={{ borderBottom: "2px solid var(--gray-5)" }}>
                  <th className="text-left py-2 pr-4 font-semibold" style={{ color: "var(--label-primary)" }}>Token</th>
                  <th className="text-left py-2 pr-4 font-semibold" style={{ color: "var(--label-primary)" }}>Value</th>
                  <th className="text-left py-2 font-semibold" style={{ color: "var(--label-primary)" }}>Notes</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["global.color.brand.teal.400", "#4dc3d0", "TBD — Core/primary (tab active, display accent)"],
                  ["global.color.brand.teal.500", "#00c3d0", "TBD — UI teal light (accents/teal)"],
                  ["global.color.brand.teal.500d", "#00d2e0", "TBD — UI teal dark"],
                  ["global.color.brand.teal.600", "#2a98a4", "TBD — Filter chip active"],
                  ["global.color.brand.teal.deep", "#006A65", "Earn Mode identity teal"],
                  ["global.color.brand.teal.deep10", "rgba(56,220,209,0.10)", "Earn teal bg fills"],
                  ["global.color.brand.teal.container", "#38DCD1", "Reserved — dark mode / special contexts"],
                  ["global.color.brand.teal.onContainer", "#003D3A", "Text on container fills"],
                  ["global.color.brand.indigo.400", "#6155f5", "Indigo light"],
                  ["global.color.brand.indigo.400d", "#6d7cff", "Indigo dark"],
                  ["global.color.brand.indigo.10", "#f3f3ff", "Indigo tint bg light"],
                  ["global.color.brand.indigo.10d", "#282652", "Indigo tint bg dark"],
                  ["global.color.brand.indigo.30", "#cdc9ff", "Indigo tinted border"],
                  ["global.color.accent.orange", "#ff9500", "iOS system orange — prize pools"],
                  ["global.color.accent.orangeBg", "rgba(253,210,80,0.15)", "Prize chip bg"],
                  ["global.color.accent.green", "#34c759", "iOS system green — success"],
                  ["global.color.accent.greenBg", "#ebf9ee", "Green tint bg light"],
                  ["global.color.accent.greenBg.d", "#193920", "Green tint bg dark"],
                  ["global.color.accent.red", "#FF3B30", "iOS system red — error"],
                  ["global.color.accent.redBg", "rgba(255,59,48,0.08)", "Error tint bg"],
                  ["global.color.accent.violet", "#BC95E2", "Accent/duBrightViolet"],
                  ["global.color.accent.purple", "#9938da", "Recommended gradient end"],
                  ["global.color.contest.consensus", "#0f6771", "Consensus chip text"],
                  ["global.color.contest.consensusBg", "rgba(42,152,164,0.15)", "Consensus chip bg"],
                  ["global.color.contest.division", "#5856d6", "Division chip text (iOS indigo)"],
                  ["global.color.contest.divisionBg", "rgba(88,86,214,0.15)", "Division chip bg"],
                ].map(([token, value, notes]) => (
                  <tr key={token} style={{ borderBottom: "1px solid var(--gray-5)" }}>
                    <td className="py-2 pr-4 font-mono" style={{ color: "var(--label-primary)" }}>{token}</td>
                    <td className="py-2 pr-4 font-mono" style={{ color: "var(--label-secondary)" }}>{value}</td>
                    <td className="py-2" style={{ color: "var(--label-secondary)" }}>{notes}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Global: Spacing / Radius / Border / Opacity / Typography / Motion */}
          <div className="grid grid-cols-2 gap-8 mb-8">
            {/* Spacing Scale */}
            <div>
              <p className="text-[12px] font-semibold mb-3 uppercase tracking-wide" style={{ color: "var(--label-primary)" }}>Spacing Scale</p>
              <table className="w-full text-[12px] border-collapse">
                <thead>
                  <tr style={{ borderBottom: "2px solid var(--gray-5)" }}>
                    <th className="text-left py-1.5 pr-4 font-semibold" style={{ color: "var(--label-primary)" }}>Token</th>
                    <th className="text-left py-1.5 font-semibold" style={{ color: "var(--label-primary)" }}>Value</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ["global.spacing.4", "4pt"], ["global.spacing.8", "8pt"], ["global.spacing.12", "12pt"],
                    ["global.spacing.14", "14pt"], ["global.spacing.16", "16pt"], ["global.spacing.20", "20pt"],
                    ["global.spacing.24", "24pt"], ["global.spacing.32", "32pt"], ["global.spacing.34", "34pt (bottom safe area)"],
                  ].map(([t, v]) => (
                    <tr key={t} style={{ borderBottom: "1px solid var(--gray-5)" }}>
                      <td className="py-1.5 pr-4 font-mono" style={{ color: "var(--label-primary)" }}>{t}</td>
                      <td className="py-1.5 font-mono" style={{ color: "var(--label-secondary)" }}>{v}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Radius Scale */}
            <div>
              <p className="text-[12px] font-semibold mb-3 uppercase tracking-wide" style={{ color: "var(--label-primary)" }}>Radius Scale</p>
              <table className="w-full text-[12px] border-collapse">
                <thead>
                  <tr style={{ borderBottom: "2px solid var(--gray-5)" }}>
                    <th className="text-left py-1.5 pr-4 font-semibold" style={{ color: "var(--label-primary)" }}>Token</th>
                    <th className="text-left py-1.5 pr-4 font-semibold" style={{ color: "var(--label-primary)" }}>Value</th>
                    <th className="text-left py-1.5 font-semibold" style={{ color: "var(--label-primary)" }}>Notes</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ["global.radius.4", "4pt", "Icon tile sm"],
                    ["global.radius.5", "5pt", "Contest summary card"],
                    ["global.radius.8", "8pt", "CTA button"],
                    ["global.radius.10", "10pt", "Input field"],
                    ["global.radius.12", "12pt", "Standard card"],
                    ["global.radius.24", "24pt", "Bottom sheet top corners"],
                    ["global.radius.full", "9999pt", "Pills, circles"],
                    ["global.radius.continuous.sm", "8pt", "Continuous (squircle) small"],
                    ["global.radius.continuous.md", "12pt", "Continuous medium"],
                    ["global.radius.continuous.lg", "24pt", "Continuous large"],
                  ].map(([t, v, n]) => (
                    <tr key={t} style={{ borderBottom: "1px solid var(--gray-5)" }}>
                      <td className="py-1.5 pr-4 font-mono" style={{ color: "var(--label-primary)" }}>{t}</td>
                      <td className="py-1.5 pr-4 font-mono" style={{ color: "var(--label-secondary)" }}>{v}</td>
                      <td className="py-1.5" style={{ color: "var(--label-secondary)" }}>{n}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-8 mb-8">
            {/* Border Width */}
            <div>
              <p className="text-[12px] font-semibold mb-3 uppercase tracking-wide" style={{ color: "var(--label-primary)" }}>Border Width</p>
              <table className="w-full text-[12px] border-collapse">
                <tbody>
                  {[
                    ["global.border.hairline", "0.5pt"],
                    ["global.border.default", "1pt"],
                    ["global.border.emphasis", "2pt"],
                  ].map(([t, v]) => (
                    <tr key={t} style={{ borderBottom: "1px solid var(--gray-5)" }}>
                      <td className="py-1.5 pr-4 font-mono" style={{ color: "var(--label-primary)" }}>{t}</td>
                      <td className="py-1.5 font-mono" style={{ color: "var(--label-secondary)" }}>{v}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Opacity Scale */}
            <div>
              <p className="text-[12px] font-semibold mb-3 uppercase tracking-wide" style={{ color: "var(--label-primary)" }}>Opacity Scale</p>
              <table className="w-full text-[12px] border-collapse">
                <tbody>
                  {[
                    ["global.opacity.08", "0.08"],
                    ["global.opacity.12", "0.12"],
                    ["global.opacity.18", "0.18"],
                    ["global.opacity.20", "0.20"],
                    ["global.opacity.30", "0.30"],
                    ["global.opacity.60", "0.60"],
                    ["global.opacity.100", "1.0"],
                  ].map(([t, v]) => (
                    <tr key={t} style={{ borderBottom: "1px solid var(--gray-5)" }}>
                      <td className="py-1.5 pr-4 font-mono" style={{ color: "var(--label-primary)" }}>{t}</td>
                      <td className="py-1.5 font-mono" style={{ color: "var(--label-secondary)" }}>{v}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-8 mb-8">
            {/* Typography tokens */}
            <div>
              <p className="text-[12px] font-semibold mb-3 uppercase tracking-wide" style={{ color: "var(--label-primary)" }}>Typography</p>
              <table className="w-full text-[12px] border-collapse">
                <tbody>
                  {[
                    ["global.font.family.sfPro", "SF Pro"],
                    ["global.font.family.sfProDisplay", "SF Pro Display"],
                    ["global.font.weight.regular", "400"],
                    ["global.font.weight.medium", "500"],
                    ["global.font.weight.semibold", "590"],
                    ["global.font.weight.bold", "700"],
                    ["global.font.size.10", "10pt"],
                    ["global.font.size.11", "11pt"],
                    ["global.font.size.12", "12pt"],
                    ["global.font.size.13", "13pt"],
                    ["global.font.size.14", "14pt"],
                    ["global.font.size.15", "15pt"],
                    ["global.font.size.17", "17pt"],
                    ["global.font.size.20", "20pt"],
                    ["global.font.size.22", "22pt"],
                    ["global.font.size.28", "28pt"],
                    ["global.font.size.34", "34pt"],
                  ].map(([t, v]) => (
                    <tr key={t} style={{ borderBottom: "1px solid var(--gray-5)" }}>
                      <td className="py-1.5 pr-4 font-mono" style={{ color: "var(--label-primary)" }}>{t}</td>
                      <td className="py-1.5 font-mono" style={{ color: "var(--label-secondary)" }}>{v}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Motion */}
            <div>
              <p className="text-[12px] font-semibold mb-3 uppercase tracking-wide" style={{ color: "var(--label-primary)" }}>Motion</p>
              <table className="w-full text-[12px] border-collapse">
                <tbody>
                  {[
                    ["global.motion.duration.fast", "200ms"],
                    ["global.motion.duration.base", "300ms"],
                    ["global.motion.duration.slow", "500ms"],
                    ["global.motion.easing.spring", "cubic-bezier(0.22, 1, 0.36, 1)"],
                    ["global.motion.easing.easeOut", "ease-out"],
                  ].map(([t, v]) => (
                    <tr key={t} style={{ borderBottom: "1px solid var(--gray-5)" }}>
                      <td className="py-1.5 pr-4 font-mono" style={{ color: "var(--label-primary)" }}>{t}</td>
                      <td className="py-1.5 font-mono" style={{ color: "var(--label-secondary)" }}>{v}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* ── Tier 2: Semantic ── */}
          <SubHeader>Tier 2 — Semantic Tokens</SubHeader>
          <p className="text-[13px] mb-5" style={{ color: "var(--label-secondary)" }}>
            Two parallel sets: <code>semantic-light</code> and <code>semantic-dark</code>. Identical structure; values differ.
            Values annotated TBD are correct from Figma but subject to color review.
          </p>

          {/* Color — Text */}
          <p className="text-[12px] font-semibold mb-3 uppercase tracking-wide" style={{ color: "var(--label-primary)" }}>Color — Text</p>
          <div className="overflow-x-auto mb-6">
            <table className="w-full text-[12px] border-collapse">
              <thead>
                <tr style={{ borderBottom: "2px solid var(--gray-5)" }}>
                  <th className="text-left py-2 pr-4 font-semibold" style={{ color: "var(--label-primary)" }}>Token path</th>
                  <th className="text-left py-2 pr-4 font-semibold" style={{ color: "var(--label-primary)" }}>Light value</th>
                  <th className="text-left py-2 font-semibold" style={{ color: "var(--label-primary)" }}>Dark value</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["color.text.primary", "#000000", "#ffffff"],
                  ["color.text.secondary", "rgba(60,60,67,0.60)", "rgba(235,235,245,0.60)"],
                  ["color.text.tertiary", "rgba(60,60,67,0.30)", "rgba(235,235,245,0.30)"],
                  ["color.text.vibrant", "#333333", "#ffffff"],
                  ["color.text.vibrantControl", "#404040", "#bfbfbf"],
                  ["color.text.onColor", "#ffffff", "#ffffff"],
                  ["color.text.pageTitle", "#3e4546", "TBD"],
                ].map(([t, light, dark]) => (
                  <tr key={t} style={{ borderBottom: "1px solid var(--gray-5)" }}>
                    <td className="py-2 pr-4 font-mono" style={{ color: "var(--label-primary)" }}>{t}</td>
                    <td className="py-2 pr-4 font-mono" style={{ color: "var(--label-secondary)" }}>{light}</td>
                    <td className="py-2 font-mono" style={{ color: "var(--label-secondary)" }}>{dark}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Color — Surface */}
          <p className="text-[12px] font-semibold mb-3 uppercase tracking-wide" style={{ color: "var(--label-primary)" }}>Color — Surface</p>
          <div className="overflow-x-auto mb-6">
            <table className="w-full text-[12px] border-collapse">
              <thead>
                <tr style={{ borderBottom: "2px solid var(--gray-5)" }}>
                  <th className="text-left py-2 pr-4 font-semibold" style={{ color: "var(--label-primary)" }}>Token path</th>
                  <th className="text-left py-2 pr-4 font-semibold" style={{ color: "var(--label-primary)" }}>Light value</th>
                  <th className="text-left py-2 font-semibold" style={{ color: "var(--label-primary)" }}>Dark value</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["color.surface.default", "#ffffff", "#000000"],
                  ["color.surface.grouped", "#f2f2f7", "#000000"],
                  ["color.surface.elevated", "#ffffff", "#1c1c1e"],
                  ["color.surface.card", "#ffffff", "#1c1c1e"],
                  ["color.surface.overlay", "rgba(0,0,0,0.50)", "rgba(0,0,0,0.50)"],
                ].map(([t, light, dark]) => (
                  <tr key={t} style={{ borderBottom: "1px solid var(--gray-5)" }}>
                    <td className="py-2 pr-4 font-mono" style={{ color: "var(--label-primary)" }}>{t}</td>
                    <td className="py-2 pr-4 font-mono" style={{ color: "var(--label-secondary)" }}>{light}</td>
                    <td className="py-2 font-mono" style={{ color: "var(--label-secondary)" }}>{dark}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Color — Border */}
          <p className="text-[12px] font-semibold mb-3 uppercase tracking-wide" style={{ color: "var(--label-primary)" }}>Color — Border</p>
          <div className="overflow-x-auto mb-6">
            <table className="w-full text-[12px] border-collapse">
              <thead>
                <tr style={{ borderBottom: "2px solid var(--gray-5)" }}>
                  <th className="text-left py-2 pr-4 font-semibold" style={{ color: "var(--label-primary)" }}>Token path</th>
                  <th className="text-left py-2 pr-4 font-semibold" style={{ color: "var(--label-primary)" }}>Light value</th>
                  <th className="text-left py-2 font-semibold" style={{ color: "var(--label-primary)" }}>Dark value</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["color.border.default", "#e5e5ea", "#2c2c2e"],
                  ["color.border.separator", "#e5e5ea", "#2c2c2e"],
                ].map(([t, light, dark]) => (
                  <tr key={t} style={{ borderBottom: "1px solid var(--gray-5)" }}>
                    <td className="py-2 pr-4 font-mono" style={{ color: "var(--label-primary)" }}>{t}</td>
                    <td className="py-2 pr-4 font-mono" style={{ color: "var(--label-secondary)" }}>{light}</td>
                    <td className="py-2 font-mono" style={{ color: "var(--label-secondary)" }}>{dark}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Color — Interactive / Accent */}
          <p className="text-[12px] font-semibold mb-3 uppercase tracking-wide" style={{ color: "var(--label-primary)" }}>Color — Interactive / Accent</p>
          <div className="overflow-x-auto mb-6">
            <table className="w-full text-[12px] border-collapse">
              <thead>
                <tr style={{ borderBottom: "2px solid var(--gray-5)" }}>
                  <th className="text-left py-2 pr-4 font-semibold" style={{ color: "var(--label-primary)" }}>Token path</th>
                  <th className="text-left py-2 pr-4 font-semibold" style={{ color: "var(--label-primary)" }}>Light value</th>
                  <th className="text-left py-2 pr-4 font-semibold" style={{ color: "var(--label-primary)" }}>Dark value</th>
                  <th className="text-left py-2 font-semibold" style={{ color: "var(--label-primary)" }}>Notes</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["color.tint.default", "#4dc3d0", "#4dc3d0", "TBD — Core/primary, tab active, display accent"],
                  ["color.accent.teal", "#00c3d0", "#00d2e0", "TBD — UI teal (non-Earn contexts)"],
                  ["color.accent.earnTeal", "#006A65", "#006A65", "Earn Mode identity — text/icon"],
                  ["color.accent.earnTealBg", "rgba(56,220,209,0.10)", "rgba(56,220,209,0.10)", "Earn teal fills"],
                  ["color.interactive.primaryDefault", "#6155f5", "#6d7cff", "TBD — All primary CTAs"],
                  ["color.interactive.indigoBg", "#f3f3ff", "#282652", "Indigo tinted bg"],
                  ["color.interactive.indigoBorder", "#cdc9ff", "#282652", "Indigo tinted border"],
                ].map(([t, light, dark, notes]) => (
                  <tr key={t} style={{ borderBottom: "1px solid var(--gray-5)" }}>
                    <td className="py-2 pr-4 font-mono" style={{ color: "var(--label-primary)" }}>{t}</td>
                    <td className="py-2 pr-4 font-mono" style={{ color: "var(--label-secondary)" }}>{light}</td>
                    <td className="py-2 pr-4 font-mono" style={{ color: "var(--label-secondary)" }}>{dark}</td>
                    <td className="py-2" style={{ color: "var(--label-secondary)" }}>{notes}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Color — Fill */}
          <p className="text-[12px] font-semibold mb-3 uppercase tracking-wide" style={{ color: "var(--label-primary)" }}>Color — Fill</p>
          <div className="overflow-x-auto mb-6">
            <table className="w-full text-[12px] border-collapse">
              <thead>
                <tr style={{ borderBottom: "2px solid var(--gray-5)" }}>
                  <th className="text-left py-2 pr-4 font-semibold" style={{ color: "var(--label-primary)" }}>Token path</th>
                  <th className="text-left py-2 pr-4 font-semibold" style={{ color: "var(--label-primary)" }}>Light value</th>
                  <th className="text-left py-2 font-semibold" style={{ color: "var(--label-primary)" }}>Dark value</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["color.fill.quaternary", "rgba(116,116,128,0.08)", "rgba(118,118,128,0.18)"],
                  ["color.fill.vibrantTertiary", "#ededed", "TBD"],
                ].map(([t, light, dark]) => (
                  <tr key={t} style={{ borderBottom: "1px solid var(--gray-5)" }}>
                    <td className="py-2 pr-4 font-mono" style={{ color: "var(--label-primary)" }}>{t}</td>
                    <td className="py-2 pr-4 font-mono" style={{ color: "var(--label-secondary)" }}>{light}</td>
                    <td className="py-2 font-mono" style={{ color: "var(--label-secondary)" }}>{dark}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Color — Status */}
          <p className="text-[12px] font-semibold mb-3 uppercase tracking-wide" style={{ color: "var(--label-primary)" }}>Color — Status</p>
          <div className="overflow-x-auto mb-6">
            <table className="w-full text-[12px] border-collapse">
              <thead>
                <tr style={{ borderBottom: "2px solid var(--gray-5)" }}>
                  <th className="text-left py-2 pr-4 font-semibold" style={{ color: "var(--label-primary)" }}>Token path</th>
                  <th className="text-left py-2 pr-4 font-semibold" style={{ color: "var(--label-primary)" }}>Light value</th>
                  <th className="text-left py-2 font-semibold" style={{ color: "var(--label-primary)" }}>Dark value</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["color.status.success", "#34c759", "#34c759"],
                  ["color.status.successBg", "#ebf9ee", "#193920"],
                  ["color.status.error", "#FF3B30", "#FF3B30"],
                  ["color.status.errorBg", "rgba(255,59,48,0.08)", "rgba(255,59,48,0.08)"],
                  ["color.status.warning", "#ff9500", "#ff9500"],
                ].map(([t, light, dark]) => (
                  <tr key={t} style={{ borderBottom: "1px solid var(--gray-5)" }}>
                    <td className="py-2 pr-4 font-mono" style={{ color: "var(--label-primary)" }}>{t}</td>
                    <td className="py-2 pr-4 font-mono" style={{ color: "var(--label-secondary)" }}>{light}</td>
                    <td className="py-2 font-mono" style={{ color: "var(--label-secondary)" }}>{dark}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Color — Contest-Specific */}
          <p className="text-[12px] font-semibold mb-3 uppercase tracking-wide" style={{ color: "var(--label-primary)" }}>Color — Contest-Specific</p>
          <div className="overflow-x-auto mb-6">
            <table className="w-full text-[12px] border-collapse">
              <thead>
                <tr style={{ borderBottom: "2px solid var(--gray-5)" }}>
                  <th className="text-left py-2 pr-4 font-semibold" style={{ color: "var(--label-primary)" }}>Token path</th>
                  <th className="text-left py-2 pr-4 font-semibold" style={{ color: "var(--label-primary)" }}>Light value</th>
                  <th className="text-left py-2 pr-4 font-semibold" style={{ color: "var(--label-primary)" }}>Dark value</th>
                  <th className="text-left py-2 font-semibold" style={{ color: "var(--label-primary)" }}>Notes</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["color.contest.prize", "#ff9500", "#ff9500", "Prize pool chip text"],
                  ["color.contest.prizeBg", "rgba(253,210,80,0.15)", "rgba(253,210,80,0.15)", "Prize chip bg"],
                  ["color.contest.consensus", "#0f6771", "TBD", "Consensus chip text"],
                  ["color.contest.consensusBg", "rgba(42,152,164,0.15)", "TBD", "Consensus chip bg"],
                  ["color.contest.division", "#5856d6", "#5856d6", "Division chip text"],
                  ["color.contest.divisionBg", "rgba(88,86,214,0.15)", "rgba(88,86,214,0.15)", "Division chip bg"],
                ].map(([t, light, dark, notes]) => (
                  <tr key={t} style={{ borderBottom: "1px solid var(--gray-5)" }}>
                    <td className="py-2 pr-4 font-mono" style={{ color: "var(--label-primary)" }}>{t}</td>
                    <td className="py-2 pr-4 font-mono" style={{ color: "var(--label-secondary)" }}>{light}</td>
                    <td className="py-2 pr-4 font-mono" style={{ color: "var(--label-secondary)" }}>{dark}</td>
                    <td className="py-2" style={{ color: "var(--label-secondary)" }}>{notes}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Spacing — Semantic Roles */}
          <p className="text-[12px] font-semibold mb-3 uppercase tracking-wide" style={{ color: "var(--label-primary)" }}>Spacing — Semantic Roles</p>
          <div className="overflow-x-auto mb-6">
            <table className="w-full text-[12px] border-collapse">
              <thead>
                <tr style={{ borderBottom: "2px solid var(--gray-5)" }}>
                  <th className="text-left py-2 pr-4 font-semibold" style={{ color: "var(--label-primary)" }}>Token path</th>
                  <th className="text-left py-2 pr-4 font-semibold" style={{ color: "var(--label-primary)" }}>Value</th>
                  <th className="text-left py-2 font-semibold" style={{ color: "var(--label-primary)" }}>Usage</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["spacing.layout.horizontal", "16pt", "Screen horizontal padding"],
                  ["spacing.layout.gap.section", "20pt", "Between sections"],
                  ["spacing.component.gap.sm", "4pt", "Tight list item gap"],
                  ["spacing.component.gap.md", "8pt", "Standard list item gap"],
                  ["spacing.component.gap.lg", "16pt", "Section inner gap"],
                  ["spacing.component.padding.sm", "12pt", "Compact card padding"],
                  ["spacing.component.padding.md", "14pt", "CTA button vertical padding"],
                  ["spacing.component.padding.lg", "16pt", "Featured card padding"],
                  ["spacing.component.padding.xl", "24pt", "CTA button horizontal padding"],
                ].map(([t, v, u]) => (
                  <tr key={t} style={{ borderBottom: "1px solid var(--gray-5)" }}>
                    <td className="py-2 pr-4 font-mono" style={{ color: "var(--label-primary)" }}>{t}</td>
                    <td className="py-2 pr-4 font-mono" style={{ color: "var(--label-secondary)" }}>{v}</td>
                    <td className="py-2" style={{ color: "var(--label-secondary)" }}>{u}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Radius — Semantic Roles */}
          <p className="text-[12px] font-semibold mb-3 uppercase tracking-wide" style={{ color: "var(--label-primary)" }}>Radius — Semantic Roles</p>
          <div className="overflow-x-auto mb-6">
            <table className="w-full text-[12px] border-collapse">
              <thead>
                <tr style={{ borderBottom: "2px solid var(--gray-5)" }}>
                  <th className="text-left py-2 pr-4 font-semibold" style={{ color: "var(--label-primary)" }}>Token path</th>
                  <th className="text-left py-2 pr-4 font-semibold" style={{ color: "var(--label-primary)" }}>Value</th>
                  <th className="text-left py-2 font-semibold" style={{ color: "var(--label-primary)" }}>Usage</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["radius.sm", "5pt", "Contest browse card"],
                  ["radius.md", "8pt", "CTA button, icon tile"],
                  ["radius.lg", "12pt", "Standard card, step card"],
                  ["radius.xl", "24pt", "Bottom sheet top corners"],
                  ["radius.full", "9999pt", "Pills, chip badges, progress bar, circles"],
                  ["radius.continuous.md", "12pt", "Prominent surfaces — squircle"],
                  ["radius.continuous.lg", "24pt", "Sheet/modal — squircle"],
                ].map(([t, v, u]) => (
                  <tr key={t} style={{ borderBottom: "1px solid var(--gray-5)" }}>
                    <td className="py-2 pr-4 font-mono" style={{ color: "var(--label-primary)" }}>{t}</td>
                    <td className="py-2 pr-4 font-mono" style={{ color: "var(--label-secondary)" }}>{v}</td>
                    <td className="py-2" style={{ color: "var(--label-secondary)" }}>{u}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Typography — Semantic Roles */}
          <p className="text-[12px] font-semibold mb-3 uppercase tracking-wide" style={{ color: "var(--label-primary)" }}>Typography — Semantic Roles</p>
          <div className="overflow-x-auto mb-8">
            <table className="w-full text-[12px] border-collapse">
              <thead>
                <tr style={{ borderBottom: "2px solid var(--gray-5)" }}>
                  <th className="text-left py-2 pr-4 font-semibold" style={{ color: "var(--label-primary)" }}>Token path</th>
                  <th className="text-left py-2 pr-4 font-semibold" style={{ color: "var(--label-primary)" }}>Size</th>
                  <th className="text-left py-2 pr-4 font-semibold" style={{ color: "var(--label-primary)" }}>Weight</th>
                  <th className="text-left py-2 pr-4 font-semibold" style={{ color: "var(--label-primary)" }}>Line Height</th>
                  <th className="text-left py-2 font-semibold" style={{ color: "var(--label-primary)" }}>Tracking</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["typography.largeTitle", "34pt", "700", "41", "+0.37"],
                  ["typography.title1", "28pt", "700", "34", "+0.36"],
                  ["typography.title2", "22pt", "700", "28", "+0.35"],
                  ["typography.displayMd", "20pt", "500", "24", "0"],
                  ["typography.headline", "17pt", "590", "22", "-0.43"],
                  ["typography.body", "17pt", "400", "22", "-0.43"],
                  ["typography.bodyEmphasized", "17pt", "590", "22", "-0.43"],
                  ["typography.subheadline", "15pt", "400", "20", "-0.23"],
                  ["typography.subheadlineEmphasized", "15pt", "590", "20", "-0.23"],
                  ["typography.footnote", "13pt", "400", "18", "-0.08"],
                  ["typography.caption1", "12pt", "400", "16", "0"],
                  ["typography.caption2", "11pt", "400", "13", "+0.06"],
                  ["typography.caption2Emphasized", "11pt", "590", "13", "+0.06"],
                  ["typography.tabLabel", "10pt", "590", "12", "0"],
                ].map(([t, size, weight, lh, tracking]) => (
                  <tr key={t} style={{ borderBottom: "1px solid var(--gray-5)" }}>
                    <td className="py-2 pr-4 font-mono" style={{ color: "var(--label-primary)" }}>{t}</td>
                    <td className="py-2 pr-4 font-mono" style={{ color: "var(--label-secondary)" }}>{size}</td>
                    <td className="py-2 pr-4 font-mono" style={{ color: "var(--label-secondary)" }}>{weight}</td>
                    <td className="py-2 pr-4 font-mono" style={{ color: "var(--label-secondary)" }}>{lh}</td>
                    <td className="py-2 font-mono" style={{ color: "var(--label-secondary)" }}>{tracking}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* ── Tier 3: Element ── */}
          <SubHeader>Tier 3 — Element Tokens</SubHeader>
          <p className="text-[13px] mb-5" style={{ color: "var(--label-secondary)" }}>
            Single set. Inherits light/dark from the semantic tier. Path structure: <code>element.component.property.state</code>
          </p>

          {/* button */}
          <p className="text-[12px] font-semibold mb-3 uppercase tracking-wide" style={{ color: "var(--label-primary)" }}>button</p>
          <div className="overflow-x-auto mb-6">
            <table className="w-full text-[12px] border-collapse">
              <thead>
                <tr style={{ borderBottom: "2px solid var(--gray-5)" }}>
                  <th className="text-left py-2 pr-4 font-semibold" style={{ color: "var(--label-primary)" }}>Token</th>
                  <th className="text-left py-2 font-semibold" style={{ color: "var(--label-primary)" }}>Semantic reference</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["button.primary.backgroundColor.default", "color.interactive.primaryDefault"],
                  ["button.primary.backgroundColor.pressed", "color.interactive.primaryDefault @ opacity.60"],
                  ["button.primary.backgroundColor.disabled", "color.interactive.primaryDefault @ opacity.30"],
                  ["button.primary.textColor.default", "color.text.onColor"],
                  ["button.primary.borderRadius", "radius.md"],
                  ["button.primary.paddingVertical", "spacing.component.padding.md"],
                  ["button.primary.paddingHorizontal", "spacing.component.padding.xl"],
                  ["button.primary.minHeight", "52pt"],
                  ["button.secondary.borderColor.default", "color.interactive.primaryDefault"],
                  ["button.secondary.textColor.default", "color.interactive.primaryDefault"],
                  ["button.secondary.backgroundColor.default", "color.surface.default"],
                ].map(([t, ref]) => (
                  <tr key={t} style={{ borderBottom: "1px solid var(--gray-5)" }}>
                    <td className="py-2 pr-4 font-mono" style={{ color: "var(--label-primary)" }}>{t}</td>
                    <td className="py-2 font-mono" style={{ color: "var(--label-secondary)" }}>{ref}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* card */}
          <p className="text-[12px] font-semibold mb-3 uppercase tracking-wide" style={{ color: "var(--label-primary)" }}>card</p>
          <div className="overflow-x-auto mb-6">
            <table className="w-full text-[12px] border-collapse">
              <thead>
                <tr style={{ borderBottom: "2px solid var(--gray-5)" }}>
                  <th className="text-left py-2 pr-4 font-semibold" style={{ color: "var(--label-primary)" }}>Token</th>
                  <th className="text-left py-2 font-semibold" style={{ color: "var(--label-primary)" }}>Semantic reference</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["card.default.backgroundColor", "color.surface.card"],
                  ["card.default.borderColor", "color.border.default"],
                  ["card.default.borderWidth", "global.border.default"],
                  ["card.default.borderRadius", "radius.lg"],
                  ["card.default.paddingVertical", "spacing.component.padding.sm"],
                  ["card.default.paddingHorizontal", "spacing.component.padding.sm"],
                  ["card.featured.backgroundColor", "color.accent.earnTealBg (Earn) / color.interactive.indigoBg"],
                  ["card.featured.borderRadius", "radius.lg"],
                  ["card.contest.backgroundColor", "color.surface.default"],
                  ["card.contest.borderRadius", "radius.sm"],
                  ["card.contest.elevation", "0px 1px 4px rgba(0,0,0,0.25)"],
                  ["card.contest.recommended.borderColor", "color.surface.default"],
                  ["card.contest.recommended.elevation", "0px 0px 6px 1px #3499a4 (TBD)"],
                ].map(([t, ref]) => (
                  <tr key={t} style={{ borderBottom: "1px solid var(--gray-5)" }}>
                    <td className="py-2 pr-4 font-mono" style={{ color: "var(--label-primary)" }}>{t}</td>
                    <td className="py-2 font-mono" style={{ color: "var(--label-secondary)" }}>{ref}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* chip */}
          <p className="text-[12px] font-semibold mb-3 uppercase tracking-wide" style={{ color: "var(--label-primary)" }}>chip</p>
          <div className="overflow-x-auto mb-6">
            <table className="w-full text-[12px] border-collapse">
              <thead>
                <tr style={{ borderBottom: "2px solid var(--gray-5)" }}>
                  <th className="text-left py-2 pr-4 font-semibold" style={{ color: "var(--label-primary)" }}>Token</th>
                  <th className="text-left py-2 font-semibold" style={{ color: "var(--label-primary)" }}>Semantic reference</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["chip.filter.active.backgroundColor", "color.accent.teal (TBD confirm)"],
                  ["chip.filter.active.textColor", "color.text.onColor"],
                  ["chip.filter.inactive.backgroundColor", "color.fill.quaternary"],
                  ["chip.filter.inactive.textColor", "color.text.vibrant"],
                  ["chip.filter.borderRadius", "radius.md"],
                  ["chip.mode.earn.backgroundColor", "color.accent.earnTeal"],
                  ["chip.mode.earn.textColor", "color.text.onColor"],
                  ["chip.mode.indigo.backgroundColor", "color.interactive.primaryDefault"],
                  ["chip.mode.indigo.textColor", "color.text.onColor"],
                  ["chip.prize.backgroundColor", "color.contest.prizeBg"],
                  ["chip.prize.textColor", "color.contest.prize"],
                  ["chip.consensus.backgroundColor", "color.contest.consensusBg"],
                  ["chip.consensus.textColor", "color.contest.consensus"],
                  ["chip.division.backgroundColor", "color.contest.divisionBg"],
                  ["chip.division.textColor", "color.contest.division"],
                  ["chip.status.backgroundColor", "color.interactive.indigoBg"],
                  ["chip.status.textColor", "color.interactive.primaryDefault"],
                ].map(([t, ref]) => (
                  <tr key={t} style={{ borderBottom: "1px solid var(--gray-5)" }}>
                    <td className="py-2 pr-4 font-mono" style={{ color: "var(--label-primary)" }}>{t}</td>
                    <td className="py-2 font-mono" style={{ color: "var(--label-secondary)" }}>{ref}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* navigationBar + tabBar side by side */}
          <div className="grid grid-cols-2 gap-8 mb-6">
            <div>
              <p className="text-[12px] font-semibold mb-3 uppercase tracking-wide" style={{ color: "var(--label-primary)" }}>navigationBar</p>
              <table className="w-full text-[12px] border-collapse">
                <tbody>
                  {[
                    ["navigationBar.backgroundColor.default", "color.surface.default"],
                    ["navigationBar.titleColor", "color.text.vibrant"],
                    ["navigationBar.borderColor", "color.border.separator"],
                    ["navigationBar.backIconColor", "color.interactive.primaryDefault"],
                  ].map(([t, ref]) => (
                    <tr key={t} style={{ borderBottom: "1px solid var(--gray-5)" }}>
                      <td className="py-1.5 pr-3 font-mono" style={{ color: "var(--label-primary)", fontSize: "11px" }}>{t}</td>
                      <td className="py-1.5 font-mono" style={{ color: "var(--label-secondary)", fontSize: "11px" }}>{ref}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div>
              <p className="text-[12px] font-semibold mb-3 uppercase tracking-wide" style={{ color: "var(--label-primary)" }}>tabBar</p>
              <table className="w-full text-[12px] border-collapse">
                <tbody>
                  {[
                    ["tabBar.backgroundColor", "color.surface.default"],
                    ["tabBar.iconColor.active", "color.tint.default"],
                    ["tabBar.iconColor.inactive", "color.text.vibrantControl"],
                    ["tabBar.labelColor.active", "color.tint.default"],
                    ["tabBar.labelColor.inactive", "color.text.vibrantControl"],
                    ["tabBar.selectionBg", "color.fill.vibrantTertiary"],
                    ["tabBar.blur.default", "blur.regular"],
                  ].map(([t, ref]) => (
                    <tr key={t} style={{ borderBottom: "1px solid var(--gray-5)" }}>
                      <td className="py-1.5 pr-3 font-mono" style={{ color: "var(--label-primary)", fontSize: "11px" }}>{t}</td>
                      <td className="py-1.5 font-mono" style={{ color: "var(--label-secondary)", fontSize: "11px" }}>{ref}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* sheet + progressBar side by side */}
          <div className="grid grid-cols-2 gap-8 mb-6">
            <div>
              <p className="text-[12px] font-semibold mb-3 uppercase tracking-wide" style={{ color: "var(--label-primary)" }}>sheet</p>
              <table className="w-full text-[12px] border-collapse">
                <tbody>
                  {[
                    ["sheet.backgroundColor", "color.surface.default"],
                    ["sheet.borderRadius.top", "radius.xl"],
                    ["sheet.handle.color", "color.border.separator"],
                    ["sheet.handle.width", "32pt"],
                    ["sheet.handle.height", "4pt"],
                    ["sheet.blur.default", "blur.regular"],
                  ].map(([t, ref]) => (
                    <tr key={t} style={{ borderBottom: "1px solid var(--gray-5)" }}>
                      <td className="py-1.5 pr-3 font-mono" style={{ color: "var(--label-primary)", fontSize: "11px" }}>{t}</td>
                      <td className="py-1.5 font-mono" style={{ color: "var(--label-secondary)", fontSize: "11px" }}>{ref}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div>
              <p className="text-[12px] font-semibold mb-3 uppercase tracking-wide" style={{ color: "var(--label-primary)" }}>progressBar</p>
              <table className="w-full text-[12px] border-collapse">
                <tbody>
                  {[
                    ["progressBar.height", "4pt"],
                    ["progressBar.borderRadius", "radius.full"],
                    ["progressBar.trackColor", "color.fill.quaternary"],
                    ["progressBar.fillColor.earn", "color.accent.teal (TBD — light: #00c7be)"],
                    ["progressBar.fillColor.indigo", "color.interactive.primaryDefault"],
                  ].map(([t, ref]) => (
                    <tr key={t} style={{ borderBottom: "1px solid var(--gray-5)" }}>
                      <td className="py-1.5 pr-3 font-mono" style={{ color: "var(--label-primary)", fontSize: "11px" }}>{t}</td>
                      <td className="py-1.5 font-mono" style={{ color: "var(--label-secondary)", fontSize: "11px" }}>{ref}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* iconBubble */}
          <p className="text-[12px] font-semibold mb-3 uppercase tracking-wide" style={{ color: "var(--label-primary)" }}>iconBubble</p>
          <div className="overflow-x-auto mb-2">
            <table className="w-full text-[12px] border-collapse">
              <thead>
                <tr style={{ borderBottom: "2px solid var(--gray-5)" }}>
                  <th className="text-left py-2 pr-4 font-semibold" style={{ color: "var(--label-primary)" }}>Token</th>
                  <th className="text-left py-2 font-semibold" style={{ color: "var(--label-primary)" }}>Semantic reference</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["iconBubble.sm.size", "24pt"],
                  ["iconBubble.sm.borderRadius", "radius.full"],
                  ["iconBubble.sm.backgroundColor.earn", "color.accent.earnTealBg"],
                  ["iconBubble.sm.iconColor.earn", "color.accent.earnTeal"],
                  ["iconBubble.md.size", "32pt"],
                  ["iconBubble.lg.size", "40pt"],
                  ["iconBubble.hero.size", "64pt"],
                  ["iconBubble.heroMax.size", "80pt"],
                  ["iconBubble.heroMax.backgroundColor", "color.accent.earnTeal"],
                  ["iconBubble.heroMax.iconColor", "color.text.onColor"],
                ].map(([t, ref]) => (
                  <tr key={t} style={{ borderBottom: "1px solid var(--gray-5)" }}>
                    <td className="py-2 pr-4 font-mono" style={{ color: "var(--label-primary)" }}>{t}</td>
                    <td className="py-2 font-mono" style={{ color: "var(--label-secondary)" }}>{ref}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* ── COLORS ── */}
        <section id="colors" className="mb-16">
          <SectionHeader id="colors">Colors</SectionHeader>

          <SubHeader>iOS System Labels</SubHeader>
          <div className="grid grid-cols-3 gap-4 mb-8">
            <Swatch bg="#000000" name="Labels / Primary" hex="#000000" />
            <Swatch bg="rgba(60,60,67,0.60)" name="Labels / Secondary" hex="rgba(60,60,67,0.60)" />
            <Swatch bg="rgba(60,60,67,0.30)" name="Labels / Tertiary" hex="rgba(60,60,67,0.30)" />
          </div>

          <SubHeader>iOS System Fills & Grays</SubHeader>
          <div className="grid grid-cols-4 gap-4 mb-8">
            <Swatch bg="rgba(116,116,128,0.08)" name="Fills / Quaternary" hex="rgba(116,116,128,0.08)" />
            <Swatch bg="#e5e5ea" name="Grays / Gray 5" hex="#e5e5ea" />
            <Swatch bg="#f2f2f7" name="Grays / Gray 6" hex="#f2f2f7" />
            <Swatch bg="#ffffff" name="Grays / White" hex="#ffffff" />
          </div>

          <SubHeader>DiagnosUs Brand — Teal (Earn Mode)</SubHeader>
          <div className="grid grid-cols-4 gap-4 mb-8">
            <Swatch bg="#4DC3D0" name="Earn Teal" hex="#4DC3D0 (--earn-teal)" />
            <Swatch bg="#00c3d0" name="Earn Teal Deep" hex="#00c3d0 (--earn-teal-deep)" />
            <Swatch bg="rgba(77,195,208,0.10)" name="Earn Teal 10%" hex="rgba(77,195,208,0.10) (--earn-teal-10)" />
            <div />
          </div>

          <SubHeader>DiagnosUs Brand — Indigo (App Primary)</SubHeader>
          <div className="grid grid-cols-4 gap-4 mb-8">
            <Swatch bg="#6155f5" name="Earn Indigo" hex="#6155f5 (--earn-indigo)" />
            <Swatch bg="#f3f3ff" name="Earn Indigo 10%" hex="#f3f3ff (--earn-indigo-10)" />
            <Swatch bg="#cdc9ff" name="Earn Indigo 30%" hex="#cdc9ff (--earn-indigo-30)" />
            <div />
          </div>

          <SubHeader>Feedback States</SubHeader>
          <div className="grid grid-cols-4 gap-4 mb-8">
            <Swatch bg="#FF3B30" name="Earn Red" hex="#FF3B30 (--earn-red)" />
            <Swatch bg="rgba(255,59,48,0.08)" name="Earn Red 10%" hex="rgba(255,59,48,0.08) (--earn-red-10)" />
            <Swatch bg="#34c759" name="Accents / Green" hex="#34c759" />
            <Swatch bg="#ebf9ee" name="Green 10%" hex="#ebf9ee" />
          </div>

          <SubHeader>Contest Mode Colors</SubHeader>
          <div className="grid grid-cols-4 gap-4">
            <Swatch bg="#4DC3D0" name="Earn Mode" hex="#4DC3D0" />
            <Swatch bg="#6155f5" name="Accuracy" hex="#6155f5" />
            <Swatch bg="#FF9500" name="Streak" hex="#FF9500" />
            <Swatch bg="#F5A623" name="Prize" hex="#F5A623" />
          </div>
        </section>

        {/* ── TYPOGRAPHY ── */}
        <section id="typography" className="mb-16">
          <SectionHeader id="typography">Typography</SectionHeader>

          <div
            className="text-[12px] font-semibold px-3 py-2 rounded-lg mb-6"
            style={{ background: "var(--earn-indigo-10)", color: "var(--earn-indigo)" }}
          >
            Font: SF Pro · Use <code>-apple-system, BlinkMacSystemFont</code> as web fallback. Weight 590 = Semibold in SF Pro.
          </div>

          <div style={{ fontFamily: "-apple-system, BlinkMacSystemFont, 'SF Pro', sans-serif" }}>
            <TypeRow label="Large Title" size="34px" weight="Bold" lh="41px" tracking="+0.37px" sample="All available cases read" />
            <TypeRow label="Title 1" size="28px" weight="Bold" lh="34px" tracking="+0.36px" sample="Contest Complete" />
            <TypeRow label="Title 2" size="22px" weight="Bold" lh="28px" tracking="+0.35px" sample="You've read them all" />
            <TypeRow label="Headline / Body Emphasized" size="17px" weight="Semibold" lh="22px" tracking="-0.43px" sample="Diabetic Retinopathy · Earn Mode" />
            <TypeRow label="Body" size="17px" weight="Regular" lh="22px" tracking="-0.43px" sample="Draw a bounding box around all lesions visible." />
            <TypeRow label="Subheadline Emphasized" size="15px" weight="Semibold" lh="20px" tracking="-0.23px" sample="Earned · Score: 74" />
            <TypeRow label="Subheadline" size="15px" weight="Regular" lh="20px" tracking="-0.23px" sample="More precise boxes = higher quality score" />
            <TypeRow label="Footnote" size="13px" weight="Regular" lh="18px" tracking="-0.08px" sample="4 qualified reads out of 5 total" />
            <TypeRow label="Caption 1 Regular" size="12px" weight="Regular" lh="16px" tracking="0px" sample="See full contest details, rules, and eligibility." />
            <TypeRow label="Caption 2 Emphasized" size="11px" weight="Semibold" lh="13px" tracking="+0.06px" sample="EARN MODE · 4/4 COMPLETED" />
            <TypeRow label="Caption 2 Regular" size="11px" weight="Regular" lh="13px" tracking="+0.06px" sample="Answer 53 more questions to qualify." />
          </div>
        </section>

        {/* ── SPACING & RADIUS ── */}
        <section id="spacing-radius" className="mb-16">
          <SectionHeader id="spacing-radius">Spacing & Border Radius</SectionHeader>

          <SubHeader>Spacing Scale (8pt grid)</SubHeader>
          <div className="flex items-end gap-6 mb-10">
            {[
              { label: "xs", pt: "4pt", h: "h-1" },
              { label: "sm", pt: "8pt", h: "h-2" },
              { label: "md", pt: "12pt", h: "h-3" },
              { label: "lg", pt: "16pt", h: "h-4" },
              { label: "xl", pt: "20pt", h: "h-5" },
              { label: "2xl", pt: "24pt", h: "h-6" },
              { label: "3xl", pt: "32pt", h: "h-8" },
            ].map(({ label, pt, h }) => (
              <div key={label} className="flex flex-col items-center gap-2">
                <div className={`w-6 ${h} rounded-sm`} style={{ background: "var(--earn-teal)" }} />
                <p className="text-[11px] font-semibold" style={{ color: "var(--label-primary)" }}>{label}</p>
                <p className="text-[10px] font-mono" style={{ color: "var(--label-secondary)" }}>{pt}</p>
              </div>
            ))}
          </div>

          <SubHeader>Border Radius</SubHeader>
          <div className="grid grid-cols-4 gap-6">
            {[
              { label: "CTA button", r: "8pt", style: "rounded-lg" },
              { label: "Card / Step", r: "12pt", style: "rounded-xl" },
              { label: "Featured card", r: "16pt", style: "rounded-2xl" },
              { label: "Bottom sheet", r: "24pt (top only)", style: "rounded-t-3xl" },
              { label: "Pill / Chip", r: "9999pt", style: "rounded-full" },
              { label: "Icon bubble", r: "9999pt (circle)", style: "rounded-full" },
              { label: "Icon tile", r: "8–12pt", style: "rounded-lg" },
              { label: "Progress bar", r: "9999pt", style: "rounded-full" },
            ].map(({ label, r, style }) => (
              <div key={label} className="flex flex-col gap-2">
                <div
                  className={`h-12 w-full ${style}`}
                  style={{ background: "var(--earn-indigo-10)", border: "2px solid var(--earn-indigo-30)" }}
                />
                <p className="text-[12px] font-semibold" style={{ color: "var(--label-primary)" }}>{label}</p>
                <p className="text-[11px] font-mono" style={{ color: "var(--label-secondary)" }}>{r}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── BUTTONS ── */}
        <section id="buttons" className="mb-16">
          <SectionHeader id="buttons">Buttons</SectionHeader>

          <ComponentBlock label="Primary CTA — Earn Mode (teal)">
            <button
              className="px-8 py-3 rounded-2xl text-[15px] font-semibold text-white"
              style={{ background: "var(--earn-teal)" }}
            >
              View my earnings
            </button>
            <button
              className="px-8 py-3 rounded-2xl text-[15px] font-semibold text-white"
              style={{ background: "var(--earn-teal)", opacity: 0.3 }}
            >
              Disabled
            </button>
          </ComponentBlock>

          <ComponentBlock label="Primary CTA — App (indigo)">
            <button
              className="px-8 py-3 rounded-2xl text-[15px] font-semibold text-white"
              style={{ background: "var(--earn-indigo)" }}
            >
              Compete
            </button>
            <button
              className="px-8 py-3 rounded-2xl text-[15px] font-semibold text-white"
              style={{ background: "var(--earn-indigo)", opacity: 0.3 }}
            >
              Disabled
            </button>
          </ComponentBlock>

          <ComponentBlock label="Secondary Outline">
            <button
              className="px-8 py-3 rounded-2xl text-[15px] font-semibold border"
              style={{ borderColor: "var(--earn-teal)", color: "var(--earn-teal-deep)" }}
            >
              Browse contests
            </button>
            <button
              className="px-8 py-3 rounded-2xl text-[15px] font-semibold border"
              style={{ borderColor: "var(--earn-indigo)", color: "var(--earn-indigo)" }}
            >
              View my earnings
            </button>
          </ComponentBlock>

          <ComponentBlock label="Ghost / Utility Icon Buttons (dark context)">
            <div className="flex gap-3 p-4 rounded-xl" style={{ background: "#0a0a0a" }}>
              {[MessageCircle, Flag, Eye].map((Icon, i) => (
                <button
                  key={i}
                  className="w-9 h-9 rounded-full flex items-center justify-center"
                  style={{ background: "rgba(255,255,255,0.13)" }}
                >
                  <Icon size={16} color="white" />
                </button>
              ))}
            </div>
          </ComponentBlock>

          <ComponentBlock label="Filter Pills">
            <button
              className="px-3 py-1 rounded-full text-[13px] font-medium"
              style={{ background: "var(--earn-teal)", color: "white" }}
            >
              Recommended
            </button>
            <button
              className="px-3 py-1 rounded-full text-[13px] font-medium border"
              style={{ background: "white", color: "var(--label-primary)", borderColor: "var(--gray-5)" }}
            >
              All Contests
            </button>
            <button
              className="px-3 py-1 rounded-full text-[13px] font-medium border"
              style={{ background: "white", color: "var(--label-primary)", borderColor: "var(--gray-5)" }}
            >
              Upcoming
            </button>
          </ComponentBlock>
        </section>

        {/* ── CARDS ── */}
        <section id="cards" className="mb-16">
          <SectionHeader id="cards">Cards</SectionHeader>

          <ComponentBlock label="Standard Content Card (tappable row)">
            <div
              className="w-full rounded-xl p-3 flex items-center gap-3 border"
              style={{ background: "white", borderColor: "var(--gray-5)" }}
            >
              <div
                className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0"
                style={{ background: "var(--earn-teal-10)", color: "var(--earn-teal-deep)" }}
              >
                <Trophy size={18} />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-[15px] font-semibold" style={{ color: "var(--label-primary)" }}>Rules and Prizes</p>
                <p className="text-[12px]" style={{ color: "var(--label-secondary)" }}>See full contest details, rules, and eligibility.</p>
              </div>
              <ChevronRight size={16} style={{ color: "var(--label-tertiary)", flexShrink: 0 }} />
            </div>
          </ComponentBlock>

          <ComponentBlock label="Featured Tinted Card — Earnings Summary">
            <div
              className="w-full rounded-2xl p-4"
              style={{ background: "var(--earn-teal-10)", border: "1px solid rgba(77,195,208,0.2)" }}
            >
              <p className="text-[11px] font-semibold mb-2" style={{ color: "var(--earn-teal-deep)" }}>
                DIABETIC RETINOPATHY · EARN MODE
              </p>
              <div className="flex items-center gap-3 mb-3">
                <div
                  className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ background: "var(--earn-teal)", color: "white" }}
                >
                  <Check size={18} strokeWidth={2.5} />
                </div>
                <div>
                  <p className="text-[26px] font-bold leading-none" style={{ color: "var(--earn-teal-deep)" }}>$0.12</p>
                  <p className="text-[12px] mt-0.5" style={{ color: "var(--label-secondary)" }}>earned this session</p>
                </div>
              </div>
              <div
                className="flex items-center gap-2 pt-3"
                style={{ borderTop: "1px solid rgba(77,195,208,0.2)" }}
              >
                <Trophy size={14} style={{ color: "var(--earn-teal-deep)" }} />
                <p className="text-[13px] font-semibold" style={{ color: "var(--earn-teal-deep)" }}>
                  4 qualified reads <span className="font-normal" style={{ color: "var(--label-secondary)" }}>out of 5 total</span>
                </p>
              </div>
            </div>
          </ComponentBlock>

          <ComponentBlock label="Step Cards — Locked / Completed">
            <div className="w-full flex flex-col gap-1">
              {/* Completed */}
              <div
                className="rounded-xl p-3 flex items-center gap-4 border"
                style={{ background: "white", borderColor: "var(--gray-5)" }}
              >
                <div
                  className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0"
                  style={{ background: "#ebf9ee", color: "#34c759" }}
                >
                  <Check size={13} strokeWidth={2.5} />
                </div>
                <p className="text-[15px] font-semibold" style={{ color: "var(--label-primary)" }}>Location Requirements</p>
              </div>
              {/* Locked */}
              <div
                className="rounded-xl p-3 flex items-center gap-4 border"
                style={{ background: "var(--earn-indigo-10)", borderColor: "var(--earn-indigo-30)" }}
              >
                <div
                  className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0"
                  style={{ background: "var(--earn-indigo)", color: "white" }}
                >
                  <p className="text-[12px] font-semibold leading-none">2</p>
                </div>
                <div className="flex-1">
                  <p className="text-[15px] font-semibold" style={{ color: "var(--label-primary)" }}>Business Associate Agreement</p>
                  <p className="text-[12px]" style={{ color: "var(--label-secondary)" }}>Step Description</p>
                </div>
                <ChevronRight size={16} style={{ color: "var(--label-tertiary)" }} />
              </div>
            </div>
          </ComponentBlock>

          <ComponentBlock label="Contest Browse Card">
            <div className="rounded-xl overflow-hidden border w-72" style={{ borderColor: "var(--gray-5)" }}>
              <div
                className="relative h-[140px] flex flex-col justify-end px-3 pb-3"
                style={{ background: "linear-gradient(135deg, #1a6b7a 0%, #0d4a55 100%)" }}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                <p className="relative text-white font-semibold text-[15px] leading-tight">Diabetic Retinopathy</p>
              </div>
              <div className="px-3 py-2.5 bg-white">
                <div className="flex flex-wrap gap-1.5 mb-1.5">
                  <span
                    className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[11px] font-semibold"
                    style={{ background: "var(--earn-teal-10)", color: "var(--earn-teal-deep)" }}
                  >
                    <Coins size={10} />$0.03/read
                  </span>
                  <span
                    className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[11px] font-semibold"
                    style={{ background: "var(--earn-teal)", color: "white" }}
                  >
                    <Coins size={10} />Earn Mode
                  </span>
                </div>
                <p className="text-[11px] flex items-center gap-1" style={{ color: "var(--label-secondary)" }}>
                  <Clock size={10} />Up to $20.00 · Ends in 10 hours
                </p>
              </div>
            </div>
          </ComponentBlock>
        </section>

        {/* ── CHIPS ── */}
        <section id="chips" className="mb-16">
          <SectionHeader id="chips">Chips & Badges</SectionHeader>

          <ComponentBlock label="Mode Chips (filled)">
            <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[11px] font-semibold" style={{ background: "var(--earn-teal)", color: "white" }}>
              <Coins size={10} />Earn Mode
            </span>
            <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[11px] font-semibold" style={{ background: "var(--earn-indigo)", color: "white" }}>
              Accuracy
            </span>
            <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[11px] font-semibold" style={{ background: "#FF9500", color: "white" }}>
              Streak
            </span>
          </ComponentBlock>

          <ComponentBlock label="Status / Info Badges (tinted)">
            <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[11px] font-semibold" style={{ background: "var(--earn-indigo-10)", color: "var(--earn-indigo)" }}>
              4/4 Completed
            </span>
            <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[11px] font-semibold" style={{ background: "var(--earn-teal-10)", color: "var(--earn-teal-deep)" }}>
              <Sparkles size={9} />Recommended
            </span>
            <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[11px] font-semibold" style={{ background: "var(--earn-teal-10)", color: "var(--earn-teal-deep)" }}>
              <Coins size={10} />$0.03/read
            </span>
            <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[11px] font-medium" style={{ background: "#f2f2f7", color: "var(--label-secondary)" }}>
              Prize claimed
            </span>
            <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[11px] font-semibold" style={{ background: "#f3f3ff", color: "var(--earn-indigo)" }}>
              Individual
            </span>
          </ComponentBlock>

          <ComponentBlock label="Icon Bubbles">
            {[
              { bg: "var(--earn-teal-10)", color: "var(--earn-teal-deep)", icon: <Check size={15} strokeWidth={2.5} />, label: "Earned" },
              { bg: "var(--earn-red-10)", color: "var(--earn-red)", icon: <X size={15} strokeWidth={2.5} />, label: "Not earned" },
              { bg: "#ebf9ee", color: "#34c759", icon: <Check size={13} strokeWidth={2.5} />, label: "Completed" },
              { bg: "var(--earn-indigo)", color: "white", icon: <p className="text-[12px] font-semibold leading-none">2</p>, label: "Step number" },
              { bg: "var(--earn-teal)", color: "white", icon: <Check size={18} strokeWidth={2.5} />, label: "CTA icon" },
            ].map(({ bg, color, icon, label }) => (
              <div key={label} className="flex flex-col items-center gap-2">
                <div
                  className="w-8 h-8 rounded-full flex items-center justify-center"
                  style={{ background: bg, color }}
                >
                  {icon}
                </div>
                <p className="text-[11px]" style={{ color: "var(--label-secondary)" }}>{label}</p>
              </div>
            ))}
          </ComponentBlock>
        </section>

        {/* ── PROGRESS BARS ── */}
        <section id="progress" className="mb-16">
          <SectionHeader id="progress">Progress Bars</SectionHeader>

          <ComponentBlock label="Session Progress — Teal (Earn Mode)">
            <div className="w-full space-y-4">
              <div>
                <div className="flex justify-between mb-1">
                  <span className="text-[11px] font-semibold" style={{ color: "var(--earn-teal-deep)" }}>$0.12 earned</span>
                  <span className="text-[11px]" style={{ color: "var(--label-secondary)" }}>up to $20.00 max</span>
                </div>
                <div className="h-2 rounded-full" style={{ background: "rgba(77,195,208,0.2)" }}>
                  <div className="h-2 rounded-full" style={{ background: "var(--earn-teal)", width: "0.6%" }} />
                </div>
              </div>
              <div>
                <div className="flex justify-between mb-1">
                  <span className="text-[11px] font-semibold" style={{ color: "var(--earn-teal-deep)" }}>$9.50 earned</span>
                  <span className="text-[11px]" style={{ color: "var(--label-secondary)" }}>up to $20.00 max</span>
                </div>
                <div className="h-2 rounded-full" style={{ background: "rgba(77,195,208,0.2)" }}>
                  <div className="h-2 rounded-full" style={{ background: "var(--earn-teal)", width: "47.5%" }} />
                </div>
              </div>
            </div>
          </ComponentBlock>

          <ComponentBlock label="Milestone Progress — Indigo">
            <div className="w-full">
              <div className="flex items-center gap-2 mb-2">
                <Trophy size={14} style={{ color: "var(--earn-indigo)" }} />
                <p className="text-[14px] font-semibold" style={{ color: "var(--earn-indigo)" }}>Milestone: 100 qualified reads</p>
              </div>
              <div className="flex justify-between mb-1.5">
                <span className="text-[12px]" style={{ color: "var(--label-secondary)" }}>4 / 100 qualified reads</span>
                <span className="text-[12px] font-semibold" style={{ color: "var(--earn-indigo)" }}>$5 bonus</span>
              </div>
              <div className="h-1.5 rounded-full" style={{ background: "var(--earn-indigo-30)" }}>
                <div className="h-1.5 rounded-full" style={{ background: "var(--earn-indigo)", width: "4%" }} />
              </div>
            </div>
          </ComponentBlock>

          <ComponentBlock label="Score Bar — Quality Threshold">
            <div className="w-full">
              <div className="flex justify-between mb-2">
                <span className="text-[11px] font-semibold" style={{ color: "var(--earn-teal-deep)" }}>Quality score</span>
                <span className="text-[11px] font-semibold" style={{ color: "var(--label-secondary)" }}>Earn at 70+</span>
              </div>
              <div className="relative h-3 rounded-full overflow-hidden">
                <div className="absolute inset-0 rounded-full" style={{ background: "rgba(255,59,48,0.25)", width: "70%" }} />
                <div className="absolute top-0 bottom-0 rounded-r-full" style={{ background: "rgba(77,195,208,0.35)", left: "70%", right: 0 }} />
                {/* threshold */}
                <div className="absolute top-0 bottom-0 w-0.5" style={{ left: "70%", background: "var(--label-tertiary)" }} />
                {/* score dot */}
                <div className="absolute top-1/2 -translate-y-1/2 w-3 h-3 rounded-full border-2 border-white" style={{ left: "calc(74% - 6px)", background: "var(--earn-teal)" }} />
              </div>
              <div className="flex justify-between mt-1">
                <span className="text-[10px]" style={{ color: "var(--label-secondary)" }}>0</span>
                <span className="text-[10px] font-semibold" style={{ color: "var(--label-secondary)", marginLeft: "65%" }}>70</span>
                <span className="text-[10px]" style={{ color: "var(--label-secondary)" }}>100</span>
              </div>
              <div className="flex gap-4 mt-2">
                <div className="flex items-center gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full" style={{ background: "rgba(255,59,48,0.5)" }} />
                  <span className="text-[11px]" style={{ color: "var(--label-secondary)" }}>Below 70 — not earned</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full" style={{ background: "var(--earn-teal)" }} />
                  <span className="text-[11px]" style={{ color: "var(--label-secondary)" }}>70+ — earned</span>
                </div>
              </div>
            </div>
          </ComponentBlock>
        </section>

        {/* ── BOTTOM SHEETS ── */}
        <section id="sheets" className="mb-16">
          <SectionHeader id="sheets">Bottom Sheets</SectionHeader>

          <ComponentBlock label="Partial Sheet — Feedback (over image)">
            <div className="relative w-72 h-64 rounded-2xl overflow-hidden" style={{ background: "radial-gradient(circle, #8b2500 0%, #1a0600 80%)" }}>
              <div className="absolute bottom-0 left-0 right-0 bg-white rounded-t-3xl px-5 pt-4 pb-6">
                <div className="w-8 h-1 rounded-full mx-auto mb-4" style={{ background: "var(--gray-5)" }} />
                <div className="flex items-center gap-2.5 mb-1">
                  <div className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0" style={{ background: "var(--earn-teal-10)", color: "var(--earn-teal-deep)" }}>
                    <Check size={15} strokeWidth={2.5} />
                  </div>
                  <p className="text-[15px] font-semibold" style={{ color: "var(--earn-teal-deep)" }}>Earned · +$0.03</p>
                </div>
                <p className="text-[12px] mb-4 ml-[42px]" style={{ color: "var(--label-secondary)" }}>$0.12 earned this session</p>
                <button className="w-full py-3 rounded-2xl text-[14px] font-semibold text-white" style={{ background: "var(--earn-teal)" }}>
                  Next →
                </button>
              </div>
            </div>
          </ComponentBlock>

          <ComponentBlock label="Full Modal Sheet — with backdrop">
            <div className="relative w-72 h-64 rounded-2xl overflow-hidden" style={{ background: "#1a1a2e" }}>
              <div className="absolute inset-0" style={{ background: "rgba(0,0,0,0.5)" }} />
              <div className="absolute bottom-0 left-0 right-0 bg-white rounded-t-3xl p-5">
                <div className="w-8 h-1 rounded-full mx-auto mb-3" style={{ background: "var(--gray-5)" }} />
                <div className="flex justify-between items-center">
                  <p className="text-[17px] font-semibold">Score Education</p>
                  <button className="w-7 h-7 rounded-full flex items-center justify-center" style={{ background: "var(--gray-6)" }}>
                    <X size={14} style={{ color: "var(--label-secondary)" }} />
                  </button>
                </div>
                <p className="text-[12px] mt-1" style={{ color: "var(--label-secondary)" }}>Sheet content scrolls here…</p>
              </div>
            </div>
          </ComponentBlock>
        </section>

        {/* ── NAVIGATION ── */}
        <section id="navigation" className="mb-16">
          <SectionHeader id="navigation">Navigation</SectionHeader>

          <ComponentBlock label="Navigation Bar — Light (standard)">
            <div className="w-full">
              <div className="px-4 pt-2 pb-3 border-b flex items-center gap-3 bg-white" style={{ borderColor: "var(--gray-5)" }}>
                <button style={{ color: "var(--earn-indigo)" }}>
                  <ChevronLeft size={20} />
                </button>
                <h1 className="text-[17px] font-semibold">My Earnings</h1>
              </div>
            </div>
          </ComponentBlock>

          <ComponentBlock label="Navigation Bar — Earn Mode (teal back)">
            <div className="w-full">
              <div className="px-4 pt-2 pb-3 border-b flex items-center gap-3 bg-white" style={{ borderColor: "var(--gray-5)" }}>
                <button style={{ color: "var(--earn-teal-deep)" }}>
                  <X size={20} />
                </button>
                <h1 className="text-[17px] font-semibold">Contest Complete</h1>
              </div>
            </div>
          </ComponentBlock>

          <ComponentBlock label="Tab Bar">
            <div className="w-full border-t pt-3 pb-6 flex items-center justify-around bg-white" style={{ borderColor: "var(--gray-5)" }}>
              {[
                { icon: <Trophy size={22} />, label: "Compete", active: true },
                { icon: <Star size={22} />, label: "For You", active: false },
                { icon: <BookOpen size={22} />, label: "Learn", active: false },
                { icon: <User size={22} />, label: "Profile", active: false },
              ].map(({ icon, label, active }) => (
                <button key={label} className="flex flex-col items-center gap-1">
                  <span style={{ color: active ? "var(--earn-teal)" : "var(--label-secondary)" }}>{icon}</span>
                  <span className="text-[10px] font-medium" style={{ color: active ? "var(--earn-teal)" : "var(--label-secondary)" }}>{label}</span>
                </button>
              ))}
            </div>
          </ComponentBlock>
        </section>

        {/* ── EARN MODE ── */}
        <section id="earn-mode" className="mb-16">
          <SectionHeader id="earn-mode">Earn Mode Sub-Theme</SectionHeader>

          <div
            className="rounded-xl p-4 mb-6 text-[13px] leading-relaxed"
            style={{ background: "var(--earn-teal-10)", border: "1px solid rgba(77,195,208,0.2)", color: "var(--earn-teal-deep)" }}
          >
            Earn Mode uses teal as its primary accent in place of the app&apos;s default indigo.
            Teal = &ldquo;you can earn here.&rdquo; Never mix teal and indigo accents on the same screen.
            Positive feedback in Earn Mode is <strong>teal</strong>, not system green.
          </div>

          <ComponentBlock label="Earn HUD Chip (labeling screen top bar)">
            <div className="flex gap-4 items-center p-3 rounded-xl" style={{ background: "#0a0a0a" }}>
              <div className="flex items-center gap-1.5">
                <span className="px-2 py-0.5 rounded-full text-[11px] font-bold flex items-center gap-1" style={{ background: "var(--earn-teal)", color: "white" }}>
                  <Coins size={10} />Earn
                </span>
                <span className="text-[14px] font-bold text-white">$0.12</span>
              </div>
            </div>
          </ComponentBlock>

          <ComponentBlock label="Progress Dots (labeling screen)">
            <div className="flex gap-1 p-3 rounded-xl items-center" style={{ background: "#0a0a0a" }}>
              {Array.from({ length: 6 }).map((_, i) => (
                <div
                  key={i}
                  className="w-5 h-1.5 rounded-full"
                  style={{ background: i < 3 ? "var(--earn-teal)" : "rgba(255,255,255,0.22)" }}
                />
              ))}
            </div>
          </ComponentBlock>

          <ComponentBlock label="Feedback States — Earned / Not Earned">
            {/* Earned */}
            <div className="flex-1 min-w-[200px] bg-white rounded-2xl px-5 pt-4 pb-5 border" style={{ borderColor: "var(--gray-5)" }}>
              <div className="w-8 h-1 rounded-full mx-auto mb-4" style={{ background: "var(--gray-5)" }} />
              <div className="flex items-center gap-2.5 mb-1">
                <div className="w-8 h-8 rounded-full flex-shrink-0 flex items-center justify-center" style={{ background: "var(--earn-teal-10)", color: "var(--earn-teal-deep)" }}>
                  <Check size={15} strokeWidth={2.5} />
                </div>
                <p className="text-[15px] font-semibold" style={{ color: "var(--earn-teal-deep)" }}>Earned · +$0.03</p>
              </div>
              <p className="text-[12px] ml-[42px]" style={{ color: "var(--label-secondary)" }}>$0.12 earned this session</p>
            </div>
            {/* Not earned */}
            <div className="flex-1 min-w-[200px] bg-white rounded-2xl px-5 pt-4 pb-5 border" style={{ borderColor: "var(--gray-5)" }}>
              <div className="w-8 h-1 rounded-full mx-auto mb-4" style={{ background: "var(--gray-5)" }} />
              <div className="flex items-center gap-2.5 mb-1">
                <div className="w-8 h-8 rounded-full flex-shrink-0 flex items-center justify-center" style={{ background: "var(--earn-red-10)", color: "var(--earn-red)" }}>
                  <X size={15} strokeWidth={2.5} />
                </div>
                <p className="text-[15px] font-semibold" style={{ color: "var(--label-primary)" }}>This read didn&apos;t earn</p>
              </div>
              <p className="text-[12px] ml-[42px]" style={{ color: "var(--label-secondary)" }}>More precise boxes = higher quality score = earnings.</p>
            </div>
          </ComponentBlock>

          <ComponentBlock label="Earn Mode Overrides vs App Default">
            <div className="w-full overflow-x-auto">
              <table className="w-full text-[12px] border-collapse">
                <thead>
                  <tr style={{ borderBottom: "2px solid var(--gray-5)" }}>
                    <th className="text-left py-2 pr-4 font-semibold" style={{ color: "var(--label-primary)" }}>Element</th>
                    <th className="text-left py-2 pr-4 font-semibold" style={{ color: "var(--earn-indigo)" }}>App Default (Indigo)</th>
                    <th className="text-left py-2 font-semibold" style={{ color: "var(--earn-teal-deep)" }}>Earn Mode Override (Teal)</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ["Primary CTA", "--earn-indigo #6155f5", "--earn-teal #4DC3D0"],
                    ["Active filter chip", "--earn-indigo", "--earn-teal"],
                    ["Progress bar fill", "--earn-indigo", "--earn-teal"],
                    ["Nav accent (back/link)", "--earn-indigo", "--earn-teal-deep"],
                    ["Tinted card bg", "--earn-indigo-10 #f3f3ff", "--earn-teal-10 rgba(77,195,208,0.10)"],
                    ["Positive feedback icon", "system green #34c759", "--earn-teal #4DC3D0"],
                  ].map(([el, app, earn]) => (
                    <tr key={el} style={{ borderBottom: "1px solid var(--gray-5)" }}>
                      <td className="py-2 pr-4 font-medium" style={{ color: "var(--label-primary)" }}>{el}</td>
                      <td className="py-2 pr-4 font-mono" style={{ color: "var(--earn-indigo)" }}>{app}</td>
                      <td className="py-2 font-mono" style={{ color: "var(--earn-teal-deep)" }}>{earn}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </ComponentBlock>
        </section>

        {/* ── ICONS ── */}
        <section id="icons" className="mb-16">
          <SectionHeader id="icons">Icon System</SectionHeader>

          <div
            className="rounded-xl p-4 mb-6 text-[13px]"
            style={{ background: "var(--earn-indigo-10)", border: "1px solid var(--earn-indigo-30)", color: "var(--earn-indigo)" }}
          >
            All icons use <strong>Lucide React</strong> — no emojis, no SF Symbols in the prototype.
            Key distinction: <strong>Coins</strong> = Earn Mode brand mark (not for generic money).
            <strong> DollarSign</strong> = financial summaries, earnings cards, post-session.
          </div>

          <div className="grid grid-cols-4 gap-3">
            {[
              { icon: <Coins size={22} />, name: "Coins", use: "Earn Mode brand mark, HUD chip" },
              { icon: <DollarSign size={22} />, name: "DollarSign", use: "Earnings cards, session summary" },
              { icon: <Trophy size={22} />, name: "Trophy", use: "Rules & Prizes, milestone, Compete tab" },
              { icon: <BarChart2 size={22} />, name: "BarChart2", use: "Leaderboard row icon" },
              { icon: <Lock size={22} />, name: "Lock", use: "Locked contest steps" },
              { icon: <ChevronRight size={22} />, name: "ChevronRight", use: "Row drill, unlocked steps" },
              { icon: <ChevronLeft size={22} />, name: "ChevronLeft", use: "Back navigation" },
              { icon: <X size={22} />, name: "X", use: "Close / dismiss / not-earned" },
              { icon: <Check size={22} />, name: "Check", use: "Earned, completed step, success" },
              { icon: <Target size={22} />, name: "Target", use: "Score precision factor" },
              { icon: <MessageCircle size={22} />, name: "MessageCircle", use: "Labeling: comment" },
              { icon: <Flag size={22} />, name: "Flag", use: "Labeling: flag case" },
              { icon: <Eye size={22} />, name: "Eye", use: "Labeling: view original" },
              { icon: <Clock size={22} />, name: "Clock", use: "Contest deadline, time remaining" },
              { icon: <Star size={22} />, name: "Star", use: "For You tab" },
              { icon: <BookOpen size={22} />, name: "BookOpen", use: "Learn tab" },
              { icon: <User size={22} />, name: "User", use: "Profile tab" },
              { icon: <Sparkles size={22} />, name: "Sparkles", use: "Recommended badge" },
              { icon: <Bell size={22} />, name: "Bell", use: "Contest notification" },
            ].map(({ icon, name, use }) => (
              <div
                key={name}
                className="flex flex-col gap-2 p-3 rounded-xl border"
                style={{ background: "white", borderColor: "var(--gray-5)" }}
              >
                <span style={{ color: "var(--label-primary)" }}>{icon}</span>
                <p className="text-[12px] font-semibold" style={{ color: "var(--label-primary)" }}>{name}</p>
                <p className="text-[11px]" style={{ color: "var(--label-secondary)" }}>{use}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Footer */}
        <footer className="py-8 mt-4" style={{ borderTop: "1px solid var(--gray-5)" }}>
          <p className="text-[12px]" style={{ color: "var(--label-tertiary)" }}>
            DiagnosUs iOS Design System · Figma source: <code>BvtitRNTy7kUjbkLrXsB2h</code> · Android system coming separately
          </p>
        </footer>

      </main>
    </div>
  );
}
