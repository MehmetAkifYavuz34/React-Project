import { useQuery } from "@tanstack/react-query";
import { getShoes } from "../../api";
import Loader from "../loader";
import Error from "../error";
import Card from "./Card";
import { Shoe } from "../../types";
import { useSearchParams } from "react-router-dom";
import formatParams from "../../utils/formatParams";

const List = () => {
  const [params] = useSearchParams();
  const paramsObj = Object.fromEntries(params.entries());
  const paramsStr = formatParams(paramsObj);

  const { isLoading, error, data } = useQuery<Shoe[]>({
    queryKey: ["shoes", paramsStr],
    queryFn: () => getShoes(paramsStr),
  });

  return (
    <div className="col-span-4 lg:col-span-3">
      {isLoading ? (
        <Loader />
      ) : error ? (
        <Error info={error.message} />
      ) : (
        data && (
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-x-4 gap-y-6 md:gap-y-8 xl:gap-y-10">
            {data.map((item, key) => (
              <Card key={key} item={item} />
            ))}
          </div>
        )
      )}
    </div>
  );
};

export default List;
