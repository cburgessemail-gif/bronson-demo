{page === "marketplace" && activePathway ? (
  <>
    <div
      style={{
        marginTop: 24,
        borderRadius: 34,
        overflow: "hidden",
        background: "#ffffff",
        boxShadow: "0 18px 44px rgba(0,0,0,.08)",
      }}
    >
      <div
        style={{
          background: "#2f6b3f",
          color: "#fff",
          padding: "18px 22px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          gap: 16,
          flexWrap: "wrap",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 18, flexWrap: "wrap" }}>
          <div style={{ fontSize: 28, fontWeight: 800, letterSpacing: "-.03em" }}>
            GrownBy
          </div>
          <div style={{ fontSize: 16, fontWeight: 700, opacity: 0.95 }}>
            Explore
          </div>
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: 18, flexWrap: "wrap" }}>
          <div style={{ fontSize: 16, fontWeight: 700 }}>Farmer Dashboard</div>
          <div style={{ fontSize: 16, fontWeight: 700 }}>US</div>
          <button
            style={{
              ...primaryButtonStyle(true),
              padding: "12px 18px",
            }}
            onClick={() => openExternal(STORE_URL)}
          >
            Open Live Store
          </button>
        </div>
      </div>

      <div
        className="two-col"
        style={{
          display: "grid",
          gridTemplateColumns: "260px 1fr",
          minHeight: 760,
        }}
      >
        <div
          style={{
            borderRight: "1px solid #e8ece8",
            padding: 24,
            background: "#fbfbfb",
          }}
        >
          <div
            style={{
              fontSize: 14,
              fontWeight: 800,
              color: "#4d5f56",
              marginBottom: 16,
            }}
          >
            Categories
          </div>

          <div style={{ display: "grid", gap: 12 }}>
            <div style={{ color: "#79a85b", fontSize: 18, fontWeight: 700 }}>All</div>
            <div style={{ color: "#47584f", fontSize: 18 }}>Vegetables</div>
            <div style={{ color: "#47584f", fontSize: 18 }}>Seedlings</div>
            <div style={{ color: "#47584f", fontSize: 18 }}>Fresh Herbs</div>
            <div style={{ color: "#47584f", fontSize: 18 }}>Greens</div>
          </div>

          <div
            style={{
              marginTop: 36,
              padding: 18,
              borderRadius: 20,
              background: "#f3f7f3",
            }}
          >
            <div
              style={{
                fontSize: 12,
                letterSpacing: ".18em",
                textTransform: "uppercase",
                color: "#7a8b82",
                fontWeight: 800,
              }}
            >
              Store Purpose
            </div>
            <div
              style={{
                marginTop: 10,
                fontSize: 16,
                lineHeight: 1.75,
                color: "#5e7067",
              }}
            >
              This is the online store where guests, customers, volunteers, and supporters purchase produce and support the ecosystem.
            </div>
          </div>
        </div>

        <div style={{ padding: 22 }}>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(5, minmax(0, 1fr))",
              gap: 22,
            }}
          >
            {[
              { img: "/DeCiccoBroccoli.jpg", title: "BROCCOLI - DE CICCO", price: "$5.00/bunch" },
              { img: "/CabbageAllSeasons.jpg", title: "CABBAGE - ALL SEASONS", price: "$5.00/bunch" },
              { img: "/culniary_edibleflowers.jpeg", title: "CILANTRO - CORIANDA", price: "$3.00/bunch" },
              { img: "/CollardsGeorgiaSouthern.jpg", title: "COLLARDS - GEORGIA SOUTHERN", price: "$10.00/bunch" },
              { img: "/TokyoBekana.jpg", title: "MUSTARD GREENS - TOKYO BEKANA", price: "$3.00/bunch" },
              { img: "/MizAmerica.jpg", title: "MUSTARD - MIZ AMERICA", price: "$5.00/bunch" },
              { img: "/CayenneLongSlim.jpg", title: "PEPPER, HOT - CAYENNE LONG SLIM", price: "$5.00/bunch" },
              { img: "/JalapenoEarly.jpg", title: "PEPPER, HOT - JALAPENO EARLY", price: "$5.00/bunch" },
              { img: "/HotPepperMix.jpg", title: "PEPPER - HOT PEPPER MIX", price: "$5.00/bunch" },
              { img: "/SerranoChili.jpg", title: "PEPPER - SERRANO CHILI", price: "$5.00/bunch" },
            ].map((item, index) => (
              <div key={index}>
                <div
                  style={{
                    position: "relative",
                    borderRadius: 22,
                    overflow: "hidden",
                    height: 250,
                    backgroundImage: `url(${item.img})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundColor: "#eef1ee",
                  }}
                >
                  <div
                    style={{
                      position: "absolute",
                      right: 12,
                      bottom: 12,
                      width: 46,
                      height: 46,
                      borderRadius: 999,
                      background: "rgba(255,255,255,.92)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: 28,
                      color: "#75b95e",
                      boxShadow: "0 8px 20px rgba(0,0,0,.12)",
                    }}
                  >
                    +
                  </div>
                </div>

                <div
                  style={{
                    marginTop: 14,
                    fontSize: 18,
                    lineHeight: 1.25,
                    color: "#4d5751",
                    fontWeight: 500,
                  }}
                >
                  {item.title}
                </div>

                <div
                  style={{
                    marginTop: 6,
                    fontSize: 16,
                    color: "#5e6b64",
                  }}
                >
                  {item.price}
                </div>
              </div>
            ))}
          </div>

          <div style={{ marginTop: 28 }}>
            <button
              style={primaryButtonStyle(true)}
              onClick={() => openExternal(STORE_URL)}
            >
              Open Full GrownBy Store
            </button>
          </div>
        </div>
      </div>
    </div>
  </>
) : activePathway ? (
  <>
    {imageBlock(
      activePathway.image,
      440,
      true,
      <div style={{ maxWidth: 820 }}>
        <div
          style={{
            fontSize: 50,
            lineHeight: 1,
            fontWeight: 800,
            letterSpacing: "-.03em",
          }}
        >
          {activePathway.title}
        </div>
        <div
          style={{
            marginTop: 14,
            fontSize: 24,
            lineHeight: 1.7,
            color: "rgba(255,255,255,.92)",
          }}
        >
          {activePathway.personalLine}
        </div>
      </div>
    )}

    <div
      className="two-col"
      style={{
        display: "grid",
        gridTemplateColumns: ".85fr 1.15fr",
        gap: 24,
        marginTop: 24,
      }}
    >
      <div style={cardStyle()}>
        <div
          style={{
            fontSize: 52,
            lineHeight: 1,
            fontWeight: 800,
            letterSpacing: "-.03em",
          }}
        >
          {activePathway.title}
        </div>

        <div
          style={{
            marginTop: 12,
            fontSize: 18,
            lineHeight: 1.75,
            color: COLORS.muted,
          }}
        >
          {activePathway.subtitle}
        </div>

        <div style={{ marginTop: 22 }}>
          <div
            style={{
              fontSize: 11,
              letterSpacing: ".26em",
              textTransform: "uppercase",
              color: "#7f9086",
              fontWeight: 800,
            }}
          >
            Journey Progress
          </div>

          <div
            style={{
              marginTop: 10,
              width: "100%",
              height: 10,
              borderRadius: 999,
              background: "#e4ece5",
              overflow: "hidden",
            }}
          >
            <div
              style={{
                width: `${progress}%`,
                height: "100%",
                borderRadius: 999,
                background:
                  "linear-gradient(90deg,#0b5e43 0%, #d8ec77 100%)",
              }}
            />
          </div>
        </div>

        <div style={{ display: "grid", gap: 10, marginTop: 20 }}>
          {layerOrder.map((item) => (
            <button
              key={item}
              style={ghostButtonStyle(layer === item)}
              onClick={() => setLayer(item)}
            >
              {item}
            </button>
          ))}
        </div>

        <div
          style={{
            marginTop: 18,
            display: "flex",
            gap: 10,
            flexWrap: "wrap",
          }}
        >
          <button
            style={primaryButtonStyle()}
            onClick={() =>
              setLayer(
                layerOrder[Math.max(layerOrder.indexOf(layer) - 1, 0)]
              )
            }
          >
            Prev
          </button>

          <button
            style={primaryButtonStyle(true)}
            onClick={() =>
              setLayer(
                layerOrder[Math.min(layerOrder.indexOf(layer) + 1, 4)]
              )
            }
          >
            Next
          </button>

          <button
            style={primaryButtonStyle()}
            onClick={() => setPage("home")}
          >
            Back Home
          </button>
        </div>
      </div>

      <div style={cardStyle()}>
        <div
          style={{
            fontSize: 56,
            lineHeight: 1,
            fontWeight: 800,
          }}
        >
          {activePathway.panels[layer].title}
        </div>

        <div
          style={{
            marginTop: 22,
            fontSize: 23,
            lineHeight: 1.85,
            color: COLORS.muted,
          }}
        >
          {activePathway.panels[layer].body}
        </div>

        <div
          className="two-col"
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 18,
            marginTop: 26,
          }}
        >
          <div
            style={{
              ...cardStyle(),
              background:
                "linear-gradient(180deg, rgba(248,251,248,.98), rgba(240,246,241,.96))",
              boxShadow: "none",
            }}
          >
            <div
              style={{
                fontSize: 11,
                letterSpacing: ".26em",
                textTransform: "uppercase",
                color: "#7f9086",
                fontWeight: 800,
              }}
            >
              Why This Exists
            </div>

            <div
              style={{
                marginTop: 14,
                fontSize: 18,
                lineHeight: 1.8,
                color: COLORS.muted,
              }}
            >
              {activePathway.whyItMatters}
            </div>
          </div>

          <div
            style={{
              ...cardStyle(),
              background:
                "linear-gradient(180deg, rgba(248,251,248,.98), rgba(240,246,241,.96))",
              boxShadow: "none",
            }}
          >
            <div
              style={{
                fontSize: 11,
                letterSpacing: ".26em",
                textTransform: "uppercase",
                color: "#7f9086",
                fontWeight: 800,
              }}
            >
              What This Creates
            </div>

            <div
              style={{
                marginTop: 14,
                fontSize: 18,
                lineHeight: 1.8,
                color: COLORS.muted,
              }}
            >
              {activePathway.whatPeopleGain}
            </div>
          </div>
        </div>
      </div>
    </div>
  </>
) : null}
