import DemoVideo1 from "../../assets/videos/demo1.mp4";
import DemoVideo2 from "../../assets/videos/demo2.mp4";

const VideoGallery = () => {
  return (
    <>
      <div className="bg-offWhite">
        <div className="container mx-auto py-16">
          <h1 className="text-4xl pb-8 font-light w-full text-left">
            Video <span className="text-brand">Gallery</span>
          </h1>
          <div className="flex justify-between">
            <video
              controls
              muted
              src={DemoVideo1}
              type="video/mp4"
              style={{ height: '400px' }}
            />
            <video
              controls
              muted
              src={DemoVideo2}
              type="video/mp4"
              style={{ height: '400px' }}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default VideoGallery;
