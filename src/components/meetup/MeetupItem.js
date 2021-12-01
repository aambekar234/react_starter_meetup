import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import { CardHeader } from "@mui/material";
import { useContext } from "react";
import FavoriteContext from "../../store/favorite-context";

function MeetupItem(props) {
  const meetupItem = props.meetup;
  const favoriteCtx = useContext(FavoriteContext);
  const isItemFav = favoriteCtx.isFavorite(meetupItem);

  function buttonToggleHandler() {
    console.log(isItemFav, "add called");
    if (isItemFav) {
      favoriteCtx.removeFavorite(meetupItem);
    } else {
      favoriteCtx.addFavorite(meetupItem);
    }
  }

  return (
    <Grid item xs={8} md={4} key={meetupItem.id}>
      <Card sx={{ maxWidth: 345 }}>
        <CardHeader title={meetupItem.title} subheader={meetupItem.address} />

        <CardMedia
          component="img"
          height="140"
          image={meetupItem.image}
          alt={meetupItem.title}
        />
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            {meetupItem.description}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small" onClick={buttonToggleHandler}>
            {isItemFav ? "Remove from favorite" : "Add to favorite"}
          </Button>
        </CardActions>
      </Card>
    </Grid>
  );
}

export default MeetupItem;
