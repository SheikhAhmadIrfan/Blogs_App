import { configureStore } from "@reduxjs/toolkit";
import { Fetchblogslice } from "../slices/Fetchblogslice";
import { Fetchuserblogslice } from "../slices/Fetchuserblogslice";

const store=configureStore({
    reducer:{
        Fetchblogslice:Fetchblogslice.reducer,
        Fetchuserblogslice:Fetchuserblogslice.reducer
    }
})

export default store;