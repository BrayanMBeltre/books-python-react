import { useState } from "react";
import Layout from "./components/Layout";

function App() {
  const [count, setCount] = useState(0);

  return (
    <Layout>
      <h1>Vite + React</h1>

      <div className="card">
        <button
          type="button"
          onClick={() => setCount((count) => count + 1)}
          className="btn"
        >
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>

      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </Layout>
  );
}

export default App;
