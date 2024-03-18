import React from "react";
import { BrowserRouter as Router,  } from "react-router-dom";
import { Switch, Route } from 'react-router-dom';
import { auth } from "./firebase";
import chat from "./chat";


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
        <Switch>
          <Route exact path="/">
            {user ? <chat /> : <SignIn />}
          </Route>
          {/* Otros componentes o rutas */}
        </Switch>
      </div>
    </Router>
  );
};

export default App;
