import React from "react";
import { Questions } from "./Array";
import QuizUi from "./QuizUi";

const ArrayList = () => {
  const Quizlist = Questions.map((question) => <QuizUi question={question} />);
  return <div>{Quizlist}</div>;
};

export default ArrayList;
