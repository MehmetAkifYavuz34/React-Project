import { useEffect } from "react";
import { GenderProps } from "./gender";
import { useSearchParams } from "react-router-dom";
import { useDebounce } from "@uidotdev/usehooks";

const Price = ({ selected, setSelected }: GenderProps) => {
  const [params, setParams] = useSearchParams();
  // selected state'ine debounce işlemi uyguladık
  const debouncedValue = useDebounce(selected, 300);

  useEffect(() => {
    if (Number(debouncedValue) > 0) {
      params.set("price", debouncedValue);
    } else {
      params.delete("price");
    }

    setParams(params);
  }, [debouncedValue]);

  return (
    <div>
      <h2 className="mb-4 font-semibold">Fiyat</h2>

      <input
        value={selected}
        onChange={(e) => setSelected(e.target.value)}
        className="w-full"
        type="range"
        min={0}
        max={1000}
      />

      <div className="flex justify-between font-open font-semibold">
        <span>${selected}</span>
        <span>$1000</span>
      </div>
    </div>
  );
};

export default Price;
