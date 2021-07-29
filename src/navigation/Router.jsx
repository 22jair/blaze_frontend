import { Switch, Route } from "react-router-dom";
import { routes } from "./routes";

const Router = () => (
  <Switch>
    {routes.map((r, i) => <Route key={i} path={r.path} exact component={r.component} /> )}
  </Switch>
);

export default Router;
