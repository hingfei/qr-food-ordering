# QR-Food-Ordering App
This is the frontend of the QR-food-ordering application. This project consists of the restaurant owner part to manage the restaurant and the customer part to order foods from the restaurant.

## Built With
This project is mainly built with
- React.js
- Material Ui

## Getting Started
First, having Node and npm installed is needed to run the project.
[Installation guide](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm)

**or**

You can also install **yarn** instead.
[Installation guide](https://classic.yarnpkg.com/lang/en/docs/install/#windows-stable)

## Installation
**Make sure you set up the backend for the project from [backend](https://github.com/khooihzhz/qr-food-ordering-backend) then only the project can be run without error.**

Clone the repository
```
git clone https://github.com/khooihzhz/CAT304.git
```

Create a **.env** file in the project root.
``` 
#.env file
REACT_APP_API_URL = <backend_link>
```

In the repository directory, 
```
npm install
or 
yarn install
```

To start a development server, 
```
npm start
or 
yarn start
```

**OR**

If you have Docker installed,
```
docker-compose -f docker-compose.dev.yml up
```
This will start a docker container for development.

### Production version of the application
Run to create a build version of the application (make sure you have the .env file with the backend URL)
```
npm build
or 
yarn build
```

Use **serve** to run the static files [tutorial](https://stackoverflow.com/a/49209041)

**or**

run 
```
docker-compose -f docker-compose.prod.yml build
docker run -p 3000:80 --name react-app app-prod
```

It will serve the static files on port localhost:3000

## What to add next?
Things that is nice to have 
### Unit Testing for each components
> For this project, there is no unit test written yet. Other than that, optimizations are needed.

### Separating applications
> It would be nice to separate the customer side and restaurant owner side to make the project smaller and easier to implement more features for both side in the future

### Payment system
> API for payment system is not implemented


## Contact
This project is contributed by 
- [kahsing69](https://github.com/kahsing69)
- [hingfei](https://github.com/hingfei)
- [Guofoong](https://github.com/Guofoong)
- [khooihzhz](https://github.com/khooihzhz)

## Acknowledgements
List of references and credits that helped completing this project
- [materialui](https://mui.com/)
- [react.js](https://reactjs.org/)
- [dockerizeReactApp](https://www.youtube.com/watch?v=1QK27MUr2Dk&ab_channel=Karan)
- [nginx](https://www.nginx.com/)
- [foodMenuDesign](https://codingartistweb.com/2021/05/responsive-food-menu-without-media-queries/)
- [axios](https://github.com/axios/axios)
- [hdImages](https://unsplash.com/)
- [uiGradients](https://uigradients.com)
- [reactRouter](https://reactrouter.com/)
