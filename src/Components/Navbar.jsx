import React from "react";

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

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center">
      {/* logo */}
      <div>
        <img src="/src/assets/logo.png" alt="" />
      </div>
      {/* menu and coins */}
      <div className="flex">
        <ul className="flex">
          {navbar.map((nav) => (
            <li className="mr-5"
                key={nav.id}>
              <a href={nav.path}> {nav.name} </a>
            </li>
          ))}
        </ul>

        <button className="btn"> Coins</button>
      </div>
    </nav>
  );
};

export default Navbar;
