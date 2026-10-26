import Image from "next/image";
import Link from "next/link";

const Logo = () => {
  return (
    <>
      <Link href="/">
        <Image
          src={"/images/logo/logo-geebdev-space-dark.svg"}
          alt="logo"
          width={70}
          height={70}
        />
      </Link>
    </>
  );
};

export default Logo;
