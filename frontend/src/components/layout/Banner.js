import classes from "./Banner.module.css";
function Banner() {
  return (
    <div className={classes.banner}>
      <img
        className={classes.banner}
        src="lights-out.jpg"
        alt="lights-out"
      ></img>
    </div>
  );
}
export default Banner;
