import Cards from "./components/Cards";
import { useEffect, useState } from "react";
import Filter from "./components/Filter";
import Navbar from "./components/Navbar";
import { apiUrl, filterData } from "./data.js";
import { toast } from "react-toastify";
import Spinner from "./components/Spinner.jsx"

const App = ()=> {

 const [courses,setCourses] = useState(null);

 const [loading,setLoading] = useState(true);

 const [category, setCategory] = useState([]);
const fetchData = async() =>{
    setLoading(true);
      try{
        const res = await fetch(apiUrl);
        const output = await res.json();
        setCourses(output.data)
      }
      catch(e){
        toast.error("Something Went Wrong");
      }
      setLoading(false);
    }

  useEffect( ()=>{
    fetchData();
  },[]);
  
  return (
    <div className="min-h-screen flex-col flex bg-bgDark2">
      
      <Navbar/>

      <Filter
      filterData={filterData}
      category = {category}
      setCategory = {setCategory}
      />

      <div className="w-11/12 max-w-[1200px] min-h-[50vh] mx-auto flex flex-wrap justify-center items-center">
        {
            loading ? (
              <Spinner />
            ) : (
              <Cards courses={courses}
              category = {category}/>
            )
          }
      </div>
      
    </div>
  );
}

export default App;
