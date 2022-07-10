-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jun 30, 2022 at 03:19 PM
-- Server version: 10.4.14-MariaDB
-- PHP Version: 7.4.10

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `dbstudent_records`
--

-- --------------------------------------------------------

--
-- Table structure for table `tblstudents`
--

CREATE TABLE `tblstudents` (
  `studentID` int(11) NOT NULL,
  `first_name` varchar(250) NOT NULL,
  `last_name` varchar(250) NOT NULL,
  `address` varchar(250) NOT NULL,
  `gender` varchar(50) NOT NULL,
  `dob` date NOT NULL DEFAULT current_timestamp(),
  `email` varchar(150) NOT NULL,
  `status` varchar(50) DEFAULT NULL,
  `average` float DEFAULT NULL,
  `subject1` float DEFAULT NULL,
  `subject2` float DEFAULT NULL,
  `subject3` float DEFAULT NULL,
  `image` varchar(250) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `tblstudents`
--

INSERT INTO `tblstudents` (`studentID`, `first_name`, `last_name`, `address`, `gender`, `dob`, `email`, `status`, `average`, `subject1`, `subject2`, `subject3`, `image`) VALUES
(342037, 'john', 'doe', 'test avenue', 'Male', '0000-00-00', 'test@gmail.com', 'PASSED', 82.17, NULL, NULL, NULL, ''),
(342038, 'test', 'test123', 'test avenue', 'Male', '2022-06-16', 'test@gmail.com', NULL, NULL, NULL, NULL, NULL, ''),
(342039, 'test123', 'test12345', 'test avenue', 'Male', '2022-07-01', 'taguines@gmail.com', NULL, NULL, NULL, NULL, NULL, ''),
(342040, 'test', 'test123', 'test drive avenue street', 'Male', '2022-06-28', 'test@gmail.com', NULL, NULL, NULL, NULL, NULL, ''),
(342041, 'rachelyn', 'santos', 'colorado street', 'Female', '2022-06-25', 'rachelyn@gmail.com', NULL, NULL, NULL, NULL, NULL, ''),
(342042, 'rachelyn', 'rachelyn2', 'test drive avenue street', 'Female', '2022-06-24', 'test123@gmail.com', NULL, NULL, NULL, NULL, NULL, ''),
(342043, 'rachelyn', 'rachelyn2', 'test drive avenue street', 'Female', '2022-06-30', 'rachelyn@gmail.com', NULL, NULL, NULL, NULL, NULL, ''),
(342044, 'rachelyn', 'rachelyn2', 'test drive avenue street', 'undefined', '0000-00-00', 'rachelyn@gmail.com', 'PASSED', 89, NULL, NULL, NULL, ''),
(342045, 'rachelyn', 'rachelyn2', 'test drive avenue street', 'Female', '2022-06-17', 'test123@gmail.com', NULL, NULL, NULL, NULL, NULL, ''),
(342046, 'test', 'ok', 'BLOCK 1 LOT 64, COLORADO STREET, RIDGEVIEW-1, VICTORIA HOMES, TUNASAN', 'Male', '0000-00-00', 'jayjayingay@gmail.com', 'PASSED', 87.67, 89, 89, 85, ''),
(342047, 'test123', 'test', 'test avenue', 'Female', '2022-06-23', 'test123@gmail.com', NULL, NULL, NULL, NULL, NULL, '2x2 pic.jpg'),
(342048, 'test123', 'test', 'test avenue', 'Female', '2022-06-23', 'test123@gmail.com', NULL, NULL, NULL, NULL, NULL, '2x2 pic.jpg'),
(342049, 'test123', 'test', 'test avenue', 'undefined', '0000-00-00', 'test123@gmail.com', '', 0, 0, 0, 0, 'coder2.jpg'),
(342050, 'rachelyn', 'taguines', 'harvard street', 'Male', '0000-00-00', 'test@gmail.com', 'PASSED', 82.03, 78.7, 78.4, 89, 'adventure-cat.png');

-- --------------------------------------------------------

--
-- Table structure for table `tbluser`
--

CREATE TABLE `tbluser` (
  `tbluser` int(11) NOT NULL,
  `email` varchar(250) NOT NULL,
  `password` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `tbluser`
--

INSERT INTO `tbluser` (`tbluser`, `email`, `password`) VALUES
(1, 'rachelyn@gmail.com', 'c06db68e819be6ec3d26c6038d8e8d1f');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `tblstudents`
--
ALTER TABLE `tblstudents`
  ADD PRIMARY KEY (`studentID`);

--
-- Indexes for table `tbluser`
--
ALTER TABLE `tbluser`
  ADD PRIMARY KEY (`tbluser`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `tblstudents`
--
ALTER TABLE `tblstudents`
  MODIFY `studentID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=342051;

--
-- AUTO_INCREMENT for table `tbluser`
--
ALTER TABLE `tbluser`
  MODIFY `tbluser` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
