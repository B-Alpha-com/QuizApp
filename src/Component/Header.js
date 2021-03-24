import React from "react";
import { Questions } from "./Array";
import { ImDroplet } from "react-icons/im";

const Header = ({ count, colorChange }) => {
  const Number = Questions.map((number, index) => {
    let PresentQuestionBg = "";
    const NewIndex = index + 1;
    if (NewIndex === count) {
      PresentQuestionBg = "red";
    }
    return (
      <button
        key={index}
        type="button"
        style={{ backgroundColor: PresentQuestionBg }}
      >
        <i>
          <ImDroplet className={colorChange ? "icon1" : "icon2"} />
          Question{NewIndex}
        </i>
      </button>
    );
  });
  return (
    <div>
      <div className="header-div">{Number}</div>
    </div>
  );
};

export default Header;
