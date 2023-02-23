SELECT race.name, race.time, users.name FROM race LEFT JOIN users ON race.race_admin = users.unique_ID_user;

SELECT race.name, race.time, users.name AS race_admin,tracks.name_gp AS trackname FROM race LEFT JOIN users ON race.race_admin = users.unique_ID_user LEFT join tracks ON race.track=tracks.unique_ID_track;

SELECT racecopy.name, racecopy.time, useradmin.name AS race_admin,userswinner.name AS race_winner, tracks.name AS trackname,conditions.naam,conditions.rain_expected,conditions.rain,conditions.sun_expected,conditions.sun 
FROM race racecopy 
LEFT JOIN users userswinner ON racecopy.winner = userswinner.unique_ID_user 
LEFT JOIN users useradmin ON racecopy.race_admin = useradmin.unique_ID_user 
LEFT join tracks ON racecopy.track=tracks.unique_ID_track 
LEFT join conditions ON racecopy.conditions=conditions.unique_ID_conditions 
LEFT join users ON racecopy.winner=users.unique_ID_user;



"UPDATE `race_applied` SET `user_id`='"+userid+"',`race_id`='"+raceid+"',`car`='"+carid+"',`pilot1`='"+pilot1id"',`pilot2`='"+pilot2id+"',`aero`='"+aeroid+"',`tires`='"+tiresid+"',`confirmed`='"confirmed"' WHERE 1"

UPDATE INTO `race_applied`(`user_id`, `race_id`, `car`, `pilot1`, `pilot2`, `aero`, `tires`, `confirmed`) VALUES ('" + userid + "','" + raceid + "','" + carid + "','" + pilot1id + "','" + pilot2id + "','" + aeroid + "','" + tiresid + "','" + confirmed + "')", function (err, result) {
