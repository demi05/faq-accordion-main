import { useState } from "react";
import iconMinus from "./assets/images/icon-minus.svg";
import iconPlus from "./assets/images/icon-plus.svg";
import iconStar from "./assets/images/icon-star.svg";

const Content = () => {
  const data = [
    {
      question: "What is Frontend Mentor, and how will it help me?",
      answer:
        "Frontend Mentor offers realistic coding challenges to help developers improve their frontend coding skills with projects in HTML, CSS, and JavaScript. It's suitable for all levels and ideal for portfolio building.",
    },
    {
      question: "Is Frontend Mentor free?",
      answer:
        "Yes, Frontend Mentor offers both free and premium coding challenges, with the free option providing access to a range of projects suitable for all skill levels.",
    },
    {
      question: "Can I use Frontend Mentor projects in my portfolio?",
      answer:
        "Yes, you can use projects completed on Frontend Mentor in your portfolio. It's an excellent way to showcase your skills to potential employers!",
    },
    {
      question:
        "How can I get help if I'm stuck on a Frontend Mentor challenge?",
      answer:
        "The best place to get help is inside Frontend Mentor's Discord community. There's a help channel where you can ask questions and seek support from other community members.",
    },
  ];

  const [visibleAnswers, setVisibleAnswers] = useState(
    Array(data.length).fill(false)
  );
  const handleVisibility = (index) => {
    const updatedVisibilities = [...visibleAnswers];
    updatedVisibilities[index] = !updatedVisibilities[index];
    setVisibleAnswers(updatedVisibilities);
  };

  return (
    <div className="container">
      <div className="container-div">
        <header className="header">
          <img src={iconStar} alt="star icon" />
          <h1>FAQs</h1>
        </header>
        <div className="content-div">
          {data.map((item, index) => (
            <div key={index} className="content">
              <div className="question-div">
                <h3>{item.question}</h3>
                <span>
                  <img
                    src={visibleAnswers[index] ? iconMinus : iconPlus}
                    alt="toggle icon"
                    onClick={() => handleVisibility(index)}
                  />
                </span>
              </div>
              <p className={visibleAnswers[index] ? "" : "hidden"}>
                {item.answer}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Content;
