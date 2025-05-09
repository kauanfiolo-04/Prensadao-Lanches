import { useRef } from "react";
import Logo from "./Logo";
import { MenuItem } from "./Header";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Icon } from "@iconify/react/dist/iconify.js";

type MenuProps = {
  items: MenuItem[];
  closeModal: () => void;
};

const Menu = ({ items, closeModal }: MenuProps) => {
  const path = usePathname();
  const menuContent = useRef<HTMLDivElement>(null);

  const menuWrapperHandler = (event: React.MouseEvent<HTMLDivElement>) => {
    const MenuContent = menuContent.current;

    if (MenuContent && event.target instanceof Node) {
      if (!MenuContent.contains(event.target)) closeModal();
    }
  }; 
  
  return (
    <div className="fixed inset-0 flex items-start bg-[rgba(0,0,0,.5)] z-50" onClick={menuWrapperHandler}>
      <div ref={menuContent} className="flex flex-col items-center justify-between h-full w-[75%] bg-white p-4">
        <div>
          <div>
            <Logo 
              className="w-full"
            />
          </div>

          <ul className="">
            {items.map((item, idx) => (
              <li 
                key={idx} 
                className={`
                  p-3
                  ${path.startsWith(item.link) ? '' : ''}
                `}
              >
                <Link 
                  className="flex items-center gap-4 cursor-pointer text-xl"
                  href={item.link}
                >
                  <Icon 
                    icon={item.icon}
                    width={20}
                  />
                  <p>{item.text}</p>
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          some info
        </div>
      </div>
    </div>
  )
}

export default Menu