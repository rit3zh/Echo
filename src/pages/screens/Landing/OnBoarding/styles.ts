import { StyleSheet, Dimensions } from "react-native";
import {
  responsiveHeight,
  responsiveWidth,
} from "react-native-responsive-dimensions";

const HEIGHT = Dimensions.get("window").height;
const WIDTH = Dimensions.get("window").width;

export const Styles = StyleSheet.create({
  container: {
    backgroundColor: "black",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  logoContainer: {
    justifyContent: "center",
    alignItems: "center",
    top: 20,
  },
  buttonContainer: {
    top: 250,
  },
  buttonStyle: {
    borderRadius: 50,
    backgroundColor: "white",
    height: 60,
  },
  text: {
    color: "black",
    fontSize: 18,
    fontWeight: "bold",
  },
  graphicElementTopLeft: {
    width: responsiveWidth(20),
    height: responsiveHeight(10),
    borderRadius: 50,
    backgroundColor: "white",
    position: "absolute",
    top: -20,
    left: -20,
    justifyContent: "space-between",
    borderColor: "#000",
    borderWidth: 1,
  },

  logo: {
    width: 250,
    height: 100,
  },

  graphicElementBottomRight: {
    width: responsiveWidth(20),
    height: responsiveHeight(10),
    borderRadius: 50,
    backgroundColor: "white",
    position: "absolute",
    bottom: -20,
    right: -20,
    justifyContent: "space-between",
    borderColor: "#000",
    borderWidth: 1,
  },
});
