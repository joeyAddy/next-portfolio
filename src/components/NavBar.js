import Link from "next/link";
import React from "react";
import Logo from "./Logo";
import { useRouter } from "next/router";
import {
  DribbbleIcon,
  GithubIcon,
  LinkedInIcon,
  PinterestIcon,
  TwitterIcon,
} from "./Icons";

import { motion } from "framer-motion";

const NavBar = () => {
  const router = useRouter();
  const CustomLink = ({ href, title, className = "" }) => {
    return (
      <Link href={href} className={`${className} relative group`}>
        {title}

        <span
          className={`h-[2px] inline-block bg-dark absolute left-0 -bottom-0.5 group-hover:w-full transition-[width] ease duration-300 ${
            router.asPath === href ? "w-full" : "w-0"
          }`}
        >
          &nbsp;
        </span>
      </Link>
    );
  };
  return (
    <header className="w-full px-32 py-8 font-medium flex items-center justify-between">
      <nav>
        <CustomLink href="/" title="Home" className="mr-4" />
        <CustomLink href="/about" title="About" className="mx-4" />
        <CustomLink href="/projects" title="Projects" className="mx-4" />
        <CustomLink href="/articles" title="Articles" className="ml-4" />
      </nav>

      <nav className="flex items-center justify-center flex-wrap">
        <motion.a
          href="https://twtitter.com"
          target={"_blank"}
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.9 }}
          className="w-6 mr-3"
        >
          <TwitterIcon />
        </motion.a>
        <motion.a
          href="https://github.com"
          target={"_blank"}
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.9 }}
          className="w-6 mx-3"
        >
          <GithubIcon />
        </motion.a>
        <motion.a
          href="https://dribbble.com"
          target={"_blank"}
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.9 }}
          className="w-6 mx-3"
        >
          <DribbbleIcon />
        </motion.a>
        <motion.a
          href="https://pinterest.com"
          target={"_blank"}
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.9 }}
          className="w-6 mx-3"
        >
          <PinterestIcon />
        </motion.a>
        <motion.a
          href="https://linkedin.com"
          target={"_blank"}
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.9 }}
          className="w-6 ml-3"
        >
          <LinkedInIcon />
        </motion.a>
      </nav>

      <div className="absolute left-1/2 top-2 translate-x-1/2">
        <Logo />
      </div>
    </header>
  );
};

export default NavBar;
