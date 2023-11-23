enum ActionType{
    FETCH_MERCHAN = "FETCH_MERCHAN",
}

interface Merchan{
    id:number;
    title:string;
    price:number;
    description:string;
    category:string;
    image:string;
    rating:{rate:number,count:number};
}

interface Action{
    type:ActionType,
    payload: Merchan[]
}

const merchans = (state= [],action:Action) =>{
    switch (action.type) {
        case "FETCH_MERCHAN":
            return [...state,...action.payload];
        
        default:
            return state;
    }
}

export default merchans;
