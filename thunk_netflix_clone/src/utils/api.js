import axios from "axios";

export default axios.create({
  baseURL: "https://api.themoviedb.org/3",
  //* Yapacağımız isteklere eklenilecek olan headerlar
  headers: {
    accept: "application/json",
    Authorization: `Bearer ${import.meta.env.VITE_API_KEY}`,
  },
  //* Bütün api istkelerinde gönderilecek olan parametre
  params: { language: "tr-TR" },
});
