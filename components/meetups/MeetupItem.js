import { useRouter } from "next/router";

import Card from "../ui/Card";
import classes from "./MeetupItem.module.css";

function MeetUpItem(props) {
  const router = useRouter();
  function showDetailsHandler() {
    router.push("/" + props.id);
  }
  return (
    <Card>
      <div className={classes.image}>
        <img src={props.image} alt={props.title} />
      </div>
      <div className={classes.content}>
        <h3>{props.title}</h3>
        <address>{props.address}</address>
      </div>
      <div className={classes.actions}>
        <button onClick={showDetailsHandler}>Show Details</button>
      </div>
    </Card>
  );
}

export default MeetUpItem;
