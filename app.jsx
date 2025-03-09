import React, { useState } from "react";
import ReactDOM from "react-dom";

const flashcards = [
  {
    question: "Who is known for building the Ark to survive the flood?",
    answer: "Prophet Nuh (Noah)",
  },
  {
    question: "Who was swallowed by a large fish and later saved by Allah?",
    answer: "Prophet Yunus (Jonah)",
  },
  {
    question: "Who led the Bani Israel out of Egypt and received the Torah?",
    answer: "Prophet Musa (Moses)",
  },
  {
    question: "Who was known for his wisdom and judgment, and ruled as a king?",
    answer: "Prophet Sulaiman (Solomon)",
  },
  {
    question: "Who was the father of Prophet Yahya (John the Baptist)?",
    answer: "Prophet Zakariya (Zechariah)",
  },
  {
    question: "Who was the first man created by Allah and the first prophet?",
    answer: "Prophet Adam (Adam)",
  },
  {
    question:
      "Who was the wife of Prophet Ibrahim (Abraham) and mother of Prophet Ishaq (Isaac)?",
    answer: "Sarah",
  },
  {
    question: "Who was the brother of Prophet Musa (Moses) and a prophet?",
    answer: "Prophet Harun (Aaron)",
  },
  {
    question: "Who was the prophet and king who defeated Jalut (Goliath)?",
    answer: "Prophet Dawud (David)",
  },
  {
    question: "Who was the prophet taken to heaven in a miraculous journey?",
    answer: "Prophet Isa (Jesus)",
  },
  {
    question:
      "Who was the prophet who anointed Prophet Ilyas (Elijah) as his successor?",
    answer: "Prophet Ilyas (Elijah)",
  },
  {
    question: "Who was the prophet who saw a vision of a valley of dry bones?",
    answer: "Prophet Ezekiel",
  },
  {
    question:
      "Who was the prophet who interpreted dreams for the king of Egypt?",
    answer: "Prophet Yusuf (Joseph)",
  },
  {
    question: "Who was the prophet who confronted the tyrant king and queen?",
    answer: "Prophet Ilyas (Elijah)",
  },
  {
    question:
      "Who was the prophet who was thrown into a lion's den but saved by Allah?",
    answer: "Prophet Daniel",
  },
  {
    question: "Who was the prophet who saw a vision of a wheel within a wheel?",
    answer: "Prophet Ezekiel",
  },
  {
    question:
      "Who was the prophet who foretold the coming of Prophet Muhammad (PBUH)?",
    answer: "Prophet Isa (Jesus)",
  },
  {
    question: "Who was the prophet who was called by Allah as a young boy?",
    answer: "Prophet Muhammad (PBUH)",
  },
  {
    question: "Who was the prophet who wrote the book of Lamentations?",
    answer: "Prophet Jeremiah",
  },
  {
    question: "Who is the last and final prophet of Allah?",
    answer: "Prophet Muhammad (PBUH)",
  },
  {
    question: "Who was the prophet known for his patience and trials?",
    answer: "Prophet Ayyub (Job)",
  },
  {
    question: "Who was the prophet who built the Kaaba with his son?",
    answer: "Prophet Ibrahim (Abraham)",
  },
  {
    question:
      "Who was the prophet known for his beautiful voice and recitation of the Psalms?",
    answer: "Prophet Dawud (David)",
  },
  {
    question:
      "Who was the prophet who was given the ability to speak as a baby?",
    answer: "Prophet Isa (Jesus)",
  },
];

function FlashcardApp() {
  const [currentCard, setCurrentCard] = useState(0);
  const [history, setHistory] = useState([]); // Store previous cards
  const [isFlipped, setIsFlipped] = useState(false);

  const handleNextCard = () => {
    setHistory([...history, currentCard]); // Save current card in history
    const nextCard = Math.floor(Math.random() * flashcards.length);
    setCurrentCard(nextCard);
    setIsFlipped(false); // Reset flip state
  };

  const handlePrevCard = () => {
    if (history.length > 0) {
      const prevIndex = history.pop(); // Get last card from history
      setHistory([...history]); // Update history state
      setCurrentCard(prevIndex);
      setIsFlipped(false); // Reset flip state
    }
  };

  return (
    <div className="container">
      <h1>Guess the Prophets</h1>
      <div
        className="card-container"
        onClick={() => setIsFlipped((prev) => !prev)}
      >
        <div className={`card ${isFlipped ? "flipped" : ""}`}>
          <div className="card-face front">
            {flashcards[currentCard].question}
          </div>
          <div className="card-face back">{flashcards[currentCard].answer}</div>
        </div>
      </div>

      <div className="button-group">
        <button onClick={handlePrevCard} disabled={history.length === 0}>
          Back
        </button>
        <button onClick={handleNextCard}>Next Card</button>
      </div>
    </div>
  );
}

ReactDOM.render(<FlashcardApp />, document.getElementById("root"));
