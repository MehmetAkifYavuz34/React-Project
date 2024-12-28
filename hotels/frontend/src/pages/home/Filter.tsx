import { useQuery } from "@tanstack/react-query";
import { sortOptions } from "../../constants";
import { getPlaces } from "../../api";
import { Place } from "../../types";
import { useSearchParams } from "react-router-dom";
import { useRef } from "react";

const Filter = () => {
  const whereRef = useRef<HTMLSelectElement>(null);
  const orderRef = useRef<HTMLSelectElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const [params, setParams] = useSearchParams();

  // api'dan otel verilerinialdık
  const { isLoading, data } = useQuery<Place[]>({
    queryKey: ["places"],
    queryFn: getPlaces,
  });

  // otellerin lokasyonlarından oluşan benzersiz elemanlara sahip bir dizi oluştuk
  const cities = [...new Set(data?.map((i) => i.location))];

  // inputlardan alınan değerleri url'e param olarka ekle
  const handleChange = (name: string, value: string) => {
    params.set(name, value);

    setParams(params);
  };

  // bütün inputları ve urldeki parametreleri sıfırla
  const handleReset = () => {
    setParams({});

    // todo inputları sıfırlma kodu hata veriyor
    // orderRef?.current?.value = "";
  };

  return (
    <form className="lg:mt-28 flex flex-col gap-4 lg:gap-10">
      <div className="flex flex-col gap-2">
        <label className="font-bold">Nereye ?</label>

        {!isLoading && (
          <select
            ref={whereRef}
            className="border py-1 px-4 rounded-md"
            onChange={(e) => handleChange("location", e.target.value)}
            defaultValue={params.get("location") || ""}
          >
            <option value="">Seçiniz</option>
            {cities.map((i, key) => (
              <option key={key}>{i}</option>
            ))}
          </select>
        )}
      </div>

      <div className="flex flex-col gap-2">
        <label className="font-bold">Konaklama yeri adına göre ara</label>

        <input
          ref={inputRef}
          type="text"
          placeholder="örn:Seaside Villa"
          className="border py-1 px-4 rounded-md"
          onChange={(e) => handleChange("title", e.target.value)}
          defaultValue={params.get("title") || ""}
        />
      </div>

      <div className="flex flex-col gap-2">
        <label className="font-bold">Sıralama Ölçütü ?</label>

        <select
          ref={orderRef}
          onChange={(e) => handleChange("order", e.target.value)}
          className="border py-1 px-4 rounded-md"
          defaultValue={params.get("order") || undefined}
        >
          <option value={undefined}>Seçiniz</option>

          {sortOptions.map((i) => (
            <option value={i.value}>{i.label}</option>
          ))}
        </select>
      </div>

      <div className="flex justify-end">
        <button
          type="reset"
          onClick={handleReset}
          className="bg-blue-500 p-1 px-4 text-white rounded-md w-fit"
        >
          Filtreleri Temizle
        </button>
      </div>
    </form>
  );
};

export default Filter;
