import React from "react";
import { useRecoilState } from "recoil";
import { textState } from "../App/atom";
import { Controller } from ".";
const HeroImg = () => {
  const [text, setText] = useRecoilState(textState);
  return (
    <div
      className={`HeroImg ${
        text.image === "HeroImg1"
          ? "bg-HeroImg1 md:bg-desktopHeroImg1"
          : text.image === "HeroImg2"
          ? "bg-HeroImg2 md:bg-desktopHeroImg2"
          : "bg-HeroImg3 md:bg-desktopHeroImg3"
      }
      `}>
      <Controller />
    </div>
  );
};

export default HeroImg;
