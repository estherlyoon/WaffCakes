import "react-native-gesture-handler";
import * as React from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Button,
  Image,
} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { TouchableOpacity } from "react-native";
import {
  MenuProvider,
  Menu,
  MenuOptions,
  MenuOption,
  MenuTrigger,
} from "react-native-popup-menu";

// export const SettingsPopup = ({ navigation }) => (
function SettingsPopup({ navigation }) {
  return (
    <View>
      <Menu onSelect={(value) => alert(`Selected option: ${value}`)}>
        {/* <MenuTrigger text="Select option"> */}
        <MenuTrigger>
          <Icon
            name="settings"
            style={styles.settings}
            size={100}
            onPress={openSettings()}
          />
        </MenuTrigger>
        <MenuOptions>
          <MenuOption
            value={1}
            text="One"
            onSelect={() => navigation.navigate("Game", { nameParam: "Jane" })}
          >
            {/* onPress={() => navigation.navigate("Game", { nameParam: "Jane" })} */}
          </MenuOption>
          <MenuOption value={2}>
            <Text style={{ color: "red" }}>Two</Text>
          </MenuOption>
          <MenuOption value={3} disabled={true} text="Three" />
        </MenuOptions>
      </Menu>
    </View>
  );
}
// );
