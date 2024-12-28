import { Shoe } from "../../types";

const Price = ({ item }: { item: Shoe }) => {
  // varsayılan fiyat değeri atadık
  let price = item.price;

  // eğer indirim oranı varsa yeni fiyatı hesapla
  if (item.discount) {
    price = (item.price * (100 - item.discount)) / 100;
  }

  return (
    <div className={item.discount ? "text-yellow" : "text-white"}>
      ${price}
      {item.discount && (
        <span className="ps-2 line-through max-xl:hidden">
          {item.price}
        </span>
      )}
    </div>
  );
};

export default Price;
