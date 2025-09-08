import React from "react";
import { FlatList, Text, TouchableOpacity, View } from "react-native";

interface Props {
  patients: any[];
  onSelect?: (patient: any) => void; // optional callback
}

export default function PatientList({ patients, onSelect }: Props) {
  return (
    <FlatList
      data={patients}
      keyExtractor={(item, index) =>
        item.userid ? item.userid.toString() : index.toString()
      }
      renderItem={({ item }) => (
        <TouchableOpacity
          onPress={() => onSelect && onSelect(item)}
          style={{ marginVertical: 4 }}
        >
          <View>
            <Text>{JSON.stringify(item, null, 2)}</Text>
          </View>
        </TouchableOpacity>
      )}
    />
  );
}
