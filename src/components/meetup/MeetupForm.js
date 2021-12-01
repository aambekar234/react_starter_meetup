import TextField from "@mui/material/TextField";
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import CardContent from "@mui/material/CardContent";
import Box from "@mui/material/Box";
import { CardHeader } from "@mui/material";
import Button from "@mui/material/Button";
import { useRef } from "react";

function MeetupForm(props) {
  const refTitle = useRef();
  const refImage = useRef();
  const refAddress = useRef();
  const refDescription = useRef();

  function submitHandler() {
    const title = refTitle.current.value;
    const image = refImage.current.value;
    const address = refAddress.current.value;
    const description = refDescription.current.value;

    const data = {
      title: title,
      image: image,
      address: address,
      description: description,
    };
    props.addMeetup(data);
  }

  return (
    <div>
      <Container sx={{ mt: 5 }}>
        <Card sx={{ width: "100%" }}>
          <CardHeader
            title="Create new Event!"
            style={{ textAlign: "center" }}
            sx={{ mt: "18px" }}
          />
          <CardContent sx={{ mr: "18px", ml: "18px" }}>
            <form onSubmit={submitHandler}>
              <Grid container justify="center">
                <Grid item xs={12} sx={{ mb: 2, width: 1 }}>
                  <TextField
                    id="outlined-basic"
                    label="Title"
                    variant="outlined"
                    sx={{ width: 1 }}
                    inputRef={refTitle}
                  />
                </Grid>

                <Grid item xs={12} sx={{ mb: 2 }}>
                  <TextField
                    id="outlined-basic"
                    label="Image"
                    variant="outlined"
                    sx={{ width: 1 }}
                    inputRef={refImage}
                  />
                </Grid>

                <Grid item xs={12} sx={{ mb: 2 }}>
                  <TextField
                    id="outlined-basic"
                    label="Address"
                    variant="outlined"
                    sx={{ width: 1 }}
                    inputRef={refAddress}
                  />
                </Grid>

                <Grid item xs={12} sx={{ mb: 2 }}>
                  <TextField
                    id="outlined-basic"
                    label="Description"
                    variant="outlined"
                    sx={{ width: 1 }}
                    inputRef={refDescription}
                  />
                </Grid>

                <Grid item xs={12} sx={{ mb: 2 }}>
                  <Button variant="outlined" onClick={submitHandler}>
                    Submit
                  </Button>
                </Grid>
              </Grid>
            </form>
          </CardContent>
        </Card>
      </Container>
    </div>
  );
}

export default MeetupForm;
