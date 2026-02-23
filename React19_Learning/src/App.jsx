// Component is a function that returns JSX (JavaScript XML)
// which is a syntax extension for JavaScript
// that looks similar to HTML.
function App() {
  return (
    <>
      <h1>Hello, React 19! </h1>
      <p>The sum of 2 and 3 is: {sum(2, 3)}</p>
    </>
  );
}
// Function starting with lowercase is not a component, it's just a regular function
// and it can be used inside the component or outside the component, but it cannot be used as a component
// because it does not return JSX and it does not follow the naming convention for components.
// it return normal JavaScript value, in this case it returns the sum of two numbers.
function sum(a, b) {
  return a + b;
}
export default App;
