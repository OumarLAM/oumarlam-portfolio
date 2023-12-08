import Sidebar from "../Sidebar";
import "./index.scss";

const Layout = () => {
  return (
    <div className="app">
      <Sidebar />

      <div className="page">
        <span className="tags top-tags">
          <span className="top-html-opening">
            &lt;html&gt;
            <br />
            <span className="top-head-closing">&lt;head&gt;</span>
            <br />
          </span>
          <span className="top-title-tag">
            &lt;title&gt; lamdev &lt;/title&gt;
          </span>
          <br />
          <span className="top-head-closing">&lt;/head&gt;</span>
          <br />
          <span className="top-body-opening">&lt;body&gt;</span>
        </span>

        {/* <Outlet /> */}

        <span className="tags bottom-tags">
          &lt;/body&gt; <br />
          <span className="bottom-tag-html">&lt;/html&gt;</span>
        </span>
      </div>
    </div>
  );
};

export default Layout;
