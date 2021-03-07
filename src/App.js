import "./App.css";
import SideBar from "./components/sidebar";
import "bootstrap/dist/css/bootstrap.css";
import MainBar from "./components/mainbar";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import SelectSlots from "./components/selectslot";
import Monday from "./components/monday";

function App() {
  return (
    <div className="App">
      <SideBar />
      <BrowserRouter>
        <Route path="/" component={MainBar} />
        <Route path="/find-slots" exact component={SelectSlots} />
      </BrowserRouter>
    </div>
  );
}

export default App;
