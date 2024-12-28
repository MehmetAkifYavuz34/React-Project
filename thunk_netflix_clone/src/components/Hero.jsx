const Hero = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 md:max-h-[400px] gap-5 mb-10">
      <div className="flex flex-col gap-6 items-center justify-center">
        <h1 className="text-3xl font-bold">Hayali Arkadaşlar</h1>
        <p>
          Yalnızlıktan muzdarip olan bir adam, hayali arkadaşlar görmenin ve
          onlarla konuşmanın inanılmaz gücünü keşfeder. Böylece yakınları
          tarafından unutulmuş birçok insanla arkadaş olur. Ancak içlerinden
          bazılarının karanlık tarafa geçmesi işlerin karışmasına neden olur.
        </p>
        <p>
          <span>IMDB:</span>
          <span className="text-yellow-400 ms-2 font-semibold">7.4</span>
        </p>

        <div className="flex gap-5">
          <button className="bg-red-600 p-2 rounded hover:bg-red-700">
            Filmi İzle
          </button>
          <button className="bg-blue-600 p-2 rounded hover:bg-blue-700">
            Listeye Ekle
          </button>
        </div>
      </div>
      <div>
        <img
          className="max-h-[300px] hero-img my-4 object-contain"
          src="https://image.tmdb.org/t/p/original/nxxCPRGTzxUH8SFMrIsvMmdxHti.jpg"
          alt=""
        />
      </div>
    </div>
  );
};

export default Hero;
