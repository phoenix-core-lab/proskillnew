"use client";
import React, { useState } from "react";
import { useTranslations } from "next-intl";
import { IoSearch } from "react-icons/io5";
import Link from "next/link";
import LanguageSwitcher from "../languages/index.jsx";
import Button from "../button/index.jsx";
import NavBar from "./navBar/index.jsx";
import ThemeToggle from "../themeSwitcher/index.jsx";
import "./styles.sass";
import SearchBarDropdown from "../searchBar/index.jsx";

const Header = () => {
  const [burgerIsOpen, setBurgerIsOpen] = useState(false);
  const t = useTranslations();

  const toggleMenu = (toOpen) => {
    setBurgerIsOpen(toOpen);
  };

  return (
    <header className={`header  ${burgerIsOpen ? "activeHeader" : ""}`}>
      <div className=' container'>
        <div className='headerItems'>
          <div className='headerItem'>
            <Link
              href='/'
              className='headerLogo'
            >
              Logo
            </Link>
          </div>
          <div className='headerItem'>
            <span
              className={`mobileOverlay ${burgerIsOpen ? "activeMenu" : ""}`}
              onClick={(e) => toggleMenu(false)}
            ></span>
            <NavBar
              burgerIsOpen={burgerIsOpen}
              toggleMenu={toggleMenu}
            />
          </div>
          <div className='headerButton'>
            <div className='headerSearch'>
              <SearchBarDropdown />
            </div>
            <div className='headerItem lang'>
              <LanguageSwitcher />
            </div>
            <ThemeToggle />

            <Link
              className='contactUs'
              href='/contact-us'
            >
              <Button>{t("login")}</Button>
            </Link>
            <div
              className='burgerBtnContainer'
              onClick={() => toggleMenu(!burgerIsOpen)}
            >
              <div className={`burgerBtn ${burgerIsOpen ? "active" : ""}`}>
                <span></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
