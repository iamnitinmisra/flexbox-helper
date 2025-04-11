import { ChangeEvent, Dispatch, ReactElement, SetStateAction } from "react";
import "../flexOptions.css";

export type FlexWrapProps = {
  setWrap: Dispatch<SetStateAction<string>>;
  wrap: string;
};

const FlexWrapOptions = ({ setWrap, wrap }: FlexWrapProps): ReactElement => {
  const handleWrapChange = (e: ChangeEvent<HTMLInputElement>) => {
    setWrap(e.target.value);
  };

  return (
    <fieldset>
      <legend>Flex Wrap:</legend>
      <section>
        <input
          type="radio"
          id="noWrap"
          name="flexWrap"
          value="noWrap"
          checked={wrap === "noWrap"}
          onChange={handleWrapChange}
        />
        <label htmlFor="noWrap">No Wrap</label>
      </section>

      <section>
        <input
          type="radio"
          id="wrap"
          name="flexWrap"
          value="wrap"
          checked={wrap === "wrap"}
          onChange={handleWrapChange}
        />
        <label htmlFor="wrap">Wrap</label>
      </section>

      <section>
        <input
          type="radio"
          id="wrap-reverse"
          name="flexWrap"
          value="wrap-reverse"
          checked={wrap === "wrap-reverse"}
          onChange={handleWrapChange}
        />
        <label htmlFor="wrap-reverse">Wrap Reverse</label>
      </section>
    </fieldset>
  );
};

export default FlexWrapOptions;
