![License](https://img.shields.io/github/license/chaochingvang/weekend-redux-feedback-loop.svg?style=for-the-badge) ![Repo Size](https://img.shields.io/github/languages/code-size/chaochingvang/weekend-redux-feedback-loop.svg?style=for-the-badge) ![TOP_LANGUAGE](https://img.shields.io/github/languages/top/chaochingvang/weekend-redux-feedback-loop.svg?style=for-the-badge) ![FORKS](https://img.shields.io/github/forks/chaochingvang/weekend-redux-feedback-loop.svg?style=for-the-badge&social) ![Stars](https://img.shields.io/github/stars/chaochingvang/weekend-redux-feedback-loop.svg?style=for-the-badge)
    
# The Reflection Injection

## Table of Contents

- [The Reflection Injection](#the-reflection-injection)
  - [Table of Contents](#table-of-contents)
  - [Description](#description)
  - [Built With](#built-with)
  - [Getting Started](#getting-started)
    - [Prerequisites](#prerequisites)
    - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
  - [Acknowledgements](#acknowledgements)
  - [Contacts](#contacts)

## Description

This application is a single page application that have the users answer a short reflection survey. This is done with the help of React and Redux allowing for the storing of global states. Along with this, this application utilizes Axios to send these datas over to a PostgreSQL database. This application uses CRUD methods. 

<!-- ## Screenshots

<img src="" /> -->

## Built With

<a href="https://developer.mozilla.org/en-US/docs/Web/CSS"><img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original.svg" height="40px" width="40px" /></a><a href="https://developer.mozilla.org/en-US/docs/Web/HTML"><img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original.svg" height="40px" width="40px" /></a><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript"><img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" height="40px" width="40px" /></a><a href="https://material-ui.com/"><img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/materialui/materialui-original.svg" height="40px" width="40px" /></a><a href="https://nodejs.org/en/"><img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original.svg" height="40px" width="40px" /></a><a href="https://www.postgresql.org/"><img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/postgresql/postgresql-original.svg" height="40px" width="40px" /></a><a href="https://reactjs.org/"><img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg" height="40px" width="40px" /></a><a href="https://redux.js.org/"><img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/redux/redux-original.svg" height="40px" width="40px" /></a>

## Getting Started

Aside from having the necessary softwares to be able to run the code, no further background information is need to observe and use the functionalities of this project.  

### Prerequisites

Softwares used in creating this project includes:

- Visual Studio Code
- PostgreSQL
- Postico
- Postman

The project will require alterations and possibly additional lines of codes if used with softwares that are not listed above. 

### Installation

To run this project, the user should fork the repository onto their own GitHub repository. In the user's repository, go ahead and copy link and clone onto local system. The project will then be installed using npm by navigating to folder:

- $ cd ../weekend-redux-feedback-loop
- $ npm install

Create a local sql database using PostgreSQL with the provided database.sql file. Using different database systems may require the user to alter or add additional lines of codes in the project to reflect the example database provided. 

To start up the project, simply run the npm command lines of:

- npm run server
- npm run client

## Usage

Once the project is up and running, the user should be redirected to the browser with the project loaded. If not, open up a browser and enter in the url: 
- localhost:3000

Once started, the user will be prompted to start a new feedback survey. The feedback survey will ask the user a series of questions upon entering in valid data. 

Upon reaching the end of the survey, the user will be shown their survey responses and asked to confirm the information to submit. Once submitted, the data is then sent over to the PostgreSQL database and the user is given the option to start a new feedback if they so wish to. 

To access the previous records of the reflection surveys, the user must navigate to 'localhost:3000/admin'. On this page, the user will see all previous data entered into the database and the date the submission took place. Here, the user will also have the option to delete an entry from the database. 


## License

<a href="https://choosealicense.com/licenses/unlicense/"><img src="https://raw.githubusercontent.com/johnturner4004/readme-generator/master/src/components/assets/images/unlicense.svg" height=40 />The Unlicense</a>

## Acknowledgements

The project was made possible with the help of friends, families and especially with the help of the Solinas Cohort at Prime Digital Academy.




README.md created using template created by John Turner.
<a href="https://johnturner4004.github.io/readme-generator/">README.md generator link</a>

## Contacts

<a href="https://www.linkedin.com/in/chaochingvang"><img src="https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white" /></a>  <a href="mailto:chaoching.vang@gmail.com"><img src=https://raw.githubusercontent.com/johnturner4004/readme-generator/master/src/components/assets/images/email_me_button_icon_151852.svg /></a>