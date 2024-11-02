import AboutUs from "./AboutUs";
import Apples from "./Apples";
import Blog from "./Blog";
import Button from "./Button";
import ContactUs from "./ContactUs";
import CourseGoal from "./CourseGoal";
import Cricket from "./Cricket";
import CurrentDay from "./CurrentDay";
import Discount from "./Discount";
import Increment from "./Increment";
import MovieGrid from "./MovieGrid";
function App()
{
  return(
    <>
      <h1> This is App.jsx file</h1>
    <h1 style={{color:'red', textAlign:'center'}} > <u>React JS</u>  </h1>
         <h1 style={{color:'blue', textAlign:'center'}}>     <Date /></h1>
    <hr></hr>
    <h1 style={{color:'red'}}> Welcome to React Classes</h1>
      <p> Today React class project concept is explaining </p>
      <hr></hr>
      
  <AboutUs />
  <hr></hr>
  <ContactUs />
  <hr></hr>
  <Button />
  <hr></hr>
  <Cricket />
  <hr></hr>
  <Discount />
  <hr></hr>
  <Apples />
  <hr></hr>
  <Increment />
  <hr></hr>
  <CourseGoal title ='Learn React' description = 'In-depth'/>
  <CourseGoal title ='About Ratan Sir' description = 'Ratan sir was nice'/>
  <hr></hr>
  <hr></hr>
  <Blog/>
  <hr></hr>
  <hr></hr>
  <MovieGrid />

  <hr></hr>
<CurrentDay />
    </>
    
  )
}
export default App;
