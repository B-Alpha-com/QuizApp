import React from "react";

const Score = ({ total, questions }) => {
  return (
    <div className="container">
      <div className="drawer">
        <p className="text">
          You have Answered correctly:<span>{total}</span>/
          <span>{questions}</span>
        </p>
      </div>
    </div>
  );
};

export default Score;
