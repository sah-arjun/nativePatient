import Ionicons from "@expo/vector-icons/Ionicons";
import React, { useRef, useState } from "react";
import {
  ActivityIndicator,
  Animated,
  Text,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import { useDispatch, useSelector } from "react-redux";
import PatientList from "../../src/components/PatientList";
import { usePatients } from "../../src/hooks/usePatients";
import { RootState } from "../../src/redux/store";
import { selectPatient } from "../../src/redux/store/slices/patientSlice";

export default function PatientScreen() {
  const dispatch = useDispatch();
  const userId = useSelector((state: RootState) => state.auth.userId);
  const { data, isLoading, isError } = usePatients();

  const [showLabel, setShowLabel] = useState(false);
  const scaleAnim = useRef(new Animated.Value(1)).current;

  const handlePressIn = () => {
    Animated.spring(scaleAnim, {
      toValue: 0.95,
      useNativeDriver: true,
    }).start();
  };

  const handlePressOut = () => {
    Animated.spring(scaleAnim, {
      toValue: 1,
      friction: 3,
      tension: 40,
      useNativeDriver: true,
    }).start();
    setShowLabel((prev) => !prev);
  };

  if (!userId) {
    return (
      <View className="flex-1 items-center justify-center bg-gray-100">
        <Text className="text-gray-700">Please log in to view patients.</Text>
      </View>
    );
  }

  if (isLoading) {
    return (
      <View className="flex-1 items-center justify-center bg-gray-100">
        <ActivityIndicator size="large" color="tomato" />
      </View>
    );
  }

  if (isError) {
    return (
      <View className="flex-1 items-center justify-center bg-gray-100">
        <Text className="text-red-500">Failed to fetch patients.</Text>
      </View>
    );
  }

  return (
    <View className="flex-1 bg-gray-100 p-4">
      {/* Header with back arrow and title */}
      <View className="mb-4">
        <View className="flex-row items-center mb-2">
          <Ionicons name="arrow-back" size={24} color="black" />
          <Text className="text-xl font-semibold ml-2">PatientList</Text>
        </View>
        <Text className="text-orange-600 font-medium">
          Please select a patient for whom you want to take appointment for
        </Text>
      </View>

      {/* Patient list */}
      {data && data.length > 0 ? (
        <PatientList
          patients={data}
          onSelect={(p) => dispatch(selectPatient(p))}
        />
      ) : (
        <View className="flex-1 items-center justify-center">
          <Text className="text-gray-500">No patients found.</Text>
        </View>
      )}

      {/* Floating Action Button */}
      <View className="absolute bottom-6 right-6 flex-row items-center">
        {showLabel && (
          <View className="mr-2 bg-white px-3 py-2 rounded-full shadow">
            <Text className="text-blue-500 font-semibold">Add Patient</Text>
          </View>
        )}
        <TouchableWithoutFeedback
          onPressIn={handlePressIn}
          onPressOut={handlePressOut}
        >
          <Animated.View
            style={{ transform: [{ scale: scaleAnim }] }}
            className="rounded-full bg-blue-500 p-4 shadow-lg"
          >
            <Ionicons name="add" size={24} color="white" />
          </Animated.View>
        </TouchableWithoutFeedback>
      </View>
    </View>
  );
}
