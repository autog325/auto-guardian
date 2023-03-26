import "./App.css";
import Dashboard from "./Dashboard.js";
import { Routes, Route } from "react-router-dom";
import { SingIn } from "./SingIn";
import { createContext, useState } from "react";
import Sidebar from "./components/Sidebar";
import CarInfo from "./CarInfo";

export const context = createContext(null);

function App() {
  const [signIn, setSignin] = useState(false);

  const contextValues = {
    signIn: signIn,
    setSignin: setSignin,
  };

  return (
    <context.Provider value={contextValues}>
      <div className="App">
        <Routes>
          {signIn ? (
            <Route exact path="/dashboard" element={<Dashboard />} />
          ) : (
            (
              <Route
                exact
                path="/sidebar"
                element={<Sidebar setSignin={setSignin} />}
              />
            ) && (
              <Route
                exact
                path="/"
                element={<SingIn setSignin={setSignin} />}
              />
            )
          )}

          <Route exact path="/car-info/:carId" element={<CarInfo />} />
        </Routes>
      </div>
    </context.Provider>
  );
}

export default App;
