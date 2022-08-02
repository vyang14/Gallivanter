-- Exported from QuickDBD: https://www.quickdatabasediagrams.com/
-- Link to schema: https://app.quickdatabasediagrams.com/#/d/TAPiIi
-- NOTE! If you have used non-SQL datatypes in your design, you will have to change these here.
DROP DATABASE IF EXISTS gallivanter_db;
CREATE DATABASE gallivanter_db;

USE gallivanter_db;

-- CREATE TABLE gall_users (
--     UserID int  NOT NULL ,
--     username string  NOT NULL ,
--     email string  NOT NULL ,
--     password string  NULL ,
--     PRIMARY KEY (
--         UserID
--     ),
--     CONSTRAINT uc_gall_users_email UNIQUE (
--         email
--     )
-- );

-- CREATE TABLE gall_UserData (
--     ID int  NOT NULL ,
--     CustomerID int  NOT NULL ,
--     name string  NOT NULL ,
--     Address string  NOT NULL ,
--     phone varchar(30)  NOT NULL ,
--     mobile varchar(30)  NOT NULL ,
--     PlannedTrips string  NOT NULL ,
--     CompletedTrips string  NOT NULL ,
--     Reviews int  NOT NULL ,
--     PRIMARY KEY (
--         ID
--     )
-- );

-- CREATE TABLE gall_PlannedTrips (
--     PTripID int  NOT NULL ,
--     OrderID int  NOT NULL ,
--     Name varchar(200)  NOT NULL ,
--     locations string  NOT NULL ,
--     Travelers int  NOT NULL ,
--     Price money  NOT NULL ,
--     PRIMARY KEY (
--         PTripID
--     )
-- );

-- CREATE TABLE gall_CompletedTrips (
--     CTripID int  NOT NULL ,
--     Name varchar(200)  NOT NULL ,
--     locations string  NOT NULL ,
--     Travelers int  NOT NULL ,
--     Price money  NOT NULL ,
--     PRIMARY KEY (
--         CTripID
--     )
-- );

-- CREATE TABLE gall_Locations (
--     locID int  NOT NULL ,
--     review string  NOT NULL ,
--     cityName varchar(255)  NOT NULL ,
--     countryID int  NOT NULL ,
--     PRIMARY KEY (
--         locID
--     )
-- );

-- CREATE TABLE gall_Countries (
--     ID int  NOT NULL ,
--     countryCode varchar(10)  NOT NULL ,
--     countryName varchar(255)  NOT NULL ,
--     PRIMARY KEY (
--         ID
--     )
-- );

-- ALTER TABLE gall_UserData ADD CONSTRAINT fk_gall_UserData_CustomerID FOREIGN KEY(CustomerID)
-- REFERENCES gall_users (UserID);

-- ALTER TABLE gall_UserData ADD CONSTRAINT fk_gall_UserData_Reviews FOREIGN KEY(Reviews)
-- REFERENCES gall_Locations (review);

-- ALTER TABLE gall_PlannedTrips ADD CONSTRAINT fk_gall_PlannedTrips_OrderID_Travelers FOREIGN KEY(OrderID, Travelers)
-- REFERENCES gall_UserData (PlannedTrips, ID);

-- ALTER TABLE gall_PlannedTrips ADD CONSTRAINT fk_gall_PlannedTrips_locations FOREIGN KEY(locations)
-- REFERENCES gall_Locations (locID);

-- ALTER TABLE gall_CompletedTrips ADD CONSTRAINT fk_gall_CompletedTrips_CTripID_Travelers FOREIGN KEY(CTripID, Travelers)
-- REFERENCES gall_UserData (CompletedTrips, ID);

-- ALTER TABLE gall_CompletedTrips ADD CONSTRAINT fk_gall_CompletedTrips_locations FOREIGN KEY(locations)
-- REFERENCES gall_Locations (locID);

-- ALTER TABLE gall_Locations ADD CONSTRAINT fk_gall_Locations_countryID FOREIGN KEY(countryID)
-- REFERENCES gall_Countries (ID);

-- CREATE INDEX idx_gall_users_username
-- ON gall_users (username);

