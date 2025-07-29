import React from 'react';

function Game({ step, question, onClickVariant, total }) {
  const percentage = Math.round((100 / total) * (step + 1));

  console.log(percentage);

  return (
    <>
      <div className="progress">
        <div style={{ width: percentage + '%' }} className="progress__inner"></div>
      </div>
      <h1>{question.title}</h1>
      <ul>
        {
          question.variants.map((text, index) => (
            <li key={text} onClick={() => onClickVariant(index)}>{text}</li>
          ))
        }
      </ul>
    </>
  );
}

export default Game;