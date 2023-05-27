import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  Button,
  StyleSheet,
  ActivityIndicator,
  Alert,
} from "react-native";
import AboutUs from "./components/AboutUs";
import AlertOne from "./components/AlertOne";

const JOKE_API = "https://official-joke-api.appspot.com/random_joke";

const App = () => {
  const [joke, setJoke] = useState(null);
  const [loading, setLoading] = useState(true);

  const fetchJoke = async () => {
    setLoading(true);
    const response = await fetch(JOKE_API);
    const data = await response.json();
    setJoke(data);
    setLoading(false);
  };

  useEffect(() => {
    fetchJoke();
  }, []);

  const createTwoButtonAlert = () =>
    Alert.alert("Alert Title", "My Alert Msg", [
      {
        text: "Cancel",
        onPress: () => console.log("Cancel Pressed"),
        style: "cancel",
      },
      { text: "OK", onPress: () => console.log("OK Pressed") },
    ]);

  const createThreeButtonAlert = () =>
    Alert.alert("Alert Title", "My Alert Msg", [
      {
        text: "Ask me later",
        onPress: () => console.log("Ask me later pressed"),
      },
      {
        text: "Cancel",
        onPress: () => console.log("Cancel Pressed"),
        style: "cancel",
      },
      { text: "OK", onPress: () => console.log("OK Pressed") },
    ]);

  return (
    <>
      <AboutUs name="About Us" />
      <View style={styles.container}>
        {loading ? (
          <ActivityIndicator size="large" color="#0000ff" />
        ) : (
          <>
            <Text style={styles.jokeSetup}>{joke.setup}</Text>
            <Text style={styles.jokePunchline}>{joke.punchline}</Text>
          </>
        )}
        <Button title="New Joke" onPress={fetchJoke} />
      <Button title={"2-Button Alert"} onPress={createTwoButtonAlert} />
      <Button title={"3-Button Alert"} onPress={createThreeButtonAlert} />
      <Button title="Press Me" onPress={()=>Alert.alert("She will say Oh yeah")}></Button>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  jokeSetup: {
    fontSize: 24,
    marginBottom: 20,
    textAlign: "center",
  },
  jokePunchline: {
    fontSize: 20,
    marginBottom: 40,
    textAlign: "center",
  },
});

export default App;
