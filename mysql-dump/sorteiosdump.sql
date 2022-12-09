-- MySQL dump 10.13  Distrib 8.0.30, for Win64 (x86_64)
--
-- Host: localhost    Database: bingos
-- ------------------------------------------------------
-- Server version	8.0.28

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
-- Table structure for table `bilhete`
--

use megasorteios;

DROP TABLE IF EXISTS `bilhete`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8 */;
CREATE TABLE `bilhete` (
  `id` int NOT NULL AUTO_INCREMENT,
  `numero` int DEFAULT NULL,
  `status` varchar(255) DEFAULT NULL,
  `sorteioId` int DEFAULT NULL,
  `comprador` int DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`),
  KEY `sorteioId` (`sorteioId`),
  KEY `comprador` (`comprador`),
  CONSTRAINT `bilhete_ibfk_1` FOREIGN KEY (`sorteioId`) REFERENCES `sorteio` (`id`),
  CONSTRAINT `bilhete_ibfk_2` FOREIGN KEY (`comprador`) REFERENCES `cliente` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `bilhete`
--

LOCK TABLES `bilhete` WRITE;
/*!40000 ALTER TABLE `bilhete` DISABLE KEYS */;
/*!40000 ALTER TABLE `bilhete` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `cliente`
--

DROP TABLE IF EXISTS `cliente`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8 */;
CREATE TABLE `cliente` (
  `id` int NOT NULL AUTO_INCREMENT,
  `nome` varchar(255) DEFAULT NULL,
  `sobrenome` varchar(255) DEFAULT NULL,
  `cpf` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `telefone` varchar(30) DEFAULT NULL,
  `senha` varchar(255) DEFAULT NULL,
  `endereco` varchar(255) DEFAULT NULL,
  `numeroEndereco` varchar(255) DEFAULT NULL,
  `bairro` varchar(255) DEFAULT NULL,
  `complemento` varchar(255) DEFAULT NULL,
  `cidade` varchar(255) DEFAULT NULL,
  `uf` varchar(255) DEFAULT NULL,
  `cep` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `cliente`
--

LOCK TABLES `cliente` WRITE;
/*!40000 ALTER TABLE `cliente` DISABLE KEYS */;
/*!40000 ALTER TABLE `cliente` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `imagem`
--

DROP TABLE IF EXISTS `imagem`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8 */;
CREATE TABLE `imagem` (
  `id` int NOT NULL AUTO_INCREMENT,
  `filename` varchar(255) DEFAULT NULL,
  `path` varchar(255) DEFAULT NULL,
  `mimetype` varchar(255) DEFAULT NULL,
  `sorteioId` int DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`),
  KEY `sorteioId` (`sorteioId`),
  CONSTRAINT `imagem_ibfk_1` FOREIGN KEY (`sorteioId`) REFERENCES `sorteio` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=30 DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `imagem`
--

LOCK TABLES `imagem` WRITE;
/*!40000 ALTER TABLE `imagem` DISABLE KEYS */;
INSERT INTO `imagem` VALUES (9,'1665153217988-Atestado.jpeg','resources\\uploads\\1665153217988-Atestado.jpeg','image/jpeg',18,'2022-10-07 11:33:45','2022-10-07 11:33:45'),(10,'1665153218033-CN_BANNER_BENEFICIOS_HOME_DESLOGADO.png','resources\\uploads\\1665153218033-CN_BANNER_BENEFICIOS_HOME_DESLOGADO.png','image/png',18,'2022-10-07 11:33:45','2022-10-07 11:33:45'),(17,'1665671928915-nada.png','resources\\uploads\\1665671928915-nada.png','image/png',19,'2022-10-13 11:38:48','2022-10-13 11:38:48'),(18,'1665671986526-mm.png','resources\\uploads\\1665671986526-mm.png','image/png',19,'2022-10-13 11:39:46','2022-10-13 11:39:46'),(19,NULL,NULL,'image/png',23,'2022-10-14 17:47:48','2022-10-14 17:47:48'),(20,NULL,NULL,'image/jpeg',23,'2022-10-14 17:47:48','2022-10-14 17:47:48'),(21,NULL,NULL,'image/png',24,'2022-10-17 09:50:39','2022-10-17 09:50:39'),(22,NULL,NULL,'image/jpeg',24,'2022-10-17 09:51:13','2022-10-17 09:51:13'),(23,NULL,'https://sorteio-imagens.s3.sa-east-1.amazonaws.com/1666011443335-CN_BANNER_BENEFICIOS_HOME_DESLOGADO.png','image/png',25,'2022-10-17 09:59:28','2022-10-17 09:59:28'),(24,NULL,'https://sorteio-imagens.s3.sa-east-1.amazonaws.com/1666011443336-Atestado.jpeg','image/jpeg',25,'2022-10-17 09:59:29','2022-10-17 09:59:29'),(25,'1666011845195-CN_BANNER_BENEFICIOS_HOME_DESLOGADO.png','https://sorteio-imagens.s3.sa-east-1.amazonaws.com/1666011845195-CN_BANNER_BENEFICIOS_HOME_DESLOGADO.png','image/png',27,'2022-10-17 10:04:25','2022-10-17 10:04:25'),(26,'1666011845196-Atestado.jpeg','https://sorteio-imagens.s3.sa-east-1.amazonaws.com/1666011845196-Atestado.jpeg','image/jpeg',27,'2022-10-17 10:04:26','2022-10-17 10:04:26');
/*!40000 ALTER TABLE `imagem` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `paymentinfo`
--

DROP TABLE IF EXISTS `paymentinfo`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8 */;
CREATE TABLE `paymentinfo` (
  `id` int NOT NULL,
  `paymentMethod` varchar(45) DEFAULT NULL,
  `pixType` varchar(45) DEFAULT NULL,
  `paymentNumber` varchar(45) DEFAULT NULL,
  `owner` varchar(45) DEFAULT NULL,
  `bank` varchar(45) DEFAULT NULL,
  `createdAt` datetime DEFAULT NULL,
  `updatedAt` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `paymentinfo`
--

LOCK TABLES `paymentinfo` WRITE;
/*!40000 ALTER TABLE `paymentinfo` DISABLE KEYS */;
INSERT INTO `paymentinfo` VALUES (1,'pix','celular','(87) 94483392','Gustavo Nunes','Nubank',NULL,'2022-10-28 09:01:45'),(2,'pix','cpf','034.332.443-00','Claumir Peixoto','PagSeguro',NULL,NULL);
/*!40000 ALTER TABLE `paymentinfo` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `sequelizemeta`
--

DROP TABLE IF EXISTS `sequelizemeta`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8 */;
CREATE TABLE `sequelizemeta` (
  `name` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  PRIMARY KEY (`name`),
  UNIQUE KEY `name` (`name`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `sequelizemeta`
--

LOCK TABLES `sequelizemeta` WRITE;
/*!40000 ALTER TABLE `sequelizemeta` DISABLE KEYS */;
INSERT INTO `sequelizemeta` VALUES ('20220826193452-create-usuario.js'),('20220826193453-create-cliente.js'),('20220826194659-create-sorteio.js'),('20220830202002-create-bilhete.js'),('20221006145543-create-imagem.js');
/*!40000 ALTER TABLE `sequelizemeta` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `sorteio`
--

DROP TABLE IF EXISTS `sorteio`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8 */;
CREATE TABLE `sorteio` (
  `id` int NOT NULL AUTO_INCREMENT,
  `titulo` varchar(255) DEFAULT NULL,
  `descricao` varchar(255) DEFAULT NULL,
  `mainImage` varchar(255) DEFAULT NULL,
  `data` datetime DEFAULT NULL,
  `premio` varchar(255) DEFAULT NULL,
  `ganhador` int DEFAULT NULL,
  `valorBilhete` decimal(20,2) DEFAULT NULL,
  `totalBilhetes` int DEFAULT NULL,
  `bilhetesVendidos` int DEFAULT NULL,
  `status` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`),
  KEY `ganhador` (`ganhador`),
  CONSTRAINT `sorteio_ibfk_1` FOREIGN KEY (`ganhador`) REFERENCES `cliente` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=30 DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `sorteio`
--

LOCK TABLES `sorteio` WRITE;
/*!40000 ALTER TABLE `sorteio` DISABLE KEYS */;
/*!40000 ALTER TABLE `sorteio` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `usuario`
--

DROP TABLE IF EXISTS `usuario`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8 */;
CREATE TABLE `usuario` (
  `id` int NOT NULL AUTO_INCREMENT,
  `login` varchar(255) DEFAULT NULL,
  `senha` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `usuario`
--

LOCK TABLES `usuario` WRITE;
/*!40000 ALTER TABLE `usuario` DISABLE KEYS */;
INSERT INTO `usuario` VALUES (1,'gustavo@gmail.com','$2b$10$EqeEdNvDf8yeawUDaqSXD.ntOkqLHtGIcqBeIOFeuPFqfRVcY0BKa','2022-10-06 14:47:18','2022-10-06 14:47:18');
/*!40000 ALTER TABLE `usuario` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-11-30  9:46:14
