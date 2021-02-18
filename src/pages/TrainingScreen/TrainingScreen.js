import Cards from "../../Components/Card/Card";
import Lists from "../../Components/List/List";
import "./TrainingScreen.css";

function TrainingScreen(items) {
  return (
    <>
      <div className="am-training-screen">
        <Cards
          title={items.heading}
          body={<Lists listItems={items.listItems} />}
        />
      </div>
    </>
  );
}

export default TrainingScreen;
