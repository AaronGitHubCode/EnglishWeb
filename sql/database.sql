CREATE DATABASE WEB;

CREATE TABLE IF NOT EXISTS USER (
    ID INT,
    USERNAME VARCHAR(20),
    PASSWORD VARCHAR(20)
);

CREATE TABLE IF NOT EXISTS PLAYERUSER (
    USER_ID INT,
    WINS INT,
    LOSSES INT,
    CONSTRAINT FK FOREIGN KEY(USER_ID) REFERENCES USER(ID)
);

CREATE TABLE IF NOT EXISTS ADMINISTRATOR (
    ADMIN_ID INT,
    CONSTRAINT FK FOREIGN KEY(ADMIN_ID) REFERENCES USER(ID)
);

DELIMITER //
CREATE FUNCTION ADD_TEST_USER (_ID INT, _USERNAME VARCHAR, _PASSWORD VARCHAR) RETURNS BOOLEAN
DETERMINISTIC
BEGIN
    INSERT INTO USER (ID, USERNAME, PASSWORD) VALUES (_ID, _USERNAME, _PASSWORD);
END//
DELIMITER ;