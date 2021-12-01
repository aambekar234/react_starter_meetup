import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import MeetupItem from "./MeetupItem";

function MeetupList(props) {
  console.log(props.meetups);
  return (
    <div>
      <Container sx={{ mt: 3 }}>
        <Grid container spacing={2}>
          {props.meetups.map((item) => {
            return <MeetupItem key={item.id} meetup={item} />;
          })}
        </Grid>
      </Container>
    </div>
  );
}

export default MeetupList;
