import { useState } from "react";
import "./FarvePopUp.scss";

const colorList = [
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
  const [colors, setColors] = useState<string[]>(colorList);

  const handleSelectedColor = (color: string) => {
    setSelectedColor(color);
  };

  const generateRandomHexCode = () => {
    const hexCode = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += hexCode[Math.floor(Math.random() * 16)];
    }
    return color;
  };

  const handleAddColor = () => {
    const randomColor = generateRandomHexCode();
    const updatedColors = [...colors, randomColor];
    setColors(updatedColors);
    setSelectedColor(randomColor);
  };

  return (
    <>
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

        <button className="add__color__btn" onClick={handleAddColor}>
          Tilføj ny farve!
        </button>

        <button className="close__btn" onClick={onClose}>
          Luk PopUp
        </button>
      </table>
      <div>
        <label className="label__1">
          Den valgte farve: <br />
          {selectedColor}
        </label>
      </div>
    </>
  );
};

export default FarvePopUp;
