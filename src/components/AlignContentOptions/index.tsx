import { ChangeEvent, Dispatch, ReactElement, SetStateAction } from "react";
import "../flexOptions.css";

export type AlignContentProps = {
  setAlignContent: Dispatch<SetStateAction<string>>;
  alignContent: string;
};

const AlignContentOptions = ({
  setAlignContent,
  alignContent,
}: AlignContentProps): ReactElement => {
  const handleJustifyContentChange = (e: ChangeEvent<HTMLInputElement>) => {
    setAlignContent(e.target.value);
  };

  return (
    <fieldset>
      <legend>Align Content:</legend>
      <section>
        <input
          type="radio"
          id="stretch"
          name="align-content"
          value="stretch"
          checked={alignContent === "stretch"}
          onChange={handleJustifyContentChange}
        />
        <label htmlFor="stretch">Stretch</label>
      </section>

      <section>
        <input
          type="radio"
          id="center"
          name="align-content"
          value="center"
          checked={alignContent === "center"}
          onChange={handleJustifyContentChange}
        />
        <label htmlFor="center">Center</label>
      </section>

      <section>
        <input
          type="radio"
          id="flex-start"
          name="align-content"
          value="flex-start"
          checked={alignContent === "flex-start"}
          onChange={handleJustifyContentChange}
        />
        <label htmlFor="flex-start">Flex Start</label>
      </section>

      <section>
        <input
          type="radio"
          id="flex-end"
          name="align-content"
          value="flex-end"
          checked={alignContent === "flex-end"}
          onChange={handleJustifyContentChange}
        />
        <label htmlFor="flex-end">Flex End</label>
      </section>

      <section>
        <input
          type="radio"
          id="space-around"
          name="align-content"
          value="space-around"
          checked={alignContent === "space-around"}
          onChange={handleJustifyContentChange}
        />
        <label htmlFor="space-around">Space Around</label>
      </section>

      <section>
        <input
          type="radio"
          id="space-evenly"
          name="align-content"
          value="space-evenly"
          checked={alignContent === "space-evenly"}
          onChange={handleJustifyContentChange}
        />
        <label htmlFor="space-evenly">Space Evenly</label>
      </section>

      <section>
        <input
          type="radio"
          id="space-between"
          name="align-content"
          value="space-between"
          checked={alignContent === "space-between"}
          onChange={handleJustifyContentChange}
        />
        <label htmlFor="space-between">Space Between</label>
      </section>
    </fieldset>
  );
};

export default AlignContentOptions;
