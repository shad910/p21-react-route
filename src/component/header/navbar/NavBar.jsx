import React, { useState } from "react";
import Link from "./Link";
import { Menu, X } from "lucide-react";

const NavBar = () => {
  const navigationData = [
    {
      id: 1,
      name: "Home",
      path: "/home",
    },
    {
      id: 2,
      name: "About",
      path: "/about",
    },
    {
      id: 3,
      name: "Services",
      path: "/services",
    },
    {
      id: 4,
      name: "Blog",
      path: "/blog",
    },
    {
      id: 5,
      name: "Contact",
      path: "/contact",
    },
  ];

  const Links = navigationData.map((route) => (
    <Link key={route.id} route={route}></Link>
  ));

  const [open, setOpen] = useState(false);

  return (
    <nav className="flex justify-between">
      <header className="flex items-center gap-x-2">
        <span className="md:hidden" onClick={() => setOpen(!open)}>
          {open ? <X /> : <Menu />}
        </span>
        <h1 className="text-3xl font-bold">Shad</h1>
      </header>
      <ul className={`md:hidden flex flex-col gap-y-2 absolute top-11  bg-white p-3 rounded-md shadow-lg transition-all duration-500 ease-in-out ${open ? "left-2" : "-left-64"} z-10`}>
        {Links}
      </ul>
      <ul className="hidden md:flex justify-center items-center gap-x-10">
        {Links}
      </ul>
      <button className="btn btn-primary btn-soft">Sign Up</button>
    </nav>
  );
};

export default NavBar;
