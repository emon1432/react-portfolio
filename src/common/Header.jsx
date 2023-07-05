import { Component } from "react";
import { Link } from "react-router-dom";

class Header extends Component {
  render() {
    return (
      <header>
        <div class="header-area">
          <div class="main-header  header-sticky">
            <div class="container-fluid">
              <div class="row align-items-center">
                <div class="col-xl-2 col-lg-2 col-md-1">
                  <div class="logo">
                    <Link to="/">
                      <img src="assets/img/logo/logo.png" alt="" />
                    </Link>
                  </div>
                </div>
                <div class="col-xl-10 col-lg-10 col-md-10">
                  <div class="menu-main d-flex align-items-center justify-content-end">
                    <div class="main-menu f-right d-none d-lg-block">
                      <nav>
                        <ul id="navigation">
                          <li>
                            <Link to="/">Home</Link>
                          </li>
                          <li>
                            <Link to="/about">About</Link>
                          </li>
                          <li>
                            <Link to="/services">Services</Link>
                          </li>
                          <li>
                            <Link to="/portfolio">Portfolio</Link>
                          </li>
                          <li>
                            <Link to="/blog">Blog</Link>
                          </li>
                          <li>
                            <Link to="/contact">Contact</Link>
                          </li>
                        </ul>
                      </nav>
                    </div>
                    <div class="header-right-btn f-right d-none d-xl-block ml-20">
                      <Link to="#" class="btn header-btn">
                        Get Free Consultent
                      </Link>
                    </div>
                  </div>
                </div>
                <div class="col-12">
                  <div class="mobile_menu d-block d-lg-none"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    );
  }
}

export default Header;
