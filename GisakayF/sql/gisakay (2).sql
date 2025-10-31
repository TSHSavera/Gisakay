-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: May 07, 2024 at 04:05 AM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `gisakay`
--

-- --------------------------------------------------------

--
-- Table structure for table `admin`
--

CREATE TABLE `admin` (
  `AdminID` int(11) NOT NULL,
  `AdminUsername` varchar(255) NOT NULL,
  `AdminPassword` varchar(255) NOT NULL,
  `SessionToken` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `admin`
--

INSERT INTO `admin` (`AdminID`, `AdminUsername`, `AdminPassword`, `SessionToken`) VALUES
(4, 'Testing', '12345', 3063322);

-- --------------------------------------------------------

--
-- Table structure for table `barangay`
--

CREATE TABLE `barangay` (
  `BarangayName` varchar(255) NOT NULL,
  `BarangayLimits` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `barangay`
--

INSERT INTO `barangay` (`BarangayName`, `BarangayLimits`) VALUES
('Sample Barangay 2', 12);

-- --------------------------------------------------------

--
-- Table structure for table `schduledata`
--

CREATE TABLE `schduledata` (
  `scheduleDay` tinyint(4) NOT NULL,
  `scheduleTime` time NOT NULL,
  `scheduleTimeBack` time NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `schduledata`
--

INSERT INTO `schduledata` (`scheduleDay`, `scheduleTime`, `scheduleTimeBack`) VALUES
(1, '03:45:00', '17:55:00'),
(2, '07:00:00', '10:00:00'),
(3, '07:00:00', '10:00:00'),
(4, '10:05:00', '15:15:00'),
(5, '22:30:00', '09:30:00'),
(6, '07:00:00', '10:00:00'),
(7, '07:00:00', '10:00:00');

-- --------------------------------------------------------

--
-- Table structure for table `studentdata`
--

CREATE TABLE `studentdata` (
  `StudentID` int(11) NOT NULL,
  `StudentFirstName` varchar(255) NOT NULL,
  `StudentMiddleName` varchar(255) NOT NULL,
  `StudentLastName` varchar(255) NOT NULL,
  `StudentEmail` varchar(255) NOT NULL,
  `StudentAddress` varchar(1000) NOT NULL,
  `StudentContactNumber` bigint(20) NOT NULL,
  `StudentCollegeName` varchar(1000) NOT NULL,
  `StudentBarangay` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `studentdata`
--

INSERT INTO `studentdata` (`StudentID`, `StudentFirstName`, `StudentMiddleName`, `StudentLastName`, `StudentEmail`, `StudentAddress`, `StudentContactNumber`, `StudentCollegeName`, `StudentBarangay`) VALUES
(824865, 'Sandren Troy', 'fawfawfaw', 'Milante', 'awfawfwafawfaw', 'gwagwagawgawgawgawgwaerwawtawt', 9565856431, 'Pogi College', 'Sample Barangay 2'),
(883233, 'fawfwa', 'awfawfawfa', 'fawfw', 'sandrentroym@gmail.com', 'fawfaw', 9565972419, 'Pogi College', 'Sample Barangay 2');

-- --------------------------------------------------------

--
-- Table structure for table `studentschedule`
--

CREATE TABLE `studentschedule` (
  `studentScheduleID` int(11) NOT NULL,
  `studentID` int(11) NOT NULL,
  `studentScheduleDay` tinyint(4) NOT NULL,
  `SerialCode` varchar(38) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `studentschedule`
--

INSERT INTO `studentschedule` (`studentScheduleID`, `studentID`, `studentScheduleDay`, `SerialCode`) VALUES
(1, 883233, 2, 'GFTSS-c5ce1j1n9f5tzqgbm9dm'),
(2, 824865, 7, 'GFTSS-bg9v00l05v2kl0csd40g');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `admin`
--
ALTER TABLE `admin`
  ADD PRIMARY KEY (`AdminID`);

--
-- Indexes for table `barangay`
--
ALTER TABLE `barangay`
  ADD PRIMARY KEY (`BarangayName`);

--
-- Indexes for table `schduledata`
--
ALTER TABLE `schduledata`
  ADD PRIMARY KEY (`scheduleDay`);

--
-- Indexes for table `studentdata`
--
ALTER TABLE `studentdata`
  ADD PRIMARY KEY (`StudentID`),
  ADD KEY `StudentBarangay` (`StudentBarangay`);

--
-- Indexes for table `studentschedule`
--
ALTER TABLE `studentschedule`
  ADD PRIMARY KEY (`studentScheduleID`),
  ADD KEY `studentID` (`studentID`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `admin`
--
ALTER TABLE `admin`
  MODIFY `AdminID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `studentschedule`
--
ALTER TABLE `studentschedule`
  MODIFY `studentScheduleID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `studentdata`
--
ALTER TABLE `studentdata`
  ADD CONSTRAINT `FK_StudentBarangay` FOREIGN KEY (`StudentBarangay`) REFERENCES `barangay` (`BarangayName`) ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
