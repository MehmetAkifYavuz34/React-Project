"use client";

import Loader from "@/app/components/Loader";
import { Car } from "@/app/types";
import { useState } from "react";

const OrderButton = ({ car }: { car: Car }) => {
  const [isLoading, setIsLoading] = useState(false);

  // sipariş butonuna tıklanınca
  const handleClick = () => {
    setIsLoading(true);

    // 1) backende ödeme sayfasının linkini oluşturması için istek atıyoruz
    fetch("http://localhost:3000/api/checkout", {
      method: "POST",
      body: JSON.stringify(car),
    })
      //2) backend buraya satın alma sayfasının linkini göndericek
      .then((res) => res.json())
      //3) kullanıcyı satın alma sayfasına yönlendir
      .then((data) => {
        window.location.href = data.url;
      })
      //4) son olarak isloading state'ini false'a çek
      .finally(() => setIsLoading(false));
  };

  return (
    <button
      disabled={isLoading}
      onClick={handleClick}
      className="bg-blue-500 w-full  p-2 rounded-lg text-white font-bold transition hover:bg-blue-600"
    >
      {isLoading ? <Loader /> : "Aracı Kirala"}
    </button>
  );
};

export default OrderButton;
