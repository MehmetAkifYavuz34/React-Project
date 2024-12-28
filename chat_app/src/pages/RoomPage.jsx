const RoomPage = ({ setIsAuth, setRoom }) => {
  // çıkış
  const logout = () => {
    // yetki state'ini false'a çek
    setIsAuth(false);

    // local'deki tokeni kaldır
    localStorage.removeItem("token");
  };

  // form gönderilince
  const handleSubmit = (e) => {
    e.preventDefault();

    // inputtaki girdiyi al ve küçük harfe çevir (büyük küçük harf duyarlılığını ortadan kaldır)
    const room = e.target[0].value.toLocaleLowerCase();

    // state'i güncelle
    setRoom(room);
  };

  return (
    <form onSubmit={handleSubmit} className="room-page">
      <h1>Chat Odası</h1>
      <p>Hangi Odaya Gireceksiniz</p>

      <input placeholder="ör:haftaiçi" type="text" required />

      <button type="submit">Odaya Gir</button>
      <button onClick={logout} type="button">
        Çıkış Yap
      </button>
    </form>
  );
};

export default RoomPage;
