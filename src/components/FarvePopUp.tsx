import { useState } from "react";
import "./FarvePopUp.scss";

const colors = [
  "#7A3F98",
  "#C86EAF",
  "#5298D3",
  "#F7913A",
  "#45B35F",
  "#D24A7E",
  "#A1C45D",
  "#F35E5E",
  "#8F6ED4",
  "#E3AA47",
  "#B74F78",
  "#63A29C",
  "#F1A54E",
  "#8C7ED1",
  "#D64585",
  "#57C3B2",
  "#E57F3A",
  "#3E8AB1",
  "#A95C7E",
  "#4D3432",
];

type Props = {
  onClose: () => void;
};

const FarvePopUp: React.FC<Props> = ({ onClose }) => {
  const [selectedColor, setSelectedColor] = useState<string | null>(null);

  const handleSelectedColor = (color: string) => {
    setSelectedColor(color);
  };

  return (
    <table className="color__picker">
      <tr className="color__grid">
        {colors.map((color, index) => (
          <div
            key={index}
            className="color__option"
            style={{ backgroundColor: color }}
            onClick={() => handleSelectedColor(color)}
          />
        ))}
      </tr>
      <h3 className="text__selected__color">Valgte farve:</h3>
      <div
        className="selected__color"
        style={{ backgroundColor: selectedColor || "white" }}
      />
      <button className="close__btn" onClick={onClose}>
        Luk PopUp
      </button>
    </table>
  );
};

export default FarvePopUp;
