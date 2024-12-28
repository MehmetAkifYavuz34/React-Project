import Image from "next/image";
import { BiSolidBellRing } from "react-icons/bi";
import man from "@/assets/images/man.png";
import Input from "./Input";

const Header = () => {
  return (
    <div className="border p-2 flex justify-between">
      <Input />

      <div className="flex gap-5 items-center">
        <BiSolidBellRing className="text-xl cursor-pointer" />

        <div className="flex gap-3">
          <Image
            width={40}
            height={40}
            className="object-contain"
            src={man}
            alt="user"
          />

          <div className="">
            <p className="font-semibold">Furkan Evin</p>
            <p>Admin</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
