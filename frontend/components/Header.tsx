"use client";

import { useState } from "react";
import Menu from "./Menu";
import { Icon } from '@iconify/react';

export type MenuItem = {
  link: string;
  icon: string;
  text: string;
};

const menuItems: MenuItem[] = [
  { link: "/category/hot-dog",  text: "Hot Dogs", icon: "lucide-lab:hot-dog" },
  { link: "/category/hamburg", text: "Hamburguers", icon: "lucide:hamburger" },
  { link: "/category/pizza", text: "Pizza", icon: "lucide:pizza" }
];

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
        <Icon 
          width={24}
          icon="solar:hamburger-menu-broken"
        />
      </button>

      {showMenu && <Menu items={menuItems} closeModal={closeMenu} />}
    </header>
  )
}

export default Header
