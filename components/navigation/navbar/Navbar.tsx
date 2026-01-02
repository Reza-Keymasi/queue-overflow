import Image from "next/image";
import Link from "next/link";

import Logo from "../../../public/images/logo.svg";
import Theme from "./Theme";

const Navbar = () => {
  return (
    <nav className="flex-between background-light900_dark200 fixed z-50 w-full p-6 shadow-light-300 dark:shadow-none sm:px-12">
      <Link href="/" className="flex items-center gap-1">
        <Image src={Logo} alt="Logo" />
        <p className="h3-bold font-space-grotesk text-dark-100 dark:text-light-900 max-sm:hidden">
          Queue<span className="text-primary-500 ">Overflow</span>
        </p>
      </Link>
      <p>Global Search</p>
      <div className="flex-between gap-5">
        <Theme />
      </div>
    </nav>
  );
};

export default Navbar;
