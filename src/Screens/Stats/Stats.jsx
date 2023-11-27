import React, { useEffect, useState } from "react";
import "./Stats.css";
import Card from "./Card";
import firebase from "../../firebase";

const Stats = () => {
  const studentName = "Prithesh Murugaboopathy";
  const [data, setData] = useState([]);

  const timetable = firebase.database().ref("ToDo Application");
  useEffect(() => {
    const loadedData = [];
    timetable.child(studentName).on("child_added", (snap) => {
      // console.log(snap.val());
      loadedData.push(snap.val());
      setData([...loadedData]);
    });
    timetable.child(studentName).on("child_removed", (snap) => {
      loadedData = loadedData.filter((data) => data.id !== snap.key);
      setData([...loadedData]);
    });
  }, []);
  const handleSubmit = () => {
    const key = timetable.child(studentName).push().key;

    const submitedWorksheets = {
      val: "val",
    };
    timetable.child(studentName).child(key).update(submitedWorksheets);
  };

  const [val, setVal] = useState("");

  // First Card
  const card1Title = "Current Income";
  const card1Content = "₹" + 10000;

  // Second Card
  const card2Title = "Pending Income";
  const card2Content = "₹" + 1000;

  // Third Card
  const card3Title = "Total Cars Today";
  const card3Content = 100;

  // Fourth Card
  const card4Title = "Average Income Per Car";
  const card4Content = "₹" + 10;

  return (
    <div className="stats">
      <input value={val} onChange={(e) => setVal(e.target.value)} />
      <Card cardTitle={card1Title} cardContent={card1Content} />
      <Card cardTitle={card2Title} cardContent={card2Content} />
      <Card cardTitle={card3Title} cardContent={card3Content} />
      <Card cardTitle={card4Title} cardContent={card4Content} />
      <button onClick={handleSubmit}>+</button>
    </div>
  );
};

export default Stats;
