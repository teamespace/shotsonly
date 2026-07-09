export default function Footer() {
  return (
    <footer>
      <div className="shell">
        <div className="foot-grid">
          <div className="foot-brand">
            <a className="logo" href="#" aria-label="Curalink home">
              <span className="logo-cross" aria-hidden="true"></span>
              Cura<em>link</em>
            </a>
            <p>AI-guided telehealth with real, board-certified doctors. Faster care, honest prices, one record you own.</p>
          </div>
          <nav className="foot-col" aria-label="Care links">
            <h3>Care</h3>
            <ul>
              <li><a href="#how">How it works</a></li>
              <li><a href="#care">Conditions we treat</a></li>
              <li><a href="#pricing">Plans & pricing</a></li>
              <li><a href="#">Curalink for Work</a></li>
            </ul>
          </nav>
          <nav className="foot-col" aria-label="Company links">
            <h3>Company</h3>
            <ul>
              <li><a href="#">Our clinical board</a></li>
              <li><a href="#">How our AI is audited</a></li>
              <li><a href="#">Careers</a></li>
              <li><a href="#">Press</a></li>
            </ul>
          </nav>
          <nav className="foot-col" aria-label="Trust links">
            <h3>Trust</h3>
            <ul>
              <li><a href="#">Privacy practices</a></li>
              <li><a href="#">HIPAA notice</a></li>
              <li><a href="#">Security</a></li>
              <li><a href="#">Terms of service</a></li>
            </ul>
          </nav>
        </div>
        <div className="foot-base">
          <p>An Elux concept — Dribbble shot series · <a href="#">Back to all 10 concepts</a></p>
          <p>© 2026 Curalink Health, Inc.</p>
        </div>
        <p className="foot-disclaimer">
          Curalink is a design concept. In an emergency, call your local emergency number.
          AI triage supports — and never replaces — the judgment of licensed physicians.
        </p>
      </div>
    </footer>
  );
}
