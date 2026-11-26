import { PaperProvider } from "react-native-paper";
import { NavigationContainer } from "@react-navigation/native";
import DrawerNavigator from "./src/components/DrawerNavigator";
import { Provider } from "react-redux";
import store from "./store";

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <PaperProvider>
          <DrawerNavigator />
        </PaperProvider>
      </NavigationContainer>
    </Provider>
  );
}
