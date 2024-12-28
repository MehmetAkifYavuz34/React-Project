import moment from "moment";
import { MdEdit } from "react-icons/md";

const UserInfo = ({ tweet }) => {
  // kullanıcı isminden yola çıkarak bir nickname oluşturduk
  const username =
    tweet.user.name.toLowerCase().replace(/ /g, "_") + Math.round(Math.random() * 99);

  // tarih verisine eriş
  let date = tweet.createdAt?.toDate();

  // moment kütüphanesiyle şuanki tarihten uzaklığını hesapla
  date = moment(date).fromNow();

  return (
    <div className="flex gap-3 items-center whitespace-nowrap">
      <p>{tweet.user.name}</p>
      <p className="text-gray-400 text-sm">@{username}</p>
      <p className="text-gray-400 text-sm">{date}</p>
      {tweet.isEdited && (
        <p className="text-gray-400 text-xs">
          <MdEdit className="md:hidden" />
          <span className="max-md:hidden">*düzenlendi</span>
        </p>
      )}
    </div>
  );
};

export default UserInfo;
