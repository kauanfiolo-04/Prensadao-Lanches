import Link from "next/link";
import LogoIcon from "@/public/FullLogo.png";
import Image from "next/image";

type LogoProps = {
  redirect?: boolean;
  width?: number;
  height?: number;
};

const Logo = ({ width, height, redirect }: LogoProps) => {
  const imgProps:Omit<LogoProps, 'redirect'> = {};

  if (width) imgProps.width = width;
  if (height) imgProps.height = height;

  return (
    <Link href={redirect ? "/" : ""} >
      <Image {...imgProps} src={LogoIcon} alt="logo" />
    </Link>
  );
};

export default Logo;