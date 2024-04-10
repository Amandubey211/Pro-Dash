import { useState, useEffect } from "react";
import axios from "axios";

const useGetServerInfo = () => {
  const [serverRunning, setServerRunning] = useState(false);
  const [loading, setLoading] = useState(true);
  const [serverFetched, setServerFetched] = useState(false); // New state variable

  useEffect(() => {
    const checkServer = async () => {
      try {
        // Check if the server status has already been fetched successfully
        if (!serverFetched) {
          const response = await axios.get(
            `${process.env.REACT_APP_BACKEND_ORIGIN}`
          );
          setServerRunning(response.data.success);
          setServerFetched(true); // Update serverFetched state to true
        }
      } catch (error) {
        console.error("Error checking server status:", error);
        // If the error is due to being offline, update the state accordingly
        if (!navigator.onLine) {
          setServerRunning(false);
        }
      } finally {
        setLoading(false);
      }
    };

    // Initial check when component mounts
    checkServer();

    // Periodically check server status every 5 seconds if the browser is online
    const intervalId = setInterval(() => {
      if (navigator.onLine) {
        checkServer();
      }
    }, 5000);

    // Cleanup function to clear interval when component unmounts
    return () => clearInterval(intervalId);
  }, [serverFetched]); // Include serverFetched in the dependency array

  return { serverRunning, loading };
};

export default useGetServerInfo;
