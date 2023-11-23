enum ActionType{
    FETCH_CART = "FETCH_CART",
    PLUS_COUNT = "PLUS_COUNT",
}

interface Merchan{
    id:number;
    title:string;
    price:number;
    description:string;
    category:string;
    image:string;
    rating:{rate:number,count:number};
    incart:number;
}

interface Action{
    type:ActionType,
    payload: Merchan
}

const merchansInCart = (state= [],action:Action) =>{
    switch (action.type) {
        case "FETCH_CART":
            return [...state,{...action.payload,incart:1}];
        default:
            return state;
    }
}

export default merchansInCart;