import "./App.css";
import React, { Component } from "react";
import Quiz from "./Component/QuizUi";
import Score from "./Component/Score";
import { Questions } from "./Component/Array";
import Header from "./Component/Header";

class App extends Component {
  constructor() {
    super();
    this.state = {
      index: 0,
      control: true,
      SelectedAnswer: "",
      correctAnswer: 0,
      count: 1,
      isShowing: false,
      colorChange: true,
    };
  }
  handleNext = (e) => {
    const SelectedAnswer = this.state.SelectedAnswer;
    const Answer = Questions[this.state.index].Answer;
    const newCount = this.state.count + 1;
    e.preventDefault();
    if (this.state.index !== 2) {
      this.setState({ index: this.state.index + 1 });
    }
    if (SelectedAnswer === Answer) {
      const newScore = this.state.correctAnswer + 1;
      this.setState({ correctAnswer: newScore });
    }
    if (this.state.index !== 2) {
      this.setState({ count: newCount, isShowing: true });
    }
  };
  handlePrevious = (e) => {
    const SelectedAnswer = this.state.SelectedAnswer;
    const Answer = Questions[this.state.index].Answer;
    const newCount = this.state.count - 1;
    e.preventDefault();
    if (this.state.index > 0) {
      this.setState({ index: this.state.index - 1 });
    } else if (this.state.index === 2) {
      this.setState({ control: false });
    }
    if (SelectedAnswer === Answer) {
      const newScore = this.state.correctAnswer - 1;
      this.setState({ correctAnswer: newScore });
    }
    if (this.state.count !== 1) {
      this.setState({ count: newCount });
    }
    if (this.state.count === 2) {
      this.setState({ isShowing: false });
    }
  };
  handleSubmit = (e) => {
    e.preventDefault();

    this.setState({ control: false });
  };

  handleInput = (e) => {
    this.setState({ SelectedAnswer: e.target.value, colorChange: false });
  };

  render() {
    const totalQuestion = Questions.length;
    const {
      isShowing,
      index,
      control,
      correctAnswer,
      count,
      colorChange,
    } = this.state;
    const { handleInput, handlePrevious, handleNext, handleSubmit } = this;
    return control ? (
      <div className="App">
        <Header count={count} colorChange={colorChange} />
        <Quiz
          index={index}
          onclick={handleNext}
          onclickSubmit={handleSubmit}
          handleInput={handleInput}
          count={count}
          previous={handlePrevious}
          isShowing={isShowing}
        />
      </div>
    ) : (
      <Score total={correctAnswer} questions={totalQuestion} />
    );
  }
}

export default App;
