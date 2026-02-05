import Link from "next/link";

export default function Page() {
  return (
    <div style={page}>
      {/* Top Bar */}
      <header style={topbar}>
        <div style={brand}>
          <span style={brandCN}>智显机器人</span>
          <span style={brandSep}> / </span>
          <span style={brandEN}>Unirobot</span>
        </div>

        <nav style={nav}>
          <a href="#hello" style={navLink}>Hello</a>
          <a href="#about" style={navLink}>About</a>
          <a href="#product" style={navLink}>Product</a>
          <a href="#news" style={navLink}>News & Events</a>
          <a href="#partners" style={navLink}>Partners</a>
          <a href="#work" style={navLink}>Work With Us</a>
        </nav>

        <div style={lang}>
          <Link href="/zh" style={langActive}>中文</Link>
          <span style={{ opacity: 0.5 }}> / </span>
          <Link href="/en" style={langLink}>EN</Link>
        </div>
      </header>

      {/* 1. HELLO */}
      <section id="hello" style={sectionHero}>
        <h1 style={h1}>Hello，智显机器人来了。</h1>
        <p style={lead}>
          智显机器人（Unirobot）将 AI 的“理解、感知、呈现”带进真实空间，让每一块显示终端都成为可交互的智能体，
          连接内容生产、现场讲解与数据回流，推动空间服务与转化效率提升。
        </p>
        <div style={ctaRow}>
          <a href="#work" style={btnPrimary}>预约演示</a>
          <a href="#product" style={btnSecondary}>查看产品</a>
        </div>

        <div style={heroBadges}>
          <span style={badge}>政企</span>
          <span style={badge}>教育</span>
          <span style={badge}>营销</span>
          <span style={badge}>文旅</span>
        </div>
      </section>

      {/* 2. ABOUT */}
      <section id="about" style={section}>
        <h2 style={h2}>About 智显机器人</h2>
        <p style={p}>
          智显机器人聚焦“AI 智显终端”，打通 AI 落地最后一公里：以可靠的显示与终端工程能力为基础，融合大模型的理解与推理能力，
          并结合视觉与多模态感知，让机器人能听、能看、能说、能讲、能协同控制现场设备。
        </p>

        <div style={grid2}>
          <Card
            title="两大核心服务"
            items={[
              "AI 显示交互研发与落地",
              "行业垂类模型定制化（场景话术/知识库/流程）",
            ]}
          />
          <Card
            title="面向四大重点行业"
            items={[
              "政企：指挥中心 / 展厅大厅 / 服务窗口",
              "教育：课堂教学 / 校园服务 / 教学助理",
              "营销：展厅导购 / 门店接待 / 数字前台",
              "文旅：景区导览 / 互动讲解 / 智慧服务",
            ]}
          />
        </div>
      </section>

      {/* 3. PRODUCT */}
      <section id="product" style={section}>
        <h2 style={h2}>Product</h2>
        <p style={p}>
          以“屏形机器人 + AI 平台”为核心，提供可快速复制的行业方案包，让客户用更低成本完成部署、运营与迭代。
        </p>

        <div style={grid3}>
          <ProductCard
            title="指挥中心 AI 助理（大屏问数）"
            desc="一句话问数，多模态回答，数字人讲解，多语言支持；可云端或私有化部署，强调端到端安全与权限审计。"
            tags={["大屏智能体", "多模态", "私有化"]}
          />
          <ProductCard
            title="智慧教育 · AI 超级助教"
            desc="课前生成教案，课中实时互动，课后持续迭代；打造“老师分身”与可沉淀的教学内容资产。"
            tags={["教案生成", "课堂互动", "持续迭代"]}
          />
          <ProductCard
            title="营销空间解决方案（展厅 AI / 数字前台）"
            desc="迎宾引导、1+1 双讲解、场景一键切换、全局中控；AIGC 内容与话术快速更新，提升转化与体验。"
            tags={["展厅导览", "数字前台", "AIGC"]}
          />
        </div>
      </section>

      {/* 4. NEWS & EVENTS */}
      <section id="news" style={section}>
        <h2 style={h2}>News & Events</h2>
        <div style={list}>
          <ListItem title="版本发布：Unirobot v1.0 上线" desc="多场景讲解模板、多语言内容包、部署与运维能力完善。" />
          <ListItem title="研究进展：多模态交互落地实践" desc="围绕大屏/展厅/教育场景的交互效果与运营数据优化。" />
          <ListItem title="活动：合作伙伴演示日开放报名" desc="渠道合作、联合方案共建、项目落地支持。" />
        </div>
        <p style={note}>（后续可接入 Notion 作为内容后台，实现动态更新）</p>
      </section>

      {/* 5. PARTNERS */}
      <section id="partners" style={section}>
        <h2 style={h2}>Partners</h2>
        <p style={p}>
          智显机器人与渠道伙伴、系统集成商、行业 ISV、内容团队与设备生态伙伴协作，共建“软硬一体”的 AI 智显终端解决方案，
          让 AI 普惠触达每一个空间。
        </p>

        <div style={grid3}>
          <MiniCard title="渠道伙伴" desc="联合拓展行业客户，共同交付与运营。" />
          <MiniCard title="集成商 / 方案商" desc="打通现场系统、设备与流程，形成端到端方案。" />
          <MiniCard title="生态伙伴" desc="模型/内容/硬件/IoT 协同，让方案可复制可扩展。" />
        </div>
      </section>

      {/* 6. WORK WITH US */}
      <section id="work" style={section}>
        <h2 style={h2}>Work With Us</h2>
        <div style={grid2}>
          <Card
            title="合作方向"
            items={[
              "渠道合作：联合拓客、方案打包与交付支持",
              "项目落地：场景调研、部署实施、运营优化",
              "联合方案：行业模板共建、内容与知识库沉淀",
            ]}
          />
          <Card
            title="联系信息"
            items={[
              "邮箱：ranchoyininternational@gmail.com",
              "备注：请说明来意（合作/项目/媒体/招聘）",
              "（后续可加企业微信/飞书/表单）",
            ]}
          />
        </div>
      </section>

      <footer style={footer}>
        <div>© {new Date().getFullYear()} 智显机器人（Unirobot）</div>
        <div style={{ opacity: 0.75 }}>AI Display Robot • Multimodal Interaction • Platform Deployment</div>
      </footer>
    </div>
  );
}

/* ---------- Components ---------- */

function Card({ title, items }: { title: string; items: string[] }) {
  return (
    <div style={card}>
      <div style={cardTitle}>{title}</div>
      <ul style={ul}>
        {items.map((it) => (
          <li key={it} style={li}>{it}</li>
        ))}
      </ul>
    </div>
  );
}

function ProductCard({
  title,
  desc,
  tags,
}: {
  title: string;
  desc: string;
  tags: string[];
}) {
  return (
    <div style={card}>
      <div style={cardTitle}>{title}</div>
      <div style={descText}>{desc}</div>
      <div style={tagRow}>
        {tags.map((t) => (
          <span key={t} style={tag}>{t}</span>
        ))}
      </div>
    </div>
  );
}

function MiniCard({ title, desc }: { title: string; desc: string }) {
  return (
    <div style={miniCard}>
      <div style={{ fontWeight: 700, marginBottom: 6 }}>{title}</div>
      <div style={{ opacity: 0.8, lineHeight: 1.6 }}>{desc}</div>
    </div>
  );
}

function ListItem({ title, desc }: { title: string; desc: string }) {
  return (
    <div style={listItem}>
      <div style={{ fontWeight: 700 }}>{title}</div>
      <div style={{ opacity: 0.85, lineHeight: 1.6 }}>{desc}</div>
    </div>
  );
}

/* ---------- Styles ---------- */

const page: React.CSSProperties = { padding: 24, maxWidth: 1080, margin: "0 auto" };

const topbar: React.CSSProperties = {
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  gap: 16,
  padding: "12px 0 20px 0",
  flexWrap: "wrap",
};

const brand: React.CSSProperties = { fontWeight: 800, display: "flex", alignItems: "baseline", gap: 6 };
const brandCN: React.CSSProperties = { fontSize: 18 };
const brandEN: React.CSSProperties = { fontSize: 14, opacity: 0.75 };
const brandSep: React.CSSProperties = { opacity: 0.4 };

const nav: React.CSSProperties = { display: "flex", gap: 12, flexWrap: "wrap" };
const navLink: React.CSSProperties = { textDecoration: "none", color: "#111", opacity: 0.85 };

const lang: React.CSSProperties = { display: "flex", alignItems: "center", gap: 6 };
const langLink: React.CSSProperties = { textDecoration: "none", color: "#111", opacity: 0.7 };
const langActive: React.CSSProperties = { textDecoration: "none", color: "#111", fontWeight: 700 };

const sectionHero: React.CSSProperties = { padding: "18px 0 28px 0", borderBottom: "1px solid #eee" };
const section: React.CSSProperties = { padding: "28px 0", borderBottom: "1px solid #eee" };

const h1: React.CSSProperties = { fontSize: 38, margin: "0 0 12px 0", letterSpacing: -0.4 };
const h2: React.CSSProperties = { fontSize: 22, margin: "0 0 12px 0" };
const lead: React.CSSProperties = { fontSize: 18, lineHeight: 1.7, margin: "0 0 16px 0", opacity: 0.9 };
const p: React.CSSProperties = { fontSize: 16, lineHeight: 1.8, margin: "0 0 14px 0", opacity: 0.9 };

const ctaRow: React.CSSProperties = { display: "flex", gap: 12, flexWrap: "wrap" };
const btnPrimary: React.CSSProperties = {
  background: "#111",
  color: "#fff",
  padding: "10px 14px",
  borderRadius: 10,
  textDecoration: "none",
};
const btnSecondary: React.CSSProperties = {
  border: "1px solid #111",
  color: "#111",
  padding: "10px 14px",
  borderRadius: 10,
  textDecoration: "none",
};

const heroBadges: React.CSSProperties = { display: "flex", gap: 8, marginTop: 16, flexWrap: "wrap" };
const badge: React.CSSProperties = {
  border: "1px solid #ddd",
  borderRadius: 999,
  padding: "6px 10px",
  fontSize: 12,
  opacity: 0.85,
};

const grid2: React.CSSProperties = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
  gap: 12,
};

const grid3: React.CSSProperties = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
  gap: 12,
};

const card: React.CSSProperties = {
  border: "1px solid #ddd",
  borderRadius: 12,
  padding: 16,
  background: "#fff",
};

const miniCard: React.CSSProperties = {
  border: "1px solid #e6e6e6",
  borderRadius: 12,
  padding: 14,
};

const cardTitle: React.CSSProperties = { fontSize: 18, fontWeight: 800, marginBottom: 8 };

const descText: React.CSSProperties = { opacity: 0.85, lineHeight: 1.7, marginBottom: 10 };

const tagRow: React.CSSProperties = { display: "flex", gap: 8, flexWrap: "wrap" };
const tag: React.CSSProperties = {
  border: "1px solid #eee",
  borderRadius: 999,
  padding: "6px 10px",
  fontSize: 12,
  opacity: 0.85,
};

const list: React.CSSProperties = { display: "flex", flexDirection: "column", gap: 10 };
const listItem: React.CSSProperties = {
  border: "1px solid #eee",
  borderRadius: 12,
  padding: 14,
};

const note: React.CSSProperties = { margin: "12px 0 0 0", opacity: 0.65, fontSize: 13 };

const ul: React.CSSProperties = { margin: 0, paddingLeft: 18, lineHeight: 1.8 };
const li: React.CSSProperties = { margin: "6px 0", opacity: 0.9 };

const footer: React.CSSProperties = { padding: "18px 0", opacity: 0.8, lineHeight: 1.6 };
