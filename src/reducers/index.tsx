import { combineReducers } from "redux";
import categories from "./categories";
import merchans from "./merchan";
import merchansInCart from "./cart";
import merchan from "./merchanDetail";
const rootReducer = combineReducers({
    merchans,
    categories,
    merchansInCart,
    merchan
})

export default rootReducer

export type RootState = ReturnType<typeof rootReducer>