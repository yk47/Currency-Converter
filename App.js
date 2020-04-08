import React from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Alert,
  Keyboard,
} from "react-native";

const currencyPerRupee = {
  DOLLAR: 0.014,
  EURO: 0.012,
  POUND: 0.011,
  RUBEL: 0.93,
  AUSDOLLAR: 0.2,
  CANDOLLAR: 0.019,
  YEN: 1.54,
  DINAR: 0.0043,
  BITCOIN: 0.0000041,
};
export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: "",
      resultValue: "0.0",
    };
  }
  buttonPressed = (currency) => {
    if (this.state.inputValue == "") {
      Alert.alert("Enter some value");
    }
    let result = parseFloat(this.state.inputValue) * currencyPerRupee[currency];
    this.setState({ resultValue: result.toFixed(2) });
  };
  render() {
    return (
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <SafeAreaView style={styles.container}>
          <View style={styles.screenview}>
            <View style={styles.resultscontainer}>
              <Text style={styles.resultVlaue}>{this.state.resultValue}</Text>
            </View>
            <View style={styles.inputecontainer}>
              <TextInput
                style={styles.inpute}
                selectionColor="#FFF"
                keyboardType="numeric"
                placeholder="Enter Value"
                value={this.state.inputValue}
                onChangeText={(inputValue) => this.setState({ inputValue })}
              />
            </View>
            <View style={styles.converbutcontainer}>
              <TouchableOpacity
                style={styles.convbutton}
                onPress={() => this.buttonPressed("DOLLAR")}
              >
                <Text style={styles.converbuttext}>$</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.convbutton}
                onPress={() => this.buttonPressed("EURO")}
              >
                <Text style={styles.converbuttext}>EURO</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.convbutton}
                onPress={() => this.buttonPressed("POUND")}
              >
                <Text style={styles.converbuttext}>Pound</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.convbutton}
                onPress={() => this.buttonPressed("AUSDOLLAR")}
              >
                <Text style={styles.converbuttext}>Aus</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.convbutton}
                onPress={() => this.buttonPressed("CANDOLLAR")}
              >
                <Text style={styles.converbuttext}>Canada</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.convbutton}
                onPress={() => this.buttonPressed("YEN")}
              >
                <Text style={styles.converbuttext}>YEN</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.convbutton}
                onPress={() => this.buttonPressed("DINAR")}
              >
                <Text style={styles.converbuttext}>Dinar</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.convbutton}
                onPress={() => this.buttonPressed("BITCOIN")}
              >
                <Text style={styles.converbuttext}>Bitcoin</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.convbutton}
                onPress={() => this.buttonPressed("RUBEL")}
              >
                <Text style={styles.converbuttext}>Rubel</Text>
              </TouchableOpacity>
            </View>
          </View>
        </SafeAreaView>
      </TouchableWithoutFeedback>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#758AA2",
  },
  screenview: {
    flex: 1,
  },
  resultscontainer: {
    height: 70,
    marginTop: 120,
    justifyContent: "center",
    borderColor: "#c1c1c1",
    backgroundColor: "#0A79DE",
    alignItems: "center",
    borderWidth: 2,
  },
  resultVlaue: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#FFF",
  },
  inputecontainer: {
    height: 70,
    marginTop: 10,
    justifyContent: "center",
    alignItems: "center",
    borderColor: "#c1c1c1",
    borderWidth: 2,
    backgroundColor: "#0A79DE",
  },
  inpute: {
    color: "#FFF",
    fontSize: 30,
  },
  converbutcontainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    marginTop: 20,
    borderColor: "#c1c1c1",
    borderWidth: 2,
  },
  convbutton: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#0A79DF",
    height: 100,
    borderColor: "#c1c1c1",
    borderWidth: 2,
    width: "33.3%",
  },
  converbuttext: {
    color: "#FFF",
    fontSize: 20,
    fontWeight: "bold",
  },
});
