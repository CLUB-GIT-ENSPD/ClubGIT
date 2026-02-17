import { Stack } from "expo-router";

export default function Layout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ headerShown: false }} />
      <Stack.Screen 
        name="MemberApp" 
        options={{ 
          headerShown: false,
          animation: 'flip', // Options: 'slide_from_right', 'fade_from_bottom', 'fade', etc.
          animationDuration: 40, // Ajuste la vitesse ici
        }} 
      />
    </Stack>
  );
}