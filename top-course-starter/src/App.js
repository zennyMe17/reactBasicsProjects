import Cards from "./components/Cards";
import { useEffect, useState } from "react";
import Filter from "./components/Filter";
import Navbar from "./components/Navbar";
import { apiUrl, filterData } from "./data.js";
import { toast } from "react-toastify";

const App = ()=> {

 const [courses,setCourses] = useState(null);

const fetchData = async() =>{
      try{
        const res = await fetch(apiUrl);
        const output = await res.json();
        setCourses(output.data)
      }
      catch(e){
        toast.error("Something Went Wrong");
      }
    }

  useEffect( ()=>{
    fetchData();
  },[]);
  
  return (
    <div>
      
      <Navbar/>

      <Filter
      filterData={filterData}
      />

      <Cards
      courses={courses}
      />
      
    </div>
  );
}

export default App;
