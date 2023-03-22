-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Mar 10, 2023 at 06:46 AM
-- Server version: 10.4.27-MariaDB
-- PHP Version: 8.2.0

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `carshop`
--

-- --------------------------------------------------------

--
-- Table structure for table `ordercar`
--

CREATE TABLE `ordercar` (
  `No` int(11) NOT NULL,
  `Brands` varchar(50) NOT NULL,
  `Images` varchar(300) NOT NULL,
  `Models` varchar(50) NOT NULL,
  `Prices` int(11) NOT NULL,
  `custumer` varchar(23) NOT NULL,
  `phone` varchar(14) NOT NULL,
  `location` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `ordercar`
--

INSERT INTO `ordercar` (`No`, `Brands`, `Images`, `Models`, `Prices`, `custumer`, `phone`, `location`) VALUES
(131, 'McLaren', 'https://www.cardataguide.com/wp-content/uploads/2019/10/McLaren-Senna.jpg', 'Senna', 960000, 'test', '88', 't6'),
(132, 'TOYOTA', 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/Toyota_Supra_Monrepos_2019_IMG_1898.jpg/1920px-Toyota_Supra_Monrepos_2019_IMG_1898.jpg', 'GR Supra', 53595, 'test', '88', 't6');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `ordercar`
--
ALTER TABLE `ordercar`
  ADD PRIMARY KEY (`No`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `ordercar`
--
ALTER TABLE `ordercar`
  MODIFY `No` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=133;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
