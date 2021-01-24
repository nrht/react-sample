import react from "react";

function App() {
  // const greeting = "Hi, Tom!";
  // const dom = <h1 className="foo">{greeting}</h1>
  // return dom;
  return (
    <react.Fragment>
      <label htmlFor="bar">Bar</label>
      <input type="text" onChange={() => {console.log("I'm clicked!")}} />
    </react.Fragment>
  );
}

// import react from "react";

// function App() {
//   return react.createElement(
//     "div",
//     null,
//     "Hello, world!"
//   );
// }

export default App;
