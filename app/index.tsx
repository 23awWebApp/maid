import React, { useEffect } from 'react';
import { Link, useRouter } from 'expo-router';

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => {
      router.push('/tabs/MainPage');
    }, 5000);

    return () => clearTimeout(timer); // Cleanup the timer if the component unmounts
  }, []);

  return (
    <>
      welcome to maid app!
    </>
  );
}
