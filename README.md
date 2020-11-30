# Pointual

An employee management app for a time and attendance policy.

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

- _Provide a quick and easy way to submit infractions_
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

| Backend                    |       Priority        | Estimated Time | Time Invested | Actual Time |
| -------------------------- | :-------------------: | :------------: | :-----------: | :---------: | --- |
| File structure setup       |           H           |     1 hrs      |               |     TBD     |
| Rails setup                |           H           |    20 mins     |               |     TBD     |
| Users/Authentication       |           H           |     3 hrs      |               |     TBD     |
| Scaffold infractions       |           H           |    10 mins     |               |     TBD     |
| Scaffold documentations    |           H           |    10 mins     |               |     TBD     |
| Model associations         |           H           |     1 hrs      |               |     TBD     |
| Verify Schema / Migrations |           H           |     1 hrs      |               |     TBD     |
| Seed file                  |           H           |     1 hrs      |               |     TBD     |
| Controllers                |           H           |     3 hrs      |               |     TBD     |
| Routes                     |           H           |    10 mins     |               |     TBD     |
| Testing backend            |           H           |     2 hrs      |               |     TBD     |
| File structure setup       |           H           |     1 hrs      |               |     TBD     |
| TOTAL                      |                       |    13.8 hrs    |               |     TBD     |
| --------------------       | :-------------------: | :------------: | :-----------: | :---------: | --- |
| Frontend                   |       Priority        | Estimated Time | Time Invested | Actual Time |
| File structure setup       |           H           |     1 hrs      |               |     TBD     |
| Gather assets              |           H           |     1 hrs      |               |     TBD     |
| Services                   |           H           |     6 hrs      |               |     TBD     |
| Design                     |           H           |     15 hrs     |               |     TBD     |
| -                          |     Layout/Header     |       H        |     1 hrs     |             | TBD |
| -                          | Layout/EmployeeDetail |       H        |     4 hrs     |             | TBD |
| -                          |       Employees       |       H        |     1 hrs     |             | TBD |
| -                          |      Infractions      |       H        |     3 hrs     |             | TBD |
| -                          |    Documentations     |       H        |     1 hrs     |             | TBD |
| -                          |         Other         |       H        |     5 hrs     |             | TBD |
| -                          |        Mobile         |       H        |    10 hrs     |             | TBD |
| Components                 |           H           |     3 hrs      |               |     TBD     |
| Debugging                  |           H           |     3 hrs      |               |     TBD     |
| TOTAL                      |                       |     29 hrs     |               |     TBD     |

<br>

### Server (Back End)

<br>

#### [ERD Model](https://drive.google.com/file/d/1CpZfCh-gnbMOBZC7Ndsy-6-HOgV2Gdww/view?usp=sharing)

<br>

### Libraries and Dependencies

|     Library      | Description                                                                                                                                           |
| :--------------: | :---------------------------------------------------------------------------------------------------------------------------------------------------- |
|      React       | _React is a JavaScript library for creating user interfaces._                                                                                         |
| React Router Dom | _DOM bindings for React Router_                                                                                                                       |
|      Axios       | _Promise based HTTP client for the browser and node.js_                                                                                               |
|  ag-grid-react   | _PLugin_                                                                                                                                              |
|      Rails       | _A web-application framework that includes everything needed to create database-backed web applications according to the Model-View-Controller (MVC)_ |
|       CORS       | _Node.js CORS middleware_                                                                                                                             |
|      bcrypt      | _bcrypt is a password-hashing function_                                                                                                               |
|       jwt        | _JSON web-token_                                                                                                                                      |

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
