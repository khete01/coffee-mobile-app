import { AuthProvider } from "@/contexts/AuthProvider";
import { Tabs } from "expo-router";
import React from "react";
import { Text } from "react-native";

export default function TabLayout() {
  return (
    <AuthProvider>
      <Tabs
        screenOptions={({ route }) => ({
          tabBarActiveTintColor: "#0a7ea4",
          headerShown: false,
          tabBarStyle: {
            display:
              route.name === "index" ||
              route.name === "login" ||
              route.name === "register"
                ? "none"
                : "flex",
          },
          tabBarButton: ["index", "login"].includes(route.name)
            ? () => {
                return null;
              }
            : undefined,
        })}
      >
        <Tabs.Screen
          name="index"
          options={{ tabBarStyle: { display: "none" } }}
        />
        <Tabs.Screen
          name="login"
          options={{ tabBarStyle: { display: "none" } }}
        />
        <Tabs.Screen
          name="home"
          options={{
            title: "Home",
            tabBarIcon: ({ color, focused }) => <Text>Home</Text>,
          }}
        />
        <Tabs.Screen
          name="order"
          options={{
            title: "Order",
            tabBarIcon: ({ color, focused }) => <Text>Order</Text>,
          }}
        />
      </Tabs>
    </AuthProvider>
  );
}
