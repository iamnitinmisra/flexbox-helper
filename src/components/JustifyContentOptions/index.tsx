import { ChangeEvent, Dispatch, ReactElement, SetStateAction } from "react";
import "../flexOptions.css";

export type JustifyContentProps = {
  setJustify: Dispatch<SetStateAction<string>>;
  justify: string;
};

const JustifyContentOptions = ({
  setJustify,
  justify,
}: JustifyContentProps): ReactElement => {
  const handleJustifyContentChange = (e: ChangeEvent<HTMLInputElement>) => {
    setJustify(e.target.value);
  };

  return (
    <fieldset>
      <legend>Justify Content:</legend>
      <section>
        <input
          type="radio"
          id="flex-start"
          name="justify-content"
          value="flex-start"
          checked={justify === "flex-start"}
          onChange={handleJustifyContentChange}
        />
        <label htmlFor="flex-start">Flex Start</label>
      </section>

      <section>
        <input
          type="radio"
          id="flex-end"
          name="justify-content"
          value="flex-end"
          checked={justify === "flex-end"}
          onChange={handleJustifyContentChange}
        />
        <label htmlFor="flex-end">Flex End</label>
      </section>

      <section>
        <input
          type="radio"
          id="center"
          name="justify-content"
          value="center"
          checked={justify === "center"}
          onChange={handleJustifyContentChange}
        />
        <label htmlFor="center">Center</label>
      </section>

      <section>
        <input
          type="radio"
          id="space-around"
          name="justify-content"
          value="space-around"
          checked={justify === "space-around"}
          onChange={handleJustifyContentChange}
        />
        <label htmlFor="space-around">Space Around</label>
      </section>

      <section>
        <input
          type="radio"
          id="space-evenly"
          name="justify-content"
          value="space-evenly"
          checked={justify === "space-evenly"}
          onChange={handleJustifyContentChange}
        />
        <label htmlFor="space-evenly">Space Evenly</label>
      </section>

      <section>
        <input
          type="radio"
          id="space-between"
          name="justify-content"
          value="space-between"
          checked={justify === "space-between"}
          onChange={handleJustifyContentChange}
        />
        <label htmlFor="space-between">Space Between</label>
      </section>
    </fieldset>
  );
};

export default JustifyContentOptions;
