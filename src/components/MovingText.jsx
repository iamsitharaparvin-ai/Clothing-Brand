function MovingText() {
  const items = [
    "HOT SELL 50% OFF",
    "HOT SELL 50% OFF",
    "HOT SELL 50% OFF",
    "HOT SELL 50% OFF",
    "HOT SELL 50% OFF",
    "HOT SELL 50% OFF",
  ];

  return (
    <section className="moving-text">
      <div className="moving-track">
        {[...items, ...items].map((item, index) => (
          <div className="moving-item" key={index}>
            <span className="moving-star">✱</span>
            <span className="moving-title">{item}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

export default MovingText;