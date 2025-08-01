import React, { useRef, useState, useEffect } from "react";
import "./TrainingCards.css";

const cards = [
  {
    title: "Pro Level Training",
    desc: "Training sessions on indices",
    img: "https://images.unsplash.com/photo-1565373671154-3bd7c550d9c5"
  },
  {
    title: "Trade on Numbers",
    desc: "Training sessions on indices",
    img: "https://images.unsplash.com/photo-1565373671154-3bd7c550d9c5"
  },
  {
    title: "Beginner Training",
    desc: "Training sessions on indices",
    img: "https://images.unsplash.com/photo-1565373671154-3bd7c550d9c5"
  },
  {
    title: "Candlestick Mastery",
    desc: "Decode candlestick patterns like a pro",
    img: "https://images.unsplash.com/photo-1565373671154-3bd7c550d9c5"
  },
  {
    title: "Risk Management",
    desc: "Master the art of protecting capital",
    img: "https://images.unsplash.com/photo-1553729459-efe14ef6055d"
  },
  {
    title: "Options Strategy",
    desc: "Explore dynamic options trading methods",
    img: "https://images.unsplash.com/photo-1605902711622-cfb43c44367e"
  },
  {
    title: "Intraday Trading",
    desc: "Learn fast-paced trade decision making",
    img: "https://images.unsplash.com/photo-1591696205602-2f950c417cb9"
  },
  {
    title: "Technical Analysis",
    desc: "Use tools and indicators to predict price moves",
    img: "https://images.unsplash.com/photo-1549924231-f129b911e442"
  },
  {
    title: "Algo Trading Basics",
    desc: "Automate trades with rule-based systems",
    img: "https://images.unsplash.com/photo-1635768003274-53baefcddac4"
  }
];

const TrainingCards = () => {
  const containerRef = useRef(null);
  const [showLeft, setShowLeft] = useState(false);
  const [showRight, setShowRight] = useState(true);

  const scrollAmount = 300;

  const updateButtons = () => {
    const container = containerRef.current;
    if (!container) return;

    setShowLeft(container.scrollLeft > 0);
    setShowRight(
      container.scrollLeft + container.offsetWidth < container.scrollWidth
    );
  };

  const scroll = (dir) => {
    const container = containerRef.current;
    if (!container) return;

    const amount = dir === "left" ? -scrollAmount : scrollAmount;
    container.scrollBy({ left: amount, behavior: "smooth" });
  };

  useEffect(() => {
    const container = containerRef.current;
    updateButtons();
    if (!container) return;

    container.addEventListener("scroll", updateButtons);
    return () => container.removeEventListener("scroll", updateButtons);
  }, []);

  return (
    <section className="training-section">
      <p className="training-header">
        Get started from starter to pro level with training.
      </p>

      <div className="scroll-wrapper">
        {showLeft && (
          <button className="nav-btn left" onClick={() => scroll("left")}>
            <i className="fas fa-chevron-left"></i>
          </button>
        )}
        <div className="cards-container" ref={containerRef}>
          {cards.map((item, i) => (
            <div className="card" key={i}>
              <img src={item.img} alt={item.title} className="card-image" />
              <div className="card-overlay" />
              <div className="card-content">
                <h2>{item.title}</h2>
                <p>{item.desc}</p>
                <div className="card-bottom">
                  <button>Start Session</button>
                  <div className="duration-box">
                    <p>Duration</p>
                    <h3>02 hr</h3>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        {showRight && (
          <button className="nav-btn right" onClick={() => scroll("right")}>
            <i className="fas fa-chevron-right"></i>
          </button>
        )}
      </div>
    </section>
  );
};

export default TrainingCards;
