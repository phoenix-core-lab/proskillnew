"use Client";
import React, { useEffect, useState } from "react";
import { useRouter, usePathname } from "next/navigation";
import { IoIosArrowDown } from "react-icons/io";
import "./styles.sass";

const LanguageSwitcher = () => {
  const router = useRouter();
  const pathname = usePathname();
  const [language, setLanguage] = useState("uz");

  useEffect(() => {
    const currentLanguage = pathname?.startsWith("/ru") ? "ru" : "en";
    setLanguage(currentLanguage);
  }, [pathname]);

  const handleLanguageChange = () => {
    const newLanguage = language === "en" ? "ru" : "en";
    const newPathname = pathname?.replace(/^\/(en|ru)/, "") || "";
    router.push(`/${newLanguage}${newPathname}`);
    setLanguage(newLanguage);
  };

  return (
    <div className='languageSwitcher'>
      <button
        className={`switcher ${language === "en" ? "activeLang" : ""} ${language === "ru" ? "activeLang" : ""}`}
        onClick={handleLanguageChange}
      >
        {language === "en" ? "English" : "Русский"}
        <IoIosArrowDown />
      </button>
    </div>
  );
};

export default LanguageSwitcher;
