import "./Ad.css";

interface Props {
  flavor: string;
  fontSize: number;
  darkMode: boolean;
}

const Ad = ({ flavor, fontSize, darkMode }: Props) => {
  return (
    <div
      className={`Ad${darkMode ? " darkmode" : ""}`}
      style={{ fontSize: `${fontSize}px` }}
    >
      <p>Vote For</p>
      <p className="accent">{flavor}</p>
    </div>
  );
};

export default Ad;
