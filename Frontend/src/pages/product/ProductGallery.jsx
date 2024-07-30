import { useState } from "react";
const ProductGallery = ({ productImage }) => {
  const imgs = [
    {
      id: 1,
      url: "https://i.pinimg.com/736x/11/f8/2e/11f82e1961f0bdc6c649ff4f60128556.jpg",
    },
    {
      id: 2,
      url: "https://i.pinimg.com/564x/d9/e9/92/d9e9921e2cd22173b14270b620cf62db.jpg",
    },
    {
      id: 3,
      url: "https://i.pinimg.com/236x/18/1e/99/181e9926b043590e0b3d72947bc53073.jpg",
    },
    {
      id: 4,
      url: "https://i.pinimg.com/236x/08/08/d3/0808d354c5ccf277cf815d774d22c967.jpg",
    },
  ];

  const [activeImg, setImage] = useState(0);
  return (
    <>
      <div className="w-full min-h-screen md:min-h-0 md:h-full flex flex-col md:flex-row justify-center items-center flex-1 border-2 rounded-md overflow-hidden ">
        <div className="xs:w-full  md:w-full overflow-hidden md:rounded-md flex-1 ">
          <img
            src={productImage}
            // src={imgs[activeImg].url}
            alt="Image"
            className="min-w-full h-full object-cover"
          />
        </div>
        {/* <div className="flex md:flex-col h-full w-full justify-evenly basis-1/4 gap-3 border-t-2 md:border-t-0 md:border-l-2  p-4 ">
          {imgs.map((img, index) => {
            return (
              <div
                key={index}
                className={`w-full h-full rounded-md overflow-hidden object-contain cursor-pointer hover:scale-110 transition duration-200  ${
                  index === activeImg
                    ? "ring-2 ring-offset-2 ring-red-800 "
                    : "opacity-60"
                }`}
                onClick={() => setImage(index)}
              >
                <img
                  src={img.url}
                  alt="img"
                  className="w-full h-full rounded-md object-contain"
                />
              </div>
            );
          })}
        </div> */}
      </div>
    </>
  );
};

export default ProductGallery;
