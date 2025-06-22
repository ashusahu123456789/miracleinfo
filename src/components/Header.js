import React, { useEffect } from 'react';

function Header({ className = '', isMobileNavOpen, isScrolled, isServicesDropdownOpen, onMobileNavToggle, onServicesDropdownToggle, onOpenLearningMaterial }) {
  useEffect(() => {
    if (isMobileNavOpen) {
      document.body.classList.add('mobile-nav-active');
    } else {
      document.body.classList.remove('mobile-nav-active');
    }
  }, [isMobileNavOpen]);

  return (
    <header id="header" className={"header d-flex align-items-center fixed-top " + className + (isScrolled ? " scrolled" : "")}>
      <div className="container-fluid container-xl position-relative d-flex align-items-center justify-content-between">
        <a href="index.html" className="logo d-flex align-items-center">
          <img src="assets/img/perfectlogo.png" alt="logo" className="logo-large" />
        </a>
        <nav id="navmenu" className="navmenu">
          <ul>
            <li><a href="#hero" className="active">Home</a></li>
            <li><a href="#about">Company Profile</a></li>
            <li><a href="#Products">Products</a></li>
            <li><a href="#stats">Clients</a></li>
            <li><a href="/career">Career</a></li>
            <li><a href="#contact">Contact</a></li>
<li><a href="#features" onClick={(e) => { e.preventDefault(); onOpenLearningMaterial(); }} style={{cursor: 'pointer'}}>Learning Material</a></li>
            {/* <li className={'dropdown ' + (isServicesDropdownOpen ? 'dropdown-active' : '')}>
              <a href="#!" onClick={onServicesDropdownToggle}>
                <span>Services</span> <i className="bi bi-chevron-down toggle-dropdown" />
              </a>
              <ul className={'dropdown-menu ' + (isServicesDropdownOpen ? 'dropdown-menu-active' : '')}>
                <li><a href="#!">Dropdown 1</a></li>
                <li><a href="#!">Dropdown 2</a></li>
                <li><a href="#!">Dropdown 3</a></li>
                <li><a href="#!">Dropdown 4</a></li>
              </ul>
            </li> */}
            <li><a href="#features">Technologies</a></li>
          </ul>
          <i
            className={'mobile-nav-toggle d-xl-none bi ' + (isMobileNavOpen ? 'bi-x' : 'bi-list')}
            onClick={onMobileNavToggle}
          />
        </nav>
      </div>
    </header>
  );
}

export default Header;
