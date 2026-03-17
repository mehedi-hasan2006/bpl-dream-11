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
    <nav className="flex justify-between items-center mt-3">
      {/* logo */}
      <div>
        <img src="/src/assets/logo.png" alt="" />
      </div>
      {/* menu and coins */}
      <div className="flex">
        <ul className="flex items-center">
          {navbar.map((nav) => (
            <li className="mr-5" key={nav.id}>
              <a
                className="text-[#13131395] font-semibold hover:text-black"
                href={nav.path}
              >
                {nav.name}
              </a>
            </li>
          ))}
        </ul>

        <button className="btn rounded-lg">
          0 Coin <img src="/src/assets/Currency.png" alt="" />
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
