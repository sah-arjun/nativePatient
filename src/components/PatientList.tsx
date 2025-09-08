import Ionicons from "@expo/vector-icons/Ionicons";
import React from "react";
import { FlatList, Text, TouchableOpacity, View } from "react-native";

interface Props {
  patients: any[];
  onSelect?: (patient: any) => void;
  onDelete?: (patient: any) => void;
  onOpenExternal?: (patient: any) => void; // new optional handler
}

export default function PatientList({
  patients,
  onSelect,
  onDelete,
  onOpenExternal,
}: Props) {
  return (
    <FlatList
      data={patients}
      keyExtractor={(item, index) =>
        item.userid ? item.userid.toString() : index.toString()
      }
      renderItem={({ item }) => (
        <View className="bg-white rounded-2xl p-4 mb-4 shadow min-h-[70px]">
          <View className="flex-row justify-between items-start">
            {/* Left: Patient name and relationship */}
            <View className="flex-1 pr-4">
              <Text
                className="text-lg font-semibold text-gray-800"
                numberOfLines={1}
                ellipsizeMode="tail"
              >
                {item.fname} {item.lname} ({item.user_type})
              </Text>
              <View className="mt-1">
                <Text className="bg-emerald-600 text-white px-3 py-1 rounded-full text-xs self-start">
                  {item.user_type}
                </Text>
              </View>
            </View>

            {/* Right: Action buttons */}
            <View className="flex-row space-x-4 items-center">
              <TouchableOpacity onPress={() => onDelete && onDelete(item)}>
                <Ionicons name="trash" size={22} color="red" />
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => onOpenExternal && onOpenExternal(item)}
              >
                <Ionicons name="open-outline" size={22} color="#374151" />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      )}
    />
  );
}
