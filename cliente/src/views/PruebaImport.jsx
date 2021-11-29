import { useEffect } from "react";
import axios from "axios";


const Home = () => {
  
  useEffect(() => {
    const getData = async () => {
      try {
        let response = await axios("http://localhost:5000/data/personajes");
        console.log(response.data);
      } catch (err) {
        console.log(err);
      }
    };
    getData();
  }, []);

  return (
    <div>
<p>hola</p>

    </div>
  );
};

export default Home;
