import { createRoot } from "react-dom/client";
import * as React from "react";

const App = () => {
  return <div style={{ color: "red" }}>Hello, React App</div>;
};

const reactRoot = document.getElementById("react-root");
if (reactRoot) {
  createRoot(reactRoot).render(<App />);
} else {
  console.log("react-root not found");
}
