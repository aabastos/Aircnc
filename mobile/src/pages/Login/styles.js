import { StyleSheet } from "react-native";

const styles = {
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#292828",
  },
  form: {
    marginTop: 30,
    paddingHorizontal: 30,
    alignSelf: "stretch",
  },
  label: {
    fontWeight: "bold",
    color: "#b8b8b8",
    fontSize: 16,
    marginBottom: 8,
  },
  input: {
    borderWidth: 1,
    borderRadius: 2,
    borderColor: "#444",
    fontSize: 16,
    height: 44,
    paddingHorizontal: 10,
    marginBottom: 30,
    color: "white",
  },
  button: {
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 4,
    height: 50,
    backgroundColor: "#FF5A5F",
  },
  buttonText: {
    fontWeight: "bold",
    fontSize: 20,
    color: "white",
  },
};

export default styles;
