// src/hooks/useFirebaseImage.js
import { useState, useEffect } from 'react';
import { getDownloadURL, ref } from 'firebase/storage';
import { storage } from '../firebase/config';

const useFirebaseImage = (imagePath) => {
  const [imageUrl, setImageUrl] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!imagePath) {
      setLoading(false);
      return;
    }

    const fetchImage = async () => {
      try {
        const imageRef = ref(storage, imagePath);
        const url = await getDownloadURL(imageRef);
        setImageUrl(url);
        setError(null);
      } catch (err) {
        console.error('Error fetching image from Firebase:', err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchImage();
  }, [imagePath]);

  return { imageUrl, loading, error };
};

export default useFirebaseImage;