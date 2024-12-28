import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import api from "../../utils/api";
import ReactPlayer from "react-player";
import ChannelInfo from "./ChannelInfo";
import VideoInfo from "./VideoInfo";
import Comments from "./Comments";
import VideoCard from "../../components/VideoCard";

const VideoDetail = () => {
  const [video, setVideo] = useState(null);
  const [comments, setComments] = useState(null);
  console.log(video);
  //* 1.adım: Arama parametresine erişim için kurulum
  const [searchParams] = useSearchParams();
  //* 2.adım: URL'den "v" isimli parametreye eriş
  const id = searchParams.get("v");

  useEffect(() => {
    //* 3.adım: idsini bildiğimiz videonun detayını al
    api.get(`/video/info?id=${id}&extend=1`).then((res) => setVideo(res?.data));
    //* 4.adım: idsini bildiğimiz videonun yorumlarını al
    api.get(`/comments?id=${id}`).then((res) => setComments(res?.data));
  }, []);

  return (
    <div className=" h-screen detail-page overflow-auto">
      <div>
        <div className="h-[50vh] lg:h-[60vh] overflow-hidden rounded-md">
          <ReactPlayer
            controls
            width={"100%"}
            height={"100%"}
            url={`https://www.youtube.com/watch?v=${id}`}
          />
        </div>

        {!video && <p>Yükleniyor...</p>}

        {video && (
          <>
            {/* başlık */}
            <h1 className="my-3 text-xl font-bold">{video.title}</h1>

            {/* Kanal Bilgileri */}
            <ChannelInfo video={video} />

            {/* Video Bilgileri */}
            <VideoInfo video={video} />

            {/* Yorumlar */}
            <Comments data={comments} />
          </>
        )}
      </div>

      <div>
        {video?.relatedVideos.data.map(
          (item, index) =>
            item.type === "video" && (
              <VideoCard video={item} key={index} isRow={true} />
            )
        )}
      </div>
    </div>
  );
};

export default VideoDetail;
