// src/hooks/useFirebaseImage.js
import { useState, useEffect } from 'react';
import { storage } from '../firebase/config';
import { ref, getDownloadURL } from 'firebase/storage';

export const useFirebaseImage = (storagePath) => {
  const [imageUrl, setImageUrl] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!storagePath) {
      setLoading(false);
      return;
    }

    const fetchImage = async () => {
      try {
        setLoading(true);
        const imageRef = ref(storage, storagePath);
        const url = await getDownloadURL(imageRef);
        setImageUrl(url);
        setError(null);
      } catch (err) {
        // Handle error silently or with proper error reporting
        // In development, you might want to log this:
        if (import.meta.env.DEV) {
          // eslint-disable-next-line no-console
          console.error('Error fetching Firebase image:', err);
        }
        setError(err);
        setImageUrl(null);
      } finally {
        setLoading(false);
      }
    };

    fetchImage();
  }, [storagePath]);

  return { imageUrl, loading, error };
};