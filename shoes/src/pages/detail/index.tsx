import { useQuery } from "@tanstack/react-query";
import { getShoe } from "../../api";
import { useParams } from "react-router-dom";
import { Shoe } from "../../types";
import Loader from "../../components/loader";
import Error from "../../components/error";
import Head from "./Head";
import Color from "./Color";
import Size from "./Size";
import Foot from "./Foot";

const Detail = () => {
  const { id } = useParams();

  const { isLoading, error, data } = useQuery<Shoe>({
    queryKey: ["shoe"],
    queryFn: () => getShoe(id || ""),
  });

  if (isLoading) return <Loader />;

  if (error) return <Error info={error.message} />;

  if (!data) return;

  return (
    <section className="mt-8 grid grid-cols md:grid-cols-2 xl:grid-cols-3 gap-6 md:gap-4">
      <div className="xl:col-span-2 grid grid-cols-2 gap-4 rounded-[48px] h-fit">
        {data.picture.map((url, i) => (
          <img src={url} key={i} />
        ))}
      </div>

      <div className="flex flex-col gap-8">
        <Head data={data} />

        <Color data={data} />

        <Size data={data} />

        <Foot data={data} />
      </div>
    </section>
  );
};

export default Detail;
