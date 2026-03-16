import React from "react";

function Header() {
  return (
    <header className="dl-header">
      <nav className="dl-nav">
        <div className="dl-nav__logo">
          <span className="dl-nav__logo-mark">DL</span>
          <span className="dl-nav__logo-text">Discount Lot</span>
        </div>

        <ul className="dl-nav__links">
          <li>
            <a href="#home" className="dl-nav__link">
              Home
            </a>
          </li>
          <li>
            <a href="#how-it-works" className="dl-nav__link">
              How it works
            </a>
          </li>
          <li>
            <a href="#auctions" className="dl-nav__link">
              Auctions
            </a>
          </li>
          <li>
            <a href="#faq" className="dl-nav__link">
              FAQ
            </a>
          </li>
        </ul>

        <div className="dl-nav__actions">
          <button type="button" className="dl-nav__btn dl-nav__btn--ghost">
            Log in
          </button>
          <button type="button" className="dl-nav__btn dl-nav__btn--primary">
            Get started
          </button>
        </div>
      </nav>
    </header>
  );
}

export default Header;
