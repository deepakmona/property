import './App.css';
import { useEffect ,useState} from 'react';
import Eigth from './Components/Eigth';
import Fifthcont from './Components/Fifthcont';
import Firstcont from './Components/Firstcont';
import Footer from './Components/Footer';
import Fourthcont from './Components/Fourthcont';
// import Loginform from './Components/Loginform';
import Navbar from './Components/Navbar';
import Ninth from './Components/Ninth';
import Secondcont from './Components/Secondcont';
import Seventh from './Components/Seventh';
import Sixthcont from './Components/Sixthcont';
import Thirdcont from './Components/Thirdcont';
import ClipLoader from "react-spinners/ClipLoader";
import Search from "./Components/Search"




const override = {
  display: "block",
  margin: "300px auto",
};

function App() {
  
  const [loading,setLoading]=useState(false);

  useEffect(()=>{
    setLoading(true);
    setTimeout(() => {
      setLoading(false)
    },600);
  },[])


  return (
    <>

    {
      loading ?   
      <ClipLoader color={"#36d7b7"} loading={loading} size={50}  cssOverride={override} aria-label="Loading Spinner" data-testid="loader" />
      :
      <> 
    <Navbar/>
    <Firstcont/>
    <Secondcont/>
    <Thirdcont/>
    <Fourthcont/>
    <Fifthcont/>
    <Sixthcont/>
    <Seventh/>
    <Eigth/>
    <Ninth/>
    <Search/>
    <Footer/>
     {/* <Loginform/> */}

    </>
}
    </>
  )
}

export default App