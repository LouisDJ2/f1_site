-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Gegenereerd op: 07 nov 2022 om 11:47
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
(19, 'Alpine F1 Team', 'straight', 80),
(20, 'Alpine F1 Team', 'average', 80),
(21, 'Alpine F1 Team', 'cornering', 70),
(22, 'AlphaTauri', 'straight', 75),
(23, 'AlphaTauri', 'average', 75),
(24, 'AlphaTauri', 'cornering', 75),
(25, 'Renault', 'straight', 55),
(26, 'Renault', 'average', 50),
(27, 'Renault', 'cornering', 45),
(28, 'Aston Martin', 'straight', 70),
(29, 'Aston Martin', 'average', 80),
(30, 'Aston Martin', 'cornering', 80),
(31, 'Toro Rosso', 'straight', 55),
(32, 'Toro Rosso', 'average', 50),
(33, 'Toro Rosso', 'cornering', 45),
(34, 'Haas F1 Team', 'straight', 70),
(35, 'Haas F1 Team', 'average', 60),
(36, 'Haas F1 Team', 'cornering', 65),
(37, 'Alfa Romeo', 'straight', 60),
(38, 'Alfa Romeo', 'average', 65),
(39, 'Alfa Romeo', 'cornering', 70),
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
(1, 'Mercedes', 'Germany', 'W13', 0),
(2, 'Red Bull', 'Austria', 'RB18', 0),
(3, 'Ferrari', 'Italy', 'F1-75', 0),
(4, 'Racing Point', 'Great Brittain', 'VJM11', 0),
(5, 'Force India', 'India', 'VJM9', 0),
(6, 'McLaren', 'Great Brittan', 'MCL36', 0),
(7, 'Alpine F1 Team', 'France', 'A522', 0),
(8, 'AlphaTauri', 'Italy', 'AT03', 0),
(9, 'Renault', 'France', 'RS19', 0),
(10, 'Aston Martin', 'Great Brittain', 'AMR22', 0),
(11, 'Toro Rosso', 'Italy', 'STR14', 0),
(12, 'Haas F1 Team', 'USA', 'VF-22', 0),
(13, 'Alfa Romeo', 'Switzerland', 'C42', 0),
(14, 'Sauber', 'Switzerland', 'C37', 0),
(15, 'Williams', 'Great Brittain', 'FW44', 0);

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
(1, 'naam', 'rain_expected', 'rain', 'sun_expected', 'sun'),
(2, '', '100', '100', '0', '0'),
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
  `average2` varchar(8) DEFAULT NULL,
  `rank` varchar(4) DEFAULT NULL,
  `AVG` varchar(5) DEFAULT NULL,
  `Cor` varchar(3) DEFAULT NULL,
  `Brk` varchar(3) DEFAULT NULL,
  `Rea` varchar(3) DEFAULT NULL,
  `AVG2` varchar(4) DEFAULT NULL,
  `WR2` varchar(4) DEFAULT NULL,
  `Acc` varchar(3) DEFAULT NULL,
  `Ctr` varchar(3) DEFAULT NULL,
  `Smo` varchar(3) DEFAULT NULL,
  `AVG3` varchar(4) DEFAULT NULL,
  `WR3` varchar(4) DEFAULT NULL,
  `Ada` varchar(3) DEFAULT NULL,
  `Ovt` varchar(3) DEFAULT NULL,
  `Def` varchar(3) DEFAULT NULL,
  `AVG4` varchar(4) DEFAULT NULL,
  `WR4` varchar(4) DEFAULT NULL,
  `potential` varchar(9) DEFAULT NULL,
  `potValue` varchar(8) DEFAULT NULL,
  `aggression` varchar(10) DEFAULT NULL,
  `aggrValue` varchar(9) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Gegevens worden geëxporteerd voor tabel `drivers`
--

INSERT INTO `drivers` (`unique_ID_driver`, `Nr`, `cat`, `name`, `nation`, `Age`, `average`, `average2`, `rank`, `AVG`, `Cor`, `Brk`, `Rea`, `AVG2`, `WR2`, `Acc`, `Ctr`, `Smo`, `AVG3`, `WR3`, `Ada`, `Ovt`, `Def`, `AVG4`, `WR4`, `potential`, `potValue`, `aggression`, `aggrValue`) VALUES
(1, '44', 'F1', 'Lewis Hamilton', 'Great Britain', '37', '90', '89,70', '1', '89,89', '90', '85', '88', '87,7', '87,9', '88', '98', '85', '90,3', '90,0', '90', '92', '93', '91,7', '91,7', 'Low', '24', 'High', '63'),
(2, '33', 'F1', 'Max Verstappen', 'The Netherlands', '24', '90', '89,50', '2', '87,56', '96', '93', '84', '91,0', '92,3', '96', '87', '78', '87,0', '88,3', '92', '80', '82', '84,7', '84,7', 'Average', '54', 'High', '85'),
(3, '16', 'F1', 'Charles Leclerc', 'Monaco', '24', '88', '88,40', '3', '85,67', '90', '93', '91', '91,3', '91,2', '91', '92', '84', '89,0', '89,3', '71', '86', '73', '76,7', '76,7', 'Average', '61', 'Low', '39'),
(4, '11', 'F1', 'Sergio Pérez', 'Mexico', '32', '87', '87,20', '4', '86,22', '87', '88', '87', '87,3', '87,3', '88', '93', '82', '87,7', '87,7', '77', '87', '87', '83,7', '83,7', 'Low', '36', 'High', '61'),
(5, '55', 'F1', 'Carlos Sainz', 'Spain', '27', '87', '86,90', '5', '86,78', '87', '93', '77', '85,7', '86,8', '90', '87', '79', '85,3', '86,0', '90', '90', '88', '89,3', '89,3', 'Average', '52', 'Average', '56'),
(6, '77', 'F1', 'Valtteri Bottas', 'Finland', '32', '87', '86,80', '6', '85,22', '89', '91', '83', '87,7', '88,3', '93', '85', '81', '86,3', '87,3', '82', '84', '79', '81,7', '81,7', 'Low', '33', 'Low', '25'),
(7, '63', 'F1', 'George Russell', 'Great Britain', '24', '86', '85,85', '7', '84,67', '82', '83', '92', '85,7', '84,6', '88', '91', '93', '90,7', '90,3', '79', '83', '71', '77,7', '77,7', 'Average', '63', 'Average', '49'),
(8, '4', 'F1', 'Lando Norris', 'Great Britain', '22', '86', '85,70', '8', '83,89', '84', '91', '78', '84,3', '85,0', '87', '95', '83', '88,3', '88,1', '80', '84', '73', '79,0', '79,0', 'Average', '63', 'Average', '59'),
(9, '14', 'F1', 'Fernando Alonso', 'Spain', '40', '85', '85,30', '9', '85,33', '82', '87', '89', '86,0', '85,2', '83', '90', '83', '85,3', '85,0', '82', '86', '86', '84,7', '84,7', 'Low', '15', 'High', '80'),
(10, '31', 'F1', 'Esteban Ocon', 'France', '25', '85', '85,15', '10', '85,33', '80', '78', '85', '81,0', '80,4', '86', '93', '96', '91,7', '90,9', '78', '91', '81', '83,3', '83,3', 'Average', '48', 'High', '73'),
(11, '10', 'F1', 'Pierre Gasly', 'France', '26', '84', '83,90', '11', '81,89', '86', '91', '80', '85,7', '86,3', '84', '87', '79', '83,3', '83,4', '78', '81', '71', '76,7', '76,7', 'Average', '52', 'Average', '47'),
(12, '3', 'F1', 'Daniel Ricciardo', 'Australia', '32', '84', '83,85', '12', '83,78', '81', '82', '82', '81,7', '81,6', '86', '86', '90', '87,3', '87,1', '85', '82', '80', '82,3', '82,3', 'Low', '25', 'Average', '51'),
(13, '5', 'F1', 'Sebastian Vettel', 'Germany', '34', '82', '82,10', '13', '82,89', '77', '74', '89', '80,0', '78,7', '82', '85', '94', '87,0', '86,3', '78', '82', '85', '81,7', '81,7', 'Low', '22', 'High', '66'),
(14, '20', 'F1', 'Kevin Magnussen', 'Denmark', '29', '80', '79,85', '14', '78,78', '81', '88', '77', '82,0', '82,4', '83', '71', '84', '79,3', '79,9', '79', '81', '65', '75,0', '75,0', 'Average', '47', 'High', '75'),
(15, '23', 'F1', 'Alexander Albon', 'Thailand', '25', '80', '79,80', '15', '80,22', '73', '81', '79', '77,7', '77,0', '75', '88', '88', '83,7', '82,4', '83', '85', '70', '79,3', '79,3', 'Average', '51', 'Low', '15'),
(16, '24', 'F1', 'Zhou Guanyu', 'China', '22', '79', '79,10', '16', '79,44', '78', '77', '78', '77,7', '77,7', '77', '82', '83', '80,7', '80,1', '74', '89', '77', '80,0', '80,0', 'Average', '57', 'High', '68'),
(17, '18', 'F1', 'Lance Stroll', 'Canada', '23', '79', '78,90', '17', '79,56', '75', '67', '75', '72,3', '72,3', '84', '87', '86', '85,7', '85,4', '78', '82', '82', '80,7', '80,7', 'Average', '56', 'High', '78'),
(18, '99', 'R', 'Antonio Giovinazzi', 'Italy', '28', '78', '77,75', '18', '76,44', '77', '67', '79', '74,3', '74,1', '81', '87', '87', '85,0', '84,4', '69', '80', '61', '70,0', '70,0', 'Average', '46', 'Low', '32'),
(19, '22', 'F1', 'Yuki Tsunoda', 'Japan', '21', '77', '76,55', '19', '76,11', '73', '78', '70', '73,7', '74,0', '80', '78', '85', '81,0', '80,9', '75', '80', '66', '73,7', '73,7', 'Average', '55', 'High', '71'),
(20, '27', 'R', 'Nico Hülkenberg', 'Germany', '34', '76', '76,35', '20', '77,33', '83', '50', '73', '68,7', '69,8', '71', '88', '91', '83,3', '81,6', '77', '81', '82', '80,0', '80,0', 'Low', '29', 'Low', '18'),
(21, '47', 'F1', 'Mick Schumacher', 'Germany', '22', '76', '75,70', '21', '75,11', '73', '73', '75', '73,7', '73,4', '80', '75', '88', '81,0', '80,9', '73', '71', '68', '70,7', '70,7', 'Average', '61', 'Average', '42'),
(22, '21', 'R', 'Oscar Piastri', 'Australia', '20', '75', '74,80', '22', '71,00', '83', '85', '74', '80,7', '81,7', '78', '80', '48', '68,7', '70,0', '59', '63', '69', '63,7', '63,7', 'High', '89', 'Average', '54'),
(23, '45', 'R', 'Nyck de Vries', 'The Netherlands', '27', '74', '74,00', '23', '73,22', '80', '78', '80', '79,3', '79,3', '71', '70', '63', '68,0', '68,4', '77', '71', '69', '72,3', '72,3', 'Average', '58', 'Low', '27'),
(24, '6', 'F1', 'Nicholas Latifi', 'Canada', '26', '73', '73,30', '24', '74,22', '68', '62', '78', '69,3', '68,2', '79', '77', '80', '78,7', '78,7', '68', '80', '76', '74,7', '74,7', 'Average', '47', 'Low', '37'),
(25, '', 'F2', 'Jehan Daruvala', 'India', '23', '73', '72,85', '25', '71,11', '72', '64', '78', '71,3', '70,7', '82', '83', '65', '76,7', '77,4', '55', '65', '76', '65,3', '65,3', 'Average', '62', 'Low', '39'),
(26, '', 'F2', 'Jack Doohan', 'Australia', '19', '72', '72,25', '26', '70,11', '75', '74', '82', '77,0', '76,2', '85', '74', '41', '66,7', '69,3', '61', '71', '68', '66,7', '66,7', 'High', '85', 'High', '73'),
(27, '12', 'R', 'Sebastien Buemi', 'Switzerland', '33', '72', '72,10', '27', '75,44', '65', '50', '85', '66,7', '64,4', '72', '76', '87', '78,3', '77,4', '81', '82', '81', '81,3', '81,3', 'Low', '41', 'Average', '44'),
(28, '2', 'R', 'Stoffel Vandoorne', 'Belgium', '29', '72', '71,55', '28', '71,89', '75', '69', '71', '71,7', '72,1', '73', '74', '56', '67,7', '68,4', '81', '73', '75', '76,3', '76,3', 'Low', '42', 'Average', '49'),
(29, '', 'F2', 'Théo Pourchaire', 'France', '18', '71', '71,30', '29', '69,67', '76', '81', '54', '70,3', '72,8', '64', '72', '83', '73,0', '71,7', '61', '66', '70', '65,7', '65,7', 'High', '93', 'Low', '24'),
(30, '', 'F2', 'Frederik Vesti', 'Denmark', '20', '71', '71,20', '30', '71,44', '71', '57', '74', '67,3', '67,0', '70', '78', '84', '77,3', '76,3', '59', '75', '75', '69,7', '69,7', 'High', '86', 'High', '70'),
(31, '', 'F2', 'Ralph Boschung', 'Switzerland', '24', '71', '70,95', '31', '67,22', '78', '67', '74', '73,0', '73,4', '78', '78', '60', '72,0', '72,9', '59', '51', '60', '56,7', '56,7', 'Average', '70', 'High', '64'),
(32, '', 'F2', 'Richard Verschoor', 'The Netherlands', '21', '71', '70,60', '32', '71,78', '67', '71', '57', '65,0', '66,1', '75', '72', '72', '73,0', '73,3', '83', '74', '75', '77,3', '77,3', 'Average', '66', 'Low', '18'),
(33, '', 'F2', 'Jüri Vips', 'Estonia', '21', '70', '70,10', '33', '68,56', '78', '83', '65', '75,3', '76,8', '68', '65', '54', '62,3', '63,1', '61', '69', '74', '68,0', '68,0', 'Average', '60', 'Average', '48'),
(34, '', 'F2', 'Logan Sargeant', 'USA', '21', '70', '69,60', '34', '67,11', '63', '79', '83', '75,0', '72,8', '85', '68', '52', '68,3', '70,7', '48', '63', '63', '58,0', '58,0', 'High', '78', 'Low', '15'),
(35, '', 'F2', 'Dennis Hauger', 'Norway', '18', '69', '69,30', '35', '67,56', '80', '66', '47', '64,3', '68,0', '73', '81', '51', '68,3', '69,0', '71', '75', '64', '70,0', '70,0', 'High', '82', 'High', '61'),
(36, '88', 'R', 'Robert Kubica', 'Poland', '37', '69', '68,50', '36', '70,44', '65', '68', '60', '64,3', '64,9', '64', '80', '57', '67,0', '66,6', '85', '66', '89', '80,0', '80,0', 'Low', '14', 'Low', '20'),
(37, '', 'F2', 'Felipe Drugovich', 'Brazil', '21', '68', '68,35', '37', '66,89', '70', '65', '71', '68,7', '68,6', '64', '73', '80', '72,3', '71,1', '45', '65', '69', '59,7', '59,7', 'High', '85', 'Low', '33'),
(38, '', 'F2', 'Roy Nissany', 'Israel', '27', '68', '67,75', '38', '65,33', '69', '63', '54', '62,0', '63,7', '82', '75', '66', '74,3', '75,4', '59', '55', '65', '59,7', '59,7', 'Average', '61', 'High', '76'),
(39, '40', 'R', 'Liam Lawson', 'New Zealand', '20', '68', '67,65', '39', '64,33', '78', '68', '59', '68,3', '70,4', '85', '66', '43', '64,7', '67,6', '55', '61', '64', '60,0', '60,0', 'Average', '63', 'High', '67'),
(40, '', 'FA', 'Roberto Merhi', 'Spain', '30', '67', '67,20', '40', '68,22', '75', '66', '58', '66,3', '68,2', '73', '58', '53', '61,3', '63,0', '77', '74', '80', '77,0', '77,0', 'Average', '58', 'Average', '45'),
(41, '89', 'R', 'Jack Aitken', 'Great Britain', '26', '66', '66,30', '41', '67,00', '63', '42', '54', '53,0', '54,0', '82', '79', '74', '78,3', '78,9', '69', '63', '77', '69,7', '69,7', 'Average', '73', 'Low', '35'),
(42, '', 'F2', 'Marcus Armstrong', 'New Zealand', '21', '66', '66,20', '42', '65,78', '70', '60', '53', '61,0', '62,9', '78', '63', '67', '69,3', '70,6', '55', '72', '74', '67,0', '67,0', 'Average', '71', 'Low', '30'),
(43, '', 'F2', 'Calan Williams', 'Australia', '21', '66', '66,05', '43', '65,44', '63', '72', '73', '69,3', '68,2', '65', '78', '40', '61,0', '61,6', '63', '60', '75', '66,0', '66,0', 'Average', '67', 'Low', '27'),
(44, '', 'F2', 'Ayumu Iwasa', 'Japan', '20', '66', '66,00', '44', '68,22', '57', '70', '73', '66,7', '64,9', '57', '74', '60', '63,7', '62,7', '67', '81', '75', '74,3', '74,3', 'High', '79', 'High', '79'),
(45, '51', 'R', 'Pietro Fittipaldi', 'Brazil', '25', '66', '65,85', '45', '66,33', '75', '52', '61', '62,7', '64,2', '67', '70', '56', '64,3', '64,7', '85', '66', '65', '72,0', '72,0', 'Average', '47', 'Low', '30'),
(46, '', 'F3', 'Oliver Bearman', 'Great Britain', '16', '65', '64,50', '46', '64,78', '64', '59', '65', '62,7', '62,6', '70', '66', '60', '65,3', '66,0', '63', '67', '69', '66,3', '66,3', 'High', '94', 'High', '81'),
(47, '', 'F2', 'Olli Caldwell', 'Great Britain', '19', '64', '64,45', '47', '63,78', '62', '48', '54', '54,7', '55,6', '85', '78', '53', '72,0', '73,9', '55', '70', '69', '64,7', '64,7', 'Average', '73', 'High', '82'),
(48, '', 'F3', 'Zane Maloney', 'Barbados', '18', '64', '64,30', '48', '64,78', '70', '52', '70', '64,0', '64,0', '70', '61', '57', '62,7', '63,7', '67', '70', '66', '67,7', '67,7', 'High', '91', 'Low', '39'),
(49, '', 'F2', 'Jake Hughes', 'Great Britain', '27', '63', '63,45', '49', '62,33', '64', '55', '70', '63,0', '62,3', '68', '68', '64', '66,7', '66,9', '63', '57', '52', '57,3', '57,3', 'Average', '60', 'Average', '58'),
(50, '', 'F2', 'Clément Novalak', 'France', '21', '63', '62,75', '50', '62,22', '70', '42', '70', '60,7', '60,7', '64', '75', '53', '64,0', '64,0', '60', '64', '62', '62,0', '62,0', 'Average', '74', 'Average', '51'),
(51, '', 'F3', 'Grégoire Saucy', 'Switzerland', '22', '62', '61,80', '51', '62,22', '65', '53', '69', '62,3', '61,9', '62', '62', '58', '60,7', '60,9', '65', '64', '62', '63,7', '63,7', 'Average', '73', 'High', '79'),
(52, '', 'F2', 'Enzo Fittipaldi', 'Brazil', '20', '61', '60,75', '52', '62,56', '57', '53', '59', '56,3', '56,1', '67', '71', '40', '59,3', '60,4', '74', '70', '72', '72,0', '72,0', 'High', '85', 'Average', '55'),
(53, '', 'F2', 'Marino Sato', 'Japan', '22', '60', '60,45', '53', '61,89', '56', '45', '61', '54,0', '53,4', '61', '77', '57', '65,0', '64,4', '67', '64', '69', '66,7', '66,7', 'Average', '66', 'Low', '36'),
(54, '', 'FA', 'David Beckmann', 'Germany', '21', '60', '59,90', '54', '57,78', '64', '45', '50', '53,0', '54,6', '70', '74', '58', '67,3', '67,7', '45', '54', '60', '53,0', '53,0', 'High', '88', 'Average', '42'),
(55, '', 'F3', 'Alexander Smolyar', 'Russia', '20', '59', '59,45', '55', '57,67', '64', '60', '48', '57,3', '59,1', '60', '64', '62', '62,0', '61,7', '52', '55', '54', '53,7', '53,7', 'Average', '72', 'High', '75'),
(56, '', 'F3', 'Isack Hadjar', 'France', '17', '59', '58,90', '56', '58,78', '60', '62', '53', '58,3', '59,1', '55', '62', '58', '58,3', '57,9', '56', '61', '62', '59,7', '59,7', 'High', '93', 'Low', '29'),
(57, '', 'F3', 'Arthur Leclerc', 'Monaco', '21', '59', '58,60', '57', '58,22', '64', '61', '41', '55,3', '57,9', '68', '54', '49', '57,0', '58,6', '70', '61', '56', '62,3', '62,3', 'High', '86', 'Average', '55'),
(58, '', 'F3', 'Jak Crawford', 'USA', '16', '59', '58,55', '58', '57,33', '58', '63', '58', '59,7', '59,7', '59', '59', '61', '59,7', '59,6', '64', '51', '43', '52,7', '52,7', 'High', '98', 'Low', '17'),
(59, '', 'FA', 'Lirim Zendelli', 'Germany', '22', '58', '58,40', '59', '60,89', '56', '27', '66', '49,7', '48,6', '70', '65', '62', '65,7', '66,3', '70', '65', '67', '67,3', '67,3', 'Average', '74', 'Low', '31'),
(60, '', 'F3', 'Roman Staněk', 'Czech Republic', '18', '57', '57,05', '60', '55,11', '53', '64', '60', '59,0', '58,2', '54', '67', '56', '59,0', '58,3', '42', '56', '44', '47,3', '47,3', 'High', '91', 'High', '61'),
(61, '', 'F3', 'Kush Maini', 'India', '21', '56', '56,40', '61', '56,67', '60', '50', '55', '55,0', '55,6', '56', '59', '53', '56,0', '56,0', '58', '55', '64', '59,0', '59,0', 'Average', '50', 'High', '71'),
(62, '', 'F2', 'Cem Bölükbaşı', 'Turkey', '24', '56', '56,05', '62', '60,00', '43', '46', '81', '56,7', '52,4', '75', '42', '45', '54,0', '57,0', '73', '59', '76', '69,3', '69,3', 'Average', '61', 'Low', '21'),
(63, '', 'F3', 'Victor Martins', 'France', '20', '56', '55,95', '63', '52,89', '58', '65', '58', '60,3', '60,3', '55', '57', '57', '56,3', '56,1', '49', '32', '45', '42,0', '42,0', 'High', '88', 'Average', '41'),
(64, '', 'F3', 'Caio Collet', 'Brazil', '19', '55', '54,50', '64', '54,67', '52', '55', '54', '53,7', '53,4', '43', '61', '70', '58,0', '55,9', '63', '49', '45', '52,3', '52,3', 'High', '86', 'Average', '59'),
(65, '', 'F2', 'Denis Moreau', 'France', '22', '54', '53,75', '65', '53,56', '53', '57', '52', '54,0', '54,1', '51', '58', '50', '53,0', '52,7', '55', '53', '53', '53,7', '53,7', 'Average', '60', 'Average', '58'),
(66, '', 'F3', 'Kaylen Frederick', 'USA', '19', '51', '50,90', '66', '50,44', '45', '54', '54', '51,0', '50,0', '58', '52', '47', '52,3', '53,1', '57', '47', '40', '48,0', '48,0', 'High', '76', 'Average', '53'),
(67, '', 'F3', 'Francesco Pizzi', 'Italy', '17', '51', '50,75', '67', '50,56', '56', '45', '53', '51,3', '51,7', '53', '49', '45', '49,0', '49,6', '53', '51', '50', '51,3', '51,3', 'High', '86', 'High', '73'),
(68, '', 'F3', 'Juan Manuel Correa', 'USA', '22', '50', '50,45', '68', '52,11', '45', '57', '46', '49,3', '49,2', '40', '62', '41', '47,7', '46,6', '58', '56', '64', '59,3', '59,3', 'Average', '73', 'Low', '15'),
(69, '', 'F3', 'Franco Colapinto', 'Argentina', '18', '50', '49,95', '69', '50,00', '47', '58', '49', '51,3', '51,1', '48', '48', '51', '49,0', '48,9', '49', '50', '50', '49,7', '49,7', 'High', '91', 'Average', '49'),
(70, '', 'F3', 'László Tóth', 'Hungary', '21', '50', '49,60', '70', '51,89', '40', '33', '47', '40,0', '39,2', '64', '59', '46', '56,3', '57,4', '54', '59', '65', '59,3', '59,3', 'Average', '65', 'High', '65'),
(71, '', 'F2', 'Amaury Cordeel', 'Belgium', '19', '50', '49,50', '71', '49,67', '53', '40', '46', '46,3', '47,1', '46', '59', '48', '51,0', '50,3', '42', '55', '58', '51,7', '51,7', 'Average', '68', 'High', '85'),
(72, '', 'F3', 'Jonny Edgar', 'Great Britain', '18', '49', '49,20', '72', '48,67', '47', '44', '51', '47,3', '46,9', '50', '59', '48', '52,3', '52,0', '45', '52', '42', '46,3', '46,3', 'High', '86', 'Low', '19'),
(73, '', 'FA', 'Oliver Rasmussen', 'Denmark', '21', '48', '48,20', '73', '49,11', '44', '49', '49', '47,3', '46,8', '43', '54', '49', '48,7', '47,9', '60', '43', '51', '51,3', '51,3', 'High', '85', 'Low', '25'),
(74, '', 'F3', 'David Vidales', 'Spain', '19', '47', '47,35', '74', '45,33', '46', '47', '32', '41,7', '43,2', '60', '49', '57', '55,3', '56,0', '49', '32', '36', '39,0', '39,0', 'High', '84', 'High', '69'),
(75, '', 'FA', 'David Schumacher', 'Germany', '20', '47', '47,30', '75', '47,67', '46', '43', '51', '46,7', '46,1', '51', '49', '42', '47,3', '47,9', '53', '44', '50', '49,0', '49,0', 'High', '82', 'Low', '23'),
(76, '', 'FA', 'Filip Ugran', 'Romania', '19', '46', '45,75', '76', '49,78', '30', '35', '49', '38,0', '35,9', '34', '67', '56', '52,3', '49,7', '65', '54', '58', '59,0', '59,0', 'Average', '74', 'Low', '33'),
(77, '', 'F3', 'Ido Cohen', 'Israel', '20', '46', '45,65', '77', '47,56', '40', '41', '45', '42,0', '41,4', '46', '47', '52', '48,3', '48,0', '59', '38', '60', '52,3', '52,3', 'High', '77', 'High', '63'),
(78, '', 'F3', 'Zak O\'Sullivan', 'Great Britain', '17', '46', '45,65', '77', '45,00', '44', '51', '49', '48,0', '47,4', '42', '48', '45', '45,0', '44,6', '40', '46', '40', '42,0', '42,0', 'High', '96', 'Average', '47'),
(79, '', 'F3', 'Zdeněk Chovanec', 'Portugal', '17', '45', '45,25', '79', '46,33', '40', '28', '34', '34,0', '34,7', '59', '67', '26', '50,7', '51,9', '56', '55', '52', '54,3', '54,3', 'High', '85', 'High', '83'),
(80, '', 'F3', 'William Alatalo', 'Finland', '19', '44', '43,90', '80', '43,33', '44', '48', '41', '44,3', '44,7', '41', '48', '41', '43,3', '43,0', '47', '39', '41', '42,3', '42,3', 'High', '77', 'Average', '45'),
(81, '', 'FA', 'Ayrton Simmons', 'Great Britain', '20', '44', '43,50', '81', '45,22', '38', '35', '25', '32,7', '34,1', '61', '47', '38', '48,7', '50,4', '52', '52', '59', '54,3', '54,3', 'Average', '72', 'Low', '27'),
(82, '', 'F3', 'Pepe Martí', 'Spain', '16', '42', '41,80', '82', '42,22', '45', '42', '46', '44,3', '44,2', '38', '38', '39', '38,3', '38,3', '46', '45', '41', '44,0', '44,0', 'High', '77', 'High', '67'),
(83, '', 'F3', 'Rafael Villagómez', 'Mexico', '20', '41', '40,70', '83', '39,11', '41', '31', '27', '33,0', '34,6', '55', '44', '52', '50,3', '51,0', '44', '27', '31', '34,0', '34,0', 'Average', '71', 'Average', '43'),
(84, '', 'F3', 'Nazim Azman', 'Malaysia', '20', '41', '40,60', '84', '40,44', '37', '36', '43', '38,7', '38,0', '46', '46', '38', '43,3', '43,7', '40', '39', '39', '39,3', '39,3', 'High', '75', 'Low', '37'),
(85, '', 'F3', 'Hunter Yeany', 'USA', '16', '39', '38,85', '85', '39,44', '42', '30', '31', '34,3', '35,6', '55', '31', '33', '39,7', '41,9', '47', '42', '44', '44,3', '44,3', 'High', '81', 'High', '77'),
(86, '', 'F3', 'Reece Ushijima', 'Great Britain', '19', '37', '37,30', '86', '36,89', '36', '46', '36', '39,3', '39,3', '34', '36', '38', '36,0', '35,7', '37', '39', '30', '35,3', '35,3', 'High', '80', 'Low', '21'),
(87, '', 'F3', 'Brad Benavides', 'USA', '20', '37', '37,25', '87', '37,00', '36', '40', '39', '38,3', '38,0', '34', '40', '37', '37,0', '36,6', '32', '36', '39', '35,7', '35,7', 'Average', '47', 'Average', '51'),
(88, '', 'FA', 'Niko Kari', 'Finland', '22', '37', '36,60', '88', '36,56', '34', '39', '38', '37,0', '36,6', '35', '39', '37', '37,0', '36,7', '33', '36', '38', '35,7', '35,7', 'Average', '68', 'Average', '57'),
(89, '', 'F3', 'Enzo Trulli', 'Italy', '16', '33', '33,20', '89', '32,00', '37', '32', '32', '33,7', '34,2', '35', '35', '29', '33,0', '33,3', '31', '30', '27', '29,3', '29,3', 'High', '86', 'High', '85'),
(90, '', 'F3', 'Federico Malvestiti', 'Italy', '21', '32', '32,35', '90', '32,56', '31', '34', '32', '32,3', '32,2', '35', '29', '33', '32,3', '32,7', '29', '31', '39', '33,0', '33,0', 'Average', '73', 'Low', '35');

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
  `confirmed` int(11) NOT NULL DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

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
  `type` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Gegevens worden geëxporteerd voor tabel `tracks`
--

INSERT INTO `tracks` (`unique_ID_track`, `name_gp`, `name_track`, `country`, `type`) VALUES
(1, 'Bahrain Grand Prix', 'Bahrain International Circuit', 'Bahrein', 0),
(2, 'British Grand Prix', 'Silverstone Circuit', 'Great Britain', 0),
(3, 'Austrian Grand Prix', 'Red Bull Ring', 'Austria', 0),
(4, 'French Grand Prix', 'Circuit Paul Ricard', 'France', 0),
(5, 'Hungarian Grand Prix', 'Hungaroring', 'Hungary', 0),
(6, 'Belgian Grand Prix', 'Circuit de Spa-Francorchamps', 'Belgium', 0),
(7, 'Dutch Grand Prix', 'Circuit Park Zandvoort', 'The Netherlands', 0),
(8, 'Italian Grand Prix', 'Autodromo Nazionale di Monza', 'Italy', 0),
(9, 'Singapore Grand Prix', 'Marina Bay Street Circuit', 'Singapore', 0),
(10, 'Japanese Grand Prix', 'Suzuka Circuit', 'Japan', 0),
(11, 'United States Grand Prix', 'Circuit of the Americas', 'USA', 0),
(12, 'Saudi Arabian Grand Prix', 'Jeddah Corniche Circuit', 'Saudi Arabia', 0),
(13, 'Mexico City Grand Prix', 'Autodromo Hermanos Rodriguez', 'Mexico', 0),
(14, 'Brazilian Grand Prix', 'Autodromo Jose Carlos Pace', 'Brazil', 0),
(15, 'Abu Dhabi Grand Prix', 'Yas Marina Circuit', 'Abu Dhabi', 0),
(16, 'Australian Grand Prix', 'Albert Park Grand Prix Circuit', 'Australia', 0),
(17, 'Emilia Romagna Grand Prix', 'Autodromo Enzo e Dino Ferrari', 'Italy', 0),
(18, 'Miami Grand Prix', 'Miami International Autodrome', 'USA', 0),
(19, 'Spanish Grand Prix', 'Circuit de Barcelona-Catalunya', 'Spain', 0),
(20, 'Monaco Grand Prix', 'Circuit de Monaco', 'Monaco', 0),
(21, 'Azerbaijan Grand Prix', 'Baku City Circuit', 'Azerbijan', 0),
(22, 'Canadian Grand Prix', 'Circuit Gilles Villeneuve', 'Canada', 0);

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
(1, 'Robin', 'RH', 'Robin123', 0, 0, 0, 0, '');

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
  MODIFY `unique_ID_race` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT voor een tabel `race_applied`
--
ALTER TABLE `race_applied`
  MODIFY `unique_ID_applied` int(11) NOT NULL AUTO_INCREMENT;

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
  MODIFY `unique_ID_user` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

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
