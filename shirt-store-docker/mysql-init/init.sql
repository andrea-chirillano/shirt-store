CREATE DATABASE IF NOT EXISTS `shirt-store`;
CREATE USER IF NOT EXISTS 'user'@'%' IDENTIFIED BY 'pass1234';
GRANT ALL PRIVILEGES ON `shirt-store`.* TO 'user'@'%';
FLUSH PRIVILEGES;
