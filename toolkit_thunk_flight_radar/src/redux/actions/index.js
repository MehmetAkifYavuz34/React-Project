import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { options } from "../../constants";

export const getFlights = createAsyncThunk("flights/getFlight", async () => {
  // 1) api isteği at
  const res = await axios.request(options);

  // 2) apidan gelen verileri formatla (aircraft dizisi içerisndeki her bir uçuş verisi dizi olarak gelmişti projede kullanmı kolaylaştıramak için bu dizileri nesneye çevirdik)
  const formatted = res.data.aircraft.map((item) => ({
    id: item[0],
    code: item[1],
    lat: item[2],
    lng: item[3],
  }));

  // 2) aksiyonun payload'ını return et
  return formatted;
});
