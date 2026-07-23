const metrics = [
  ["14,204", "Objects tracked"], ["99.98%", "Signal uptime"], ["07", "Active missions"]
];

export default function Home() {
  return (
    <main><div className="lang-float"><a className="active" href="/">EN</a><a href="/ru">RU</a></div>
      <nav><a className="mark" href="#top"><span>O</span>ORBITAL/LAB</a><div><a href="/en/platform">Platform</a><a href="/en/missions">Missions</a><a href="#contact">Contact</a></div><a className="console" href="#platform">OPEN CONSOLE ↗</a></nav>
      <section className="hero" id="top">
        <div className="grid" aria-hidden="true"/>
        <div className="status"><i/> SYSTEMS NOMINAL <span>UTC 21:47:03</span></div>
        <div className="copy"><p>SPACE DOMAIN INTELLIGENCE</p><h1>See what’s<br/><span>beyond.</span></h1><p className="lead">Real-time orbital awareness for teams operating at the edge of possibility.</p><a href="#platform">EXPLORE THE PLATFORM <b>↘</b></a></div>
        <div className="orbit" aria-hidden="true"><div className="planet"/><i/><i/><i/><span>LEO-2407</span></div>
        <div className="coords">LAT 28.3922° N<br/>LNG 80.6077° W<br/>ALT 408.2 KM</div>
      </section>

      <section className="metrics">{metrics.map(([n,l])=><div key={l}><b>{n}</b><span>{l}</span></div>)}<p>Live network<br/>status <i/></p></section>

      <section className="platform" id="platform">
        <div className="label">[ 01 ] CAPABILITIES</div>
        <h2>A clearer picture<br/>of a crowded sky.</h2>
        <div className="dashboard">
          <div className="radar"><div className="rings"/><span className="sat s1">◆</span><span className="sat s2">◆</span><span className="sat s3">◆</span><small>LIVE ORBITAL MAP / 2026.204</small></div>
          <div className="panels">
            <article><span>01</span><h3>Persistent tracking</h3><p>Continuous observation across LEO, MEO and GEO with sub-second updates.</p></article>
            <article><span>02</span><h3>Collision intelligence</h3><p>Autonomous conjunction screening with decision-ready risk models.</p></article>
            <article><span>03</span><h3>Mission planning</h3><p>Simulate maneuvers and understand the operational picture before launch.</p></article>
          </div>
        </div>
      </section>

      <section className="mission" id="missions"><span>MISSION / ODYSSEY-4</span><h2>12 days.<br/>One new orbit.</h2><p>Supporting the next generation of climate observation.</p><a href="#contact">VIEW MISSION LOG ↗</a></section>
      <footer id="contact"><a className="mark" href="#top"><span>O</span>ORBITAL/LAB</a><p>Earth · Moon · Beyond</p><p>© 2026 OL SYSTEMS</p></footer>
    </main>
  );
}
