# UPrint
- [UPrint](#uprint)
	- [Synopsis](#synopsis)
	- [Technologies & concepts used:](#technologies--concepts-used)
	- [Sketch](#sketch)
	- [Requirements](#requirements)
	- [List of bugs & things to fix](#list-of-bugs--things-to-fix)
## Synopsis

Simple file saving app that can be used to save files into cloud and later print them out from a public printer.

## Technologies & concepts used:
- React
- Express.js
- MongoDB

## How to run
### Backend

1. Create ./backend/config/default.json -file with your configurations. There is an example file in the folder. Basically you need a connection url for your mongo db database.
2. Run `npm install` and then `npm run start`.

### Frontend
3. Run `npm install` and then `npm run start`.
4. Navigate to http://localhost:3000/ and create a user.



## Sketch


## Requirements

		- Application
		- Public git (github, gitlab or bitbucket) to display the code and documentation
		- Simple manual
		- Simple software design document (4-5 pages of text plus the diagrams and explanations)
			- Architecture design
			- Class design
			- Database design
			- UI mocks
			- Static and dynamic flow design (UML: use cases, class diagrams, sequence diagrams)
			- Explanation of the technologies used
			- Future (what could be added, changed etc)
			Examples: https://www.toptal.com/freelance/why-design-documents-matter



## List of bugs & things to fix
  * MongoDB
    * Frontend crashes if there are no users in the database.
      * Priority:low, Storypoints: 2