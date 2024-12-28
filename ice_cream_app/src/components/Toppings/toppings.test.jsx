import { render, screen } from "@testing-library/react";
import Toppings from "./index";
import userEvent from "@testing-library/user-event";

test("sosları ekleme ve çıkarma işlemlerinin toplam fiyata etkisi", async () => {
  const user = userEvent.setup();

  // 1) bileşeni renderla
  render(<Toppings />);

  // 2) toplam spanı al
  const total = screen.getByTestId("total");

  // 3) tüm sosları al
  const cards = await screen.findAllByTestId("card");

  // 4) başlangıç anında toplam 0 mı kontrol et
  expect(total).toHaveTextContent(/^0$/);

  // 5) bir sosa tıkla
  await user.click(cards[3]);

  // 6) toplam 3 oldu mu kontrol et
  expect(total).toHaveTextContent(/^3$/);

  // 7) farklı bir sosa tıkla
  await user.click(cards[4]);

  // 8) toplam 6 oldu mu kontrol et
  expect(total).toHaveTextContent(/^6$/);

  // 9) tıklanan soslardan birine tekrar tıkla
  await user.click(cards[4]);

  // 10) toplam 3 oldu mu kontrol et
  expect(total).toHaveTextContent(/^3$/);

  // 11) tıklanan soslardan diğerine tekrar tıkla
  await user.click(cards[3]);

  // 12) toplam 0 oldu mu kontrol et
  expect(total).toHaveTextContent(/^0$/);
});

test("soslar sepete eklendiği zaman active class'ı alır", async () => {
  const user = userEvent.setup();

  // bileşeni renderla
  render(<Toppings />);

  // bütün kartları al
  const cards = await screen.findAllByTestId("card");

  // bütün kartların active class'ına sahip olmadığından emin ol
  cards.forEach((card) => expect(card).not.toHaveClass("active"));

  // m&m kartına tıkla
  await user.click(cards[0]);

  // m&m kartı active class'ına sahip mi?
  expect(cards[0]).toHaveClass("active");

  // m&m kartına tekrar tıkla
  await user.click(cards[0]);

  // m&m kartı active class'ına sahip değil mi?
  expect(cards[0]).not.toHaveClass("active");
});
