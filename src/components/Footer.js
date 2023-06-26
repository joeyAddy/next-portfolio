import React from "react";
import Layout from "./Layout";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="w-full border-t-2 border-solid border-dark font-medium text-lg">
      <Layout className="py-8 flex items-center justify-between">
        <span>{new Date().getFullYear()} &copy; All rights reserved</span>
        <div>
          Built with<span className="text-primary text-2xl px-1">&#9825;</span>
          by&nbsp;
          <Link
            href="https://about-joeydevs.netlify.app"
            target="_blank"
            className="underline underline-offset-4"
          >
            JoeyDevs
          </Link>
        </div>
        <Link
          href="https://about-joeydevs.netlify.app"
          target="_blank"
          className="underline underline-offset-4"
        >
          Say Hello
        </Link>
      </Layout>
    </footer>
  );
};

export default Footer;
