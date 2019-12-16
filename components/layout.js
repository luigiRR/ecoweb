import Head from "next/head";
import Footer from "./footer";
import Nav from "./nav";

import "../styles/layout.scss";

const Layout = props => (
  <div className="Layout">
    <Head>
      <title>Ecocalor</title>
      <link rel="icon" href="/static/ecocalor-logo.png" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta charSet="utf-8" />
    </Head>

    <Nav/>
    
      <div className="Content">{props.children}</div>
      
    <Footer></Footer>
  </div>
);
export default Layout;