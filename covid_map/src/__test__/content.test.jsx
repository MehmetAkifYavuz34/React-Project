import { render, screen } from "@testing-library/react";
import Content from "../pages/detail/content";
import { thunk } from "redux-thunk";
import configureStore from "redux-mock-store";
import { Provider } from "react-redux";
import { exaData } from "../utils/constants";

const mockStore = configureStore([thunk]);

test("store yüklenme durumundayken content bileşeni ekrana loader basar", () => {
  // store'un yüklenme durumundaki halini simüle et
  const store = mockStore({ isLoading: true, error: false, data: null });

  render(
    <Provider store={store}>
      <Content />
    </Provider>
  );

  // ekrana loader bileşeni geldi mi?
  screen.getAllByTestId("content-loader");
});

test("store hata durumundayken content bileşeni ekrana hatayı basar", () => {
  // store'un hata durumundaki halini simüle et
  const store = mockStore({
    isLoading: false,
    error: "404 not found",
    data: null,
  });

  // content bileşenini renderla
  render(
    <Provider store={store}>
      <Content />
    </Provider>
  );

  // ekrana hata bileşeni geldi mi?
  screen.getByText("404 not found");
});

test("store'a veri geldiği seneryoda content bileşeni ekrana kartları basar", () => {
  const store = mockStore({
    isLoading: false,
    error: null,
    data: exaData,
  });

  render(
    <Provider store={store}>
      <Content />
    </Provider>
  );

  // covid nesnesini diziye çevir
  const arr = Object.entries(exaData.covid);

  // dizideki her bir eleman için ekrana kartlar basılır
  arr.forEach((item) => {
    // ekrana başlıklar geldi mi
    screen.getByText(item[0].split("_").join(" "));

    // ekrana değerler geldi mi
    screen.getAllByText(item[1]);
  });
});
