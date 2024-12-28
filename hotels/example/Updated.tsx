import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useState } from "react";

export const getQuotes = (page: number) =>
  axios.get(`https://dummyjson.com/quotes?skip=${page * 30}`);

const Updated = () => {
  const [page, setPage] = useState(0);

  // useQuery yapılan api isteğinin bütün detaylarının state'ini tutar
  const { data, error, isLoading, refetch } = useQuery({
    queryKey: ["quotes", page],
    queryFn: () => getQuotes(page),
    retry: 3,
  });

  if (isLoading) return <h2>Yükleniyor...</h2>;

  if (error)
    return (
      <div>
        {/* @ts-ignore */}
        {error.message} <button onClick={refetch}>Tekrar Dene</button>
      </div>
    );

  return (
    <div>
      <button onClick={() => setPage(page + 1)}>
        Sayfa Değiş ({page})
      </button>
      {/* @ts-ignore */}
      {data.data.quotes.map((item) => (
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

export default Updated;
