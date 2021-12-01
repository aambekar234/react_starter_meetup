import MeetupForm from "../components/meetup/MeetupForm";
import { useNavigate } from "react-router-dom";
function NewMeetupPage() {
  const history = useNavigate();

  function addMeetuphandler(data) {
    console.log("Received ");
    console.log(data);

    fetch(
      "https://react-basic-e2eca-default-rtdb.firebaseio.com/meetups.json",
      {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Content-type": "application/json",
        },
      }
    ).then(() => {
      history("/");
    });
  }

  return (
    <div>
      <MeetupForm addMeetup={addMeetuphandler} />
    </div>
  );
}

export default NewMeetupPage;
