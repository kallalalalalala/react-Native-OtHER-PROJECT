import { Tabs } from 'expo-router';
import Ionicons from '@expo/vector-icons/Ionicons';

export default function TabLayout() {
  return (
    <>
      <Tabs
        screenOptions={{
          tabBarActiveTintColor: '#ffd33d',
        }}
      >
        {/* Home screen tab */}
        <Tabs.Screen
          name="index"
          options={{
            title: 'Home',
            tabBarIcon: ({ color, focused }) => (
              <Ionicons
                name={focused ? 'home-sharp' : 'home-outline'}
                color={color}
                size={24}
              />
            ),
          }}
        />
        
        {/* About screen tab */}
        <Tabs.Screen
          name="about"
          options={{
            title: 'About',
            tabBarIcon: ({ color, focused }) => (
              <Ionicons
                name={focused ? 'information-circle' : 'information-circle-outline'}
                color={color}
                size={25}
              />
            ),
          }}
        />

        {/* Transfer Money screen tab */}
        <Tabs.Screen
          name="transfer"
          options={{
            title: 'Transfer',
            tabBarIcon: ({ color, focused }) => (
              <Ionicons
                name={focused ? 'cash' : 'cash-outline'} // Changement d'icône pour "Transfer"
                color={color}
                size={25}
              />
            ),
          }}
        />
        
      </Tabs>
    </>
  );
}
