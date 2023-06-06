import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { Fontisto } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";

import HomeScreen from "../screens/HomeScreen";
import PlannerScreen from "../screens/PlannerScreen";
import JournalScreen from "../screens/JournalScreen";
import WorkoutDetailScreen from "../screens/WorkoutDetailScreen";

const defaultScreenOptions = {
  headerShown: false,
  // unmountOnBlur: true, // allow screens to be destroyed when inactive
};

const Stack = createNativeStackNavigator();

function RootNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          component={BottomTabNavigator}
          options={defaultScreenOptions}
          name="Root"
        />
        <Stack.Screen
          component={WorkoutDetailScreen}
          options={{ title: "Workout Detail" }}
          name="WorkoutDetail"
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const BottomTab = createBottomTabNavigator();

function BottomTabNavigator() {
  return (
    <BottomTab.Navigator initialRouteName="Home">
      <BottomTab.Screen
        options={{
          // ...defaultScreenOptions,
          tabBarIcon: ({ color, size }) => (
            <Fontisto
              name="sourcetree"
              color={color}
              size={size}
            />
          ),
        }}
        component={HomeScreen}
        name="Home"
      />
      <BottomTab.Screen
        component={PlannerScreen}
        options={{
          ...defaultScreenOptions,
          tabBarIcon: ({ color, size }) => (
            <Entypo
              color={color}
              size={size}
              name="list"
            />
          ),
        }}
        name="Planner"
      />
      <BottomTab.Screen
        component={JournalScreen}
        options={{
          ...defaultScreenOptions,
          tabBarIcon: ({ color, size }) => (
            <Ionicons
              name="md-journal-outline"
              color={color}
              size={size}
            />
          ),
        }}
        name="Journal"
      />
    </BottomTab.Navigator>
  );
}

export default function Navigation() {
  return (
    <RootNavigator />
  );
}

