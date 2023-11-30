import ModalImage from "react-modal-image";
import Banner from "../../assets/bannerImages/bannerImage-3.jpg";
import GalleryData from "../../Data/GalleryData";

const Gallery = () => {
  return (
    <>
      <div className="relative w-full h-20 sm:h-60">
        {/* <div className="absolute w-full h-60 bg-black opacity-50 z-10"></div> */}
        <img
          src={Banner}
          alt="banner"
          className="absolute w-full h-full object-cover"
        />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center z-20">
          <h3 className="text-2xl sm:text-4xl text-white font-semibold tracking-wide">
            Gallery
          </h3>
        </div>
      </div>

      <div className="bg-offWhite">
        <div
          className="container mx-auto py-4 sm:py-16 flex flex-wrap gap-4 px-4 sm:px-0"
         
        >
          {GalleryData.map((item) => (
            <div >
              <div className="relative w-[360px] sm:w-[23rem] h-80 overflow-hidden" key={item.id} >
                <ModalImage
                  small={item.galleryImage}
                  large={item.galleryImage}
                  hideDownload={true}
                  className="absolute w-full h-full object-cover hover:scale-105 transition-all duration-300"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Gallery;
