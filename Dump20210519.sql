-- MySQL dump 10.13  Distrib 8.0.23, for Win64 (x86_64)
--
-- Host: localhost    Database: fitvn_db
-- ------------------------------------------------------
-- Server version	8.0.23

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `exercise`
--

DROP TABLE IF EXISTS `exercise`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `exercise` (
  `exercise_id` int NOT NULL AUTO_INCREMENT,
  `exercise_name` varchar(200) DEFAULT NULL,
  `exercise_img` varchar(200) DEFAULT NULL,
  `exercise_set` int DEFAULT NULL,
  `exercise_rep` int DEFAULT NULL,
  `exercise_type` varchar(45) DEFAULT NULL,
  `exercise_content` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`exercise_id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `exercise`
--

LOCK TABLES `exercise` WRITE;
/*!40000 ALTER TABLE `exercise` DISABLE KEYS */;
INSERT INTO `exercise` VALUES (1,'Lat Pulldown','https://www.thethaothientruong.vn/uploads/2019/bai-tap-lat-pulldown.jpg',3,12,'Lat','Good for build lat');
/*!40000 ALTER TABLE `exercise` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `exerciseplan`
--

DROP TABLE IF EXISTS `exerciseplan`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `exerciseplan` (
  `exerciseplan_id` int NOT NULL AUTO_INCREMENT,
  `user_id` int DEFAULT NULL,
  `exercise_id` int DEFAULT NULL,
  `amount` int DEFAULT NULL,
  PRIMARY KEY (`exerciseplan_id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `exerciseplan`
--

LOCK TABLES `exerciseplan` WRITE;
/*!40000 ALTER TABLE `exerciseplan` DISABLE KEYS */;
INSERT INTO `exerciseplan` VALUES (1,1,1,45);
/*!40000 ALTER TABLE `exerciseplan` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `food`
--

DROP TABLE IF EXISTS `food`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `food` (
  `food_id` int NOT NULL AUTO_INCREMENT,
  `food_name` varchar(200) DEFAULT NULL,
  `food_img` varchar(200) DEFAULT NULL,
  `food_calo` int DEFAULT NULL,
  `food_serving` int DEFAULT NULL,
  `food_type` varchar(50) DEFAULT NULL,
  `food_content` varchar(1000) DEFAULT NULL,
  `protein` int DEFAULT '0',
  `carb` int DEFAULT '0',
  `fat` int DEFAULT '0',
  PRIMARY KEY (`food_id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `food`
--

LOCK TABLES `food` WRITE;
/*!40000 ALTER TABLE `food` DISABLE KEYS */;
INSERT INTO `food` VALUES (1,'Rice','https://cdn.loveandlemons.com/wp-content/uploads/2020/03/how-to-cook-rice.jpg',200,100,'Carb','Good to build muscle, up size and not good for decrease weight',10,80,10),(2,'Bread','https://upload.wikimedia.org/wikipedia/commons/3/33/Fresh_made_bread_05.jpg',150,100,'Carb','Good to build muscle, up size and not good for decrease weight',5,90,5),(3,'Salmon Fish','https://images.thefishsite.com/fish/articles/processing/salmon-fillet.jpeg?profile=article-full',200,100,'Protein','Good protein',25,60,15),(4,'Brown Rice','https://dacsanvanho.com/wp-content/uploads/tin-tuc-tac-dung-cua-gao-lut.jpg',100,100,'Carb','Good to build muscle, up size and not good for decrease weight',10,85,5),(5,'Omega Rice','https://www.world-grain.com/ext/resources/Article-Images/2019/03/Brown-rice_Photo-cred-AdobeStock_136742272_E.jpg?t=1552059040&width=1080',100,100,'Carb','Good to build muscle, up size and not good for decrease weight',10,75,5);
/*!40000 ALTER TABLE `food` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `mealplan`
--

DROP TABLE IF EXISTS `mealplan`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `mealplan` (
  `mealplan_id` int NOT NULL AUTO_INCREMENT,
  `user_name` varchar(50) DEFAULT NULL,
  `food_id` int DEFAULT NULL,
  `amount` int DEFAULT NULL,
  `mealplan_date` date DEFAULT NULL,
  PRIMARY KEY (`mealplan_id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `mealplan`
--

LOCK TABLES `mealplan` WRITE;
/*!40000 ALTER TABLE `mealplan` DISABLE KEYS */;
INSERT INTO `mealplan` VALUES (1,'admin1',2,1,'2021-05-19'),(2,'admin1',1,1,'2021-05-18'),(3,'admin',1,5,'2021-05-18'),(4,'admin',2,5,'2021-05-19'),(5,'admin',3,1,'2021-05-18'),(6,'admin',3,1,'2021-05-19');
/*!40000 ALTER TABLE `mealplan` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user`
--

DROP TABLE IF EXISTS `user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `user` (
  `user_id` int NOT NULL AUTO_INCREMENT,
  `username` varchar(50) DEFAULT NULL,
  `password` varchar(200) DEFAULT NULL,
  `role` int DEFAULT NULL,
  PRIMARY KEY (`user_id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user`
--

LOCK TABLES `user` WRITE;
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
INSERT INTO `user` VALUES (1,'admin','$2a$10$T56krELYWxrxyYu23S38EuumYkZtLjpi7HdVNMzuIn8TadAe8HvU.',0),(2,'admin1','$2a$10$Vtv/EM8GeSI/x55mY41dluPy7gTp2x1fVGA0TfGnrftGgaE2RoX.W',0);
/*!40000 ALTER TABLE `user` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user_info`
--

DROP TABLE IF EXISTS `user_info`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `user_info` (
  `info_id` int NOT NULL AUTO_INCREMENT,
  `user_name` varchar(50) DEFAULT NULL,
  `tdee` int DEFAULT NULL,
  `nutrition_type` int DEFAULT '1',
  PRIMARY KEY (`info_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user_info`
--

LOCK TABLES `user_info` WRITE;
/*!40000 ALTER TABLE `user_info` DISABLE KEYS */;
/*!40000 ALTER TABLE `user_info` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2021-05-19 19:53:42
