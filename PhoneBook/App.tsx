import AppContainer from "./src/navigation";
import { Provider as ReduxProvider } from "react-redux";
import { reduxStore } from "./src/redux/store";

const App = () => {
  return (
    <ReduxProvider store={reduxStore}>
      <AppContainer />
    </ReduxProvider>
  );
};

export default App;
