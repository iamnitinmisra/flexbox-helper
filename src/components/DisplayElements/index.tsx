import "./flexElement.css";

export type DisplayElementProps = {
  elementCount?: number;
  flexCss?: object;
};

const DisplayElements = ({
  elementCount = 5,
  flexCss,
}: DisplayElementProps): React.ReactElement => {
  const elements = Array.from({ length: elementCount }).map((_, i) => (
    <div
      key={i}
      style={{
        width: "50px",
        height: "50px",
        backgroundColor: "blue",
        borderRadius: "4px",
      }}
    />
  ));
  return <div style={{ ...flexCss }}>{elements}</div>;
};

export default DisplayElements;
