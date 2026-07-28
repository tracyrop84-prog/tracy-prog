import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
function MyComponent() {
  return null;
}
function MyComponent2() {
  return (
    <div>
      <h1>hello world</h1>
    </div>
  );
}
function MyComponent3() {
  return (
    <>
      <div>
        <h3>react</h3>
      </div>
      <div>
        <h2>javascript</h2>
      </div>
    </>
  );
}
export function ParentComponent() {
  return (
    <div>
      <h1>this is my parent component</h1>
      <MyComponent />
      <MyComponent></MyComponent>

      <MyComponent2 />
      <MyComponent2></MyComponent2>

      <MyComponent3 />
      <MyComponent3></MyComponent3>
    </div>
  );
}

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <h1>My First React application</h1>
    <MyComponent />
    <MyComponent></MyComponent>

    <MyComponent2 />
    <MyComponent2></MyComponent2>

    <MyComponent3 />
    <MyComponent3></MyComponent3>
    <ParentComponent />
  </StrictMode>,
);
