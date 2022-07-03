# UPrint
- [UPrint](#uprint)
	- [Synopsis](#synopsis)
	- [Technologies & concepts used:](#technologies--concepts-used)
	- [Sketch](#sketch)
	- [Requirements](#requirements)
	- [List of bugs & things to fix](#list-of-bugs--things-to-fix)
## Synopsis

PoC for file saving app that could be used to save files into cloud and later print them out from a public printer.

## Technologies & concepts used:
- React
- Express.js
- MongoDB
- Docker & Docker-compose
- JWT Tokens

## How to run using docker container for MongoDB
### Backend
1. Install docker and login. In ./backend run `docker-compose up -d`. This will start the mongodb container.
2. Then run `npm install` and `npm run start`. Backend should now be running (and be connected to the mongodb).

### Frontend
3. In ./frontend run `npm install` and then `npm run start`. Frontend should now be running.
4. Navigate to http://localhost:3000/. You should see a login page where you can register a user.

## How to run locally using MongoDB Atlas
Set up MongoDB Atlas. Then get use the application connection url in backend/config/default.json for mongoURI. Then continue from step 2. 



## AWS deploy test notes
Tested running the app in AWS EC2 instance (in dev mode). Here are some notes:

* Create EC2 and create security group for SSH login.
* SSH Login and start mongoDB, backend and frontend.
* Setup nginx
  * Copy configuration in ./nginx-example-config-for-aws.txt and modify the IP addresses.
  * `sudo apt update` `sudo apt upgrade` `sudo apt install nginx`
  * `sudo service nginx start`. App should be now running in the public IP of server.


## List of possible features, bugs and things to fix
  * Frontend
    * Frontend crashes if there are no users in the database.
      * Priority:low, Storypoints: 2
  * Security
    * Check uploading of files for security loopholes
      * Priority:high if production otherwise low, Storypoints: 8
  * Add displaying of images to modals (maybe test S3 bucket in AWS)
  * Create the actual printing feature
  * Add map snippet for printer locations
  * Add history logs
  * Add some settings 
    * Possibility to remove user
    * Billing options
  * Make UI more beatiful and mobile friendly
