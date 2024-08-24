// pages/protected.js
import { useEffect } from 'react';
import { useRouter } from 'next/router';

export default function ProtectedPage({ user }) {
  const router = useRouter();

  useEffect(() => {
    if (!user) {
      router.push('/login'); // Redirect to login if not authenticated
    }
  }, [user, router]);

  if (!user) {
    return <div>Loading...</div>; // Optional loading state while redirecting
  }

  return <div>Welcome to the protected page!</div>;
}
