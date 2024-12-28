import axios from "axios";
import { useEffect, useState } from "react";
import Card from "../Card";

const Scoops = () => {
  const [basket, setBasket] = useState([]);
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:4060/scoops")
      .then((res) => setData(res.data))
      .catch((err) => console.log(err));
  }, []);

  const addToBasket = (item) => {
    // sepette elemanı ara
    const found = basket.find((i) => i.id === item.id);

    if (found) {
      // güncel nesneyi oluştur
      const updated = { ...found, amount: found.amount + 1 };

      // dizideki eski elemanı güncelle
      const temp = basket.map((i) => (i.id === found.id ? updated : i));

      // state'i güncelle
      setBasket(temp);
    } else {
      setBasket([...basket, { ...item, amount: 1 }]);
    }
  };

  const removeFromBasket = (id) => {
    // elemanı sepette bul
    const found = basket.find((i) => i.id === id);

    if (found.amount > 1) {
      // güncel nesneyi oluştur
      const updated = { ...found, amount: found.amount - 1 };

      // dizideki eski elemanı güncelle
      const temp = basket.map((i) => (i.id === found.id ? updated : i));

      // state'i güncelle
      setBasket(temp);
    } else {
      // miktar 1 ise direkt sepetten sil
      setBasket(basket.filter((i) => i.id !== id));
    }
  };

  // toplam fiyatı hesapla
  const total = basket.reduce((total, i) => total + i.amount * 20, 0);

  console.log(basket);

  return (
    <div>
      <h1>Dondurma Çeşitleri</h1>

      <p>
        Tanesi <span className="text-success">20</span>₺
      </p>

      <h3>
        Çeşitler Ücreti{" "}
        <span data-testid="total" className="text-success">
          {total}
        </span>
        ₺
      </h3>

      <div className="p-3 row gap-5 mt-4 justify-content-between">
        {data.map((i) => (
          <Card
            item={i}
            key={i.id}
            addToBasket={addToBasket}
            removeFromBasket={removeFromBasket}
            basket={basket}
          />
        ))}
      </div>
    </div>
  );
};

export default Scoops;
