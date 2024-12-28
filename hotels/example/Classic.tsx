import axios from "axios";
import { useEffect, useState } from "react";

export type Quote = {
  id: number;
  author: string;
  quote: string;
};

const Classic = () => {
  const [data, setData] = useState<Quote[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    setIsLoading(true);

    axios
      .get("https://dummyjson.com/quotes")
      .then((res) => setData(res.data.quotes))
      .catch((err) => setError(err.message))
      .finally(() => setIsLoading(false));
  }, []);

  if (isLoading) return <h2>Yükleniyor...</h2>;

  if (error) return <h2>Bir hata oluştu : {error}</h2>;

  return (
    <div>
      {data.map((item) => (
        <p>
          <span>{item.quote}</span>
          <br />
          <b>{item.author}</b>

          <br />
          <br />
          <br />
        </p>
      ))}
    </div>
  );
};

export default Classic;
