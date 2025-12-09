import { useState, useEffect } from 'react';
import API_BASE_URL from "../config/api";

const useBookBox = () => {
  const [bookBoxData, setBookBoxData] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchBookBoxData = async () => {
    try {
      setLoading(true);
      const response = await fetch(`${API_BASE_URL}/book-box?t=${Date.now()}`);
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      
      const data = await response.json();
      setBookBoxData(data);
      setError(null);
    } catch (err) {
      console.error('Error fetching book box data:', err);
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchBookBoxData();
  }, []);

  const refetch = () => {
    fetchBookBoxData();
  };

  const clearCache = () => {
    setBookBoxData({});
    fetchBookBoxData();
  };

  return {
    bookBoxData,
    loading,
    error,
    refetch,
    clearCache
  };
};

export default useBookBox;