import React from 'react';

const LoadingIndicator = () => (
  <span style={{ fontFamily: "bold", fontSize: 14, color: "blue" }}>
    Loading...
  </span>
);

const Exo1 = ({ loading }) => {
  return loading ? <LoadingIndicator /> : null;
};

export default Exo1;
