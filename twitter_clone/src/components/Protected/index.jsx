import { Outlet, Navigate } from "react-router-dom";
import { auth } from "../../firebase";
import { useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";

const Protected = () => {
  // yetkisi var mı? state'i
  const [isAuth, setIsAuth] = useState();

  // kullanıncın oturum veirlerini al
  useEffect(() => {
    // bu method kullanıcı oturumu izler
    onAuthStateChanged(auth, (user) => {
      setIsAuth(user ? true : false);
    });
  }, []);

  // eğer kullanıcının oturumu kapalıysa logine yönlendir
  if (isAuth === false) {
    return <Navigate to="/" replace />;
  }

  // oturum açıksa alt route'un bileşenini ekrana bas
  return <Outlet />;
};

export default Protected;

// Navigate Bileşeni
// Bir bileşenin return satırında yönlendirme yapmamız gerekiyorsa useNavigate kullanıldığında hata verdiği için bu tarz return yönlendirmelerinde Naivgate bileşeni kullanırız
