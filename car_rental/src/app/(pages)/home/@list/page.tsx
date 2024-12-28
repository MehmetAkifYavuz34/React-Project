import { Car } from "@/app/types";
import Container from "../../../components/Container";
import Card from "@/app/components/Card";
import { headers } from "next/headers";

const host = headers().get("host");
const protocol = headers().get("x-forwarded-proto");
const baseUrl = `${protocol}://${host}`;

console.log(baseUrl);

type ReturnType = {
  message: string;
  data: Car[];
};

const getCars = async (): Promise<ReturnType> => {
  try {
    const res = await fetch(`${baseUrl}/api/vehicles`);

    return res.json();
  } catch (err) {
    console.log("HATA VAR🎾🎾🎾", err);
    throw new Error("Araçları alırken bir soru oluştu");
  }
};

async function delay(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

const List = async () => {
  const { data } = await getCars();

  return (
    <Container>
      <h1 className="text-2xl md:text-3xl font-bold">
        Bütün Araçları Keşfedin
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-5">
        {data.map((car) => (
          <Card car={car} />
        ))}
      </div>
    </Container>
  );
};

export default List;
