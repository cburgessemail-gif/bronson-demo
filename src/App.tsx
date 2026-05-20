.wrap {
  width: min(1480px, calc(100vw - 48px));
  margin: 0 auto;
  padding: 20px 0 14px;
}

.main-title {
  margin: 0;
  max-width: 820px;
  font-size: clamp(36px, 4vw, 60px);
  line-height: .96;
  font-weight: 300;
  letter-spacing: -2px;
}

.progress {
  height: 8px;
  background: rgba(255,255,255,.18);
  border-radius: 999px;
  overflow: hidden;
  margin-top: 20px;
}

.nav {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-top: 18px;
}

.stage {
  display: grid;
  grid-template-columns: .98fr 1.02fr;
  gap: 34px;
  align-items: stretch;
  padding-top: 28px;
}

.panel {
  height: 470px;
  border: 1px solid rgba(255,255,255,.12);
  background: rgba(3,3,3,.84);
  border-radius: 32px;
  padding: 26px 34px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  box-shadow: 0 24px 70px rgba(0,0,0,.35);
  overflow: hidden;
}

.slide-title {
  margin: 0 0 10px;
  font-size: clamp(34px, 3.5vw, 54px);
  line-height: .96;
  font-weight: 300;
  letter-spacing: -1.4px;
}

.subtitle {
  margin: 0 0 14px;
  font-size: clamp(17px, 1.35vw, 23px);
  line-height: 1.2;
}

.section-label {
  margin: 14px 0 6px;
  color: #d8b56d;
  font-weight: 900;
  letter-spacing: 2px;
  font-size: 11px;
  text-transform: uppercase;
}

.bullets, .journey {
  margin: 0;
  padding: 0;
  list-style: none;
  display: grid;
  gap: 7px;
}

.bullets li, .journey li {
  font-size: clamp(15px, 1.05vw, 19px);
  line-height: 1.18;
  display: grid;
  grid-template-columns: 22px 1fr;
  gap: 9px;
}

.decision-box {
  margin-top: 10px;
  border: 1px solid rgba(216,181,109,.45);
  background: rgba(216,181,109,.1);
  border-radius: 16px;
  padding: 10px 13px;
  font-size: clamp(15px, 1.05vw, 18px);
  line-height: 1.18;
}

.controls {
  display: flex;
  flex-wrap: wrap;
  gap: 9px;
  margin-top: 16px;
}

.control {
  border: 1px solid rgba(255,255,255,.22);
  border-radius: 999px;
  padding: 10px 18px;
  color: white;
  font-size: 14px;
  font-weight: 800;
  cursor: pointer;
  background: rgba(255,255,255,.1);
}

.image-card {
  position: relative;
  height: 470px;
  border-radius: 32px;
  border: 1px solid rgba(255,255,255,.12);
  overflow: hidden;
  background: #050505;
  box-shadow: 0 24px 70px rgba(0,0,0,.35);
}

.hero-image {
  width: 100%;
  height: 100%;
  display: block;
  filter: brightness(1.16) contrast(1.08) saturate(1.08);
}
