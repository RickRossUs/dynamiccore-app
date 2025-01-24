import React from "react";
import { View, Button, StyleSheet } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { ParamListBase } from "@react-navigation/native";

type HomeScreenNavigationProp = StackNavigationProp<ParamListBase, "Home">;

interface Props {
  navigation: HomeScreenNavigationProp;
}

const HomeScreen: React.FC<Props> = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.buttonContainer}>
        <Button
          title="Ir al formulario"
          onPress={() => navigation.navigate("Form")}
        />
      </View>
      <View style={styles.buttonContainer}>
        <Button
          title="Ver mapa"
          onPress={() => navigation.navigate("Map")}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonContainer: {
    marginVertical: 10,
    width: "80%",
  },
});

export default HomeScreen;
