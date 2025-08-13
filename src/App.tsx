import Labs from "./Labs";
import Kambaz from "./Kambaz";
import { Route, Routes, Navigate, HashRouter } from "react-router-dom";
import store from "./Kambaz/store";
import { Provider } from "react-redux";
import Session from "./Kambaz/Account/Session";

function App() {
  return (
    <HashRouter>
      <Provider store={store}>
        <Session>
        <div>
          <Routes>
            <Route path="/" element={<Navigate to="/Labs" />} />
            <Route path="/Labs/*" element={<Labs />} />
            <Route path="/Kambaz/*" element={<Kambaz />} />
          </Routes>
        </div>
        </Session>
      </Provider>
    </HashRouter>
  );
}

export default App;
