import { useSelector } from "react-redux";
import Loader from "../../components/loader";
import Error from "../../components/error/index";
import InfoCard from "./infoCard";

const Content = ({ retry }) => {
  const { isLoading, error, data } = useSelector((store) => store);

  // covid nesnesini diziye çevir
  const covidArr = Object.entries(data?.covid || {});

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-6">
      {isLoading ? (
        <Loader />
      ) : error ? (
        <Error message={error} retry={retry} />
      ) : (
        covidArr.map((item, key) => <InfoCard key={key} item={item} />)
      )}
    </div>
  );
};

export default Content;
