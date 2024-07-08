"use client";

import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

type Props = {
  articles: Article[];
  prompt?: string;
};

const ArcticleList = ({ articles, prompt }: Props) => {
  const arcticles_list: Article[] = articles?.filter(
    (article) => article.prompt === prompt
  );

  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    arrows: false,
    appendDots: (dots: React.ReactNode[]) => (
      <div
        style={{
          marginTop:"5px",
          display: "flex",
          justifyContent: "end",
        }}
      >
        <ul style={{ margin: "0px" }}> {dots} </ul>
      </div>
    ),
    customPaging: () => (
      <div
        style={{
          width: "20px",
          height: "20px",
          backgroundColor:"#888888",
          borderRadius: "50px",
        }}
      ></div>
    ),
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
          arrow: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
          dots: true,
          arrow: false,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true,
          arrow: false,
        },
      },
    ],
  };
  return (
    <div className="slider-container">
      <Slider {...settings}>
        {arcticles_list &&
          arcticles_list.map((article) => (
            <div key={article.id}>
              <div className="relative sm:w-[280px] sm:h-[450px] overflow-hidden rounded-2xl">
                <Image
                  src={article.image_url}
                  alt="image"
                  layout="fill"
                  objectFit="cover"
                />
              </div>
            </div>
          ))}
      </Slider>
    </div>
  );
};

export default ArcticleList;
