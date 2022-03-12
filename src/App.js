import CakeContainer from './Components/CakeContainer';
import HookCakeContainer from "./Components/HookCakeContainer";
import {Provider} from "react-redux";
import store from "./redux/store";

function App() {
  return (
    <Provider store={store}>
      <CakeContainer/>
      <HookCakeContainer/>
    </Provider>
  );
}

export default App;
