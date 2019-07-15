const LoadingIndicator = () => (
  <span style={{ fontFamily: "bold", fontSize: 14, color: "blue" }}>
    Loading...
  </span>
);

const Exo3 = ({ loading }) => {
  return loading ? <LoadingIndicator /> : null;
};

export default Exo3;
