import { render, screen } from "@testing-library/react";
import Error from "../components/error";
import userEvent from "@testing-library/user-event";

it("gönderilen hata mesajı ekrana basılıyor mu?", () => {
  render(<Error message="404 not found" />);

  screen.getByText(/404/);
});

it("tekrar dene butonu işlevini yapıyor mu?", async () => {
  const user = userEvent.setup();

  // test edilebilir fonksiyon oluştur
  const retryMock = jest.fn();

  // bileşeni renderla
  render(<Error message="404 not found" retry={retryMock} />);

  // butonu al
  const button = screen.getByRole("button");

  // butona tıkla
  await user.click(button);

  // fonksiyon çalıştı mı ?
  expect(retryMock).toHaveBeenCalled();
});
