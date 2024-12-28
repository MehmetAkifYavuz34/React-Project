import { screen, render } from "@testing-library/react";
import Card from ".";
import userEvent from "@testing-library/user-event";

// prop olarak gönderilicek item
const item = {
  name: "Chocolate",
  imagePath: "/images/chocolate.png",
  id: "358a",
};

// prop olarak gönderilicek basket
const basket = [
  {
    name: "Chocolate",
    imagePath: "/images/chocolate.png",
    id: "358a",
    amount: 3,
  },
  {
    name: "Vanilla",
    imagePath: "/images/vanilla.png",
    id: "50cf",
    amount: 1,
  },
];

// çikolatasız sepet
const otherBasket = [
  {
    name: "Vanilla",
    imagePath: "/images/vanilla.png",
    id: "50cf",
    amount: 3,
  },
];

// prop olarak veri alan bir bileşeni test ediyorsak bileşenin aldığı propları test ortamnındada göndermemiz gerekli
test("Miktar, başlık, fotoğraf gelen propa göre ekrana basılır", () => {
  render(
    <Card
      item={item}
      addToBasket={() => {}}
      removeFromBasket={() => {}}
      basket={basket}
    />
  );

  // miktar spanını çağır (find)  (get)
  const amount = screen.getByTestId("amount");

  // span içeriği 3 mü kontrol et
  expect(amount).toHaveTextContent(/^3$/);

  // Chocolate yazısı ekran geldimi diye kontrol et
  // getBy elementi bulamazsa hata fırlatır bu yüzden sadece "x" yazı içeriğine sahip element ekranda mı kontrolü yapmak istiyorsak getByText ile elementi çağırmak yeterlidir daha sonrasında expect kullanmaya gerek yoktur
  screen.getByText("Chocolate");

  // resim elementini çağır
  const img = screen.getByAltText("çeşit-resim");

  // resmin kaynağı doğru mu kontrol et
  expect(img).toHaveAttribute("src", "/images/chocolate.png");
});

test("Butonlara tıklanınca fonksiyonlar doğru parametreler ile çalışır", async () => {
  const user = userEvent.setup();

  // prop olarak göndeirlecek fonksiyonları test ediceksek jest aracılığı (mock) ile test edilebilir fonksiyonlar oluştur
  const addMockFn = jest.fn();
  const removeMockFn = jest.fn();

  // test edilecek bileşeni renderla
  render(
    <Card
      item={item}
      basket={basket}
      addToBasket={addMockFn}
      removeFromBasket={removeMockFn}
    />
  );

  // butonları al
  const addBtn = screen.getByRole("button", { name: /ekle/i });
  const delBtn = screen.getByRole("button", { name: /azalt/i });

  // ekle butonuna tıkla
  await user.click(addBtn);

  // addToBasket methodu doğru parametreler ile çalıştı mı
  expect(addMockFn).toHaveBeenCalledWith(item);

  // azalt butonuna tıkla
  await user.click(delBtn);

  // removeFromBasket methodu doğru parametreler ile çalıştı mı
  expect(removeMockFn).toHaveBeenCalledWith(item.id);
});

// describe aynı işlevin testlerini bir araya getirmek için kullandığımız bir nevi testleri kategorize etmemizi sağlayan method
describe("azalt butonunun aktiflik testleri", () => {
  it("sepette aynı item'dan varsa buton aktiftir", () => {
    render(<Card item={item} basket={basket} />);

    const button = screen.getByRole("button", { name: "Azalt" });

    expect(button).toBeEnabled();
  });

  it("sepette aynı item'dan yoksa buton inaktiftir", () => {
    render(<Card item={item} basket={otherBasket} />);

    const button = screen.getByRole("button", { name: "Azalt" });

    expect(button).toBeDisabled();
  });
});
