import { useEffect, useState } from "react";
import axios from "axios";
import { BASE_URL } from "../Utils/urls";
const useFetch = (url) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  let config = {
    headers: {
      //   "accessToken": localStorage.getItem('access_token'),
      accessToken: localStorage.getItem("accessToken"),
    },
  };
  useEffect(() => {
    setLoading(true);
    const fetchData = async () => {
      const res = await axios.get(BASE_URL+url, config);
      setData(res.data);
    };
    fetchData();
    setLoading(false);
  }, [url]);

  const reFetch = async () => {
    setLoading(true);
    try {
      const res = await axios.get(BASE_URL+url, config);
      setData(res.data);
    } catch (err) {}
    setLoading(false);
  };

  return { data, loading, reFetch };
};

export default useFetch;
