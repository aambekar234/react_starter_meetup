import { Button } from "@mui/material";
import MeetupList from "../components/meetup/MeetupList";
import { useState, useEffect } from "react";

const DUMMY_DATA = [
  {
    id: "m1",
    title: "This is a first meetup",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/2560px-Stadtbild_M%C3%BCnchen.jpg",
    address: "Meetupstreet 5, 12345 Meetup City",
    description:
      "This is a first, amazing meetup which you definitely should not miss. It will be a lot of fun!",
  },
  {
    id: "m2",
    title: "This is a second meetup",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/2560px-Stadtbild_M%C3%BCnchen.jpg",
    address: "Meetupstreet 5, 12345 Meetup City",
    description:
      "This is a first, amazing meetup which you definitely should not miss. It will be a lot of fun!",
  },
];

function AllMeetupsPage() {
  const [meetupData, setData] = useState([]);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    getData();
  }, []);

  async function getData() {
    await fetch(
      "https://react-basic-e2eca-default-rtdb.firebaseio.com/meetups.json"
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data);

        const transformed_data = [];

        for (const key in data) {
          const item = {
            id: key,
            ...data[key],
          };
          transformed_data.push(item);
        }
        setLoading(false);
        setData(transformed_data);
      });
  }

  if (isLoading === true) {
    return (
      <div>
        <h2>Please wat... Content is loading!</h2>
      </div>
    );
  }

  return (
    <div>
      <Button onClick={getData}>Get data</Button>
      <MeetupList meetups={meetupData} />
    </div>
  );
}

export default AllMeetupsPage;
