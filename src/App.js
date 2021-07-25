import { Route, Switch } from "react-router-dom";
import Register from "./components/Register";
import Login from "./components/Login";



const App = () => {
  return (
    <>
    <Switch>
      <Route exact path="/" component={Register}/>
      <Route path="/login" component={Login}/>
    </Switch>

    {/* <Register/>
     <Login/>  */}
     </>
  );
}
export default App;
