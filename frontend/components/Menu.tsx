import { useRef } from "react";
import Logo from "./Logo";

type MenuProps = {
  closeModal: () => void;
};

const Menu = ({ closeModal }: MenuProps) => {
  const menuContent = useRef<HTMLDivElement>(null);

  const menuWrapperHandler = (event: React.MouseEvent<HTMLDivElement>) => {
    const MenuContent = menuContent.current;

    if (MenuContent && event.target instanceof Node) {
      if (!MenuContent.contains(event.target)) closeModal();
    }
  }; 
  
  return (
    <div className="fixed inset-0 flex items-start bg-[rgba(0,0,0,.5)] z-50" onClick={menuWrapperHandler}>
      <div ref={menuContent} className="flex flex-col items-center h-full w-[75%] bg-white">
        <Logo 
          width={100}
        />
      </div>
    </div>
  )
}

export default Menu