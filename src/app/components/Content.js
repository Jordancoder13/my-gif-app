// components/Content.js
import { useEffect, useState } from 'react';
import { auth } from '../lib/firebase';

export default function Content() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(setUser);
    return () => unsubscribe();
  }, []);

  if (user === null) {
    return <div>Please log in to view this content.</div>;
  }

  return <div>Protected content visible to authenticated users only.</div>;
}
