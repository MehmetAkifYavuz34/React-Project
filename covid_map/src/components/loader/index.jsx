const Loader = ({ type }) => {
  // heading alanı için loader
  if (type === "heading")
    return (
      <div
        data-testid="heading-loader"
        className="flex items-center space-x-2 animate-pulse"
      >
        <div className="bg-gray-400 w-16 lg:w-24 h-8 lg:h-16 rounded-md" />
        <div className="bg-gray-400 w-[180px] h-8 lg:h-9 rounded-md " />
      </div>
    );

  // 16 elemana sahip bir dizi oluştur
  const arr = new Array(16).fill();

  // diğer alanlar için ekrana basılack loader
  return (
    <>
      {arr.map((i, key) => (
        <div
          data-testid="content-loader"
          key={key}
          className="bg-gray-200 p-4 rounded-lg shadow-md min-w-[206px] animate-pulse text-transparent select-none"
        >
          <p className="bg-gray-300 w-2/5 text-sm font-semibold mb-2 rounded-md">
            .
          </p>
          <h2 className="bg-gray-300 3/4 text-lg font-bold rounded-md">
            .
          </h2>
        </div>
      ))}
    </>
  );
};

export default Loader;
