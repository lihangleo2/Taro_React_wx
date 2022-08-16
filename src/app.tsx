import { Provider } from "mobx-react";
import store from "./store/index";
import './app.scss'


const App = props=>{
  return <Provider {...store}>{props.children}</Provider>;
}

export default App
