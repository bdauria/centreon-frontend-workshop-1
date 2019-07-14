import React, { useState } from "react";

const ACTIVATE = "Activate";
const ACTIVATED = "Activated";
const DEACTIVATE = "Deactivate";
const DEACTIVATED = "Deactivated";

const StatusCaption = ({ status }) => {
  const statusColor = status => {
    return status === ACTIVATED ? "green" : "red";
  };

  return <span style={{ color: statusColor(status) }}>Status: {status}</span>;
};

function Exo1() {
  const [status, setStatus] = useState(ACTIVATED);

  const onSetStatus = () => {
    const newStatus = status === ACTIVATED ? DEACTIVATED : ACTIVATED;
    setStatus(newStatus);
  };

  const buttonActionName = () => {
    return status === ACTIVATED ? DEACTIVATE : ACTIVATE;
  };

  return (
    <>
      <button id="btn-activate" onClick={onSetStatus}>
        {buttonActionName()}
      </button>
      <div>
        <StatusCaption status={status} />
      </div>
    </>
  );
}

export default Exo1;
