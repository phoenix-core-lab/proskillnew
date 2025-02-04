import React from "react";
import Link from "next/link";
import LanguageSwitcher from "@/components/languages";
import SearchBarDropdown from "@/components/searchBar";
import { useTranslations } from "next-intl";

const NavBar = ({ burgerIsOpen, toggleMenu }) => {
  const t = useTranslations();
  const handleLinkClick = () => {
    toggleMenu(false);
  };
  return (
    <nav className={`nav ${burgerIsOpen ? "activeMenu" : ""}`}>
      <div className='navContainer'>
        <div className='navBox'>
          <div className='links'>
            <Link
              className='navLink'
              href='/about'
              onClick={handleLinkClick}
            >
              {t("aboutUs")}
            </Link>
            <Link
              className='navLink'
              href='/projects'
              onClick={handleLinkClick}
            >
              {t("courses")}
            </Link>
            <Link
              className='navLink'
              href='/news'
              onClick={handleLinkClick}
            >
              {t("contacts")}
            </Link>
          </div>
          <div className='navActions'>
            <SearchBarDropdown />
            <div className='headerItem lang'>
              <LanguageSwitcher />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
