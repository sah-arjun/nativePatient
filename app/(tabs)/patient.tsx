import React from "react";
import { ActivityIndicator, StyleSheet, Text, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import PatientList from "../../src/components/PatientList";
import { usePatients } from "../../src/hooks/usePatients";
import { RootState } from "../../src/redux/store";
import { selectPatient } from "../../src/redux/store/slices/patientSlice";

export default function PatientScreen() {
  const dispatch = useDispatch();
  const userId = useSelector((state: RootState) => state.auth.userId);
  const { data, isLoading, isError } = usePatients();

  if (!userId) {
    return (
      <View style={styles.center}>
        <Text>Please log in to view patients.</Text>
      </View>
    );
  }

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
        <PatientList
          patients={data}
          onSelect={(p) => dispatch(selectPatient(p))}
        />
      ) : (
        <View style={styles.center}>
          <Text>No patients found.</Text>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { padding: 16 },
  center: { flex: 1, justifyContent: "center", alignItems: "center" },
});
