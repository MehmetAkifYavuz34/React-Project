import Price from "./price";
import Color from "./color";
import Gender from "./gender";
import Size from "./size";
import { useState } from "react";
import { useSearchParams } from "react-router-dom";

type Props = {
  isOpen: boolean;
  close: () => void;
};

const Filter = ({ isOpen, close }: Props) => {
  const [params, setParams] = useSearchParams();

  const [size, setSize] = useState<string[]>(
    params.get("size")?.split(",") || []
  );

  const [color, setColor] = useState<string[]>(
    params.get("color")?.split(",") || []
  );

  const [gender, setGender] = useState<string>(params.get("gender") || "");

  const [price, setPrice] = useState<string>(params.get("price") || "0");

  // sıfırla
  const handleReset = () => {
    //state'leri ilk haline döndür
    setColor([]);
    setSize([]);
    setGender("");
    setPrice("0");

    // url'deki parametrleri siliyoruz
    setParams({});
  };

  return (
    <div
      className={`${
        isOpen
          ? "max-lg:fixed max-lg:inset-0 z-10 max-lg:bg-zinc-900 max-lg:bg-opacity-60 max-lg:grid max-lg:place-items-center"
          : "max-lg:hidden"
      }`}
    >
      <div className="max-lg:max-w-lg max-lg:mx-auto max-lg:h-[80vh] max-lg:min-w-[350px]">
        <div className="max-lg:bg-white max-lg:flex max-lg:justify-between max-lg:p-4 rounded-t-md">
          <h2 className="text-xl font-semibold">Fitreler</h2>

          <button onClick={close} className="lg:hidden">
            X
          </button>
        </div>

        <form className="max-lg:p-5 bg-gray h-full flex flex-col gap-6 rounded-b-md">
          <Size selected={size} setSelected={setSize} />
          <Color selected={color} setSelected={setColor} />
          <Gender selected={gender} setSelected={setGender} />
          <Price selected={price} setSelected={setPrice} />

          <button
            onClick={handleReset}
            type="reset"
            className="border border-gray-dark p-2 rounded-lg hover:bg-gray-dark hover:text-white transition"
          >
            Sıfırla
          </button>
        </form>
      </div>
    </div>
  );
};

export default Filter;
