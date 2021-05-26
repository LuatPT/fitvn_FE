begin;
set transaction read write;
CREATE TABLE exercise (
  exercise_id int NOT NULL ,
  exercise_name varchar(200) DEFAULT NULL,
  exercise_img varchar(200) DEFAULT NULL,
  exercise_set int DEFAULT NULL,
  exercise_rep int DEFAULT NULL,
  exercise_type varchar(45) DEFAULT NULL,
  exercise_content varchar(45) DEFAULT NULL,
  PRIMARY KEY (exercise_id)
);

INSERT INTO exercise VALUES (1,'Lat Pulldown','https://www.thethaothientruong.vn/uploads/2019/bai-tap-lat-pulldown.jpg',3,12,'Lat','Good for build lat');

CREATE TABLE exerciseplan (
  exerciseplan_id int NOT NULL ,
  user_id int DEFAULT NULL,
  exercise_id int DEFAULT NULL,
  amount int DEFAULT NULL,
  PRIMARY KEY (exerciseplan_id)
) ;

INSERT INTO exerciseplan VALUES (1,1,1,45);

CREATE TABLE food (
  food_id int NOT NULL ,
  food_name varchar(200) DEFAULT NULL,
  food_img varchar(200) DEFAULT NULL,
  food_calo int DEFAULT NULL,
  food_serving int DEFAULT NULL,
  food_type varchar(50) DEFAULT NULL,
  food_content varchar(1000) DEFAULT NULL,
  protein int DEFAULT '0',
  carb int DEFAULT '0',
  fat int DEFAULT '0',
  PRIMARY KEY (food_id)
);

INSERT INTO food VALUES (1,'Rice','https://cdn.loveandlemons.com/wp-content/uploads/2020/03/how-to-cook-rice.jpg',200,100,'Carb','Good to build muscle, up size and not good for decrease weight',10,80,10),(2,'Bread','https://upload.wikimedia.org/wikipedia/commons/3/33/Fresh_made_bread_05.jpg',150,100,'Carb','Good to build muscle, up size and not good for decrease weight',5,90,5),(3,'Salmon Fish','https://images.thefishsite.com/fish/articles/processing/salmon-fillet.jpeg?profile=article-full',200,100,'Protein','Good protein',25,60,15),(4,'Brown Rice','https://dacsanvanho.com/wp-content/uploads/tin-tuc-tac-dung-cua-gao-lut.jpg',100,100,'Carb','Good to build muscle, up size and not good for decrease weight',10,85,5),(5,'Omega Rice','https://www.world-grain.com/ext/resources/Article-Images/2019/03/Brown-rice_Photo-cred-AdobeStock_136742272_E.jpg?t=1552059040&width=1080',100,100,'Carb','Good to build muscle, up size and not good for decrease weight',10,75,5);

CREATE TABLE mealplan (
  mealplan_id int NOT NULL ,
  user_name varchar(50) DEFAULT NULL,
  food_id int DEFAULT NULL,
  amount int DEFAULT NULL,
  mealplan_date date DEFAULT NULL,
  PRIMARY KEY (mealplan_id)
) ;

INSERT INTO mealplan VALUES (1,'admin1',2,1,'2021-05-19'),(2,'admin1',1,1,'2021-05-18'),(3,'admin',1,5,'2021-05-18'),(4,'admin',2,5,'2021-05-19'),(5,'admin',3,1,'2021-05-18'),(6,'admin',3,1,'2021-05-19');

CREATE TABLE users (
  user_id int NOT NULL ,
  username varchar(50) DEFAULT NULL,
  password varchar(200) DEFAULT NULL,
  role int DEFAULT NULL,
  PRIMARY KEY (user_id)
) ;

INSERT INTO users VALUES (1,'admin','$2a$10$T56krELYWxrxyYu23S38EuumYkZtLjpi7HdVNMzuIn8TadAe8HvU.',0),(2,'admin1','$2a$10$Vtv/EM8GeSI/x55mY41dluPy7gTp2x1fVGA0TfGnrftGgaE2RoX.W',0);

CREATE TABLE user_info (
  info_id int NOT NULL ,
  user_name varchar(50) DEFAULT NULL,
  tdee int DEFAULT NULL,
  nutrition_type int DEFAULT '1',
  PRIMARY KEY (info_id)
);

Commit;