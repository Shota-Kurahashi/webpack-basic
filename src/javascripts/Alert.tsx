import * as React from "react";

export const Alert: React.FC<{ message: string }> = ({ message }) => {
  return (
    <div style={{ background: "green", padding: "10px", color: "white" }}>
      {message}
    </div>
  );
};
