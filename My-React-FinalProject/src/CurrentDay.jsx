function CurrentDay()
{
//     const now = new Date();
   
//     const currentDate = now.toDateString();
//     const currentTime = now.toLocaleTimeString();
// return(
//     <>
    
//     <h1>Current Date:{currentDate}</h1>
//     <h1>Current Time:{currentTime}</h1>
//     <h1>Current Date&Time:{currentDate} {currentTime}</h1>
//     </>
// )



    const now = new Date();

    const currentDate = now.toDateString(); // ex:- wed oct 23 2024
    const currentTime =now.toLocaleTimeString(); //  ex:- 9:37 Am


    // normal 
    const day =now.getDate();
    const dayIndex = now.getDay();
    const monthIndex = now.getMonth();
    const year = now.getFullYear();

    // take days array 
    const days =["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]

    // take months array

    const months = ["January","February","March","April","May","June","July","Auguest","September","October","November","December"]

     
    return(
        <>
        <h1 style={{color:"red"}}> ***Date and Time***</h1>
        <h2>Current Date:{currentDate}</h2>
        <h2>Current Time: {currentTime}</h2>
        <h2>Current Date and Time :{currentDate} {currentTime}</h2>
        <br></br>
        <h2 style={{color:"red"}}> ***Day and Date***</h2>
        <hr></hr>
        <h2>Today: {days[dayIndex]} </h2>
        <h2>Date: {day}</h2>
        <h2>Month: {months[monthIndex]}</h2>
        <h2>Year: {year}</h2>
        </>
    )

   
}
export default CurrentDay;