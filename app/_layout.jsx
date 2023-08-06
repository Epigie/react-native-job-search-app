import { Stack } from 'expo-router/stack';
import { useCallback, useEffect } from 'react';
import { BackHandler, Platform } from 'react-native'; // Import BackHandler and Platform
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';

// make home screen show while loading 
SplashScreen.preventAutoHideAsync();

export default function Layout() {

  const [fontsLoaded] = useFonts({
    DMBold: require('../assets/fonts/DMSans-Bold.ttf'),
    DMMedium: require('../assets/fonts/DMSans-Medium.ttf'),
    DMRegular: require('../assets/fonts/DMSans-Regular.ttf'),
  });

  // Back button handling logic
  const handleBackButton = () => {
    // Handle the back button press here
    // For example, you might want to navigate back or perform some action
    return true; // Return true to indicate that you've handled the back button press
  };

  // Only show home page if fonts loaded successfully
  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();

      if (Platform.OS === 'android' && Platform.OS !== 'web') {
        BackHandler.addEventListener('hardwareBackPress', handleBackButton);
      }
    }
  }, [fontsLoaded]);

  useEffect(() => {
    return () => {
      if (Platform.OS === 'android' && Platform.OS !== 'web') {
        BackHandler.removeEventListener('hardwareBackPress', handleBackButton);
      }
    };
  }, []); // Clean up the event listener on unmount

  if (!fontsLoaded) return null;

  return <Stack onLayout={onLayoutRootView} />;
}
