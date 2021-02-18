// import Routes from './routes/Routes';
import './App.css';
import TrainingScreen from './pages/TrainingScreen/TrainingScreen';
// import WorkoutPlan from './pages/WorkoutPlan/WorkoutPlan';
// import Sidebar from './Components/Sidebar/Sidebar';
// import DietTimeLine from "./pages/DietTimeLine/DietTimeLine";
// import Example from "./Components/Calender/Calender";

function App() {
  return (
    <TrainingScreen
      heading={"Chest"}
      listItems={[
        {
          imgSrc: "abc.com",
          weight: "20KG",
          title: "Barbell bench press",
          badgeList: [{ title: "15" }, { title: "12" }, { title: "10" }],
        },
        {
          imgSrc: "abc.com",
          title: "Pushups",
          badgeList: [
            { title: "20" },
            { title: "20" },
            { title: "10" },
            { title: "15" },
            { title: "8" },
          ],
        },
        {
          imgSrc: "abc.com",
          weight:"20KG",
          title: "Chest press",
          badgeList: [
            { title: "12" },
            { title: "12" },
            { title: "10" }
          ],
        },
        {
          imgSrc: "abc.com",
          title: "Dips",
          badgeList: [
            { title: "12" },
            { title: "10" },
            { title: "15" },
            { title: "8" },
          ],
        },
        {
          imgSrc: "abc.com",
          title: "Inclined dumbwell flies",
          badgeList: [{ title: "15" }, { title: "12" }, { title: "10" }],
        },
      ]}
    />
  );
  /////////////////////////////
  // return (
  //   <Sidebar
  //     menuItems={[
  //       {
  //         title: "Diet Timeline",
  //         navPath: "/deit-timeline",
  //       },
  //       { title: "Workout Plans" },
  //       { title: "Training Screen" },
  //       { title: "Motivation" },
  //       { title: "Add Trainee" },
  //       { title: "Add Food Item" },
  //       { title: "About Us" },
  //     ]}
  //   />
  // );
  ///////////////
  // return (
  //   <DietTimeLine
  //     deitItems={[
  //       {
  //         time: "09:30 PM",
  //         title: "Dal (1 katori) Lauki Sabzi(1 katori)",
  //         description: "Roti(1 katori/chapati)",
  //       },
  //       {
  //         time: "09:30 PM",
  //         title: "Mixed Vegetable Salad (1 katori)",
  //         description: "",
  //       },
  //       {
  //         time: "09:30 PM",
  //         title: "Tea with Less Sugar and Milk(1 teacup)",
  //         description: "",
  //       },
  //       { time: "09:30 PM", title: "Cut Fruits(1 cup) Buttermilk(1 glass)" },
  //       {
  //         time: "09:30 PM",
  //         title: "Dal(1 katori) Gajar Matar Sabzi(1 katori)",
  //         description:
  //           "Dal(1 katori) Gajar Matar Sabzi(1 katori) Roti(1 Roti/chapati )",
  //       },
  //     ]}
  //   />
  // );
  ///////////////////////////////////
  // return <WorkoutPlan/>
  ///////////////////
  // return <Routes/>
}

export default App;
