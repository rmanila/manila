import React from "react";
import "./Files/css/index.css";

const App = () => {
  return (
    <div>
      <nav
        style={{ height: "10%", width: "100%" }}
        className="d-flex align-items-center bg-color text-color"
      >
        <div className="col-11">
          <a href="#">
            <img className="img-1" src="logo192.png" alt="logo192.png" />
          </a>
          <label className="px-4 fs-4">My Portfolio</label>
        </div>
        <button
          className="navbar-toggler d-xs-block d-sm-none d-md-none d-lg-none d-xl-none"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#sidebarMenu"
          aria-controls="offcanvasNavbar"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon text-white fs-1 material-symbols-outlined">
            menu
          </span>
        </button>
        <div
          className="offcanvas offcanvas-end"
          tabIndex="-1"
          id="sidebarMenu"
          aria-labelledby="offcanvasNavbarLabel"
        >
          <div className="offcanvas-header">
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            ></button>
          </div>
          <div className="offcanvas-body">
            <ul className="list-group list-unstyled" id="sidebarList">
              <li className="mt-5">
                <a
                  className="d-flex align-items-center list-group-item"
                  href="#CoverPage"
                >
                  <span>Cover Page</span>
                </a>
              </li>
              <li className="mt-3">
                <a
                  href="#Resume"
                  className="d-flex align-items-center list-group-item"
                >
                  <span>Resume</span>
                </a>
              </li>
              <li className="mt-3">
                <a
                  href="#Certifications"
                  className="d-flex align-items-center list-group-item"
                >
                  <span>Certifications</span>
                </a>
              </li>
              <li className="mt-3">
                <a
                  className="d-flex align-items-center list-group-item"
                  href="#Award"
                >
                  <span>Award</span>
                </a>
              </li>
              <li className="mt-3">
                <a
                  className="d-flex align-items-center list-group-item"
                  href="#Contents"
                >
                  <span>Contents</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div className="d-flex bg-color-1">
        <aside
          className="d-flex flex-column d-none d-sm-inline"
          style={{ height: "100%" }}
        >
          <ul className="list-group list-unstyled">
            <li className="mt-5">
              <a
                href="#CoverPage"
                className="d-flex align-items-center list-group-item bg-color-1"
              >
                <span className="material-symbols-outlined px-3">
                  dashboard
                </span>
                <span className="d-none d-lg-block d-xl-block">Cover Page</span>
              </a>
            </li>
            <li className="mt-3">
              <a
                href="#Resume"
                className="d-flex align-items-center list-group-item bg-color-1"
              >
                <span className="material-symbols-outlined px-3">group</span>
                <span className="d-none d-lg-block d-xl-block">Resume</span>
              </a>
            </li>
            <li className="mt-3">
              <a
                href="#Certifications"
                className="d-flex align-items-center list-group-item bg-color-1"
              >
                <span className="material-symbols-outlined px-3">groups</span>
                <span className="d-none d-lg-block d-xl-block">
                  Certifications
                </span>
              </a>
            </li>
            <li className="mt-3">
              <a
                className="d-flex align-items-center list-group-item bg-color-1"
                href="#Award"
              >
                <span className="material-symbols-outlined px-3">paid</span>
                <span className="d-none d-lg-block d-xl-block">Award</span>
              </a>
            </li>
            <li className="mt-3">
              <a
                className="d-flex align-items-center list-group-item bg-color-1"
                href="#Contents"
              >
                <span className="material-symbols-outlined px-3">
                  local_shipping
                </span>
                <span className="d-none d-lg-block d-xl-block">Contents</span>
              </a>
            </li>
          </ul>
        </aside>
        <main className="col-10 mx-auto">
          <div id="main-page"></div>
        </main>
      </div>
    </div>
  );
};

export default App;
