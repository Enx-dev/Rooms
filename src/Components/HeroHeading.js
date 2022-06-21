import React from "react";
import arrowIcon from "../images/icon-arrow.svg";
import { useRecoilState } from "recoil";
import { textState } from "../App/atom";

const HeroHeading = () => {
  const [text, setText] = useRecoilState(textState);
  console.log(text);
  return (
    <section className='HeroHeading'>
      <h1 className='HeroHeading_title'>{text.text.title}</h1>
      <p className='HeroHeading_content'>{text.text.content}</p>
      <div className='HeroHeading_link'>
        <h2> SHOP NOW</h2>
        <img src={arrowIcon} alt='link icon' />
      </div>
    </section>
  );
};

export default HeroHeading;
