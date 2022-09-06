import { createRoot } from "react-dom/client";
import * as React from "react";
import { Alert } from "./Alert.tsx";

const App = () => {
  return (
    <div style={{ color: "red" }}>
      Hello, React App
      <div>
        <Alert message="success!" />
      </div>
    </div>
  );
};

const reactRoot = document.getElementById("react-root");
if (reactRoot) {
  createRoot(reactRoot).render(<App />);
} else {
  console.log("react-root not found");
}
