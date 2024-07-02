import { useState } from "react";

import Counter from "./components/Counter/Counter.jsx";
import Header from "./components/Header.jsx";
import ConfigureCounter from "./components/ConfigureCounter.jsx";
import { log } from "./log.js";

function App() {
  log("<App /> rendered");

  const [chosenCount, setChosenCount] = useState(0);

  function handleSetCount(newCount) {
    setChosenCount(newCount);
  }

  return (
    <>
      <Header />
      <main>
        {/*************************************************************
         * When we changed the counter on every key stroke,
         * only <ConfigureCounter> component gets executed,
         * not all components anymore. This saves us from
         * using memo() to prevent unnecessary component rendering.
         **************************************************************
         */}
        <ConfigureCounter onSetCount={handleSetCount} />
        <Counter initialCount={chosenCount} />
      </main>
    </>
  );
}

export default App;
