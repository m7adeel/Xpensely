import '../global.css';

import { Stack } from 'expo-router';

export default function Layout() {
  return (
      <Stack screenOptions={{
        headerShown: false
      }}>
        <Stack.Screen name='(auth)' />
        <Stack.Screen name='(tabs)' />
        <Stack.Screen name='/add_expense' />
      </Stack>
  )
}
