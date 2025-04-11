import { ChangeEvent, Dispatch, ReactElement, SetStateAction } from "react";
import "../flexOptions.css";

export type FlexDirectionProps = {
  setDirection: Dispatch<SetStateAction<string>>;
  direction: string;
};

const FlexDirectionOptions = ({
  setDirection,
  direction,
}: FlexDirectionProps): ReactElement => {
  const handleDirectionChange = (e: ChangeEvent<HTMLInputElement>) => {
    setDirection(e.target.value);
  };

  return (
    <fieldset>
      <legend>Flex Direction:</legend>
      <section>
        <input
          type="radio"
          id="row"
          name="direction"
          value="row"
          checked={direction === "row"}
          onChange={handleDirectionChange}
        />
        <label htmlFor="row">Row</label>
      </section>

      <section>
        <input
          type="radio"
          id="row-reverse"
          name="direction"
          value="row-reverse"
          checked={direction === "row-reverse"}
          onChange={handleDirectionChange}
        />
        <label htmlFor="row-reverse">Row Reverse</label>
      </section>

      <section>
        <input
          type="radio"
          id="column"
          name="direction"
          value="column"
          checked={direction === "column"}
          onChange={handleDirectionChange}
        />
        <label htmlFor="column">Column</label>
      </section>

      <section>
        <input
          type="radio"
          id="column-reverse"
          name="direction"
          value="column-reverse"
          checked={direction === "column-reverse"}
          onChange={handleDirectionChange}
        />
        <label htmlFor="column-reverse">Column Reverse</label>
      </section>
    </fieldset>
  );
};

export default FlexDirectionOptions;
