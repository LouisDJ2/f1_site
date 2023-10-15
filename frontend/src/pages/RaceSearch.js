import RaceList from "../components/races/RaceList";
import Filter from "../components/ui/Filter";
import Card2 from "../components/ui/Card2";
import { useState, useEffect } from "react";
import { useCookies } from "react-cookie";
import classes from "./RaceSearch.module.css";
function RaceSearch(props) {
  //bron: child->parent: https://bobbyhadz.com/blog/react-pass-data-from-child-to-parent#:~:text=To%20pass%20data%20from%20child,the%20function%20in%20the%20Parent%20.
  //variables needed to filter the races
  const [name, setName] = useState("");
  const [country, setCountry] = useState("country");
  const [dateSort, setDateSort] = useState("date");
  const [admin, setAdmin] = useState(false);
  const [cookies] = useCookies(["user"]);

  const [tracks, setTracks] = useState();
  const [races, setRaces] = useState([]);

  const [isFiltered, setIsFiltered] = useState(false);
  const [loading, setLoading] = useState(true);

  //-------get all races and tracks from the server via props-------
  useEffect(() => {
    setTracks(props.tracks);
    setRaces(props.races);
    setLoading(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const [filteredData, setFilteredData] = useState(races);

  //-------function to filter the data-------
  //src: filter array of objects: https://bobbyhadz.com/blog/react-filter-array-of-objects
  function filter() {
    console.log("admin bool: ", admin);

    console.log("name filter: ", name);
    const filtered = races.filter((x) => {
      console.log("race name: ", x.name, "- filter name: ", name);
      console.log("race admin id: ", x.race_admin, "/-/ ", cookies.UserId);
      return (
        tracks[x.track - 1].country ===
          (country === "country" ? tracks[x.track - 1].country : country) &&
        x.name === (name === "" ? x.name : name) &&
        x.race_admin === (!admin ? x.race_admin : cookies.UserId)
      );
    });
    console.log(dateSort);
    if (dateSort === "early") {
      filtered.sort(function (a, b) {
        return new Date(a.time) - new Date(b.time);
      });
    } else if (dateSort === "later") {
      filtered.sort(function (a, b) {
        return new Date(b.time) - new Date(a.time);
      });
    }
    setFilteredData(filtered);
    setIsFiltered(true);
  }
  if (loading) {
    return <h2>all data loading in</h2>;
  }
  return (
    <section className={classes.raceSearch}>
      <h1>Search Races</h1>
      <Card2>
        <Filter
          tracks={tracks}
          races={races}
          filter={filter}
          setName={setName}
          setCountry={setCountry}
          setDateSort={setDateSort}
          setAdmin={setAdmin}
        />
      </Card2>
      <RaceList
        races={isFiltered ? filteredData : races}
        tracks={tracks}
        drivers={props.drivers}
        cars={props.cars}
        tires={props.tires}
        aero={props.aero}
        myRace={false}
      />
    </section>
  );
}

export default RaceSearch;
