import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"; // Actualizamos el import
import { auth } from "./firebase";
import ChatRoom from "./chat";

const App = () => {
  const [user, setUser] = React.useState(null);

  React.useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(user => {
      setUser(user);
    });

    return () => unsubscribe();
  }, []);

  return (
    <Router>
      <div>
        {/* Reemplazamos Switch con Routes */}
        <Routes>
          <Route exact path="/">
            {user ? <chat /> : <SignIn />}
          </Route>
          {/* Otros componentes o rutas */}
        </Routes>
      </div>
    </Router>
  );
};

export default App;