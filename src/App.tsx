import React from "react";

export default function App() {
  const go = (url:string) => window.open(url, "_blank");

  const card = (
    title:string,
    text:string,
    img:string,
    buttons:{label:string; action:()=>void}[]
  ) => (
    <section style={styles.card}>
      <img src={img} style={styles.image} />
      <div style={styles.content}>
        <h2 style={styles.h2}>{title}</h2>
        <p style={styles.p}>{text}</p>
        <div style={styles.row}>
          {buttons.map((b,i)=>(
            <button key={i} style={styles.btn} onClick={b.action}>
              {b.label}
            </button>
          ))}
        </div>
      </div>
    </section>
  );

  return (
    <div style={styles.page}>
      <header style={styles.hero}>
        <img src="/images/entrance-farm.jpg" style={styles.heroImg}/>
        <div style={styles.overlay}/>
        <div style={styles.heroText}>
          <h1 style={styles.h1}>Bronson Family Farm Ecosystem Demo</h1>
          <p style={styles.heroP}>
            Private working farm • Access by invitation only • Food • Workforce • Marketplace • Community
          </p>
          <div style={styles.row}>
            <button style={styles.primary} onClick={()=>window.scrollTo({top:700,behavior:"smooth"})}>
              Enter Demo
            </button>
            <button style={styles.btn} onClick={()=>go("https://www.bronsonfamilyfarm.com")}>
              Main Website
            </button>
          </div>
        </div>
      </header>

      {card(
        "Guest Experience",
        "Understand the land, the mission, and why this ecosystem exists.",
        "/images/guest-forest.jpg",
        [
          {label:"Farm Story",action:()=>alert("Bronson Family Farm connects land, food, youth, and opportunity.")},
          {label:"Invitation Policy",action:()=>alert("Access is by invitation, appointment, or approved registration only.")},
          {label:"Next: Marketplace",action:()=>window.scrollTo({top:1600,behavior:"smooth"})}
        ]
      )}

      {card(
        "Marketplace",
        "Fresh produce, Bubble Babies™, grower products, and community purchasing power.",
        "/images/marketplace-storefront.jpg",
        [
          {label:"Enter Store",action:()=>go("https://grownby.com/farms/bronson-family-farm/shop")},
          {label:"Preorders",action:()=>go("https://grownby.com/farms/bronson-family-farm/shop")},
          {label:"SNAP Info",action:()=>alert("SNAP-friendly access available where eligible.")}
        ]
      )}

      {card(
        "Grower Pathway",
        "Growers register to access opportunity, visibility, and participation.",
        "/images/grower-field.jpg",
        [
          {label:"Register Grower",action:()=>alert("Grower intake form can be connected next.")},
          {label:"Crop Planning",action:()=>go("https://www.almanac.com/gardening/planting-calendar")},
          {label:"Weather",action:()=>go("https://www.accuweather.com/en/us/youngstown/44503/weather-forecast/330121")}
        ]
      )}

      {card(
        "Youth Workforce",
        "Build skills, responsibility, and future readiness.",
        "/images/youth-workforce.jpg",
        [
          {label:"Check In",action:()=>alert("Youth workforce check-in module ready for next phase.")},
          {label:"Supervisor View",action:()=>alert("Supervisor dashboard can be connected next.")},
          {label:"Skills Path",action:()=>alert("Agriculture • Logistics • Culinary • Media • Tech")}
        ]
      )}

      {card(
        "Partners",
        "Organizations align resources for community benefit.",
        "/images/partners-collaboration.jpg",
        [
          {label:"Schedule Visit",action:()=>alert("Private site visits by invitation.")},
          {label:"Partnerships",action:()=>alert("Farm & Family Alliance, Parker Farms, community partners.")},
          {label:"Contact",action:()=>go("mailto:cburgess@bronsonfamilyfarm.com")}
        ]
      )}

      <footer style={styles.footer}>
        <strong>Bronson Family Farm</strong><br/>
        Private working farm • Invitation only access<br/>
        Developed with Farm & Family Alliance, Inc. and Parker Farms
      </footer>
    </div>
  );
}

const styles:any = {
  page:{fontFamily:"Arial, sans-serif",background:"#132018",color:"#fff"},
  hero:{position:"relative",height:"100vh",overflow:"hidden"},
  heroImg:{width:"100%",height:"100%",objectFit:"cover"},
  overlay:{position:"absolute",inset:0,background:"rgba(0,0,0,.45)"},
  heroText:{position:"absolute",top:"50%",left:"50%",transform:"translate(-50%,-50%)",textAlign:"center",width:"90%"},
  h1:{fontSize:"3rem",marginBottom:10},
  heroP:{fontSize:"1.2rem",marginBottom:20},
  primary:{padding:"14px 22px",borderRadius:30,border:0,background:"#d8b56d",fontWeight:"bold"},
  card:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:20,padding:30,alignItems:"center"},
  image:{width:"100%",borderRadius:20},
  content:{},
  h2:{fontSize:"2rem"},
  p:{lineHeight:1.5},
  row:{display:"flex",gap:10,flexWrap:"wrap",marginTop:15},
  btn:{padding:"12px 18px",borderRadius:25,border:0,fontWeight:"bold"},
  footer:{padding:40,textAlign:"center",background:"#0d1510"}
}
