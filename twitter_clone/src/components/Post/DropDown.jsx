import { auth, db } from "../../firebase/index";
import { MdEdit } from "react-icons/md";
import { FaTrashAlt } from "react-icons/fa";
import { deleteDoc, doc } from "firebase/firestore";
import { toast } from "react-toastify";
import { useState } from "react";
import Modal from "../Modal/index";

const DropDown = ({ tweet }) => {
  const [isOpen, setIsOpen] = useState(false);

  // tweeti gönderen kişi şuan oturumu açık olan kullanıcı mı?
  const isOwn = tweet.user.id === auth.currentUser.uid;

  // silme
  const handleDelete = () => {
    // silinecek dökümanın referansını al
    const tweetRef = doc(db, "tweets", tweet.id);

    // dökmanı kaldır
    deleteDoc(tweetRef)
      .then(() => toast.info("Tweet akıştan kaldırıldı"))
      .catch(() => toast.error("Bir sorun oluştu"));
  };

  return (
    isOwn && (
      <>
        <label className="popup">
          <input type="checkbox" />
          <div className="burger" tabindex="0">
            <span></span>
            <span></span>
            <span></span>
          </div>
          <nav className="popup-window">
            <legend>Eylemler</legend>
            <ul>
              <li>
                <button onClick={() => setIsOpen(true)}>
                  <MdEdit />
                  <span>Düzenle</span>
                </button>
              </li>
              <hr />
              <li>
                <button onClick={handleDelete}>
                  <FaTrashAlt />
                  <span>Sil</span>
                </button>
              </li>
            </ul>
          </nav>
        </label>

        {isOpen && <Modal tweet={tweet} close={() => setIsOpen(false)} />}
      </>
    )
  );
};

export default DropDown;
