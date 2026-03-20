import { Menu, X } from "lucide-react";
import { useState } from "react";

const navbar = [
  {
    id: 1,
    name: "Home",
    path: "/home",
  },
  {
    id: 2,
    name: "Fixture",
    path: "/fixture",
  },
  {
    id: 3,
    name: "Teams",
    path: "/teams",
  },
  {
    id: 4,
    name: "Schedules",
    path: "/schedules",
  },
];

const navLinks = navbar.map((nav) => (
  <li className="mr-5" key={nav.id}>
    <a
      className="text-[#13131395] font-semibold hover:text-black"
      href={nav.path}
    >
      {nav.name}
    </a>
  </li>
));

const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <nav className="flex justify-between items-center mt-3 mx-3">
      {/* logo */}
      <div>
        <img src="/src/assets/logo.png" alt="" />
      </div>
      {/* menu and coins */}
      <div className="flex">
        <ul className="md:flex items-center hidden ">{navLinks}</ul>

        <button className="btn rounded-lg">
          0 Coin <img src="/src/assets/Currency.png" alt="" />
        </button>
        <div className="md:hidden ml-3" onClick={() => setOpen(!open)}>
          {open ? <X></X> : <Menu></Menu>}
          <ul 
          className="md:hidden absolute right-00">
            {navLinks}</ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
