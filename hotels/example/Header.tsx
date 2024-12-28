import { useQuery } from "@tanstack/react-query";
import { getQuotes } from "./Updated";

const Header = () => {
  /* 
  * updated bileşninde api isteğinden elde ettiğimiz veri header'da da bize gerekti
  * bizde header'da da aynı api siteğini attık
  * normal bir projede bu bir sorun olsada tanstack query'nin cache mekanizması sayesinde iki kere api isteği atmak yerine 1 kererr atıp ilk istekten gelen verileri ikincide kullanıyor

  */
  const { data } = useQuery({
    queryKey: ["quotes"],
    queryFn: getQuotes,
  });

  return (
    <div>
      <h2>Özlü Sözler.com</h2>
      {/* @ts-ignore */}
      <h2>{data?.data?.quotes?.length} tane söz var</h2>
    </div>
  );
};

export default Header;
