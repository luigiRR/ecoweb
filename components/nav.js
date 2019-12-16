import "../styles/header.scss";

const Nav = () =>

<header className="header">
  {/* <nav className="nav has-navbar-fixed-top has-background container" role="navigation" aria-label="dropdown navigation">
    
    <div className="navbar-item has-dropdown">
      <a className="" href="/">
        Inicio
      </a>
    </div>
    <div className="navbar-item has-dropdown">
      <a className="" href="asistencia-mantenimiento">
        asistencia
      </a>
        <div className="navbar-dropdown">
          <a className="navbar-item">
            Overview
          </a>
        </div>
    </div>
  </nav> */}
  <nav className="navbar is-fixed-top has-background" id="menu">
    <div className="navbar-brand">
      <a className="navbar-item" href="https://versions.bulma.io/0.7.0">
        <img src="https://versions.bulma.io/0.7.0/images/bulma-logo.png" alt="Bulma: a modern CSS framework based on Flexbox" width="112" height="28"/>
      </a>
      <div className="navbar-burger burger" data-target="navbarExampleTransparentExample">
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>

    <div id="navbarExampleTransparentExample" className="navbar-menu">
      <div className="navbar-start">
        <a className="navbar-item" href="/">
          Home
        </a>
        <div className="navbar-item has-dropdown is-hoverable">
          <a className="navbar-link" href="asistencia-mantenimiento">
            Asistencia y Mantenimiento
          </a>
          <div className="navbar-dropdown is-boxed">
            <a className="navbar-item" href="/documentation/overview/start/">
              Overview
            </a>
            <a className="navbar-item" href="https://versions.bulma.io/0.7.0/documentation/modifiers/syntax/">
              Modifiers
            </a>
            <a className="navbar-item" href="https://versions.bulma.io/0.7.0/documentation/columns/basics/">
              Columns
            </a>
            <a className="navbar-item" href="https://versions.bulma.io/0.7.0/documentation/layout/container/">
              Layout
            </a>
            <a className="navbar-item" href="https://versions.bulma.io/0.7.0/documentation/form/general/">
              Form
            </a>
            <hr className="navbar-divider"/>
            <a className="navbar-item" href="https://versions.bulma.io/0.7.0/documentation/elements/box/">
              Elements
            </a>
            <a className="navbar-item is-active" href="https://versions.bulma.io/0.7.0/documentation/components/breadcrumb/">
              Components
            </a>
          </div>
        </div>
      </div>

      <div className="navbar-end">
        <div className="navbar-item">
          <div className="field is-grouped">
            <p className="control">
              <a className="bd-tw-button button" data-social-network="Twitter" data-social-action="tweet" data-social-target="https://bulma.io" target="_blank" href="https://twitter.com/intent/tweet?text=Bulma: a modern CSS framework based on Flexbox&amp;hashtags=bulmaio&amp;url=https://bulma.io&amp;via=jgthms">
                <span className="icon">
                  <i className="fab fa-twitter"></i>
                </span>
                <span>
                  Tweet
                </span>
              </a>
            </p>
            <p className="control">
              <a className="button is-primary" href="https://github.com/jgthms/bulma/releases/download/0.6.2/bulma-0.6.2.zip">
                <span className="icon">
                  <i className="fas fa-download"></i>
                </span>
                <span>Download</span>
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  </nav>
</header>

export default Nav;