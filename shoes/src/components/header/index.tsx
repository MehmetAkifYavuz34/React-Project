import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="flex justify-between items-center bg-white-fa p-4 md:p-5 lg:p-6 xl:p-8 text-gray-dark rounded-[12px] md:rounded-[16px] lg:rounded-[20px] xl:rounded-[24px] mb-6 md:mb-10 lg:mb-15 xl:mb-20">
      <nav className="flex gap-10 font-semibold max-lg:hidden">
        <a>New Drops 🔥</a>
        <a>Men</a>
        <a>Women</a>
      </nav>

      <button className="lg:hidden">
        <img src="/hamburger.svg" />
      </button>

      <Link to="/" className="w-[16%] max-w-[128px] max-h-[32px]">
        <img className="size-full" src="logo.svg" />
      </Link>

      <div className="flex items-center gap-5 lg:gap-10">
        <img
          className="size-4 md:size-5 lg:size-6 xl:size-7"
          src="/user.svg"
        />
        <img
          className="size-4 md:size-5 lg:size-6 xl:size-7 max-lg:hidden"
          src="/search.svg"
        />

        <span className="size-[25px] md:size-[30px] lg:size-[40px] md:text-lg  bg-yellow rounded-full grid place-items-center font-open font-semibold">
          0
        </span>
      </div>
    </header>
  );
};

export default Header;
