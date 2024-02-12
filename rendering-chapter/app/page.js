// "use client";
// Client-Side Rendering
// app klasörü içindeki dosyalar server-side render olur

// import Button2 from "../components/button/index";
// import { useEffect, useState } from "react";
import Test from "@/test";

export const getData = async () =>{
  const res = fetch("https://jsonplaceholder.typicode.com/posts/1");
  return (await res).json();
};





async function Home() {
  const data = await getData();
  
  
  // console.log(data, data2, data3);
  // const [dataResult1, dataResult2, dataResult3] = await Promise.all([
  //   data,
  //   data2,
  //   data3
  // ])

  // console.log(dataResult1, dataResult2, dataResult3);

  // console.log(dataResult);
  
  
  // console.log(data);


  // console.log("HomePage");

  // const [message, setMessage] = useState("Initial message")


  // useEffect(() => {
  //   setMessage("UseEffect message")
  //   console.log("UseEffect");
  // })

  

  return (
    <div>
      {/* HomePage
      {message}
      <Button2></Button2> */}
      {/* {dataResult1.title} */}
      <h1>Data1: {data.title}</h1>
      <Test></Test>
    </div>
  );
}
export default Home