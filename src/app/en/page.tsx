import Link from "next/link";

export default function Page() {
  return (
    <div style={page}>
      {/* Top Bar */}
      <header style={topbar}>
        <div style={brand}>
          <span style={brandEN}>Unirobot</span>
          <span style={brandSep}> / </span>
          <span style={brandCN}>智显机器人</span>
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
          <Link href="/zh" style={langLink}>中文</Link>
          <span style={{ opacity: 0.5 }}> / </span>
          <Link href="/en" style={langActive}>EN</Link>
        </div>
      </header>

      {/* 1. HELLO */}
      <section id="hello" style={sectionHero}>
        <h1 style={h1}>Hello, we are Unirobot.</h1>
        <p style={lead}>
          Unirobot brings AI’s understanding, perception, and presentation into real-world spaces—turning every display terminal
          into an interactive agent. We connect content creation, on-site interaction, and data feedback to improve service and conversion.
        </p>
        <div style={ctaRow}>
          <a href="#work" style={btnPrimary}>Book a Demo</a>
          <a href="#product" style={btnSecondary}>Explore Products</a>
        </div>

        <div style={heroBadges}>
          <span style={badge}>Government & Enterprise</span>
          <span style={badge}>Education</span>
          <span style={badge}>Marketing</span>
          <span style={badge}>Culture & Tourism</span>
        </div>
      </section>

      {/* 2. ABOUT */}
      <section id="about" style={section}>
        <h2 style={h2}>About Unirobot</h2>
        <p style={p}>
          We focus on “AI intelligent display terminals” to unlock the last mile of AI adoption.
          Built on reliable display/terminal engineering, we combine large-model reasoning and multimodal understanding with vision and sensing,
          so robots can listen, see, speak, present, and coordinate on-site devices.
        </p>

        <div style={grid2}>
          <Card
            title="Two Core Services"
            items={[
              "AI display interaction R&D and deployment",
              "Vertical customization (scripts, knowledge base, workflows)",
            ]}
          />
          <Card
            title="Four Focus Industries"
            items={[
              "Gov & Enterprise: command centers, halls, service windows",
              "Education: classroom teaching, campus services, teaching assistant",
              "Marketing: showroom guidance, retail reception, digital front desk",
              "Culture & Tourism: scenic guidance, interactive explanation, smart services",
            ]}
          />
        </div>
      </section>

      {/* 3. PRODUCT */}
      <section id="product" style={section}>
        <h2 style={h2}>Product</h2>
        <p style={p}>
          A “screen-form robot + AI platform” stack with reusable solution kits—faster deployment, easier operations, and continuous iteration.
        </p>

        <div style={grid3}>
          <ProductCard
            title="Command Center AI Assistant (Large Screen)"
            desc="One-sentence data inquiry, multimodal answers, digital-human explanation, multilingual support; cloud or on-prem deployment with security and audit."
            tags={["Agent on Screen", "Multimodal", "On-Prem"]}
          />
          <ProductCard
            title="Smart Education — Super Teaching Assistant"
            desc="Lesson planning before class, interactive teaching during class, continuous improvement after class; builds durable teaching assets and a teacher’s “AI clone”."
            tags={["Lesson Plan", "In-class Interaction", "Iteration"]}
          />
          <ProductCard
            title="Marketing Space Solutions (Showroom AI / Digital Front Desk)"
            desc="Reception, 1+1 explanation, one-click scene switching, unified device control; fast AIGC updates for content and scripts to boost conversion."
            tags={["Showroom", "Digital Front Desk", "AIGC"]}
          />
        </div>
      </section>

      {/* 4. NEWS & EVENTS */}
      <section id="news" style={section}>
        <h2 style={h2}>News & Events</h2>
        <div style={list}>
          <ListItem title="Release: Unirobot v1.0" desc="Scenario templates, multilingual content packs, improved deployment and operations." />
          <ListItem title="Research: Multimodal interaction in real spaces" desc="Best practices for command centers, showrooms, and education." />
          <ListItem title="Event: Partner Demo Day" desc="Channel recruitment, joint solution building, delivery support." />
        </div>
        <p style={note}>(We can connect Notion later for dynamic updates.)</p>
      </section>

      {/* 5. PARTNERS */}
      <section id="partners" style={section}>
        <h2 style={h2}>Partners</h2>
        <p style={p}>
          We co-build with channel partners, system integrators, ISVs, content teams, and device ecosystems to deliver end-to-end AI display robot solutions—
          making AI accessible in every space.
        </p>

        <div style={grid3}>
          <MiniCard title="Channel Partners" desc="Go-to-market together with packaged solutions and delivery support." />
          <MiniCard title="Integrators & Solution Providers" desc="Connect on-site systems, devices, and workflows end-to-end." />
          <MiniCard title="Ecosystem Partners" desc="Model/content/hardware/IoT collaboration for scalable solutions." />
        </div>
      </section>

      {/* 6. WORK WITH US */}
      <section id="work" style={section}>
        <h2 style={h2}>Work With Us</h2>
        <div style={grid2}>
          <Card
            title="Partnership Areas"
            items={[
              "Channel partnership: co-selling and delivery enablement",
              "Project delivery: discovery, deployment, operations optimization",
              "Joint solutions: industry kits, content and knowledge-base co-building",
            ]}
          />
          <Card
            title="Contact"
            items={[
              "Email: ranchoyininternational@gmail.com",
              "Please include your purpose (partner / project / media / hiring)",
              "(We can add a form or WeCom/Feishu later.)",
            ]}
          />
        </div>
      </section>

      <footer style={footer}>
        <div>© {new Date().getFullYear()} Unirobot (智显机器人)</div>
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
const brandEN: React.CSSProperties = { fontSize: 18 };
const brandCN: React.CSSProperties = { fontSize: 14, opacity: 0.75 };
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
