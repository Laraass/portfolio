import { useState, useEffect, useRef } from "react";
import { Icon } from "@iconify/react";

const Header = () => {
  const dropdownRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const [activeButton, setActiveButton] = useState("home");
  const [isOpen, setIsOpen] = useState(false);

  // Close dropdown menu on click outside the menu
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node) &&
        !(event.target instanceof HTMLElement && event.target.closest("button"))
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Button styles
  const buttonClasses =
    "text-shade-100 text-base hover:text-primary hover:underline cursor-pointer transition duration-300";
  const activeButtonClasses = "text-primary";

  // Buttons
  const buttons = (
    <>
      <button
        className={`${buttonClasses} ${
          activeButton === "home" ? activeButtonClasses : ""
        }`}
        onClick={() => {
          setIsOpen(false);
          setActiveButton("home");
        }}
      >
        Home
      </button>
      <button
        className={`${buttonClasses} ${
          activeButton === "education" ? activeButtonClasses : ""
        }`}
        onClick={() => {
          setIsOpen(false);
          setActiveButton("education");
        }}
      >
        About me
      </button>
      <button
        className={`${buttonClasses} ${
          activeButton === "about" ? activeButtonClasses : ""
        }`}
        onClick={() => {
          setIsOpen(false);
          setActiveButton("about");
        }}
      >
        Education & Projects
      </button>
      <button
        className={`${buttonClasses} ${
          activeButton === "skills" ? activeButtonClasses : ""
        }`}
        onClick={() => {
          setIsOpen(false);
          setActiveButton("skills");
        }}
      >
        Skills
      </button>
      <button
        className={`${buttonClasses} ${
          activeButton === "contact" ? activeButtonClasses : ""
        }`}
        onClick={() => {
          setIsOpen(false);
          setActiveButton("contact");
        }}
      >
        Contact
      </button>
    </>
  );

  return (
    <nav className="bg-shade-900 text-shade-100 fixed w-full z-50">
      <div className="p-4 flex items-center justify-between h-16">
        <div className="flex items-center">
          <a href="/">
            <img
              src="/logo.svg"
              alt="Lara Salman"
              className="size-28 cursor-pointer transform transition duration-300 hover:scale-102"
            />
          </a>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:block">
          <div className="flex gap-4 items-baseline">{buttons}</div>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            ref={buttonRef}
            onClick={() => setIsOpen(!isOpen)}
            type="button"
            aria-label="Toggle mobile menu"
            className="text-shade-100"
          >
            <Icon
              icon="lineicons:menu-hamburger-1"
              className="text-primary size-9"
            />
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div
        ref={dropdownRef}
        className={`flex flex-col gap-3 bg-shade-900 text-shade-100 md:hidden transition-all ease-in duration-500 transform ${
          isOpen
            ? "max-h-[500px] opacity-100 p-4"
            : "max-h-0 opacity-0 overflow-hidden"
        }`}
      >
        {buttons}
      </div>
    </nav>
  );
};

export default Header;
