import { NumberCounter } from "./components/NumberCounter";

function App() {
  const initiaValue = 0;
  return (
    <>
      <NumberCounter initiaValue={+initiaValue} />
      <NumberCounter initiaValue={+initiaValue} />
      <NumberCounter initiaValue={+initiaValue} />
    </>
  );
}
export default App;
