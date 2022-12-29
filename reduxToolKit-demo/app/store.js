const configureStore = require('@reduxjs/toolkit').configureStore;
const cakeReducer = require('../features/cake/cakeSlice');
const icecreamReducer = require('../features/icecream/icecreamSlice');
const userReducer = require('../features/users/userSlice');
const reduxLogger = require('redux-logger');
const logger = reduxLogger.createLogger();

const store = configureStore({
    reducer : {
        cake : cakeReducer,
        icecream :icecreamReducer,
        user : userReducer
    },
    Middleware: (getDefaultMiddleware)=>{
        getDefaultMiddleware().concat(logger)
    }
});
console.log(userReducer)
module.exports = store;