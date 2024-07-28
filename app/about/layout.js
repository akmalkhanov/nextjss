import React from "react";
import Link from "next/link";

const layout = ({ children }) => {
  return (
    <>
        <nav className="flex items-center justify-center gap-24 underline text-xl font-bold text-white ">
            <Link href="/about/students">Students</Link>
            <Link href="/about/teacher">Teacher</Link>
        </nav>
        <main className="flex justify-center mt-10">{children}</main>
    </>
  );
};

export default layout;
