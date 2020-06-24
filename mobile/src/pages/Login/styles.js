import { StyleSheet } from "react-native"

const styles = {
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  form: {
    marginTop: 30,
    paddingHorizontal: 30,
    alignSelf: "stretch"
  },
  label: {
    fontWeight: "bold",
    fontSize: 16,
    color: "#444",
    marginBottom: 8
  },
  input: {
    borderWidth: 1,
    borderRadius: 2,
    borderColor: "#ddd",
    fontSize: 16,
    height: 44,
    paddingHorizontal: 10,
    marginBottom: 30
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
    color: "white"
  }
}

export default styles;