import CakeContainer from './Components/CakeContainer';
import HookCakeContainer from "./Components/HookCakeContainer";
import {Provider} from "react-redux";
import store from "./redux/store";
import IceCreamContainer from './Components/IceCreamContainer';

function App() {
  return (
    <Provider store={store}>
      <CakeContainer/>
      <HookCakeContainer/>
      <IceCreamContainer/>
    </Provider>
  );
}

export default App;
