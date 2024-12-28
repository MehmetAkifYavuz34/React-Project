import { CgUnavailable } from "react-icons/cg";
import { MdEventAvailable } from "react-icons/md";

type Props = {
  availability: boolean;
  expand: boolean;
};

const Status = ({ availability, expand }: Props) => {
  return (
    <div
      className={`flex items-center gap-4 border p-2 rounded-md ${
        availability ? "bg-green-100" : "bg-red-100"
      }`}
    >
      {availability ? (
        <MdEventAvailable className="text-xl text-green-700" />
      ) : (
        <CgUnavailable className="text-xl text-red-700" />
      )}

      {expand && (
        <p className="text-lg font-bold">
          {availability
            ? "Şuan Konaklanabilir"
            : "Konaklama için müsait değil"}
        </p>
      )}
    </div>
  );
};

export default Status;
