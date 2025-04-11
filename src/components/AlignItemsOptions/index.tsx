import { ChangeEvent, Dispatch, ReactElement, SetStateAction } from "react";
import "../flexOptions.css";

export type AlignItemsProps = {
  setAlignItems: Dispatch<SetStateAction<string>>;
  alignItems: string;
};

const AlignItemsOptions = ({
  setAlignItems,
  alignItems,
}: AlignItemsProps): ReactElement => {
  const handleAlignItemsChange = (e: ChangeEvent<HTMLInputElement>) => {
    setAlignItems(e.target.value);
  };

  return (
    <fieldset>
      <legend>Align Items:</legend>
      <section>
        <input
          type="radio"
          id="stretch"
          name="align-items"
          value="stretch"
          checked={alignItems === "stretch"}
          onChange={handleAlignItemsChange}
        />
        <label htmlFor="stretch">Stretch</label>
      </section>

      <section>
        <input
          type="radio"
          id="baseline"
          name="align-items"
          value="baseline"
          checked={alignItems === "baseline"}
          onChange={handleAlignItemsChange}
        />
        <label htmlFor="baseline">Baseline</label>
      </section>

      <section>
        <input
          type="radio"
          id="center"
          name="align-items"
          value="center"
          checked={alignItems === "center"}
          onChange={handleAlignItemsChange}
        />
        <label htmlFor="center">Center</label>
      </section>

      <section>
        <input
          type="radio"
          id="flex-start"
          name="align-items"
          value="flex-start"
          checked={alignItems === "flex-start"}
          onChange={handleAlignItemsChange}
        />
        <label htmlFor="flex-start">Flex Start</label>
      </section>

      <section>
        <input
          type="radio"
          id="flex-end"
          name="align-items"
          value="flex-end"
          checked={alignItems === "flex-end"}
          onChange={handleAlignItemsChange}
        />
        <label htmlFor="space-evenly">Flex End</label>
      </section>
    </fieldset>
  );
};

export default AlignItemsOptions;
