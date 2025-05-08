"use client";

import { useState } from "react";
import Menu from "./Menu";
import { Bars3BottomLeftIcon } from "@heroicons/react/16/solid";

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);

  const openMenu = () => setShowMenu(true);
  const closeMenu = () => setShowMenu(false);

  return (
    <header
      className="flex w-full border border-amber-300 h-12 p-2"
    >
      <button
        title="Open Menu"
        type="button"
        onClick={openMenu}
      >
        <Bars3BottomLeftIcon className="text-black size-6"/>
      </button>

      {showMenu && <Menu closeModal={closeMenu} />}
    </header>
  )
}

export default Header
