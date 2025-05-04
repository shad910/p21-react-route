import React, { useState } from "react";
import Links from "./Links";
import { Menu, X } from "lucide-react";
import { Link } from "react-router";

const NavBar = () => {
  const navigationData = [
    {
      id: 1,
      name: "Home",
      path: "/",
    },
    {
      id: 2,
      name: "Users",
      path: "/users",
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

  const links = navigationData.map((route) => (
    <Links key={route.id} route={route}></Links>
  ));

  const [open, setOpen] = useState(false);

  return (
    <nav className="flex justify-between mb-5">
      <header className="flex items-center gap-x-2">
        <span className="md:hidden" onClick={() => setOpen(!open)}>
          {open ? <X /> : <Menu />}
        </span>
        <Link to="/"><h1 className="text-3xl font-bold">Shad</h1></Link>
      </header>
      <ul className={`md:hidden flex flex-col gap-y-2 absolute top-11  bg-white p-3 rounded-md shadow-lg transition-all duration-500 ease-in-out ${open ? "left-2" : "-left-64"} z-10`}>
        {links}
      </ul>
      <ul className="hidden md:flex justify-center items-center gap-x-5">
        {links}
      </ul>
      <button className="btn btn-primary btn-soft">Sign Up</button>
    </nav>
  );
};

export default NavBar;
