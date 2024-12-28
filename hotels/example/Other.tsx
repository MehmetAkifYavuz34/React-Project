import { useMutation } from "@tanstack/react-query";
import axios from "axios";

const Other = () => {
  /*
   * useQuery bileşen ekrana basıldığı anda oto. api isteğini at.
   * useMutation'da api isteğinin ne zaman atılcağını biz söylüyo.
   */
  const { data, error, isPending, mutate } = useMutation({
    mutationKey: ["randomTodo"],
    mutationFn: () => axios.get("https://dummyjson.com/todos/random"),
  });

  console.log(data, error, isPending);

  return (
    <div>
      {/* @ts-ignore */}
      <button onClick={mutate}>Rastgele Söz Al</button>
      <br />
      <br />

      {!data
        ? "todo yok"
        : isPending
        ? "yükleniyor"
        : error
        ? "hata var"
        : data && (
            <p>
              <span>{data.data.id}</span> <br />
              <span>{data.data.todo}</span>
            </p>
          )}
    </div>
  );
};

export default Other;
