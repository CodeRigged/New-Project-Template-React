import React from "react";
import "./styles/app.scss";
import { Switch, Route } from "react-router-dom";
import { Pages } from "./pages/AppPages";

function App() {
  return (
    <React.Fragment>
      <Switch>
        {Pages.map(page => {
          const { key, component, path } = page;
          return <Route key={key} exact path={path} component={component} />;
        })}
      </Switch>
    </React.Fragment>
  );
}

export default App;
