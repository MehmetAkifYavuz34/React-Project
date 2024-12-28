import { ChangeEvent, useRef, useState } from "react";
import Display from "./Display";

const App = () => {
  //* 1) useState ile tutulan state'in tipini generic yardımıyla belirlemeliyiz
  const [count, setCount] = useState<number>(0);

  //* 3) useRef kullanırken alınan jsx elementinin tipini tanımlamak zorundayız
  //* JSX Elementlerinin tipi hazır olarak react'da vardır. (HTML....Element)
  const titleRef = useRef<HTMLHeadingElement>(null);

  //* 4) Fonksiyonlarda event tipini tanıtmak zorundayız. Bunlarda jsx elementi tipi gibi react içerisinde hazır olarak bulunur.
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    console.log(event.target.value);
  };

  return (
    <div>
      <h6 ref={titleRef}>TS - REACT</h6>

      <input onChange={handleChange} type="text" />

      <button onClick={() => setCount(count - 1)}>-</button>
      <Display count={count} />
      <button onClick={() => setCount(count + 1)}>+</button>
    </div>
  );
};

export default App;
