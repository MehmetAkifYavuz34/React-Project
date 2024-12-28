import { useState } from "react";
import Filter from "../../components/filter";
import List from "../../components/list";
import Hero from "./Hero";
import Buttons from "./buttons";

const Home = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <div>
      <Hero />

      <Buttons open={() => setIsOpen(true)} />

      <h1 className="text-[20px] md:text-[26px] lg:text-[30px] xl:text-[36px] font-semibold  mb-4 md:mt-[28px] xl:mt-[32px]">
        Sana Uygun Seçenekler
      </h1>

      <div className="grid grid-cols-4 gap-5">
        <Filter isOpen={isOpen} close={() => setIsOpen(false)} />
        <List />
      </div>
    </div>
  );
};

export default Home;
