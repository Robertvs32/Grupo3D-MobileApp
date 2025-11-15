import { Stack, useRouter } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { onAuthStateChanged } from 'firebase/auth';
import { useEffect } from 'react';
import { auth } from '../config/firebaseconfig';

export default function RootLayout() {

  const router = useRouter();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, user => {
        if(user){
          router.replace('/home');
        } else {
          router.replace('/')
        }
    })
      return unsubscribe;
    }, [])

  return (
    <>
        <StatusBar style="light"/>
        <Stack screenOptions={{ headerShown: false }}></Stack>
    </>
  );
}