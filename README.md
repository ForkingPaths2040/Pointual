# [Pointual](https://pointual.netlify.app/)

An employee management app for a time and attendance policy. Effectively, admins and employees are presumably already available. An admin is able to track employees through their tardies and absences along with when they were documented after reaching certain levels of accumulation.

- [Overview](#overview)
  - [Features](#features)
  - [Goals](#goals)
  - [Challenges](#challenges)
- [MVP](#mvp)
  - [Client (Front End)](#client-front-end)
    - [Wireframes](#wireframes)
    - [Component Tree](#component-tree)
    - [Component Hierarchy](#component-hierarchy)
    - [Time Estimates](#time-estimates)
  - [Server (Back End)](#server-back-end)
    - [ERD Model](#erd-model)
  - [Libraries and Dependencies](#libraries-and-dependencies)
- [Post-MVP](#post-mvp)
- [Code Showcase](#code-showcase)
- [Code Issues & Resolutions](#code-issues--resolutions)

<br>

### Features

- _An admin exists and can login_
- _Acess index of employees_
- _Full CRUD on infractions table_
- _Full CRUD on documentations table_
- _Running total of points from the total amount of infractions_
- _See an index of infractions from a specific date or by employee_
- _Point values have zones to alert the admin when an employee wiil receive a verbal, written, and final warning or a termination._

<br>

### Goals

- _Provide a quick and easy way to submit infractions and documentations_
- _Provide accountability by reviewing total infractions from specific date_
- _Quick acknowledgement to see which employees need to be reconsicled_

<br>

### Challenges

- _Ensure that each infraction entry affects the state of the employee's point value_
- _The point zone alert reflect from employee's point value_
- _Date method is always tricky when implementing_
- _Understanding ERD_

<br>

## MVP

### Client (Front End)

#### [Wireframes](https://www.figma.com/file/VK6RBT5ETYWBEjW21Ci1S0/Pointual.?node-id=0%3A1)

#### [Component tree](https://whimsical.com/8QHpX8t88mHfGeKKt6wbsD)

#### Component Hierarchy

```structure

src
|__ assets/
      |__ fonts
      |__ icons
      |__ images
|__ components/
      |__ Header.jsx
      |__ Overlay.jsx
|__ containers/
      |__ MainContainer.jsx
|__ layouts/
      |__ Layout.jsx
      |__ EmployeeDetail.jsx
|__ screens/
      |__ Login.jsx
      |__ Employees.jsx
      |__ Infractions.jsx
      |__ Documentations.jsx

|__ services/
      |__ infractions.js
      |__ documentations.js

```

#### Time Estimates

| Backend                    | Priority | Estimated Time | Actual Time |
| -------------------------- | :------: | :------------: | :---------: |
| File structure setup       |    H     |     1 hrs      |    2 hrs    |
| Rails setup                |    H     |    20 mins     |   20 mins   |
| Users/Authentication       |    H     |     3 hrs      |    3 hrs    |
| Scaffold infractions       |    H     |    10 mins     |    1 hr     |
| Scaffold documentations    |    H     |    10 mins     |     N/A     |
| Model associations         |    H     |     1 hrs      |    1 hr     |
| Verify Schema / Migrations |    H     |     1 hrs      |   30 min    |
| Seed file                  |    H     |     1 hrs      |    2 hr     |
| Controllers                |    H     |     3 hrs      |    5 hrs    |
| Routes                     |    H     |    10 mins     |   30 mins   |
| Testing backend            |    H     |     2 hrs      |    2 hrs    |
| File structure setup       |    H     |     1 hrs      |    1 hrs    |
| TOTAL                      |          |    13.8 hrs    |   18 hrs    |

<br>

| Frontend              | Priority | Estimated Time | Actual Time |
| --------------------- | :------: | :------------: | ----------- |
| File structure setup  |    H     |     1 hrs      | 1 hrs       |
| Gather assets         |    H     |     1 hrs      | 1 hrs       |
| Services              |    H     |     6 hrs      | 4 hrs       |
| Design                |    H     |     10 hrs     | 15 hrs      |
| Layout/Header         |    H     |     :1 hrs     |             |
| Layout/EmployeeDetail |    H     |     :4 hrs     |             |
| Employees             |    H     |     :1 hrs     |             |
| Infractions           |    H     |     :3 hrs     |             |
| Documentations        |    H     |     :1 hrs     | N/A         |
| Components            |    H     |     3 hrs      | 8 hrs       |
| Debugging             |    H     |     3 hrs      | 4 hrs       |
| TOTAL                 |          |     29 hrs     | 32 hrs      |

<br>

### Server (Back End)

<br>

#### [ERD Model](https://drive.google.com/file/d/1CpZfCh-gnbMOBZC7Ndsy-6-HOgV2Gdww/view?usp=sharing)

<br>

### Libraries and Dependencies

|         Library         | Description                                                                                                                                           |
| :---------------------: | :---------------------------------------------------------------------------------------------------------------------------------------------------- |
|          React          | _React is a JavaScript library for creating user interfaces._                                                                                         |
|    React Router Dom     | _DOM bindings for React Router_                                                                                                                       |
|          Axios          | _Promise based HTTP client for the browser and node.js_                                                                                               |
| Material UI Table/Icons | _Plugin_                                                                                                                                              |
|          Rails          | _A web-application framework that includes everything needed to create database-backed web applications according to the Model-View-Controller (MVC)_ |
|          CORS           | _Node.js CORS middleware_                                                                                                                             |
|         bcrypt          | _bcrypt is a password-hashing function_                                                                                                               |
|           jwt           | _JSON web-token_                                                                                                                                      |
|       React Modal       | _overlay plugin_                                                                                                                                      |

<br>

## Post-MVP

- Build out screens for Zones, Status, Logs
- Search employees
- Filter by date
- CRUD for employees
- Signup as a company
- Login as a company then login as a user
- Create a clients/company table

---

## Code Showcase

TBD

## Code Issues & Resolutions

TBD
