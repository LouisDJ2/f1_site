import classes from "./RaceItem.module.css";
import Card from "../ui/Card";
import Signup from "../popup/Signup";
import { useEffect, useState, createContext } from "react";
import Backdrop from "../popup/Backdrop";
import { useCookies } from "react-cookie";
import Ranking from "../popup/Ranking";
import EditRace from "../popup/PromoteUser";
import { FaLevelUpAlt } from "react-icons/fa";

function RaceItem(props) {
  //--------fetch race data from server--------
  // const [race_budget, setRaceBudget] = useState(1000);
  const [cookies, setCookie, removeCookie] = useCookies(["user"]);
  const [rankingAvailable, setRankingAvailable] = useState(false);
  const [pointsAvailable, setPointsAvailable] = useState(false);
  const [ranking, setRanking] = useState([]);
  const [rankingIsOpen, setRankingIsOpen] = useState(false);
  const [editRaceVisible, setEditRaceVisible] = useState(false);

  //--------fetch specific track data from server--------
  const [nameGP, setNameGP] = useState("");
  const [nameTrack, setNameTrack] = useState("");
  const [image, setImage] = useState("");
  const [country, setCountry] = useState("");
  const [type, setType] = useState("");
  const [loading, setLoading] = useState(false);
  const [date, setDate] = useState("");

  //-------Load in the right track-------
  function loadTrack() {
    setLoading(true);
    fetch("http://localhost:3001/race/raceinfo", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        raceid: props.id,
      }),
    })
      .then((response) => response.json())
      .then((dataAPI) => {
        // Handle data
        const trackIndex = dataAPI[0].track - 1;
        setNameGP(props.tracks[trackIndex].name_gp);
        setNameTrack(props.tracks[trackIndex].name_track);
        setImage(props.tracks[trackIndex].layout);
        setCountry(props.tracks[trackIndex].country);
        setType(props.tracks[trackIndex].type);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setLoading(false);
      });
  }

  useEffect(() => {
    //set the date to display correct format
    const dateObj = new Date(props.date);
    const month = dateObj.getUTCMonth() + 1;
    const day = dateObj.getUTCDate();
    const year = dateObj.getUTCFullYear();
    const hour = dateObj.getUTCHours() + 1;
    const minutes = dateObj.getUTCMinutes();
    setDate(day + "/" + month + "/" + year + " - " + hour + ":" + minutes);

    //check if the date has passed
    const date = new Date();
    console.log("current date: ", date);
    console.log("race date: ", dateObj);

    if (dateObj < date) {
      setRacePassed(true);
      console.log("date has passed");
    } else {
      console.log("date did not pass");
      setRacePassed(false);
    }
    //load in the right track
    loadTrack();
  }, []);

  //-------functions to open/close signup and send data to server-------
  const [signupIsOpen, setSignupIsOpen] = useState(false);

  function openSignup() {
    setSignupIsOpen(true);
  }

  //-------deletes a race-------
  function deleteRace() {
    fetch("http://localhost:3001/race/removerace", {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        raceid: props.id,
        userid: parseInt(cookies.UserId),
      }),
    })
      .then((response) => response.json())
      .then((dataAPI) => {
        console.log("remove race:", dataAPI);
        if (dataAPI == "No Race Deleted") {
          window.alert("Race could not be removed, ranking already made.");
        } else {
          window.alert("Race removed succesfully");
          window.location.reload(false);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }

  //-------remove user from a race-------
  function removeUserFromRace() {
    fetch("http://localhost:3001/race/removeuserfromrace", {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        raceid: props.id,
        userid: parseInt(cookies.UserId),
      }),
    })
      .then((response) => response.json())
      .then((dataAPI) => {
        console.log("remove race:", dataAPI);
      })
      .catch((err) => {
        console.log(err);
      });
    window.location.reload(false); //refresh the page when race is deletet
  }

  //-------calculates the points from all the users in a race-------
  function calculatePoints() {
    fetch("http://localhost:3001/race/points", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        raceid: props.id,
      }),
    })
      .then((response) => response.json())
      .then((dataAPI) => {
        console.log("race points:", dataAPI);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setPointsAvailable(true);
      });
  }

  //-------gets the ranking from a race-------
  function getRanking() {
    fetch("http://localhost:3001/race/ranking", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        raceid: props.id,
      }),
    })
      .then((response) => response.json())
      .then((dataAPI) => {
        console.log("ranking:", dataAPI);
        if (dataAPI.status == "Succes") {
          setPointsAvailable(true);
          setRanking(dataAPI.ranking);
        } else {
          if (props.myRace) {
            window.alert(
              "no ranking available yet, ask admin to calculate the points"
            );
          }
        }
      })
      .catch((err) => {
        console.log(err);
      });
    // .finally(() => {
    //   setRankingIsOpen(true);
    // });
  }
  function showRanking() {
    setRankingIsOpen(true);
  }
  function closeRanking() {
    setRankingIsOpen(false);
  }

  //-------closes signup and sends data to server-------
  async function closeSignup(car, aero, tire, driver1, driver2, usedBudget) {
    if (usedBudget > props.budget) {
      window.alert(
        "Out of budget!: " +
          usedBudget +
          "/" +
          props.budget +
          "\nPlease select all drivers and components within the budget (" +
          props.budget +
          ")."
      );
    } else if (props.myRace) {
      fetch("http://localhost:3001/race/changeconfig", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          userid: cookies.UserId, //nog aan te passen
          raceid: props.id, //nog aan te passen
          carid: car,
          pilot1id: driver1,
          pilot2id: driver2,
          aeroid: aero,
          tiresid: tire,
          confirmed: 1,
        }),
      })
        .then((response) => response.json())
        .then((dataAPI) => {
          if (dataAPI.status == "fault") {
            window.alert(dataAPI.message);
          }
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      fetch("http://localhost:3001/race/addusertorace", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          userid: cookies.UserId, //nog aan te passen
          raceid: props.id, //nog aan te passen
          carid: car,
          pilot1id: driver1,
          pilot2id: driver2,
          aeroid: aero,
          tiresid: tire,
          confirmed: 0,
        }),
      })
        .then((response) => response.json())
        .then((dataAPI) => {
          //check if errors occured by checking response from the server
          if (dataAPI.status == "fault") {
            if (dataAPI.message == "error occured") {
              window.alert(
                "Please make sure you have selected an option for everything.\nCAR - TIRES - AERO / DRIVER 1 - DRIVER 2"
              );
            } else {
              window.alert(
                "Could not register for this race: " + dataAPI.message
              );
            }
          } else {
            window.alert(
              "You have been registered for the " +
                props.name +
                " on " +
                props.date
            );
          }
        })
        .catch((err) => {
          console.log(err);
        });
    }
    setSignupIsOpen(false);
  }

  function cancelSignup() {
    setSignupIsOpen(false);
  }

  function openEditRace() {
    setEditRaceVisible(true);
  }

  function closeEditRace() {
    setEditRaceVisible(false);
  }

  //check if there is a ranking for the race or not on loading of the race component
  //if there is not show a button for the admin to calculate points else show a button to get the ranking (can be used by every user)
  useEffect(() => {
    getRanking();
    console.log("admin: ", props.admin, " - user: ", cookies.UserId);
  }, [pointsAvailable]);

  const [racePassed, setRacePassed] = useState(false);

  if (loading) {
    return <h1>Loading...</h1>;
  }

  //when racetime hasnt passed and points arent available show race in search races else dont
  return (
    <div>
      <li className={classes.item}>
        {!racePassed || props.myRace || !pointsAvailable ? (
          <Card>
            <div className={classes.image}>
              <img src={image} alt={image} />
            </div>
            <div className={classes.content}>
              <h3>{props.name}</h3>
            </div>
            <div className={classes.content}>
              <p>
                {nameTrack} - {country}
              </p>
            </div>
            <div className={classes.content}>
              <p>{date}</p>
            </div>
            <div className={classes.content}>
              <p>max players: {props.maxPlayers}</p>
            </div>
            <div className={classes.actions}>
              {/* in my races the user can change their configuration, in search races its just to sign up */}
              {props.myRace ? (
                <button className={classes.button1} onClick={openSignup}>
                  Edit
                </button>
              ) : (
                <button className={classes.button1} onClick={openSignup}>
                  Sign Up
                </button>
              )}

              {/* when the current userId == id of admin the user can delete the race */}
              {cookies.UserId == props.admin ||
              cookies.Role == "admin_level" ? (
                <button className={classes.button2} onClick={deleteRace}>
                  delete
                </button>
              ) : //check if ranking is already there, if not return button to calculate the ranking

              null}
              {/* show buttons to calculate the points of each race and add button to
            show ranking when the points are calculated */}
              {props.myRace ? (
                <>
                  {props.admin == cookies.UserId ? (
                    <>
                      {pointsAvailable ? (
                        <button
                          className={classes.button3}
                          onClick={showRanking}
                        >
                          Ranking
                        </button>
                      ) : (
                        <button
                          className={classes.button2}
                          onClick={calculatePoints}
                        >
                          Points
                        </button>
                      )}
                    </>
                  ) : (
                    <>
                      {pointsAvailable ? (
                        ""
                      ) : (
                        <button
                          className={classes.button2}
                          onClick={removeUserFromRace}
                        >
                          Leave
                        </button>
                      )}

                      <button className={classes.button3} onClick={showRanking}>
                        Ranking
                      </button>
                    </>
                  )}
                </>
              ) : (
                ""
              )}
            </div>
            {props.admin == cookies.UserId || cookies.Role == "admin_level" ? (
              <div className={classes.edit}>
                <button onClick={openEditRace}>
                  <FaLevelUpAlt />
                </button>
              </div>
            ) : (
              ""
            )}
          </Card>
        ) : (
          ""
        )}
      </li>
      <div className={classes.divcenter}>
        {editRaceVisible ? (
          <>
            <EditRace id={props.id} onConfirm={closeEditRace} />{" "}
            <Backdrop onCancel={closeEditRace} />
          </>
        ) : (
          ""
        )}
        {signupIsOpen ? (
          <>
            <Signup
              nameGP={nameGP}
              nameRace={props.name}
              track={nameTrack}
              circuit={image}
              country={country}
              date={props.date}
              Type={type}
              id={props.id}
              drivers={props.drivers}
              cars={props.cars}
              tires={props.tires}
              aero={props.aero}
              budget={props.budget}
              onConfirm={closeSignup}
              onCancel={cancelSignup}
            />
            <Backdrop />
          </>
        ) : null}

        {rankingIsOpen ? (
          <>
            <Ranking ranking={ranking} /> <Backdrop onCancel={closeRanking} />
          </>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}

export default RaceItem;
