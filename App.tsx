import * as Sentry from "@sentry/react-native";
import { default as React } from "react";
import { Button, Text, View } from "react-native";

Sentry.init({
  dsn: "https://1234@o1234.ingest.sentry.io/1234",
});

const AppUnwrapped = () => {
  return (
    <View
      style={{
        flex: 1,
        height: "100%",
        justifyContent: "center",
        alignItems: "center",
      }}>
      <Text>MySample Sentry App</Text>
      <Button
        title="Make Sentry Error"
        onPress={() => {
          console.error("Sentry should track this error");
          throw new Error("My first Sentry error!");
        }}
      />
    </View>
  );
};

export const App = AppUnwrapped;
