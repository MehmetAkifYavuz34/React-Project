import Toppings from "./components/Toppings";
import Scoops from "./components/Scoops";
import Form from "./components/Form";

const App = () => {
  return (
    <div className="d-flex flex-column gap-5 px-3 py-5 min-vh-100 bg-dark text-light">
      <Scoops />
      <Toppings />
      <Form />
    </div>
  );
};

export default App;
