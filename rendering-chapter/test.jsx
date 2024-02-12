export const getOtherData = async () =>{
    const res = fetch("https://jsonplaceholder.typicode.com/posts/1");
    return (await res).json();
  };


  async function Test(){
    const data2 = await getOtherData()
    return <h1>Data2: {data2.title}</h1>
  }

  export default Test