import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Feed from "./pages/Feed";
import Protected from "./components/Protected";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />

        <Route element={<Protected />}>
          <Route path="/feed" element={<Feed />} />
          <Route path="/settings" element={"AYARLAR"} />
          <Route path="/profile" element={"PROFİL"} />
          <Route path="/friends" element={"ARKADAŞLAR"} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
