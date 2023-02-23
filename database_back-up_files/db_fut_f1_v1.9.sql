-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Gegenereerd op: 21 nov 2022 om 12:12
-- Serverversie: 10.4.22-MariaDB
-- PHP-versie: 8.0.13

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `db_fut_f1`
--

-- --------------------------------------------------------

--
-- Tabelstructuur voor tabel `aero`
--

CREATE TABLE `aero` (
  `unique_ID_aero` int(11) NOT NULL,
  `brand` varchar(16) DEFAULT NULL,
  `type` varchar(16) DEFAULT NULL,
  `rating` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Gegevens worden geëxporteerd voor tabel `aero`
--

INSERT INTO `aero` (`unique_ID_aero`, `brand`, `type`, `rating`) VALUES
(1, 'Mercedes', 'straight', 85),
(2, 'Mercedes', 'average', 90),
(3, 'Mercedes', 'cornering', 85),
(4, 'Red Bull', 'straight', 90),
(5, 'Red Bull', 'average', 90),
(6, 'Red Bull', 'cornering', 95),
(7, 'Ferrari', 'straight', 95),
(8, 'Ferrari', 'average', 90),
(9, 'Ferrari', 'cornering', 90),
(10, 'Racing Point', 'straight', 65),
(11, 'Racing Point', 'average', 70),
(12, 'Racing Point', 'cornering', 75),
(13, 'Force India', 'straight', 45),
(14, 'Force India', 'average', 50),
(15, 'Force India', 'cornering', 55),
(16, 'McLaren', 'straight', 70),
(17, 'McLaren', 'average', 80),
(18, 'McLaren', 'cornering', 80),
(19, 'Alpine F1 Team', 'straight', 80),
(20, 'Alpine F1 Team', 'average', 80),
(21, 'Alpine F1 Team', 'cornering', 70),
(22, 'AlphaTauri', 'straight', 75),
(23, 'AlphaTauri', 'average', 75),
(24, 'AlphaTauri', 'cornering', 75),
(25, 'Renault', 'straight', 55),
(26, 'Renault', 'average', 50),
(27, 'Renault', 'cornering', 45),
(28, 'Aston Martin', 'straight', 70),
(29, 'Aston Martin', 'average', 80),
(30, 'Aston Martin', 'cornering', 80),
(31, 'Toro Rosso', 'straight', 55),
(32, 'Toro Rosso', 'average', 50),
(33, 'Toro Rosso', 'cornering', 45),
(34, 'Haas F1 Team', 'straight', 70),
(35, 'Haas F1 Team', 'average', 60),
(36, 'Haas F1 Team', 'cornering', 65),
(37, 'Alfa Romeo', 'straight', 60),
(38, 'Alfa Romeo', 'average', 65),
(39, 'Alfa Romeo', 'cornering', 70),
(40, 'Sauber', 'straight', 45),
(41, 'Sauber', 'average', 45),
(42, 'Sauber', 'cornering', 45),
(43, 'Williams', 'straight', 65),
(44, 'Williams', 'average', 70),
(45, 'Williams', 'cornering', 60);

-- --------------------------------------------------------

--
-- Tabelstructuur voor tabel `cars`
--

CREATE TABLE `cars` (
  `unique_ID_car` int(11) NOT NULL,
  `brand` varchar(32) NOT NULL,
  `country` varchar(32) NOT NULL,
  `name` varchar(32) NOT NULL,
  `rating` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Gegevens worden geëxporteerd voor tabel `cars`
--

INSERT INTO `cars` (`unique_ID_car`, `brand`, `country`, `name`, `rating`) VALUES
(1, 'Mercedes', 'Germany', 'W13', 90),
(2, 'Red Bull', 'Austria', 'RB18', 97),
(3, 'Ferrari', 'Italy', 'F1-75', 95),
(4, 'Racing Point', 'Great Brittain', 'VJM11', 75),
(5, 'Force India', 'India', 'VJM9', 65),
(6, 'McLaren', 'Great Brittan', 'MCL36', 85),
(7, 'Alpine F1 Team', 'France', 'A522', 87),
(8, 'AlphaTauri', 'Italy', 'AT03', 84),
(9, 'Renault', 'France', 'RS19', 69),
(10, 'Aston Martin', 'Great Brittain', 'AMR22', 86),
(11, 'Toro Rosso', 'Italy', 'STR14', 77),
(12, 'Haas F1 Team', 'USA', 'VF-22', 82),
(13, 'Alfa Romeo', 'Switzerland', 'C42', 80),
(14, 'Sauber', 'Switzerland', 'C37', 55),
(15, 'Williams', 'Great Brittain', 'FW44', 81);

-- --------------------------------------------------------

--
-- Tabelstructuur voor tabel `conditions`
--

CREATE TABLE `conditions` (
  `unique_ID_conditions` int(11) NOT NULL,
  `name` varchar(32) DEFAULT NULL,
  `rain_expected` varchar(13) DEFAULT NULL,
  `rain` varchar(4) DEFAULT NULL,
  `sun_expected` varchar(12) DEFAULT NULL,
  `sun` varchar(3) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Gegevens worden geëxporteerd voor tabel `conditions`
--

INSERT INTO `conditions` (`unique_ID_conditions`, `name`, `rain_expected`, `rain`, `sun_expected`, `sun`) VALUES
(2, 'rain', '100', '100', '0', '0'),
(3, '', '100', '50', '0', '50'),
(4, '', '100', '0', '0', '100'),
(5, '', '75', '100', '25', '0'),
(6, '', '75', '50', '25', '50'),
(7, '', '75', '0', '25', '100'),
(8, '', '50', '100', '50', '0'),
(9, '', '50', '50', '50', '50'),
(10, '', '50', '0', '50', '100'),
(11, '', '25', '100', '75', '0'),
(12, '', '25', '50', '75', '50'),
(13, '', '25', '0', '75', '100'),
(14, '', '0', '100', '100', '0'),
(15, '', '0', '50', '100', '50'),
(16, '', '0', '0', '100', '100'),
(17, '', '0', '0', '100', '100'),
(18, '', '0', '0', '100', '100'),
(19, '', '0', '0', '100', '100'),
(20, '', '0', '0', '100', '100'),
(21, '', '0', '0', '100', '100'),
(22, '', '0', '0', '100', '100'),
(23, '', '100', '100', '0', '0'),
(24, '', '100', '100', '0', '0'),
(25, '', '100', '100', '0', '0'),
(26, '', '100', '100', '0', '0'),
(27, '', '100', '100', '0', '0'),
(28, '', '100', '100', '0', '0'),
(29, '', '100', '0', '0', '100'),
(30, '', '100', '0', '0', '100'),
(31, '', '100', '0', '0', '100'),
(32, '', '0', '100', '100', '0'),
(33, '', '0', '100', '100', '0'),
(34, '', '0', '100', '100', '0');

-- --------------------------------------------------------

--
-- Tabelstructuur voor tabel `drivers`
--

CREATE TABLE `drivers` (
  `unique_ID_driver` int(11) NOT NULL,
  `Nr` varchar(2) DEFAULT NULL,
  `cat` varchar(3) DEFAULT NULL,
  `name` varchar(19) DEFAULT NULL,
  `nation` varchar(20) DEFAULT NULL,
  `Age` varchar(3) DEFAULT NULL,
  `average` varchar(7) DEFAULT NULL,
  `potential` varchar(8) DEFAULT NULL,
  `aggression` varchar(9) DEFAULT NULL,
  `png` varchar(64) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Gegevens worden geëxporteerd voor tabel `drivers`
--

INSERT INTO `drivers` (`unique_ID_driver`, `Nr`, `cat`, `name`, `nation`, `Age`, `average`, `potential`, `aggression`, `png`) VALUES
(1, '44', 'F1', 'Lewis Hamilton', 'Great Britain', '37', '90', '24', '63', '/driverpic/HAM.png'),
(2, '33', 'F1', 'Max Verstappen', 'The Netherlands', '24', '90', '54', '85', '/driverpic/VER.png'),
(3, '16', 'F1', 'Charles Leclerc', 'Monaco', '24', '88', '61', '39', '/driverpic/LEC.png'),
(4, '11', 'F1', 'Sergio Pérez', 'Mexico', '32', '87', '36', '61', '/driverpic/PER.png'),
(5, '55', 'F1', 'Carlos Sainz', 'Spain', '27', '87', '52', '56', '/driverpic/SAI.png'),
(6, '77', 'F1', 'Valtteri Bottas', 'Finland', '32', '87', '33', '25', '/driverpic/BOT.png'),
(7, '63', 'F1', 'George Russell', 'Great Britain', '24', '86', '63', '49', '/driverpic/RUS.png'),
(8, '4', 'F1', 'Lando Norris', 'Great Britain', '22', '86', '63', '59', '/driverpic/NOR.png'),
(9, '14', 'F1', 'Fernando Alonso', 'Spain', '40', '85', '15', '80', '/driverpic/ALO.png'),
(10, '31', 'F1', 'Esteban Ocon', 'France', '25', '85', '48', '73', '/driverpic/OCO.png'),
(11, '10', 'F1', 'Pierre Gasly', 'France', '26', '84', '52', '47', '/driverpic/GAS.png'),
(12, '3', 'F1', 'Daniel Ricciardo', 'Australia', '32', '84', '25', '51', '/driverpic/RIC.png'),
(13, '5', 'F1', 'Sebastian Vettel', 'Germany', '34', '82', '22', '66', '/driverpic/VET.png'),
(14, '20', 'F1', 'Kevin Magnussen', 'Denmark', '29', '80', '47', '75', '/driverpic/MAG.png'),
(15, '23', 'F1', 'Alexander Albon', 'Thailand', '25', '80', '51', '15', '/driverpic/ALB.png'),
(16, '24', 'F1', 'Zhou Guanyu', 'China', '22', '79', '57', '68', '/driverpic/ZHO.png'),
(17, '18', 'F1', 'Lance Stroll', 'Canada', '23', '79', '56', '78', '/driverpic/STR.png'),
(18, '99', 'R', 'Antonio Giovinazzi', 'Italy', '28', '78', '46', '32', '0'),
(19, '22', 'F1', 'Yuki Tsunoda', 'Japan', '21', '77', '55', '71', '/driverpic/TSU.png'),
(20, '27', 'R', 'Nico Hülkenberg', 'Germany', '34', '76', '29', '18', '/driverpic/HUL.png'),
(21, '47', 'F1', 'Mick Schumacher', 'Germany', '22', '76', '61', '42', '/driverpic/SCH.png'),
(22, '21', 'R', 'Oscar Piastri', 'Australia', '20', '75', '89', '54', '0'),
(23, '45', 'R', 'Nyck de Vries', 'The Netherlands', '27', '74', '58', '27', '/driverpic/DEV.png'),
(24, '6', 'F1', 'Nicholas Latifi', 'Canada', '26', '73', '47', '37', '/driverpic/LAT.png'),
(25, '', 'F2', 'Jehan Daruvala', 'India', '23', '73', '62', '39', '0'),
(26, '', 'F2', 'Jack Doohan', 'Australia', '19', '72', '85', '73', '0'),
(27, '12', 'R', 'Sebastien Buemi', 'Switzerland', '33', '72', '41', '44', '0'),
(28, '2', 'R', 'Stoffel Vandoorne', 'Belgium', '29', '72', '42', '49', '/driverpic/VAN.png'),
(29, '', 'F2', 'Théo Pourchaire', 'France', '18', '71', '93', '24', '0'),
(30, '', 'F2', 'Frederik Vesti', 'Denmark', '20', '71', '86', '70', '0'),
(31, '', 'F2', 'Ralph Boschung', 'Switzerland', '24', '71', '70', '64', '0'),
(32, '', 'F2', 'Richard Verschoor', 'The Netherlands', '21', '71', '66', '18', '0'),
(33, '', 'F2', 'Jüri Vips', 'Estonia', '21', '70', '60', '48', '0'),
(34, '', 'F2', 'Logan Sargeant', 'USA', '21', '70', '78', '15', '0'),
(35, '', 'F2', 'Dennis Hauger', 'Norway', '18', '69', '82', '61', '0'),
(36, '88', 'R', 'Robert Kubica', 'Poland', '37', '69', '14', '20', '0'),
(37, '', 'F2', 'Felipe Drugovich', 'Brazil', '21', '68', '85', '33', '0'),
(38, '', 'F2', 'Roy Nissany', 'Israel', '27', '68', '61', '76', '0'),
(39, '40', 'R', 'Liam Lawson', 'New Zealand', '20', '68', '63', '67', '0'),
(40, '', 'FA', 'Roberto Merhi', 'Spain', '30', '67', '58', '45', '0'),
(41, '89', 'R', 'Jack Aitken', 'Great Britain', '26', '66', '73', '35', '0'),
(42, '', 'F2', 'Marcus Armstrong', 'New Zealand', '21', '66', '71', '30', '0'),
(43, '', 'F2', 'Calan Williams', 'Australia', '21', '66', '67', '27', '0'),
(44, '', 'F2', 'Ayumu Iwasa', 'Japan', '20', '66', '79', '79', '0'),
(45, '51', 'R', 'Pietro Fittipaldi', 'Brazil', '25', '66', '47', '30', '0'),
(46, '', 'F3', 'Oliver Bearman', 'Great Britain', '16', '65', '94', '81', '0'),
(47, '', 'F2', 'Olli Caldwell', 'Great Britain', '19', '64', '73', '82', '0'),
(48, '', 'F3', 'Zane Maloney', 'Barbados', '18', '64', '91', '39', '0'),
(49, '', 'F2', 'Jake Hughes', 'Great Britain', '27', '63', '60', '58', '0'),
(50, '', 'F2', 'Clément Novalak', 'France', '21', '63', '74', '51', '0'),
(51, '', 'F3', 'Grégoire Saucy', 'Switzerland', '22', '62', '73', '79', '0'),
(52, '', 'F2', 'Enzo Fittipaldi', 'Brazil', '20', '61', '85', '55', '0'),
(53, '', 'F2', 'Marino Sato', 'Japan', '22', '60', '66', '36', '0'),
(54, '', 'FA', 'David Beckmann', 'Germany', '21', '60', '88', '42', '0'),
(55, '', 'F3', 'Alexander Smolyar', 'Russia', '20', '59', '72', '75', '0'),
(56, '', 'F3', 'Isack Hadjar', 'France', '17', '59', '93', '29', '0'),
(57, '', 'F3', 'Arthur Leclerc', 'Monaco', '21', '59', '86', '55', '0'),
(58, '', 'F3', 'Jak Crawford', 'USA', '16', '59', '98', '17', '0'),
(59, '', 'FA', 'Lirim Zendelli', 'Germany', '22', '58', '74', '31', '0'),
(60, '', 'F3', 'Roman Staněk', 'Czech Republic', '18', '57', '91', '61', '0'),
(61, '', 'F3', 'Kush Maini', 'India', '21', '56', '50', '71', '0'),
(62, '', 'F2', 'Cem Bölükbaşı', 'Turkey', '24', '56', '61', '21', '0'),
(63, '', 'F3', 'Victor Martins', 'France', '20', '56', '88', '41', '0'),
(64, '', 'F3', 'Caio Collet', 'Brazil', '19', '55', '86', '59', '0'),
(65, '', 'F2', 'Denis Moreau', 'France', '22', '54', '60', '58', '0'),
(66, '', 'F3', 'Kaylen Frederick', 'USA', '19', '51', '76', '53', '0'),
(67, '', 'F3', 'Francesco Pizzi', 'Italy', '17', '51', '86', '73', '0'),
(68, '', 'F3', 'Juan Manuel Correa', 'USA', '22', '50', '73', '15', '0'),
(69, '', 'F3', 'Franco Colapinto', 'Argentina', '18', '50', '91', '49', '0'),
(70, '', 'F3', 'László Tóth', 'Hungary', '21', '50', '65', '65', '0'),
(71, '', 'F2', 'Amaury Cordeel', 'Belgium', '19', '50', '68', '85', '0'),
(72, '', 'F3', 'Jonny Edgar', 'Great Britain', '18', '49', '86', '19', '0'),
(73, '', 'FA', 'Oliver Rasmussen', 'Denmark', '21', '48', '85', '25', '0'),
(74, '', 'F3', 'David Vidales', 'Spain', '19', '47', '84', '69', '0'),
(75, '', 'FA', 'David Schumacher', 'Germany', '20', '47', '82', '23', '0'),
(76, '', 'FA', 'Filip Ugran', 'Romania', '19', '46', '74', '33', '0'),
(77, '', 'F3', 'Ido Cohen', 'Israel', '20', '46', '77', '63', '0'),
(78, '', 'F3', 'Zak O\'Sullivan', 'Great Britain', '17', '46', '96', '47', '0'),
(79, '', 'F3', 'Zdeněk Chovanec', 'Portugal', '17', '45', '85', '83', '0'),
(80, '', 'F3', 'William Alatalo', 'Finland', '19', '44', '77', '45', '0'),
(81, '', 'FA', 'Ayrton Simmons', 'Great Britain', '20', '44', '72', '27', '0'),
(82, '', 'F3', 'Pepe Martí', 'Spain', '16', '42', '77', '67', '0'),
(83, '', 'F3', 'Rafael Villagómez', 'Mexico', '20', '41', '71', '43', '0'),
(84, '', 'F3', 'Nazim Azman', 'Malaysia', '20', '41', '75', '37', '0'),
(85, '', 'F3', 'Hunter Yeany', 'USA', '16', '39', '81', '77', '0'),
(86, '', 'F3', 'Reece Ushijima', 'Great Britain', '19', '37', '80', '21', '0'),
(87, '', 'F3', 'Brad Benavides', 'USA', '20', '37', '47', '51', '0'),
(88, '', 'FA', 'Niko Kari', 'Finland', '22', '37', '68', '57', '0'),
(89, '', 'F3', 'Enzo Trulli', 'Italy', '16', '33', '86', '85', '0'),
(90, '', 'F3', 'Federico Malvestiti', 'Italy', '21', '32', '73', '35', '0');

-- --------------------------------------------------------

--
-- Tabelstructuur voor tabel `race`
--

CREATE TABLE `race` (
  `unique_ID_race` int(11) NOT NULL,
  `name` varchar(32) NOT NULL,
  `track` int(11) DEFAULT NULL,
  `conditions` int(11) DEFAULT NULL,
  `time` datetime NOT NULL,
  `winner` int(11) DEFAULT NULL,
  `race_admin` int(11) DEFAULT NULL,
  `budget` int(11) NOT NULL,
  `max_players` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Gegevens worden geëxporteerd voor tabel `race`
--

INSERT INTO `race` (`unique_ID_race`, `name`, `track`, `conditions`, `time`, `winner`, `race_admin`, `budget`, `max_players`) VALUES
(11, 'BestRace33', 3, 24, '9999-12-31 23:59:59', NULL, 1, 10, 4),
(13, 'testrace', 6, 18, '9999-12-31 23:59:59', NULL, 2, 10, 4),
(14, 'testrace22', 4, 21, '9999-12-31 23:59:59', NULL, 2, 10, 4);

-- --------------------------------------------------------

--
-- Tabelstructuur voor tabel `race_applied`
--

CREATE TABLE `race_applied` (
  `unique_ID_applied` int(11) NOT NULL,
  `user_id` int(11) DEFAULT NULL,
  `race_id` int(11) DEFAULT NULL,
  `car` int(11) DEFAULT NULL,
  `pilot1` int(11) DEFAULT NULL,
  `pilot2` int(11) DEFAULT NULL,
  `aero` int(11) DEFAULT NULL,
  `tires` int(11) DEFAULT NULL,
  `confirmed` int(11) NOT NULL DEFAULT 0,
  `points` int(11) NOT NULL,
  `place` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Gegevens worden geëxporteerd voor tabel `race_applied`
--

INSERT INTO `race_applied` (`unique_ID_applied`, `user_id`, `race_id`, `car`, `pilot1`, `pilot2`, `aero`, `tires`, `confirmed`, `points`, `place`) VALUES
(1, 2, 14, 1, 1, 1, 1, 1, 1, 355, 1),
(2, 3, 14, 2, 2, 2, 2, 2, 1, 314, 2),
(3, 4, 14, 3, 3, 3, 3, 3, 1, 256, 4),
(4, 5, 14, 10, 10, 10, 10, 10, 1, 236, 5),
(5, 5, 13, 10, 10, 10, 10, 10, 1, 193, 0),
(6, 4, 13, 10, 10, 10, 10, 10, 1, 193, 0),
(7, 3, 11, 10, 10, 10, 10, 10, 1, 321, 0),
(8, 1, 14, 3, 1, 2, 6, 1, 1, 307, 3);

-- --------------------------------------------------------

--
-- Tabelstructuur voor tabel `tires`
--

CREATE TABLE `tires` (
  `unique_ID_tire` int(11) NOT NULL,
  `name` varchar(6) DEFAULT NULL,
  `brand` varchar(11) DEFAULT NULL,
  `rating` int(2) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Gegevens worden geëxporteerd voor tabel `tires`
--

INSERT INTO `tires` (`unique_ID_tire`, `name`, `brand`, `rating`) VALUES
(1, 'soft', 'Pirelli', 90),
(2, 'medium', 'Pirelli', 90),
(3, 'hard', 'Pirelli', 90),
(4, 'inter', 'Pirelli', 90),
(5, 'wet', 'Pirelli', 90),
(6, 'soft', 'Bridgestone', 85),
(7, 'medium', 'Bridgestone', 85),
(8, 'hard', 'Bridgestone', 85),
(9, 'inter', 'Bridgestone', 85),
(10, 'wet', 'Bridgestone', 85),
(11, 'soft', 'Michelin', 80),
(12, 'medium', 'Michelin', 80),
(13, 'hard', 'Michelin', 80),
(14, 'inter', 'Michelin', 80),
(15, 'wet', 'Michelin', 80),
(16, 'soft', 'Dunlop', 70),
(17, 'medium', 'Dunlop', 70),
(18, 'hard', 'Dunlop', 70),
(19, 'inter', 'Dunlop', 70),
(20, 'wet', 'Dunlop', 70),
(21, 'soft', 'Firestone', 65),
(22, 'medium', 'Firestone', 65),
(23, 'hard', 'Firestone', 65),
(24, 'inter', 'Firestone', 65),
(25, 'wet', 'Firestone', 65),
(26, 'soft', 'Goodyear', 60),
(27, 'medium', 'Goodyear', 60),
(28, 'hard', 'Goodyear', 60),
(29, 'inter', 'Goodyear', 60),
(30, 'wet', 'Goodyear', 60),
(31, 'soft', 'Continental', 55),
(32, 'medium', 'Continental', 55),
(33, 'hard', 'Continental', 55),
(34, 'inter', 'Continental', 55),
(35, 'wet', 'Continental', 55),
(36, 'soft', 'Englebert', 50),
(37, 'medium', 'Englebert', 50),
(38, 'hard', 'Englebert', 50),
(39, 'inter', 'Englebert', 50),
(40, 'wet', 'Englebert', 50),
(41, 'soft', 'Avon', 45),
(42, 'medium', 'Avon', 45),
(43, 'hard', 'Avon', 45),
(44, 'inter', 'Avon', 45),
(45, 'wet', 'Avon', 45),
(46, 'soft', 'Avon', 45);

-- --------------------------------------------------------

--
-- Tabelstructuur voor tabel `tracks`
--

CREATE TABLE `tracks` (
  `unique_ID_track` int(11) NOT NULL,
  `name_gp` varchar(25) DEFAULT NULL,
  `name_track` varchar(30) DEFAULT NULL,
  `country` varchar(15) DEFAULT NULL,
  `type` varchar(64) DEFAULT NULL,
  `layout` varchar(64) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Gegevens worden geëxporteerd voor tabel `tracks`
--

INSERT INTO `tracks` (`unique_ID_track`, `name_gp`, `name_track`, `country`, `type`, `layout`) VALUES
(1, 'Bahrain Grand Prix', 'Bahrain International Circuit', 'Bahrein', 'straight', '/tracklayout/bahrain-grand-prix.png'),
(2, 'British Grand Prix', 'Silverstone Circuit', 'Great Britain', 'straight', '/tracklayout/silverstone.png'),
(3, 'Austrian Grand Prix', 'Red Bull Ring', 'Austria', 'straight', '/tracklayout/austrian-grand-prix.png'),
(4, 'French Grand Prix', 'Circuit Paul Ricard', 'France', 'straight', '/tracklayout/french-grand-prix.png'),
(5, 'Hungarian Grand Prix', 'Hungaroring', 'Hungary', 'cornering', '/tracklayout/hungarian-grand-prix.png'),
(6, 'Belgian Grand Prix', 'Circuit de Spa-Francorchamps', 'Belgium', 'average', '/tracklayout/belgian-grand-prix.png'),
(7, 'Dutch Grand Prix', 'Circuit Park Zandvoort', 'The Netherlands', 'cornering', '/tracklayout/dutch-grand-prix.png'),
(8, 'Italian Grand Prix', 'Autodromo Nazionale di Monza', 'Italy', 'average', '/tracklayout/monza.png'),
(9, 'Singapore Grand Prix', 'Marina Bay Street Circuit', 'Singapore', 'cornering', '/tracklayout/singapore.png'),
(10, 'Japanese Grand Prix', 'Suzuka Circuit', 'Japan', 'cornering', '/tracklayout/japan.png'),
(11, 'United States Grand Prix', 'Circuit of the Americas', 'USA', 'average', '/tracklayout/texas-grand-prix.png'),
(12, 'Saudi Arabian Grand Prix', 'Jeddah Corniche Circuit', 'Saudi Arabia', 'cornering', '/tracklayout/saudi-arabia.png'),
(13, 'Mexico City Grand Prix', 'Autodromo Hermanos Rodriguez', 'Mexico', 'average', '/tracklayout/mexico.png'),
(14, 'Brazilian Grand Prix', 'Autodromo Jose Carlos Pace', 'Brazil', 'average', '/tracklayout/brasil.png'),
(15, 'Abu Dhabi Grand Prix', 'Yas Marina Circuit', 'Abu Dhabi', 'average', '/tracklayout/abu-dhabi.png'),
(16, 'Australian Grand Prix', 'Albert Park Grand Prix Circuit', 'Australia', 'average', '/tracklayout/australia.png'),
(17, 'Emilia Romagna Grand Prix', 'Autodromo Enzo e Dino Ferrari', 'Italy', 'average', '/tracklayout/emilia-romagna.png'),
(18, 'Miami Grand Prix', 'Miami International Autodrome', 'USA', 'average', '/tracklayout/miami.png'),
(19, 'Spanish Grand Prix', 'Circuit de Barcelona-Catalunya', 'Spain', 'average', '/tracklayout/spain.png'),
(20, 'Monaco Grand Prix', 'Circuit de Monaco', 'Monaco', 'cornering', '/tracklayout/monaco.png'),
(21, 'Azerbaijan Grand Prix', 'Baku City Circuit', 'Azerbijan', 'straight', '/tracklayout/azerbaijan.png'),
(22, 'Canadian Grand Prix', 'Circuit Gilles Villeneuve', 'Canada', 'average', '/tracklayout/canada.png');

-- --------------------------------------------------------

--
-- Tabelstructuur voor tabel `users`
--

CREATE TABLE `users` (
  `unique_ID_user` int(11) NOT NULL,
  `name` varchar(30) NOT NULL,
  `mail_addr` varchar(64) NOT NULL,
  `password` varchar(64) NOT NULL,
  `points_overall` int(11) NOT NULL,
  `points_last_race` int(11) NOT NULL,
  `wins` int(11) NOT NULL,
  `races` int(11) NOT NULL,
  `authorisation` set('admin_level','user_level','','') NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Gegevens worden geëxporteerd voor tabel `users`
--

INSERT INTO `users` (`unique_ID_user`, `name`, `mail_addr`, `password`, `points_overall`, `points_last_race`, `wins`, `races`, `authorisation`) VALUES
(1, 'Robin', 'RH', 'Robin123', 0, 0, 0, 0, ''),
(2, 'Louis', 'Louis@dj.com', 'Bob2', 0, 0, 0, 0, ''),
(3, 'Gerard', 'gg@m.be', 'Bob', 0, 0, 0, 0, ''),
(4, 'Peter', 'gg@m.be', 'Bob', 0, 0, 0, 0, ''),
(5, 'Joris', 'gg@m.be', 'Bob', 0, 0, 0, 0, '');

--
-- Indexen voor geëxporteerde tabellen
--

--
-- Indexen voor tabel `aero`
--
ALTER TABLE `aero`
  ADD PRIMARY KEY (`unique_ID_aero`);

--
-- Indexen voor tabel `cars`
--
ALTER TABLE `cars`
  ADD PRIMARY KEY (`unique_ID_car`);

--
-- Indexen voor tabel `conditions`
--
ALTER TABLE `conditions`
  ADD PRIMARY KEY (`unique_ID_conditions`);

--
-- Indexen voor tabel `drivers`
--
ALTER TABLE `drivers`
  ADD PRIMARY KEY (`unique_ID_driver`);

--
-- Indexen voor tabel `race`
--
ALTER TABLE `race`
  ADD PRIMARY KEY (`unique_ID_race`),
  ADD KEY `race_admin` (`race_admin`),
  ADD KEY `track` (`track`),
  ADD KEY `winner` (`winner`),
  ADD KEY `track_2` (`track`),
  ADD KEY `condition_relation` (`conditions`);

--
-- Indexen voor tabel `race_applied`
--
ALTER TABLE `race_applied`
  ADD PRIMARY KEY (`unique_ID_applied`),
  ADD KEY `race_id` (`race_id`),
  ADD KEY `user_id` (`user_id`),
  ADD KEY `pilot1_relation` (`pilot1`),
  ADD KEY `pilot2_relation` (`pilot2`),
  ADD KEY `car_relation` (`car`),
  ADD KEY `tires_relation` (`tires`),
  ADD KEY `aero_relation` (`aero`);

--
-- Indexen voor tabel `tires`
--
ALTER TABLE `tires`
  ADD PRIMARY KEY (`unique_ID_tire`);

--
-- Indexen voor tabel `tracks`
--
ALTER TABLE `tracks`
  ADD PRIMARY KEY (`unique_ID_track`);

--
-- Indexen voor tabel `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`unique_ID_user`);

--
-- AUTO_INCREMENT voor geëxporteerde tabellen
--

--
-- AUTO_INCREMENT voor een tabel `aero`
--
ALTER TABLE `aero`
  MODIFY `unique_ID_aero` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=46;

--
-- AUTO_INCREMENT voor een tabel `cars`
--
ALTER TABLE `cars`
  MODIFY `unique_ID_car` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16;

--
-- AUTO_INCREMENT voor een tabel `conditions`
--
ALTER TABLE `conditions`
  MODIFY `unique_ID_conditions` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=35;

--
-- AUTO_INCREMENT voor een tabel `drivers`
--
ALTER TABLE `drivers`
  MODIFY `unique_ID_driver` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=995;

--
-- AUTO_INCREMENT voor een tabel `race`
--
ALTER TABLE `race`
  MODIFY `unique_ID_race` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;

--
-- AUTO_INCREMENT voor een tabel `race_applied`
--
ALTER TABLE `race_applied`
  MODIFY `unique_ID_applied` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT voor een tabel `tires`
--
ALTER TABLE `tires`
  MODIFY `unique_ID_tire` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=47;

--
-- AUTO_INCREMENT voor een tabel `tracks`
--
ALTER TABLE `tracks`
  MODIFY `unique_ID_track` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=23;

--
-- AUTO_INCREMENT voor een tabel `users`
--
ALTER TABLE `users`
  MODIFY `unique_ID_user` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- Beperkingen voor geëxporteerde tabellen
--

--
-- Beperkingen voor tabel `race`
--
ALTER TABLE `race`
  ADD CONSTRAINT `condition_relation` FOREIGN KEY (`conditions`) REFERENCES `conditions` (`unique_ID_conditions`) ON DELETE SET NULL ON UPDATE SET NULL,
  ADD CONSTRAINT `track_relation` FOREIGN KEY (`track`) REFERENCES `tracks` (`unique_ID_track`) ON DELETE SET NULL ON UPDATE SET NULL,
  ADD CONSTRAINT `user_relation` FOREIGN KEY (`race_admin`) REFERENCES `users` (`unique_ID_user`) ON DELETE SET NULL ON UPDATE SET NULL,
  ADD CONSTRAINT `winner_relation` FOREIGN KEY (`winner`) REFERENCES `users` (`unique_ID_user`) ON DELETE SET NULL ON UPDATE SET NULL;

--
-- Beperkingen voor tabel `race_applied`
--
ALTER TABLE `race_applied`
  ADD CONSTRAINT `aero_relation` FOREIGN KEY (`aero`) REFERENCES `aero` (`unique_ID_aero`) ON DELETE SET NULL ON UPDATE SET NULL,
  ADD CONSTRAINT `car_relation` FOREIGN KEY (`car`) REFERENCES `cars` (`unique_ID_car`) ON DELETE SET NULL ON UPDATE SET NULL,
  ADD CONSTRAINT `pilot1_relation` FOREIGN KEY (`pilot1`) REFERENCES `drivers` (`Unique_ID_driver`) ON DELETE SET NULL ON UPDATE SET NULL,
  ADD CONSTRAINT `pilot2_relation` FOREIGN KEY (`pilot2`) REFERENCES `drivers` (`Unique_ID_driver`) ON DELETE SET NULL ON UPDATE SET NULL,
  ADD CONSTRAINT `race_relation` FOREIGN KEY (`race_id`) REFERENCES `race` (`unique_ID_race`) ON DELETE SET NULL ON UPDATE SET NULL,
  ADD CONSTRAINT `tires_relation` FOREIGN KEY (`tires`) REFERENCES `tires` (`unique_ID_tire`) ON DELETE SET NULL ON UPDATE SET NULL,
  ADD CONSTRAINT `user_rel` FOREIGN KEY (`user_id`) REFERENCES `users` (`unique_ID_user`) ON DELETE SET NULL ON UPDATE SET NULL;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
