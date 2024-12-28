import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import api from "../utils/api";

export const getData = createAsyncThunk(
  "covid/getData",
  async ({ code }) => {
    // api'a gönderilecek parametreleri belirle
    const params = { iso: code };

    // isoCode'a göre covid verileri al
    const req1 = api.get("/reports", { params });

    // isoCode'a göre ülke verilerini al
    const req2 = axios.get(`https://restcountries.com/v3.1/alpha/${code}`);

    // her iki api isteğini aynı anda parallel olarak gönder
    const responses = await Promise.all([req1, req2]);

    // region nesnesindeki değerleri bir üst nesneye taşı
    const covid = {
      ...responses[0].data.data[0],
      ...responses[0].data.data[0].region,
    };

    // gereksiz değerleri kaldır
    delete covid.cities;
    delete covid.region;

    // aksiyonun payload'ı olcak veriyi return et
    return { covid, country: responses[1].data[0] };
  }
);
