import { Carousel, WingBlank } from "antd-mobile";
import img1 from "../../assets/images/img1.jpg";
import img2 from "../../assets/images/img2.jpg";
import img3 from "../../assets/images/img3.jpg";
import { useState, useEffect } from "react";

function CarouselImg() {
  const [data, setData] = useState(["1", "2", "3"]);
  const [imgHeight, setImgHeight] = useState(176);
  const [slideIndex, setSlideIndex] = useState(176);

  useEffect(() => {
    setTimeout(() => {
      setData([img1, img2, img3]);
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
        // beforeChange={(from, to) => console.log(`slide from ${from} to ${to}`)}
        afterChange={(index) => setSlideIndex(index)}
      >
        {data.map((val, index) => (
          <a
            key={val}
            // href="http://www.alipay.com"
            href=""
            style={{
              display: "block",
              position: "relative",
              top: slideIndex === index ? -10 : 0,
              height: imgHeight,
              boxShadow: "2px 1px 1px rgba(0, 0, 0, 0.2)",
            }}
          >
            <img className="img"
              // src={`https://zos.alipayobjects.com/rmsportal/${val}.png`}
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
