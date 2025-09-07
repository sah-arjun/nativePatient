import React from "react";
import { ActivityIndicator, StyleSheet, Text, View } from "react-native";
import PatientList from "../../src/components/PatientList";
import { usePatients } from "../../src/hooks/usePatients";

export default function PatientScreen() {
  const userId = "1000596100"; // replace with real logged-in user ID
  const { data, isLoading, isError } = usePatients(userId);

  if (isLoading) {
    return (
      <ActivityIndicator style={styles.center} size="large" color="tomato" />
    );
  }

  if (isError) {
    return (
      <View style={styles.center}>
        <Text style={{ color: "red" }}>Failed to fetch patients.</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      {data && data.length > 0 ? (
        <PatientList patients={data} />
      ) : (
        <Text>No patients found.</Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, backgroundColor: "#fff" },
  center: { flex: 1, justifyContent: "center", alignItems: "center" },
});
