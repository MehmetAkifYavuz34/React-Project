type Props = {
  arr: string[];
};
const Features = ({ arr }: Props) => {
  return (
    <div className="flex flex-col gap-3 mt-5">
      <h2 className="font-bold text-xl">
        Popüler konaklama yeri imkan ve özellikleri
      </h2>

      <div className="grid grid-cols-2 gap-4">
        {arr.map((i, key) => (
          <span
            className="border bg-zinc-100 py-1 px-2 rounded-md"
            key={key}
          >
            {i}
          </span>
        ))}
      </div>
    </div>
  );
};

export default Features;
