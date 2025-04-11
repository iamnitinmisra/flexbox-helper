import { useState } from "react";

import "./App.css";
import DisplayElements from "./components/DisplayElements";
import FlexDirectionOptions from "./components/FlexDirectionOptions";
import FlexWrapOptions from "./components/FlexWrapOptions";
import JustifyContentOptions from "./components/JustifyContentOptions";
import AlignItemsOptions from "./components/AlignItemsOptions";
import AlignContentOptions from "./components/AlignContentOptions";

function App() {
  const [elementCount, setElementCount] = useState(5);
  const [direction, setDirection] = useState("row");
  const [wrap, setWrap] = useState("noWrap");
  const [justify, setJustify] = useState("flex-start");
  const [alignItems, setAlignItems] = useState("stretch");
  const [alignContent, setAlignContent] = useState("stretch");

  const handleCount = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = +e.target.value;
    if (value > -1) {
      setElementCount(value);
    }
  };

  const displayElementsCss = {
    display: "flex",
    flexDirection: direction,
    flexWrap: wrap,
    justifyContent: justify,
    alignItems: alignItems,
    alignContent: alignContent,
  };

  console.log({ direction });
  console.log({ wrap });
  console.log({ justify });
  console.log({ alignItems });
  console.log({ alignContent });

  return (
    <div>
      <input
        type="number"
        value={elementCount}
        onChange={handleCount}
        placeholder="Enter a number"
        style={{ marginBottom: "1rem" }}
      />
      <h1>Flexbox Helper</h1>
      <DisplayElements
        elementCount={elementCount}
        flexCss={displayElementsCss}
      />
      <FlexDirectionOptions setDirection={setDirection} direction={direction} />
      <FlexWrapOptions setWrap={setWrap} wrap={wrap} />
      <JustifyContentOptions setJustify={setJustify} justify={justify} />
      <AlignItemsOptions
        setAlignItems={setAlignItems}
        alignItems={alignItems}
      />
      <AlignContentOptions
        setAlignContent={setAlignContent}
        alignContent={alignContent}
      />
    </div>
  );
}

export default App;
