import React from "react";
import { FlatList, Text, View } from "react-native";

interface Props {
  patients: any[];
}

export default function PatientList({ patients }: Props) {
  return (
    <FlatList
      data={patients}
      keyExtractor={(item, index) =>
        item.id ? item.id.toString() : index.toString()
      }
      renderItem={({ item }) => (
        <View style={{ marginVertical: 4 }}>
          <Text>{JSON.stringify(item, null, 2)}</Text>
        </View>
      )}
    />
  );
}
