import { useLoaderData } from "react-router-dom";
import Phones from "../../components/Phones/Phones";
import Banner from "../../components/Header/Banner/Banner";

const Home = () => {
  const phonesData = useLoaderData();
  //   console.log(phonesData);
  return (
    <>
      <Banner></Banner>
      <Phones phonesData={phonesData}></Phones>
    </>
  );
};

export default Home;
