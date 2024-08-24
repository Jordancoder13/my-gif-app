// pages/_app.js
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { auth } from '../lib/firebase'; // Adjust the path if needed

function MyApp({ Component, pageProps }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setUser(user);
      setLoading(false);
      // Redirect to login if not authenticated and trying to access protected route
      if (user === null && router.pathname !== '/login' && router.pathname !== '/signup') {
        router.push('/login');
      }
    });

    return () => unsubscribe();
  }, [router]);

  if (loading) {
    return <div>Loading...</div>; // You can customize this loading screen
  }

  return <Component {...pageProps} user={user} />;
}

export default MyApp;
