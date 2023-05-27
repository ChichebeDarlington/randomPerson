import React, { useState } from "react";
import people from "./data";
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from "react-icons/fa";

const Review = () => {
  const [index, setIndex] = useState(0);
  const { name, job, image, text, id } = people[index];

  const checkPerson = (number) => {
    if (number === people.length - 1) {
      return 0;
    } else if (number < 0) {
      return people.length - 1;
    }
    return number;
  };

  const nextPerson = () => {
    setIndex((index) => {
      let newIndex = index + 1;
      return checkPerson(newIndex);
    });
  };

  const prevPerson = () => {
    setIndex((index) => {
      let newIndex = index - 1;
      return checkPerson(newIndex);
    });
  };

  const random = () => {
    let randomPerson = Math.floor(Math.random() * people.length);
    if (randomPerson === index) {
      randomPerson = 1;
    }
    setIndex(randomPerson);
  };
  return (
    <article className="review">
      <div className="img-container">
        <img src={image} alt={name} className="person-img" />
        <span className="quote-icon">
          <FaQuoteRight />
        </span>
      </div>
      <h4 className="author">{name}</h4>
      <p className="job">{job}</p>
      <p className="info">{text}</p>

      <div className="button-container">
        <button className="prev-btn">
          <FaChevronLeft onClick={prevPerson} />
        </button>
        <button className="next-btn">
          <FaChevronRight onClick={nextPerson} />
        </button>
      </div>
      <button className="random-btn" onClick={random}>
        surprise me
      </button>
    </article>
  );
};

// const next = () => {
//   setIndex((next) => {
//     if (index === people.length - 1) {
//       return (next = 0);
//     }
//     return next + 1;
//   });
// };

// const prev = () => {
//   setIndex((next) => {
//     if (index === 0) {
//       return (next = people.length - 1);
//     }
//     return next - 1;
//   });
// };

// const random = () => {
//   let randomPerson = Math.floor(Math.random() * people.length);
//   setIndex(randomPerson);
// };

export default Review;
