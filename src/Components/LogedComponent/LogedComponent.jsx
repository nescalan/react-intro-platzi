import { memo } from "react";

const LogedComponent = () => {
  return (
    <>
      <div className="container">
        <h1>Congratulations</h1>
        <h2>You are Loged</h2>
      </div>
    </>
  );
};

export default memo(LogedComponent);
