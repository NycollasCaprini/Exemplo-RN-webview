import { createDrawerNavigator } from "@react-navigation/drawer";
import StackNavigator from "./StackNavigator";
import { Ionicons } from "@expo/vector-icons";
import PageIFPR from "../pages/PageIFPR";
import PageExemplo from "../pages/PageExemplo";
import PageGov from "../pages/PageGov";

const Drawer = createDrawerNavigator();

function DrawerNavigator() {

    return (
        <Drawer.Navigator>
            <Drawer.Screen name="Início" component={StackNavigator}
                options={{
                    drawerIcon: () => <Ionicons name="home" size={24} color="blue" />
                }} />
            <Drawer.Screen name="IFPR" component={PageIFPR}
                options={{
                    drawerIcon: () => <Ionicons name="school" size={24} />
                }} />
            <Drawer.Screen name="Exemplo" component={PageExemplo}
                options={{
                    drawerIcon: () => <Ionicons name="document-text" size={24} />
                }} />
            <Drawer.Screen name="Gov.br" component={PageGov}
                options={{
                    drawerIcon: () => <Ionicons name="business" size={24} />
                }} />
        </Drawer.Navigator>
    )
}

export default DrawerNavigator;