import Calendar from "react-calendar-mobile";
import "./Calender.css";
const Calender = () => {
     return (
       <div>
         <Calendar
           weekFormat="long"
           style={{minHeight:"document.documentElement.clientHeight"}}
         />
       </div>
     );
}
export default Calender;