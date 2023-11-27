import React from "react";
import Header from "../../Header";
import Dashboard from "./Components/Dashboard";
import "./Home.css";

const Home = () => {
  // const [parkedData, setParkedData] = useState([]);

  // useEffect(() => {
  //   const queryRef = ref(db, "currentParked");
  //   onValue(queryRef, (snapshot) => {
  //     const data = snapshot.val();
  //     Object.values(data).map((project) => {
  //       setParkedData((projects) => [...projects, project]);
  //       console.log(project)
  //     });
  //   });
  // }, []);
  return (
    <div className="home">
      <Header />
      <Dashboard
      // parkedData={parkedData}
      />
    </div>
  );
};

export default Home;
