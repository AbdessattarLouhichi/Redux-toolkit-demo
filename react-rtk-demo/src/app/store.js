import { configureStore} from "@reduxjs/toolkit";
import logger from "redux-logger";
import cakeReducer from "../features/cake/cakeSlice";
import icecreamReducer from "../features/icecream/icecreamSlice";
import userReducer from "../features/users/userSlice";


const store = configureStore({
    reducer: {
        cake : cakeReducer,
        icecream : icecreamReducer,
        user : userReducer
    },
    Middleware: (getDefaultMiddleware)=> {
        getDefaultMiddleware().concat(logger)
    }
})

export default store


