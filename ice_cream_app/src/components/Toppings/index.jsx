import axios from "axios";
import { useEffect, useState } from "react";

const Toppings = () => {
  const [data, setData] = useState([]);
  const [basket, setBasket] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:4060/toppings")
      .then((res) => setData(res.data));
  }, []);

  const handleChange = (item) => {
    // elemen sepette var mı?
    const found = basket.find((i) => i.id === item.id);

    // varsa kaldır yoksa ekle
    found
      ? setBasket(basket.filter((i) => i.id !== item.id))
      : setBasket([...basket, item]);
  };

  return (
    <div>
      <h1>Sos Çeşitleri</h1>
      <p>
        Tanesi <span className="text-success">3</span>₺
      </p>
      <h3>
        Soslar Ücreti{" "}
        <span data-testid="total" className="text-success">
          {basket.length * 3}
        </span>
        ₺
      </h3>

      <div className="row p-3 mt-4 gap-3">
        {data.map((i) => {
          const found = basket.find(
            (basketItem) => basketItem.id === i.id
          );

          return (
            <div
              data-testid="card"
              onClick={() => handleChange(i)}
              className={`top-card col ${found ? "active" : ""}`}
              key={i.id}
            >
              <div>
                <img src={i.imagePath} height={100} />
                <p>{i.name}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Toppings;
