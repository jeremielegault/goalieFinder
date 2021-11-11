import React, { useState, useEffect } from "react";
import TinderCard from "react-tinder-card";
import database from "./firebase";
import "./TinderCards.css";

function TinderCards() {
  const [people, setPeople] = useState([
    {
      name: "Mark Zuckerberg",
      url: "https://upload.wikimedia.org/wikipedia/commons/1/18/Mark_Zuckerberg_F8_2019_Keynote_%2832830578717%29_%28cropped%29.jpg",
    },
    {
      name: "Steve Jobs",
      url: "https://upload.wikimedia.org/wikipedia/commons/d/dc/Steve_Jobs_Headshot_2010-CROP_%28cropped_2%29.jpg",
    },
  ]);

  // useEffect piece of code which runs based on a condition

  useEffect(() => {
    // This is where the code runs
    database
      .collection("people")
      .onSnapshot((snapshot) => snapshot.docs.map((doc) => doc.data()));
    // this will run once when the component loads, and never
  }, []);

  //   Bad
  //   const people = [];
  //   people.push('jeremie', 'elvis')

  // Good (Push to an array)
  // setPeople([...people, 'jeremie', 'elvis'])

  return (
    <div>
      <h1>TinderCards</h1>
      <div className="tinderCards_cardContainer">
        {people.map((person) => (
          <TinderCard
            className="swipe"
            key={person.name}
            preventSwipe={["up", "down"]}
          >
            <div
              style={{ backgroundImage: `url(${person.url})` }}
              className="card"
            >
              <h3>{person.name}</h3>
            </div>
          </TinderCard>
        ))}
      </div>
    </div>
  );
}

export default TinderCards;
