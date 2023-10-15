const express = require("express");
const race = express.Router();
const bodyParser = require("body-parser");
const nodemailer = require("nodemailer");
const users = require('./users');
const carDB = require('./getcars');
const driverDB = require('./getdrivers');
const trackDB = require('./gettracks');
const aeroDB = require('./getaero');
const conditionDB = require('./getcondition');
const tiresDB = require('./gettires');
const dbconnection = require('./dbconnection');

race.use(bodyParser.json());
race.use(bodyParser.urlencoded({ extended: true }));


const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: "FormulaOneEngineering@gmail.com",
        pass: "gruobzntzayfmiov",
    },
    from: "FormulaOneEngineering@gmail.com",
});
/**
*! ------------------------------------------------Routing-----------------------------------------------------------------
 */
race.get('/', async function (req, res) {
    let test = await raceinfobyid(11);
    console.log(test);
    res.send("hey");
});

race.get('/getall', async function (req, res) {
    let allraces = await getall();
    res.send(allraces);
});
race.post("/add", function (req, res) {
    console.log(req.body.trackname, req.body.name, req.body.time, req.body.raceadmin, req.body.budget, req.body.maxplayers);
    addRace(req.body.trackname, req.body.name, req.body.time, req.body.raceadmin, req.body.budget, req.body.maxplayers, res);
});

race.post('/getraceofusers', async function (req, res) {
    let races = await raceofusers(req.body.id);
    res.send(races);
});

race.post('/addusertorace', async function (req, res) {
    res.send(await usertorace(req.body.userid, req.body.raceid, req.body.carid, req.body.pilot1id, req.body.pilot2id, req.body.aeroid, req.body.tiresid, req.body.confirmed));
});

race.post('/changeconfig', async function (req, res) {
    res.send(await changeconfig(req.body.userid, req.body.raceid, req.body.carid, req.body.pilot1id, req.body.pilot2id, req.body.aeroid, req.body.tiresid, req.body.confirmed));
});
race.post('/raceadmin', async function (req, res) {
    res.send(await promoteuser(req.body.userid, req.body.raceid));
})
// add points to the users applied to certain race
race.post('/points', async function (req, res) {
    let resultPoints = await getPoints(req.body.raceid);
    let updatedUsers = await updateUserPoints(resultPoints)
    if (updatedUsers != 1){
        console.log("Error by updating user points")
    }
    if (Object.keys(resultPoints).length == 0) {
        console.log("FAILED");
        res.json({ status: 'Fault', message: 'Task Failed -> Error in id' });
    }
    else {
        res.json({ status: "Succes", message: "Points generated", resultPoints })
    }
});

// Get ranking from a certain race by a race ID
race.post('/ranking', async function (req, res) {
    let ranking = await getRanking(req.body.raceid);
    if (Object.keys(ranking).length == 0) {
        console.log("FAILED");
        res.json({ status: 'Fault', message: 'Task Failed -> Error in raceid or the race is not finished yet' });
    }
    else {
        res.json({ status: "Succes", message: "Ranking", ranking })
    }
});
race.post('/racesofuser', async function (req, res) {
    res.send(await getracesfromuser(req.body.userid));
});
race.delete('/removeuserfromrace', async function (req, res) {
    res.send(await removeuserfromrace(req.body.userid, req.body.raceid));
});

// remove a race as an admin
race.delete('/removerace', async function (req, res) {
    res.json(await removeRace(req.body.userid, req.body.raceid));
})

race.post('/usersinrace', async function (req, res) {
    res.send(await getusersfromrace(req.body.raceid));
});


race.post('/raceinfo', async function (req, res) {
    res.send(await getraceinfo(req.body.raceid));
});

race.post('/getadmin', async function (req, res) {
    res.send(await getadmins(req.body.raceid));
});

/**
*!------------------------------------------------Functions-----------------------------------------------------------------
 */
const getraceinfo = (raceid) => {
    return new Promise(async (resolve, reject) => {
        dbconnection.getConnection(async function (err, connection) {
            connection.query("SELECT * FROM `race` WHERE unique_ID_race =" + raceid, function (err, result) {
                connection.release();
                resolve(result);
            });
        })
    });
}

const getusersfromrace = (raceid) => {
    return new Promise(async (resolve, reject) => {
        dbconnection.getConnection(async function (err, connection) {
            connection.query("SELECT race_applied.user_id,users.name FROM `race_applied` LEFT JOIN users on users.unique_ID_user=race_applied.user_id WHERE race_id =" + raceid, function (err, result) {
                connection.release();
                resolve(result);
            });
        })
    });
}
const getracesfromuser = (userid) => {
    return new Promise(async (resolve, reject) => {
        dbconnection.getConnection(async function (err, connection) {
            connection.query("SELECT * FROM `race_applied` WHERE user_id =" + userid, function (err, result) {
                connection.release();
                resolve(result);
            });
        })
    });
}
const promoteuser = (userid, raceid) => {
    return new Promise(async (resolve, reject) => {
        dbconnection.getConnection(async function (err, connection) {
            connection.query("INSERT INTO `race_admins`(`user_id`, `race_id`) VALUES ('" + userid + "','" + raceid + "')", function (err) {
                connection.release();
                console.log(err);
                resolve({ status: 'ok', message: 'user promoted', user: { userid: userid, raceid: raceid } });
            });
        })
    });
}


const removeuserfromrace = (userid, raceid) => { //?Removes a user from the race_applied, feature if a user is multiple times added to a race it will remove all :)
    return new Promise(async (resolve, reject) => {
        dbconnection.getConnection(async function (err, connection) {
            connection.query("DELETE FROM `race_applied` WHERE `user_id` = " + userid + " AND `race_id` = " + raceid, async function () {
                connection.release();
                let emailinfo = await getemailinfo(userid);
                let raceinfo = await raceinfobyid(raceid);
                removeuseremail(emailinfo[0].name, emailinfo[0].mail_addr, raceinfo.name);
                let admins = await getadmins(raceid);
                for (let i = 0; i < admins.length; i++) {
                    emailinfo = await getemailinfo(admins[i].user_id);
                    removeuseremailadmin(emailinfo[0].name, emailinfo[0].mail_addr, raceinfo.name);

                }
                resolve({ status: 'ok', message: 'user deleted', user: { userid: userid, raceid: raceid } });
            });
        })
    });
}

// Delete a race as an admin
const removeRace = (userID, raceID) => {
    return new Promise(async (resolve, reject) => {
        dbconnection.getConnection(async function (err, connection) {
            let sql = "SELECT unique_ID_race FROM race WHERE EXISTS( SELECT race_id FROM race_admins WHERE user_id = ? AND race_id = ?) AND( SELECT unique_ID_race FROM race WHERE unique_ID_race = ? AND winner IS NULL )";
            let sqlParam = [userID, raceID, raceID]
            connection.query(sql, sqlParam, async (err, rows) => {
                console.log(rows)
                if (Object.keys(rows).length == 0) {
                    //resolve(err)
                    let sql = "SELECT unique_ID_race FROM race WHERE EXISTS( SELECT unique_ID_user FROM users WHERE unique_ID_user = ? AND authorisation = 'admin_level') AND( SELECT unique_ID_race FROM race WHERE unique_ID_race = ? AND winner IS NULL )";
                    let sqlParam = [userID, raceID]
                    connection.query(sql, sqlParam, async (err, rows2) => {
                        console.log(rows2)
                        if (Object.keys(rows2).length == 0) {
                            connection.release()
                            resolve("No Race Deleted")
                        }
                        else {
                            connection.release()
                            let resultDelete = await removeRaceQry(raceID);
                            resolve(resultDelete)
                        }
                    })
                }
                else {
                    console.log("in elsee")
                    let resultDelete = await removeRaceQry(raceID);
                    resolve(resultDelete)

                }



            })
        })
    })
}

// remove racequery from the table
const removeRaceQry = (raceID) => {
    return new Promise(async (resolve, reject) => {
        dbconnection.getConnection(async function (err, connection) {
            let sql = "DELETE FROM `race` WHERE unique_ID_race = ?"
            let sqlParam = [raceID]
            connection.query(sql, sqlParam, (err, result) => {
                connection.release()
                if (!err) {
                    console.log("heroo")
                    console.log(result)
                    resolve(result)
                }
            })
        })
    })
}


const usertorace = async (userid, raceid, carid, pilot1id, pilot2id, aeroid, tiresid, confirmed) => {
    //? Adds a user to a race in race_applied, if the maximum amount of players is not exceeded.
    return new Promise(async (resolve, reject) => {
        if (await emptyslot(raceid) == false) {
            resolve({ status: 'fault', message: 'max_players have been reached' });
        }
        else if (await userinrace(userid, raceid)) {
            resolve({ status: 'fault', message: 'userid and raceid already in race_applied' });
        }
        else {
            dbconnection.getConnection(async function (err, connection) {
                connection.query("INSERT INTO `race_applied`(`user_id`, `race_id`, `car`, `pilot1`, `pilot2`, `aero`, `tires`, `confirmed`) VALUES ('" + userid + "','" + raceid + "','" + carid + "','" + pilot1id + "','" + pilot2id + "','" + aeroid + "','" + tiresid + "','" + confirmed + "')", async function (err, result) {
                    connection.release();
                    if (err) {
                        resolve({ status: 'fault', message: 'error occured', err });
                    }
                    else {
                        resolve({ status: 'ok', message: 'user added to race', user: { userid: userid, raceid: raceid, insertid: result.insertId } });
                    }
                    let emailinfo = await getemailinfo(userid);
                    let raceinfo = await raceinfobyid(raceid);
                    adduseremail(emailinfo[0].name, emailinfo[0].mail_addr, raceinfo.name);
                    let admins = await getadmins(raceid);
                    for (let i = 0; i < admins.length; i++) {
                        let emailinfo2 = await getemailinfo(admins[i].user_id);
                        adduseremailadmin(emailinfo[0].name, emailinfo2[0].mail_addr, raceinfo.name);

                    }
                });
            })
        }
    });
}

const changeconfig = async (userid, raceid, carid, pilot1id, pilot2id, aeroid, tiresid, confirmed) => {
    //? Updates the configuration
    return new Promise(async (resolve, reject) => {
        if (await userinrace(userid, raceid) == false) {
            resolve({ status: 'fault', message: 'userid and raceid not in race_applied' });
        }

        else if (await userconfirmed(userid, raceid) ) {
            resolve({ status: 'fault', message: 'user already confirmed' });
        }
        else {
            dbconnection.getConnection(async function (err, connection) {
                connection.query("UPDATE `race_applied` SET `user_id`='" + userid + "',`race_id`='" + raceid + "',`car`='" + carid + "',`pilot1`='" + pilot1id + "',`pilot2`='" + pilot2id + "',`aero`='" + aeroid + "',`tires`='" + tiresid + "',`confirmed`='" + confirmed + "' WHERE `race_id`=" + raceid + " AND `user_id`=" + userid, function (err) {
                    connection.release();
                    if (err) {
                        resolve({ status: 'fault', message: 'error occured', err });
                    }
                    else {
                        resolve({ status: 'ok', message: 'user config updated', user: { userid: userid, raceid: raceid, carid: carid, pilot1id: pilot1id, pilot2id: pilot2id.id, aeroid: aeroid, tiresid: tiresid, confirmed: confirmed } });
                    }
                });
            })
        }
    });
}


const raceofusers = (id) => {//? Returns all the races of a specific user, if the user doesnt exist it will return in.
    return new Promise(async (resolve, reject) => {
        let usersexist = await users.doesUserExistById(id);
        if (usersexist == false) {
            resolve({ status: 'fault', message: 'user does not exist', race: {} });
        }
        dbconnection.getConnection(async function (err, connection) {
            connection.query("SELECT * FROM `race_applied` where user_id = ('" + id + "')", function (err, races) {
                connection.release();
                resolve({ status: 'ok', message: 'user races', races });
            });
        })
    });
}


const addRace = async (track, name, time, admin, budget, maxplayers, res) => {
    let raceid = await getraceidbytrackname(track);
    let conditionsid = await randomweatherid();
    let result = await doesRaceExist(name);
    if (result == true) {
        res.json({ status: 'fault', message: 'racename already exist', race: null })
    }
    else {

        dbconnection.getConnection(async function (err, connection) {
            connection.query("INSERT INTO `race`(`name`, `track`, `conditions`, `time`, `race_admin`, `budget`, `max_players`) VALUES ('" + name + "','" + raceid + "','" + conditionsid + "','" + time + "','" + admin + "','" + budget + "','" + maxplayers + "')", function (err, result) {
                connection.query("INSERT INTO race_admins(race_id, user_id) VALUES ('" + result.insertId + "', '" + admin + "')")
                connection.release();

                res.json({ status: 'ok', message: 'race added', race: { raceid: result.insertId, name: name, trackid: raceid, conditionsid: conditionsid, racetime: time, raceadmin: admin, budget: budget, maxplayers: maxplayers } })
            });
        })
    }

}

const doesRaceExist = (name) => {
    return new Promise(async (resolve, reject) => {
        dbconnection.getConnection(function (err, connection) {
            connection.query("SELECT * FROM race WHERE name = ('" + name + "')", function (err, result) {
                connection.release();
                let response;
                if (result.length == 0) {
                    response = false;
                }
                else {
                    response = true;
                }
                resolve(response);
            });
        })
    })
}


const randomweatherid = () => {
    return new Promise(async (resolve, reject) => {
        dbconnection.getConnection(async function (err, connection) {
            connection.query("SELECT unique_ID_conditions FROM conditions  ORDER BY RAND ( )  LIMIT 1  ", function (err, result) {
                connection.release();
                resolve(result[0].unique_ID_conditions);
            });
        })
    })
}

const emptyslot = (raceid) => {
    return new Promise(async (resolve, reject) => {
        dbconnection.getConnection(async function (err, connection) {
            connection.query("SELECT `max_players` FROM `race` WHERE `unique_ID_race` = " + raceid, function (err, result) {
                connection.query("SELECT * FROM `race_applied` WHERE `race_id` = " + raceid, function (err2, result2) {
                    connection.release();
                    if ((result[0].max_players - result2.length) > 0) {
                        resolve(true);
                    }
                    else {
                        resolve(false);
                    }
                });
            });
        })
    })
}

const getraceidbytrackname = (track) => {
    return new Promise(async (resolve, reject) => {
        dbconnection.getConnection(async function (err, connection) {
            connection.query("SELECT unique_ID_track FROM `tracks` WHERE `name_gp` = ('" + track + "')", function (err, result) {
                connection.release();
                resolve(result[0].unique_ID_track)
            });
        })
    })
}

const getall = () => {
    return new Promise(async (resolve, reject) => {
        dbconnection.getConnection(function (err, connection) {
            connection.query("SELECT * FROM `race`", function (err, result) {
                connection.release();
                console.log("something");
                console.log(err);
                console.log(result);
                resolve(result);
            });
        });
    })
}


const raceinfobyid = (id) => {
    return new Promise(async (resolve, reject) => {
        dbconnection.getConnection(function (err, connection) {
            connection.query("SELECT * FROM `race` WHERE `unique_ID_race` = ('" + id + "')", function (err, result) {
                connection.release();
                console.log(result);
                let response = 0;
                if (result.length == 0) {
                    response = {
                        result: false
                    }
                }
                else {
                    response = result[0];
                }
                resolve(response);
            });
        })
    })
}

const userinrace = (userid, raceid) => {
    return new Promise(async (resolve, reject) => {
        dbconnection.getConnection(function (err, connection) {
            connection.query("SELECT * FROM `race_applied` WHERE `user_id` = " + userid + " AND `race_id` =" + raceid, function (err, result) {
                connection.release();
                if (result.length == 0) {
                    resolve(false);
                }
                else {
                    resolve(true);
                }

            });
        })
    })
}

const userconfirmed = (userid, raceid) => {
    return new Promise(async (resolve, reject) => {
        dbconnection.getConnection(function (err, connection) {
            connection.query("SELECT `confirmed` FROM `race_applied` WHERE `user_id` = " + userid + " AND `race_id` =" + raceid, function (err, result) {
                connection.release();
                if (result[0].confirmed == 0) {
                    resolve(false);
                }
                else {
                    resolve(true);
                }

            });
        })
    })
}

// Function to get query's with a certain race_id from the race_applied table 
const getAppliedByRaceID = (raceID) => {
    return new Promise(async (resolve, reject) => {
        dbconnection.getConnection(function (err, connection) {
            let sqlParam = [raceID];
            let sql = "SELECT * FROM race_applied WHERE race_id = ?";
            connection.query(sql, sqlParam, (err, rows) => {
                connection.release()
                if (!err) {
                    resolve(rows)
                }
                else {
                    console.log(err)
                }
            })
        })
    })
}

// function to generate points to the users and decide who wins
const getPoints = (raceID) => {
    return new Promise(async (resolve, reject) => {
        var applied = await getAppliedByRaceID(raceID)
        for (const index in applied) {
            let points = await generatePoints(applied[index])
            console.log("POINTS ", points);
            // Update the points in the race_applied table 
            await updatePoints(applied[index].user_id, raceID, points)
        }
        console.log("Points are counted"); 
        let resultRanking = await makeRanking(raceID);
        resolve(resultRanking)
    })
}

// get the unique IDs from an applied race ordered by points 
const getOrderBy = (raceID) => {
    return new Promise(async (resolve, reject) => {
        dbconnection.getConnection(async function (err, connection) {
            if (err) throw err
            let sqlParam = [raceID]
            let sql = "SELECT unique_ID_applied, user_id, points, race_id FROM race_applied WHERE race_id = ? ORDER BY points DESC";
            connection.query(sql, sqlParam, (err, rows) => {
                connection.release()
                if (!err) {
                    resolve(rows)

                } else {
                    console.log(err);
                }
            })
        })
    })
}

// Create the ranking and insert into database
const makeRanking = (raceID) => {
    return new Promise(async (resolve, reject) => {
        var orderBy = await getOrderBy(raceID)
        dbconnection.getConnection(async function (err, connection) {
            if (err) throw err

            for (const index in orderBy) {
                let placed = ((index - 0) + (1 - 0)) // add -0 to make both an integer for the NodeJS compiler
                let sqlParam = [placed, orderBy[index].unique_ID_applied]
                let sql = "UPDATE race_applied SET place = ? WHERE unique_ID_applied = ?"
                connection.query(sql, sqlParam, (err) => {

                    if (!err) {
                        // console.log("RESULT UPDATE   ", result)
                    } else {
                        console.log(err);
                    }
                })
            }
            connection.release()
            resolve(orderBy)
        })
    })
}

// insert the points in the table for the correct userID
const updatePoints = (userID, raceID, points, position) => {
    return new Promise(async (resolve, reject) => {
        dbconnection.getConnection(async function (err, connection) {
            if (err) throw err
            let sqlParam = [points, userID, raceID]
            let sql = "UPDATE race_applied SET points = ? WHERE user_id = ? AND race_id = ?"
            connection.query(sql, sqlParam, (err) => {
                connection.release()
                if (!err) {
                    // console.log("RESULT INSERT   ", result)
                    resolve(points)
                } else {
                    console.log(err);
                }
            })
        })
    })
}

// Update overall points, last race points, wins and races from a user after points have been counted.
const updateUserPoints = (ranking) => {
    return new Promise(async (resolve, reject) => {
        dbconnection.getConnection(async function (err, connection) {
            if (err) throw err

            for (const index in ranking) {
                let win = 0;
                let sqlParam, sql = 0
                if (index < 1) {
                    sqlParam = [ranking[index].user_id, ranking[index].race_id]
                    sql = "UPDATE race SET winner = ? WHERE unique_ID_race = ?"
                    connection.query(sql, sqlParam, (err, result) => {
                        if (!err) {
                            console.log("RESULT UPDATE   ", result)
                        } else {
                            console.log(err);
                        }
                    })
                    win = 1
                }
                sqlParam = [ranking[index].points, ranking[index].points, win, 1, ranking[index].user_id]
                sql = "UPDATE users SET points_overall = points_overall + ?, points_last_race = ?, wins = wins + ?, races = races + ? WHERE unique_ID_user = ?"
                connection.query(sql, sqlParam, (err) => {
                    if (!err) {
                        // console.log("RESULT UPDATE   ", result)
                    } else {
                        console.log(err);
                    }
                })
            }
            connection.release();
            resolve(1);
        })
    })
}

// Get conditons of a track of a certain race
const trackConditions = (raceID) => {
    return new Promise(async (resolve, reject) => {
        dbconnection.getConnection(async function (err, connection) {
            if (err) throw err
            let sqlParam = [raceID];
            let sql = "SELECT track, conditions FROM race WHERE unique_ID_race = ?";
            connection.query(sql, sqlParam, (err, rows) => {
                connection.release()
                if (!err) {
                    resolve(rows)
                } else {
                    console.log(err);
                }

            })
        })
    })
}

// Formula to count the points 
const generatePoints = (appliedQry) => {
    return new Promise(async (resolve, reject) => {
        // First get chosen car rating 
        let carRating = await carDB.getCarByID(appliedQry.car)
        let carPts = carRating[0].rating;

        // Second get the rating of both drivers
        let pilotRating1 = await driverDB.getDriverByID(appliedQry.pilot1)
        let pilotRating2 = await driverDB.getDriverByID(appliedQry.pilot2)
        let pilotPts1 = pilotRating1[0].average;
        let pilotPts2 = pilotRating2[0].average;

        // Third get the track type
        let bufferTrackConditions = await trackConditions(appliedQry.race_id);
        let track = await trackDB.getTrackByID(bufferTrackConditions[0].track);
        let trackType = track[0].type;

        // Fourth get the aero rating and type 
        let aero = await aeroDB.getAeroByID(appliedQry.aero)
        let aeroPts = aero[0].rating;
        let aeroType = aero[0].type;


        // Fifth get the conditions
        let conditionQry = await conditionDB.getConditionByID(bufferTrackConditions[0].conditions);
        let sunVal = conditionQry[0].sun;
        let rainVal = conditionQry[0].rain;

        // Sixth get the tires
        let tiresQry = await tiresDB.getTireByID(appliedQry.tires)
        let tireType = tiresQry[0].name;
        let tirePts = tiresQry[0].rating;

        // calculate the term of aero * track
        let aeroTrack = 0;
        if (aeroType == trackType) {
            aeroTrack = aeroPts;
        } else if (aeroType == "average") {
            aeroTrack = aeroPts * 0.666;
        } else {
            aeroTrack = aeroPts * 0.333;
        }

        // calculate the term of conditions * tires 
        let tireSun = 0;
        let tireRain = 0;
        switch (tireType) {
            case "wet":
                tireSun = 0;
                tireRain = 100;
                break;
            case "inter":
                tireSun = 25;
                tireRain = 75;
                break;
            case "hard":
                tireSun = 50;
                tireRain = 50;
                break;
            case "medium":
                tireSun = 75;
                tireRain = 25;
                break;
            case "soft":
                tireSun = 100;
                tireRain = 0;
                break;
            default:
                tireSun = 0;
                tireRain = 0;
        }
        let conditionsTire = (tireSun * sunVal * tirePts / 100 + tireRain * rainVal * tirePts / 100) / 100;

        let playerPts = (carPts) + (pilotPts1 * 0.6 + pilotPts2 * 0.4) + (aeroTrack) + (conditionsTire)

        resolve(playerPts)
    })
}


// Get ranking of a certain race
const getRanking = (raceID) => {
    return new Promise(async (resolve, reject) => {
        dbconnection.getConnection(async function (err, connection) {
            if (err) throw err
            let sqlParam = [raceID];
            let sql = "SELECT user_id, NAME, place FROM race_applied JOIN users ON race_applied.user_id = users.unique_ID_user WHERE race_id = ? AND place > 0 ORDER BY place";
            connection.query(sql, sqlParam, (err, rows) => {
                connection.release()
                if (err) throw err

                resolve(rows);

            })
        })
    })
}

function adduseremailadmin(name, mail, racename) {
    let mailOptions = {
        from: "FormulaOneEngineering@gmail.com",
        to: mail,
        subject: `New race  ${racename} added for ${name}`,
        html: `<h1>${name} added to race</h1><div> This email is a confirmation that ${name} joined race ${racename}</div><img src="https://img.redbull.com/images/c_crop,x_0,y_0,h_2160,w_3840/c_fill,w_1920,h_1080/q_auto,f_auto/redbullcom/2022/5/25/j8tzdfqjfnxciaca06qc/f1-22-red-bull-racing-rb18-sergio-perez" width="630">`,

    };
    transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
            console.log(error);
        } else {
            console.log("Email sent: " + info.response);
        }
    });
}

function adduseremail(name, mail, racename) {
    let mailOptions = {
        from: "FormulaOneEngineering@gmail.com",
        to: mail,
        subject: `New race  ${racename} added for ${name}`,
        html: `<h1>User added to race</h1><div> This email is a confirmation that you joined race ${racename}</div><img src="https://img.redbull.com/images/c_crop,x_0,y_0,h_2160,w_3840/c_fill,w_1920,h_1080/q_auto,f_auto/redbullcom/2022/5/25/j8tzdfqjfnxciaca06qc/f1-22-red-bull-racing-rb18-sergio-perez" width="630">`,

    };
    transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
            console.log(error);
        } else {
            console.log("Email sent: " + info.response);
        }
    });
}

function removeuseremail(name, mail, racename) {
    let mailOptions = {
        from: "FormulaOneEngineering@gmail.com",
        to: mail,
        subject: `Removed race  ${racename}  for ${name}`,
        html: `<h1>User removed from the race</h1><div> This email is a confirmation that you left race ${racename}</div><img src="https://img.redbull.com/images/c_crop,x_0,y_0,h_2160,w_3840/c_fill,w_1920,h_1080/q_auto,f_auto/redbullcom/2022/5/25/j8tzdfqjfnxciaca06qc/f1-22-red-bull-racing-rb18-sergio-perez" width="630">`,

    };
    transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
            console.log(error);
        } else {
            console.log("Email sent: " + info.response);
        }
    });
}
function removeuseremailadmin(name, mail, racename) {
    let mailOptions = {
        from: "FormulaOneEngineering@gmail.com",
        to: mail,
        subject: `Removed race ${racename}  for ${name}`,
        html: `<h1>${name} removed from the race</h1><div> This email is a confirmation that ${name} left race ${racename}</div><img src="https://img.redbull.com/images/c_crop,x_0,y_0,h_2160,w_3840/c_fill,w_1920,h_1080/q_auto,f_auto/redbullcom/2022/5/25/j8tzdfqjfnxciaca06qc/f1-22-red-bull-racing-rb18-sergio-perez" width="630">`,

    };
    transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
            console.log(error);
        } else {
            console.log("Email sent: " + info.response);
        }
    });
}


const getemailinfo = (userid) => {
    return new Promise(async (resolve, reject) => {
        dbconnection.getConnection(async function (err, connection) {
            connection.query("SELECT name,mail_addr FROM users WHERE unique_ID_user =" + userid, (err, result) => {
                connection.release();
                resolve(result);

            });
        })
    })
}
const getadmins = (raceid) => {
    return new Promise(async (resolve, reject) => {
        dbconnection.getConnection(async function (err, connection) {
            connection.query("SELECT user_id FROM race_admins WHERE race_id =" + raceid, (err, result) => {
                connection.release();
                resolve(result);

            });
        })
    })
}


module.exports = race;