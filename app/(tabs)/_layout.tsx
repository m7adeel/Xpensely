import { Tabs } from 'expo-router'
import { BottomTabNavigationOptions } from '@react-navigation/bottom-tabs';

type ScreenOptions = Record<string, BottomTabNavigationOptions>

const screenOptions: ScreenOptions = {
    index: {},
    statistics: {},
    transaction: {},
    profile: {},
}

export default function Layout() {
  return (
    <Tabs>
        <Tabs.Screen name='index' options={screenOptions.index}/>
        <Tabs.Screen name='statistics' options={screenOptions.statistics}/>
        <Tabs.Screen name='transaction' options={screenOptions.transaction}/>
        <Tabs.Screen name='profile' options={screenOptions.profile}/>
    </Tabs>
  )
}