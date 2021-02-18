import { Carousel, WingBlank } from "antd-mobile";
import img5 from "../../assets/images/img5.webp";
import img6 from "../../assets/images/img6.webp";
import img7 from "../../assets/images/img7.jpg"
import { useState, useEffect } from "react";

function CarouselImg() {
  const [data, setData] = useState(["1", "2", "3"]);
  const [imgHeight, setImgHeight] = useState(300);
  const [slideIndex, setSlideIndex] = useState(300);

  useEffect(() => {
    setTimeout(() => {
      setData([img5, img6, img7]);
    }, 100);
  }, []);

  return (
    <WingBlank>
      <Carousel
        className="space-carousel slider-frame"
        frameOverflow="visible"
        cellSpacing={10}
        slideWidth={0.8}
        autoplay
        infinite
        afterChange={(index) => setSlideIndex(index)}
      >
        {data.map((val, index) => (
          <a
            key={val}
            href=""
            style={{
              display: "block",
              position: "relative",
              marginTop: "10px",
              top: slideIndex === index ? -10 : 0,
              height: imgHeight,
              boxShadow: "2px 1px 1px rgba(0, 0, 0, 0.2)",
            }}
          >
            <img className="img"
              src={`${val}`}
              alt=""
              style={{ width: "100%", verticalAlign: "top" }}
              onLoad={() => {
                // fire window resize event to change height
                window.dispatchEvent(new Event("resize"));
                setImgHeight({ imgHeight: "auto" });
              }}
            />
          </a>
        ))}
      </Carousel>
    </WingBlank>
  );
}
export default CarouselImg;
