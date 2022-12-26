import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import StateExample from "./useState/StateExample";
import ReducerExample from "./useReducer/ReducerExample";
import EffectExample from "./useEffect/EffectExample";
import RefExample from "./useRef/RefExample";
import ContextExample from "./useContext/ContextExample";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/state" element={<StateExample />} />
          <Route path="/reducer" element={<ReducerExample />} />
          <Route path="/effect" element={<EffectExample />} />
          <Route path="/ref" element={<RefExample />} />
          <Route path="/ref" element={<RefExample />} />
          <Route path="/context" element={<ContextExample />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
