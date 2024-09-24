CREATE DATABASE books_db;

CREATE TABLE `books_db`.`books` (
    `id` INT NOT NULL AUTO_INCREMENT,
    `title` VARCHAR(45) NOT NULL, 
    `desc` VARCHAR(255) NOT NULL,
    `cover` VARCHAR(45) NULL,
    PRIMARY KEY(`id`));