import CurrencyImg from "../../src/assets/Currency.png";

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
      className="text-[#13131395] dark:text-white font-semibold hover:text-black hover:bg-transparent dark:hover:text-white"
      href={nav.path}
    >
      {nav.name}
    </a>
  </li>
));

const Navbar = ({ coin }) => {
  return (
    <nav className="bg-base-100  shadow-sm">
      <div className="container mx-auto navbar ">
        <div className="navbar-start">
          <div className="dropdown">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost  lg:hidden"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex="-1"
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              {navLinks}
            </ul>
          </div>
          <img src="/src/assets/logo.png" alt="" />
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navLinks}</ul>
        </div>
        <div className="navbar-end">
          <a className="btn">
            {" "}
            {coin} Coin
            <img src={CurrencyImg} alt="" />
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
