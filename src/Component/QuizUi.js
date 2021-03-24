import React from "react";
import { Questions } from "./Array";

const Quiz = ({
  index,
  onclick,
  handleInput,
  count,
  previous,
  isShowing,
  onclickSubmit,
  colorChange,
}) => {
  return (
    <div className="master_div">
      <div>
        <h1 className="h1">Choose the correct Answer</h1>
      </div>
      <div>
        <p className="questionHead-tag">
          Question <span>{count}</span>
        </p>
      </div>
      <div>
        <p className="question-tag">{Questions[index].question}</p>
      </div>
      <div className="options-div">
        <ul className="ul-list">
          <li>
            <input
              type="radio"
              name="option"
              onInput={handleInput}
              value={Questions[index].Options.a}
            />
            <span className="option-a">{Questions[index].Options.a}</span>
          </li>
          <li>
            <input
              type="radio"
              name="option"
              onInput={handleInput}
              value={Questions[index].Options.b}
            />
            <span className="option-b">{Questions[index].Options.b}</span>
          </li>
          <li>
            <input
              type="radio"
              name="option"
              onInput={handleInput}
              value={Questions[index].Options.c}
            />
            <span className="option-c">{Questions[index].Options.c}</span>
          </li>
          <li>
            <input
              type="radio"
              name="option"
              onInput={handleInput}
              value={Questions[index].Options.d}
            />
            <span className="option-d">{Questions[index].Options.d}</span>
          </li>
          <li>
            <input
              type="radio"
              name="option"
              onInput={handleInput}
              value={Questions[index].Options.e}
            />
            <span className="option-e">{Questions[index].Options.e}</span>
          </li>
        </ul>
      </div>
      <div className="button-div">
        <button
          className={!isShowing ? "previous-btn" : "previous-btn1"}
          type="button"
          onClick={previous}
        >
          Previous
        </button>
        <button className="next-btn" type="submit" onClick={onclick}>
          Next
        </button>
      </div>
      <div className="submit-div">
        <button className="submit-btn" type="submit" onClick={onclickSubmit}>
          Submit
        </button>
      </div>
    </div>
  );
};

export default Quiz;
