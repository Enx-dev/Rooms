import React, { useState, useRef, useEffect, useCallback } from "react";
import rightArrowIcon from "../images/icon-angle-right.svg";
import leftArrowIcon from "../images/icon-angle-left.svg";
import data from "../data/data.json";
import { textState } from "../App/atom";
import { useRecoilState } from "recoil";
const Controller = () => {
  console.table(data);
  const [text, setText] = useRecoilState(textState);
  const [i, setI] = useState(1);
  const control = useRef();
  const moveRight = useCallback(
    (e) => {
      console.log(e);
      if (i < 3) {
        setText(data[i]);
        setI(i + 1);
      }
      return;
    },
    [i, setText]
  );
  const moveLeft = useCallback(() => {
    switch (i) {
      case 3:
        setText(data[1]);
        setI(i - 1);
        break;
      case 2:
        setText(data[0]);
        setI(i - 1);
        break;
      default:
        return;
    }
  }, [i, setText]);

  useEffect(() => {
    const detectArrowKeys = (e) => {
      if (e.key === "ArrowRight") {
        moveRight();
      }
      if (e.key === "ArrowLeft") {
        moveLeft();
      }
    };
    window.addEventListener("keydown", detectArrowKeys);
    return () => {
      window.removeEventListener("keydown", detectArrowKeys);
    };
  }, [moveLeft, moveRight]);

  return (
    <div className='Controller'>
      <div onClick={() => moveLeft()}>
        <img src={leftArrowIcon} alt='leftControllerIcon' />
      </div>
      <div onClick={() => moveRight()}>
        <img src={rightArrowIcon} alt='rightControllerIcon' />
      </div>
    </div>
  );
};

export default Controller;
