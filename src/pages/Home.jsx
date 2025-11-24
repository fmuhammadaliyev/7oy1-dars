import { useEffect, useState } from "react";
import Header from "../components/header/Header";
import SelectCategory from "../components/home-components/SelectCategory";
import useAxios from "../hooks/useAxios";
import { useDispatch, useSelector } from "react-redux";
import { setData } from "../redux/cars-data-slice";
import CarsCard from "../components/home-components/CarsCard/CarsCard";

const Home = () => {
  const dispatch = useDispatch();
  const { data } = useSelector((state) => state.carsdata);
  const axios = useAxios();
  const [type, setType] = useState("all");
  const getCars = async (type) => {
    let data = await axios({ url: "cars", params: type ? { type } : {} });
    dispatch(setData(data.data));
  };

  useEffect(() => {
    getCars(type == "all" ? "" : type);
  }, [type]);

  return (
    <>
      <Header />
      <SelectCategory type={type} setType={setType} />

      <section className="all-cars   pt-6">
        <div className="mycon ">
          <div className="grid grid-cols-4 gap-5 mt-4">
            {data && data?.data.map((car) => <CarsCard car={car} />)}
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
