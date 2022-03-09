import { useState } from "react";
import "./Votes.css";

const Votes = () => {
  const [chocolateVotes, setChocolateVotes] = useState(0);
  const [vanillaVotes, setVanillaVotes] = useState(0);
  const [strawberryVotes, setSrawberryVotes] = useState(0);

  const increaseCVotes = (): void => {
    setChocolateVotes((prev) => prev + 1);
  };
  const increaseVVotes = (): void => {
    setVanillaVotes((prev) => prev + 1);
  };
  const increaseSVotes = (): void => {
    setSrawberryVotes((prev) => prev + 1);
  };

  const totalVotes: number = chocolateVotes + vanillaVotes + strawberryVotes;

  const calcPercentage = (category: number): string => {
    return category !== 0
      ? `${((category / totalVotes) * 100).toFixed(2)}%`
      : "0.00%";
  };

  return (
    <section className="Votes">
      <h2>Vote Here</h2>
      <div>
        <button onClick={increaseCVotes}>Chocolate</button>
        <button onClick={increaseVVotes}>Vanilla</button>
        <button onClick={increaseSVotes}>Strawberry</button>
      </div>
      <h3>
        Chocolate: {chocolateVotes} ({calcPercentage(chocolateVotes)})
      </h3>
      <div
        className="percentage chocolate"
        style={{
          width: calcPercentage(chocolateVotes),
        }}
      ></div>
      <h3>
        Vanilla: {vanillaVotes} ({calcPercentage(vanillaVotes)})
      </h3>
      <div
        className="percentage vanilla"
        style={{
          width: calcPercentage(vanillaVotes),
        }}
      ></div>
      <h3>
        Strawberry: {strawberryVotes} ({calcPercentage(strawberryVotes)})
      </h3>
      <div
        className="percentage strawberry"
        style={{ width: calcPercentage(strawberryVotes) }}
      ></div>
    </section>
  );
};

export default Votes;
