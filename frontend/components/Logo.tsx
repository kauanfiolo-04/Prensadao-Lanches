import Link from "next/link";
import LogoIcon from "@/public/FullLogo.png";
import Image from "next/image";

type LogoProps = {
  redirect?: boolean;
  className?: string;
};

const Logo = ({ redirect, className }: LogoProps) => {
  return (
    <Link href={redirect ? "/" : ""} >
      <Image className={className} src={LogoIcon} alt="logo" />
    </Link>
  );
};

export default Logo;