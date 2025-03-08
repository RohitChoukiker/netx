import { Tabs } from "expo-router";
import { Ionicons, AntDesign } from "@expo/vector-icons"; // ✅ Correct import

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: "#3498db", // Active tab color
        tabBarInactiveTintColor: "gray", // Inactive tab color
        tabBarStyle: {
          backgroundColor: "black", // Tab bar ka background color
          borderTopWidth: 1,
          borderTopColor: "#ddd",
          height: 60,
          borderRadius: 10,
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="home-outline" size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="bookmark"
        options={{
          title: "Bookmarks",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="bookmark-outline" size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="noti"
        options={{
          title: "Notifications",
          tabBarIcon: ({ color, size }) => (
            <AntDesign name="notification" size={size} color={color} /> // ✅ Fixed dynamic color
          ),
        }}
      />
      <Tabs.Screen
        name="create"
        options={{
          title: "Create",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="add-circle-outline" size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: "Profile",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="person-outline" size={size} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
