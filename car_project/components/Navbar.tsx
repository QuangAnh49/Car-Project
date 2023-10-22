import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { CustomButton } from '.';

const Navbar = () => {
  return (
    <>
      <header className="w-full absolute z-10">
        <nav className="max-w-[1440px] mx-auto flex justify-between items-center sm:px-16 px-6 py-y">
          <Link href="/" className="flex justify-center items-center">
            <Image src="/logo.svg" alt="logo" className="object-contain h-auto" width={118} height={18} />
          </Link>
          <CustomButton title="Sign in" containerStyles="text-primary-blue rounded-full bg-white min-w-[130px]" />
        </nav>
      </header>
    </>
  );
};

export default Navbar;
