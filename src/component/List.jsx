import { useState, useEffect } from "react";
import api from "../api/axios";
 
export default function List() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
 
  useEffect(() => {
    api.get("/v1/users")
      .then((response) => setData(response.data.data || response.data))
      .catch((requestError) => {
        console.error(requestError);
        setError("Failed to load users.");
      })
      .finally(() => setLoading(false));
  }, []);
 
  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;
 
  return (
    <ul>
      {data.map((user) => (
        <li key={user.id}>{user.name}</li>
      ))}
    </ul>
  );
}