import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "./pages/main";
import Detail from "./pages/detail";
import Header from "./components/header";

const App = () => {
  return (
    <BrowserRouter>
      <div className="min-h-screen flex flex-col">
        <Header />

        <div className="bg-zinc-800 flex-1">
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/detail" element={<Detail />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
