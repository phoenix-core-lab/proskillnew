import { useState } from "react";
import { IoSearch } from "react-icons/io5";
import { useTranslations } from "next-intl";
import "./styles.sass";

const SearchBarDropdown = () => {
  const t = useTranslations();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className='dropdownSearchBar'>
      <button
        className='dropdownSearchBarButton'
        onClick={() => setIsOpen(!isOpen)}
      >
        {t("search")} <IoSearch />
      </button>
      <div className={`dropdownSearchBarMenu ${isOpen ? "open" : ""}`}>
        <div className='inputBox'>
          <input
            className='input'
            placeholder={`${t("enterCourseName")}`}
            type='text'
          />
        </div>
      </div>
    </div>
  );
};

export default SearchBarDropdown;
