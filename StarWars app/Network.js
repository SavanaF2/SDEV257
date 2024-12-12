import React, { useState, useEffect } from "react";
import { Text, View } from "react-native";
import NetInfo from "@react-native-community/netinfo";
import styles from "./styles";
 
const connectedMap = {
  none: "Disconnected from network",
  unknown: "Disconnected from network",
  wifi: "Connected",
  cell: "Connected",
  mobile: "Connected",
};

export default function Network() {
  const [connected, setConnected] = useState("");

  useEffect(() => {
    function onNetworkChange(connection) {
      setConnected(connectedMap[connection.type]);
    }

    const unsubscribe = NetInfo.addEventListener(onNetworkChange);

    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <View >
    {connected === "Disconnected from network" && (
      <Text style={styles.disconnected}>{connected}</Text>
    )}
    </View>
  );
}
