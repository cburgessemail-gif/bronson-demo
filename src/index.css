import React, { useMemo, useState } from "react";

type View =
  | "home"
  | "guest"
  | "customer"
  | "marketplace"
  | "grower"
  | "youth"
  | "partners";

type FeatureCardProps = {
  title: string;
  text: string;
  button?: string;
  onClick?: () => void;
};

function App() {
  const [view, setView] = useState<View>("home");

  const styles = useMemo(
    () => ({
      page: {
        minHeight: "100vh",
        background:
          "linear-gradient(180deg, #f4f0e7 0%, #f6f5f1 38%, #eef4ee 100%)",
        color: "#173126",
        fontFamily:
          'Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
      } as React.CSSProperties,

      shell: {
        width: "100%",
        maxWidth: "1400px",
        margin: "0 auto",
      } as React.CSSProperties,

      topBar: {
        position: "sticky",
        top: 0,
        zIndex: 50,
        backdropFilter: "blur(10px)",
        background: "rgba(7, 49, 36, 0.92)",
        borderBottom: "1px solid rgba(255,255,255,0.08)",
        boxShadow: "0 10px 30px rgba(0,0,0,0.10)",
      } as React.CSSProperties,

      topBarInner: {
        maxWidth: "1400px",
        margin: "0 auto",
        padding: "14px 18px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        gap: "18px",
        flexWrap: "wrap",
      } as React.CSSProperties,

      brandWrap: {
        display: "flex",
        alignItems: "center",
        gap: "12px",
        minWidth: 0,
      } as React.CSSProperties,

      brandIcon: {
        width: "44px",
        height: "44px",
        borderRadius: "14px",
        display: "grid",
        placeItems: "center",
        background:
          "linear-gradient(135deg, rgba(202,160,66,0.28), rgba(255,255,255,0.14))",
        color: "#f0e4ba",
        fontSize: "22px",
        boxShadow: "inset 0 0 0 1px rgba(255,255,255,0.12)",
      } as React.CSSProperties,

      brandText: {
        display: "flex",
        flexDirection: "column",
        lineHeight: 1.05,
      } as React.CSSProperties,

      brandTitle: {
        color: "#ffffff",
        fontSize: "20px",
        fontWeight: 700,
        letterSpacing: "0.01em",
        margin: 0,
      } as React.CSSProperties,

      brandSub: {
        color: "rgba(255,255,255,0.74)",
        fontSize: "12px",
        marginTop: "4px",
      } as React.CSSProperties,

      nav: {
        display: "flex",
        alignItems: "center",
        gap: "8px",
        flexWrap: "wrap",
      } as React.CSSProperties,

      navBtn: (active: boolean): React.CSSProperties => ({
        appearance: "none",
        border: active
          ? "1px solid rgba(240, 228, 186, 0.58)"
          : "1px solid rgba(255,255,255,0.12)",
        background: active ? "rgba(240, 228, 186, 0.18)" : "rgba(255,255,255,0.06)",
        color: active ? "#fff4cb" : "#ffffff",
        borderRadius: "999px",
        padding: "10px 14px",
        fontSize: "14px",
        fontWeight: 600,
        cursor: "pointer",
        transition: "all 160ms ease",
        whiteSpace: "nowrap",
      }),

      hero: {
        position: "relative",
        overflow: "hidden",
        padding: "64px 18px 36px",
      } as React.CSSProperties,

      heroPanel: {
        position: "relative",
        borderRadius: "30px",
        overflow: "hidden",
        background:
          "radial-gradient(circle at top left, rgba(239,219,161,0.22), transparent 34%), linear-gradient(135deg, #0b3a2d 0%, #0e4a39 42%, #1a6b46 100%)",
        minHeight: "500px",
        boxShadow: "0 24px 60px rgba(10, 32, 24, 0.20)",
        border: "1px solid rgba(255,255,255,0.10)",
      } as React.CSSProperties,

      heroGlowA: {
        position: "absolute",
        width: "420px",
        height: "420px",
        right: "-70px",
        top: "-90px",
        borderRadius: "50%",
        background: "rgba(255, 222, 152, 0.14)",
        filter: "blur(10px)",
      } as React.CSSProperties,

      heroGlowB: {
        position: "absolute",
        width: "520px",
        height: "520px",
        left: "-120px",
        bottom: "-210px",
        borderRadius: "50%",
        background: "rgba(154, 204, 130, 0.15)",
        filter: "blur(8px)",
      } as React.CSSProperties,

      heroInner: {
        position: "relative",
        zIndex: 2,
        padding: "54px 44px 40px",
        display: "grid",
        gridTemplateColumns: "1.15fr 0.85fr",
        gap: "28px",
      } as React.CSSProperties,

      heroKicker: {
        display: "inline-flex",
        alignItems: "center",
        gap: "8px",
        borderRadius: "999px",
        background: "rgba(255,255,255,0.10)",
        color: "#f3ebce",
        padding: "9px 14px",
        fontSize: "13px",
        fontWeight: 700,
        letterSpacing: "0.03em",
        marginBottom: "18px",
      } as React.CSSProperties,

      heroTitle: {
        color: "#ffffff",
        fontSize: "clamp(34px, 5vw, 64px)",
        lineHeight: 1.02,
        fontWeight: 800,
        margin: 0,
        maxWidth: "860px",
      } as React.CSSProperties,

      heroText: {
        color: "rgba(255,255,255,0.84)",
        fontSize: "18px",
        lineHeight: 1.65,
        marginTop: "18px",
        maxWidth: "760px",
      } as React.CSSProperties,

      buttonRow: {
        display: "flex",
        gap: "14px",
        flexWrap: "wrap",
        marginTop: "28px",
      } as React.CSSProperties,

      primaryBtn: {
        appearance: "none",
        border: "none",
        borderRadius: "999px",
        background: "#f0d784",
        color: "#1f2c1c",
        padding: "14px 22px",
        fontWeight: 800,
        fontSize: "15px",
        cursor: "pointer",
        boxShadow: "0 12px 24px rgba(0,0,0,0.18)",
      } as React.CSSProperties,

      secondaryBtn: {
        appearance: "none",
        border: "1px solid rgba(255,255,255,0.16)",
        borderRadius: "999px",
        background: "rgba(255,255,255,0.08)",
        color: "#ffffff",
        padding: "14px 22px",
        fontWeight: 700,
        fontSize: "15px",
        cursor: "pointer",
      } as React.CSSProperties,

      statPanel: {
        alignSelf: "end",
        display: "grid",
        gap: "16px",
      } as React.CSSProperties,

      glassCard: {
        background: "rgba(255,255,255,0.10)",
        border: "1px solid rgba(255,255,255,0.12)",
        borderRadius: "24px",
        padding: "22px",
        boxShadow: "0 18px 36px rgba(0,0,0,0.12)",
      } as React.CSSProperties,

      statNumber: {
        fontSize: "34px",
        lineHeight: 1,
        color: "#fff7dc",
        fontWeight: 800,
        marginBottom: "8px",
      } as React.CSSProperties,

      statLabel: {
        color: "rgba(255,255,255,0.86)",
        fontWeight: 700,
        fontSize: "14px",
        marginBottom: "6px",
      } as React.CSSProperties,

      statText: {
        color: "rgba(255,255,255,0.72)",
        fontSize: "14px",
        lineHeight: 1.6,
      } as React.CSSProperties,

      section: {
        padding: "10px 18px 48px",
      } as React.CSSProperties,

      sectionTitle: {
        fontSize: "clamp(28px, 4vw, 42px)",
        lineHeight: 1.08,
        color: "#14392b",
        margin: 0,
        fontWeight: 800,
      } as React.CSSProperties,

      sectionText: {
        fontSize: "17px",
        lineHeight: 1.7,
        color: "#385247",
        maxWidth: "880px",
        marginTop: "14px",
      } as React.CSSProperties,

      grid3: {
        display: "grid",
        gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
        gap: "18px",
        marginTop: "26px",
      } as React.CSSProperties,

      card: {
        background: "rgba(255,255,255,0.75)",
        border: "1px solid rgba(14,74,57,0.10)",
        borderRadius: "26px",
        padding: "22px",
        boxShadow: "0 14px 30px rgba(25, 47, 35, 0.08)",
      } as React.CSSProperties,

      cardTitle: {
        fontSize: "20px",
        lineHeight: 1.15,
        fontWeight: 800,
        color: "#14392b",
        margin: 0,
      } as React.CSSProperties,

      cardText: {
        color: "#52665d",
        lineHeight: 1.65,
        fontSize: "15px",
        marginTop: "12px",
      } as React.CSSProperties,

      cardBtn: {
        marginTop: "16px",
        appearance: "none",
        border: "1px solid rgba(20,57,43,0.12)",
        background: "#ffffff",
        color: "#14392b",
        borderRadius: "999px",
        padding: "11px 16px",
        fontWeight: 700,
        fontSize: "14px",
        cursor: "pointer",
      } as React.CSSProperties,

      widePanel: {
        background:
          "linear-gradient(180deg, rgba(255,255,255,0.86), rgba(248,250,247,0.95))",
        border: "1px solid rgba(14,74,57,0.09)",
        borderRadius: "30px",
        padding: "28px",
        boxShadow: "0 14px 30px rgba(25, 47, 35, 0.08)",
      } as React.CSSProperties,

      split: {
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gap: "18px",
        marginTop: "20px",
      } as React.CSSProperties,

      list: {
        paddingLeft: "18px",
        margin: "14px 0 0",
        color: "#42594f",
        lineHeight: 1.8,
        fontSize: "15px",
      } as React.CSSProperties,

      marketHero: {
        position: "relative",
        overflow: "hidden",
        background:
          "linear-gradient(135deg, #fff9e8 0%, #f5f7ef 44%, #eef5ef 100%)",
        border: "1px solid rgba(14,74,57,0.08)",
        borderRadius: "32px",
        padding: "34px",
        boxShadow: "0 18px 36px rgba(25, 47, 35, 0.08)",
      } as React.CSSProperties,

      marketBadge: {
        display: "inline-flex",
        alignItems: "center",
        gap: "8px",
        borderRadius: "999px",
        padding: "8px 12px",
        background: "#edf5e8",
        color: "#1b5f39",
        fontSize: "13px",
        fontWeight: 800,
      } as React.CSSProperties,

      mockShop: {
        marginTop: "22px",
        display: "grid",
        gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
        gap: "16px",
      } as React.CSSProperties,

      productCard: {
        background: "#ffffff",
        border: "1px solid rgba(14,74,57,0.08)",
        borderRadius: "24px",
        overflow: "hidden",
        boxShadow: "0 12px 24px rgba(25, 47, 35, 0.06)",
      } as React.CSSProperties,

      productImage: (tone: string): React.CSSProperties => ({
        height: "160px",
        background: tone,
      }),

      productBody: {
        padding: "18px",
      } as React.CSSProperties,

      productName: {
        fontWeight: 800,
        fontSize: "18px",
        color: "#173126",
        margin: 0,
      } as React.CSSProperties,

      productMeta: {
        marginTop: "8px",
        color: "#5d7068",
        fontSize: "14px",
        lineHeight: 1.6,
      } as React.CSSProperties,

      ctaRow: {
        marginTop: "18px",
        display: "flex",
        gap: "12px",
        flexWrap: "wrap",
      } as React.CSSProperties,

      footer: {
        padding: "22px 18px 40px",
        color: "#5d7068",
        fontSize: "14px",
      } as React.CSSProperties,
    }),
    []
  );

  const renderHome = () => (
    <>
      <section style={styles.hero}>
        <div style={styles.shell}>
          <div style={styles.heroPanel}>
            <div style={styles.heroGlowA} />
            <div style={styles.heroGlowB} />
            <div
              style={{
                position: "absolute",
                inset: 0,
                background:
                  "linear-gradient(180deg, rgba(255,255,255,0.03), rgba(0,0,0,0.06))",
              }}
            />
            <div style={styles.heroInner}>
              <div>
                <div style={styles.heroKicker}>🌱 Step into the ecosystem</div>
                <h1 style={styles.heroTitle}>
                  Bronson Family Farm is more than a farm.
                </h1>
                <div style={styles.heroText}>
                  It is a regenerative ecosystem connecting land, food, learning,
                  marketplace access, youth workforce development, growers,
                  families, and community partnership in Youngstown.
                </div>
                <div style={styles.buttonRow}>
                  <button style={styles.primaryBtn} onClick={() => setView("marketplace")}>
                    Enter Marketplace
                  </button>
                  <button style={styles.secondaryBtn} onClick={() => setView("guest")}>
                    Begin Guided Tour
                  </button>
                </div>
              </div>

              <div style={styles.statPanel}>
                <div style={styles.glassCard}>
                  <div style={styles.statNumber}>118+</div>
                  <div style={styles.statLabel}>acres of vision and possibility</div>
                  <div style={styles.statText}>
                    A destination for food access, agritourism, education,
                    workforce pathways, and community return.
                  </div>
                </div>

                <div style={styles.glassCard}>
                  <div style={styles.statNumber}>6</div>
                  <div style={styles.statLabel}>role pathways in one ecosystem</div>
                  <div style={styles.statText}>
                    Guest, Customer, Marketplace, Grower, Youth Workforce, and
                    Partners each have a reason to come back again and again.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section style={styles.section}>
        <div style={styles.shell}>
          <h2 style={styles.sectionTitle}>Choose how people experience the platform.</h2>
          <div style={styles.sectionText}>
            Each pathway should feel purposeful, welcoming, and active — not
            like a presentation. Visitors should understand why the farm exists,
            what it offers, and where they can go next.
          </div>

          <div style={styles.grid3}>
            <FeatureCard
              title="Guest"
              text="Discover the story, the land, the mission, and why this place matters to Youngstown."
              button="Open Guest Path"
              onClick={() => setView("guest")}
            />
            <FeatureCard
              title="Customer"
              text="Find produce, nutrition guidance, recipes, buying habits, and a smooth path into the marketplace."
              button="Open Customer Path"
              onClick={() => setView("customer")}
            />
            <FeatureCard
              title="Marketplace"
              text="A stronger storefront experience centered on GrownBy, pickup, seasonal items, and featured products."
              button="Open Marketplace"
              onClick={() => setView("marketplace")}
            />
            <FeatureCard
              title="Grower"
              text="Support growers with planning, timing, production, distribution, and ecosystem participation."
              button="Open Grower Path"
              onClick={() => setView("grower")}
            />
            <FeatureCard
              title="Youth Workforce"
              text="Show the training pathway, hands-on learning, supervision, and support structure."
              button="Open Youth Path"
              onClick={() => setView("youth")}
            />
            <FeatureCard
              title="Partners"
              text="Invite institutions, sponsors, cities, schools, and collaborators into the work."
              button="Open Partners Path"
              onClick={() => setView("partners")}
            />
          </div>
        </div>
      </section>
    </>
  );

  const renderGuest = () => (
    <section style={styles.section}>
      <div style={styles.shell}>
        <div style={styles.widePanel}>
          <h2 style={styles.sectionTitle}>Guest Experience</h2>
          <div style={styles.sectionText}>
            Step into a regenerative farm ecosystem built to restore land,
            create access, welcome families, and reconnect people to food,
            purpose, and possibility.
          </div>

          <div style={styles.split}>
            <div style={styles.card}>
              <h3 style={styles.cardTitle}>Why it matters</h3>
              <div style={styles.cardText}>
                Rising food costs push families toward overprocessed food, and
                that hurts health, budgets, and community well-being. This
                ecosystem responds with land-based solutions, education, and
                access.
              </div>
              <ul style={styles.list}>
                <li>Regenerative land restoration</li>
                <li>Food access and healthier choices</li>
                <li>Agritourism and community destination building</li>
                <li>Connection to family legacy and local future</li>
              </ul>
            </div>

            <div style={styles.card}>
              <h3 style={styles.cardTitle}>Where guests go next</h3>
              <div style={styles.cardText}>
                Guests can continue into shopping, become supporters, explore
                partnerships, or learn how growers and youth fit into the whole
                system.
              </div>
              <div style={styles.ctaRow}>
                <button style={styles.cardBtn} onClick={() => setView("customer")}>
                  Continue to Customer
                </button>
                <button style={styles.cardBtn} onClick={() => setView("partners")}>
                  Explore Partners
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );

  const renderCustomer = () => (
    <section style={styles.section}>
      <div style={styles.shell}>
        <div style={styles.widePanel}>
          <h2 style={styles.sectionTitle}>Customer Experience</h2>
          <div style={styles.sectionText}>
            Customers should feel cared for, informed, and invited back. This
            pathway connects produce access with nutrition guidance, recipe
            inspiration, and easy movement into the marketplace.
          </div>

          <div style={styles.grid3}>
            <FeatureCard
              title="Shop Seasonal Produce"
              text="Fresh seedlings, produce, and farm offerings with simple pickup and ordering flow."
              button="Go to Marketplace"
              onClick={() => setView("marketplace")}
            />
            <FeatureCard
              title="Nutrition Guidance"
              text="Help customers make better food choices with practical wellness-minded guidance."
            />
            <FeatureCard
              title="Recipes & Return Visits"
              text="Feature meal ideas, product use, and habits that encourage repeat visits and deeper engagement."
            />
          </div>
        </div>
      </div>
    </section>
  );

  const renderMarketplace = () => (
    <section style={styles.section}>
      <div style={styles.shell}>
        <div style={styles.marketHero}>
          <div style={styles.marketBadge}>🛒 Marketplace Experience</div>
          <h2 style={{ ...styles.sectionTitle, marginTop: "16px" }}>
            Marketplace powered by Bronson Family Farm + GrownBy
          </h2>
          <div style={styles.sectionText}>
            This page should be one of the strongest in the demo. It shows how
            customers browse what is available, plan pickup, and move naturally
            into real farm commerce.
          </div>

          <div style={styles.ctaRow}>
            <a
              href="https://grownby.com/farms/bronson-family-farm/shop"
              target="_blank"
              rel="noreferrer"
              style={{ ...styles.primaryBtn, textDecoration: "none", display: "inline-block" }}
            >
              Open GrownBy Store
            </a>
            <button style={styles.secondaryBtn} onClick={() => setView("customer")}>
              Back to Customer Path
            </button>
          </div>

          <div style={styles.mockShop}>
            <div style={styles.productCard}>
              <div
                style={styles.productImage(
                  "linear-gradient(135deg, #cde2a6 0%, #7eb05b 55%, #4f7c3f 100%)"
                )}
              />
              <div style={styles.productBody}>
                <h3 style={styles.productName}>Fresh Greens Bundle</h3>
                <div style={styles.productMeta}>
                  SNAP-friendly produce focus, seasonal availability, and market
                  pickup connection.
                </div>
              </div>
            </div>

            <div style={styles.productCard}>
              <div
                style={styles.productImage(
                  "linear-gradient(135deg, #f4d784 0%, #d7863f 52%, #8c4f1f 100%)"
                )}
              />
              <div style={styles.productBody}>
                <h3 style={styles.productName}>Seedlings & Starts</h3>
                <div style={styles.productMeta}>
                  Garden-ready options for households, growers, and community
                  planting activity.
                </div>
              </div>
            </div>

            <div style={styles.productCard}>
              <div
                style={styles.productImage(
                  "linear-gradient(135deg, #f3c2a7 0%, #d96f5d 48%, #8f433d 100%)"
                )}
              />
              <div style={styles.productBody}>
                <h3 style={styles.productName}>Bubble Babies™</h3>
                <div style={styles.productMeta}>
                  A signature product that connects education, growing, and a
                  memorable farm brand experience.
                </div>
              </div>
            </div>
          </div>

          <div style={styles.split}>
            <div style={styles.card}>
              <h3 style={styles.cardTitle}>Marketplace strengths</h3>
              <ul style={styles.list}>
                <li>Direct path to real purchasing</li>
                <li>Pickup and pre-order readiness</li>
                <li>Seasonal product storytelling</li>
                <li>Bridge between learning and buying</li>
              </ul>
            </div>

            <div style={styles.card}>
              <h3 style={styles.cardTitle}>What this tells viewers</h3>
              <div style={styles.cardText}>
                The farm is not only beautiful in concept. It is operational,
                community-serving, and capable of supporting repeat customer
                behavior through a real commerce channel.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );

  const renderGrower = () => (
    <section style={styles.section}>
      <div style={styles.shell}>
        <div style={styles.widePanel}>
          <h2 style={styles.sectionTitle}>Grower Experience</h2>
          <div style={styles.sectionText}>
            Growers enter an ecosystem where production, timing, land use,
            learning, and market connection all support one another.
          </div>

          <div style={styles.grid3}>
            <FeatureCard
              title="Production Planning"
              text="Support around crop timing, seed starts, seasonality, and farm readiness."
            />
            <FeatureCard
              title="Market Connection"
              text="A path from growing into product movement, community sales, and ecosystem participation."
            />
            <FeatureCard
              title="Shared Ecosystem"
              text="An experience designed to make growers feel welcomed, useful, and visible inside a larger mission."
            />
          </div>
        </div>
      </div>
    </section>
  );

  const renderYouth = () => (
    <section style={styles.section}>
      <div style={styles.shell}>
        <div style={styles.widePanel}>
          <h2 style={styles.sectionTitle}>Youth Workforce Experience</h2>
          <div style={styles.sectionText}>
            This pathway shows hands-on learning, responsibility, supervision,
            and structured support. The supervisor role exists within Youth
            Workforce only.
          </div>

          <div style={styles.split}>
            <div style={styles.card}>
              <h3 style={styles.cardTitle}>Youth pathway</h3>
              <ul style={styles.list}>
                <li>Hands-on land-based learning</li>
                <li>Workforce habits and exposure</li>
                <li>Production, setup, and event support</li>
                <li>Meaningful participation in a real ecosystem</li>
              </ul>
            </div>

            <div style={styles.card}>
              <h3 style={styles.cardTitle}>Supervisor support</h3>
              <div style={styles.cardText}>
                Supervisors guide workflow, accountability, and support services
                inside the youth workforce structure, including support staff
                resources connected to wellness-oriented partners.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );

  const renderPartners = () => (
    <section style={styles.section}>
      <div style={styles.shell}>
        <div style={styles.widePanel}>
          <h2 style={styles.sectionTitle}>Partners Experience</h2>
          <div style={styles.sectionText}>
            Partners see how their support connects to food access, youth
            development, agritourism, land restoration, and measurable community
            benefit.
          </div>

          <div style={styles.grid3}>
            <FeatureCard
              title="City & Civic Alignment"
              text="A visible community asset with land use, workforce, and neighborhood benefit."
            />
            <FeatureCard
              title="Institutional Collaboration"
              text="A place for schools, universities, health organizations, and nonprofits to engage."
            />
            <FeatureCard
              title="Sponsor Visibility"
              text="A credible platform for sponsors, supporters, and resource partners to contribute."
            />
          </div>
        </div>
      </div>
    </section>
  );

  return (
    <div style={styles.page}>
      <header style={styles.topBar}>
        <div style={styles.topBarInner}>
          <div style={styles.brandWrap}>
            <div style={styles.brandIcon}>🌿</div>
            <div style={styles.brandText}>
              <h1 style={styles.brandTitle}>Bronson Family Farm</h1>
              <div style={styles.brandSub}>Regenerative Farm Ecosystem Demo</div>
            </div>
          </div>

          <nav style={styles.nav}>
            <NavButton label="Home" active={view === "home"} onClick={() => setView("home")} styleFn={styles.navBtn} />
            <NavButton label="Guest" active={view === "guest"} onClick={() => setView("guest")} styleFn={styles.navBtn} />
            <NavButton label="Customer" active={view === "customer"} onClick={() => setView("customer")} styleFn={styles.navBtn} />
            <NavButton
              label="Marketplace"
              active={view === "marketplace"}
              onClick={() => setView("marketplace")}
              styleFn={styles.navBtn}
            />
            <NavButton label="Grower" active={view === "grower"} onClick={() => setView("grower")} styleFn={styles.navBtn} />
            <NavButton
              label="Youth Workforce"
              active={view === "youth"}
              onClick={() => setView("youth")}
              styleFn={styles.navBtn}
            />
            <NavButton
              label="Partners"
              active={view === "partners"}
              onClick={() => setView("partners")}
              styleFn={styles.navBtn}
            />
          </nav>
        </div>
      </header>

      {view === "home" && renderHome()}
      {view === "guest" && renderGuest()}
      {view === "customer" && renderCustomer()}
      {view === "marketplace" && renderMarketplace()}
      {view === "grower" && renderGrower()}
      {view === "youth" && renderYouth()}
      {view === "partners" && renderPartners()}

      <footer style={styles.footer}>
        <div style={styles.shell}>
          Developed by Bronson Family Farm
        </div>
      </footer>
    </div>
  );
}

function NavButton({
  label,
  active,
  onClick,
  styleFn,
}: {
  label: string;
  active: boolean;
  onClick: () => void;
  styleFn: (active: boolean) => React.CSSProperties;
}) {
  return (
    <button onClick={onClick} style={styleFn(active)}>
      {label}
    </button>
  );
}

function FeatureCard({ title, text, button, onClick }: FeatureCardProps) {
  return (
    <div
      style={{
        background: "rgba(255,255,255,0.78)",
        border: "1px solid rgba(14,74,57,0.10)",
        borderRadius: "26px",
        padding: "22px",
        boxShadow: "0 14px 30px rgba(25, 47, 35, 0.08)",
      }}
    >
      <h3
        style={{
          fontSize: "20px",
          lineHeight: 1.15,
          fontWeight: 800,
          color: "#14392b",
          margin: 0,
        }}
      >
        {title}
      </h3>
      <div
        style={{
          color: "#52665d",
          lineHeight: 1.65,
          fontSize: "15px",
          marginTop: "12px",
        }}
      >
        {text}
      </div>
      {button && onClick ? (
        <button
          onClick={onClick}
          style={{
            marginTop: "16px",
            appearance: "none",
            border: "1px solid rgba(20,57,43,0.12)",
            background: "#ffffff",
            color: "#14392b",
            borderRadius: "999px",
            padding: "11px 16px",
            fontWeight: 700,
            fontSize: "14px",
            cursor: "pointer",
          }}
        >
          {button}
        </button>
      ) : null}
    </div>
  );
}

export default App;
