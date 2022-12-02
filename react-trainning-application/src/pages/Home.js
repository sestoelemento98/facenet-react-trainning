import { useEffect, useState } from "react";
import Products from "/Users/devhant/Documents/GitHub/facenet-react-trainning/react-trainning-application/src/components/Products.js";

const Home = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    getProducts();
  }, []);
  const getProducts = async () => {
    const data = await fetchData();
    setData(data);
  };
  const fetchData = async () => {
    const baseURL = process.env.REACT_APP_BASE_URL;
    const response = await fetch(baseURL);
    const data = await response.json();
    return data
  };

 

  return (
    <div>
      <Products arrayData={data} />
    </div>
  );
};

export default Home;
