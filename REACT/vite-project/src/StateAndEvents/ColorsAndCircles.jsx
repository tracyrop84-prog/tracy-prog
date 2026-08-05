/*import { useState } from "react";

/*
how to pass state to other components.
update the state if they.
props and state.
*/
/*
function ColorsCircles() {
  const [colors, setColors] = useState([]);
  const [color, setColor] = useState("");


  const onSubmit = () => {
    const clonedColors = structuredClone(colors); //[...colors]
    clonedColors.push(color);
    setColors(clonedColors);
  };

  return (
    <div>
      <ColorForm color={color} setColor={setColor} onSubmit={onSubmit} />
      <ColorList colors={colors} setColors={setColors} />
    </div>
  );
}

function ColorForm(props) {
  const { color, setColor, onSubmit } = props;

  return (
    <div>
      <label>Enter Color</label>
      <input value={color} onChange={(e) => setColor(e.target.value)} />
      <button onClick={onSubmit}>Save</button>
    </div>
  );
}

function ColorList(props) {
  const { colors, setColors } = props;
  return (
    <div style={{ marginTop: "30px" }}>
      {colors.map((color, index) => (
        <div
          key={index}
          style={{
            marging: "10px",
            width: "100%",
            height: "30px",
            backgroundColor: color,
            color: "white",
            padding: "10px",
          }}
        >
          {color}
        </div>
      ))}
    </div>
  );
} */
import { useState } from "react";

function ColorsCircles() {
  const [colors, setColors] = useState([]);

  const addColor = (color) => {
    setColors((currentColors) => [...currentColors, color]);
  };

  const removeColor = (indexToRemove) => {
    setColors((currentColors) =>
      currentColors.filter((_, index) => index !== indexToRemove)
    );
  };

  return (
    <div>
      <ColorForm onAddColor={addColor} />
      <ColorList colors={colors} onRemoveColor={removeColor} />
    </div>
  );
}

function ColorForm({ onAddColor }) {
  const [color, setColor] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    const trimmedColor = color.trim();
    if (!trimmedColor) return;

    onAddColor(trimmedColor);
    setColor("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>Enter Color:</label>
      <input type="text" value={color} onChange={(e) => setColor(e.target.value)} />
      <button type="submit">Add Color</button>
    </form>
  );
}

function ColorList({ colors, onRemoveColor }) {
  return (
    <div>
      <h2>Color List</h2>
      <ul>
        {colors.map((color, index) => (
          <li key={index} style={{backgroundColor: color, color: "white", padding: "5px", margin: "5px"}}>
            {color}
            <button type="button" onClick={() => onRemoveColor(index)}>
              Remove
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
export default ColorsCircles;

