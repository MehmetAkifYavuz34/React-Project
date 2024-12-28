import { Link } from "react-router-dom";
import Loader from "../../components/loader";
import { useSelector } from "react-redux";

const Heading = () => {
  const { isLoading, data } = useSelector((store) => store);

  return (
    <div className="flex justify-between items-center">
      <Link
        className="bg-gray-700 py-2 px-3 rounded-md hover:bg-gray-800"
        to="/"
      >
        Geri
      </Link>

      <div className="flex items-center space-x-2">
        {isLoading ? (
          <Loader type="heading" />
        ) : (
          data && (
            <>
              <img
                className="w-16 lg:w-24 rounded-md"
                src={data.country.flags.png}
                alt={data.country.flags.alt}
              />

              <h1 className="text-gray-900 text-lg lg:text-2xl font-bold">
                {data.country.name.common}
              </h1>
            </>
          )
        )}
      </div>
    </div>
  );
};

export default Heading;
