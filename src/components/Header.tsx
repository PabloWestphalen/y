import logo from "../assets/tweeter.svg";

const Header: React.FC = () => {
  const active = true;

  return (
    <>
      <header className="flex h-16 items-center justify-between px-4 text-sm md:px-16">
        <div>
          <img src={logo} alt="Tweeter" />
        </div>
        <nav className="hidden h-full md:block">
          <ul
            className="relative grid h-full w-80 grid-cols-3 text-center
                        tracking-tight [&>a]:h-full
                        [&>a]:w-full [&>li]:h-full [&>li]:w-full"
          >
            <li className={`font-semibold ${active && "text-blue-500"}`}>
              <a
                href="#"
                className="flex h-full w-full items-center justify-center"
              >
                Home
              </a>
            </li>
            <li className="peer/second">
              <a
                href="#"
                className="flex h-full w-full items-center justify-center"
              >
                Explore
              </a>
            </li>
            <li className="peer/third">
              <a
                href="#"
                className="flex h-full w-full items-center justify-center"
              >
                Bookmarks
              </a>
            </li>
            <span
              className="absolute bottom-0 col-span-3 block h-1 w-[33%]
                        bg-blue-300 transition-all duration-300 peer-hover/second:ml-[33%]
                        peer-hover/third:ml-[66%]"
            ></span>
          </ul>
        </nav>
        <div className="flex items-center space-x-3">
          <img
            src="https://picsum.photos/32/32"
            className="h-8 w-8 rounded-lg"
          />
          <div className="hidden md:block">Xanthe Neal</div>
        </div>
      </header>
    </>
  );
};

export default Header;
