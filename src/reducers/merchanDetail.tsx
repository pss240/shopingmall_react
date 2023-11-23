enum ActionType{
    FETCH_MERCHAN_DETAIL = "FETCH_MERCHAN_DETAIL",
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
    payload: Merchan
}

const merchan = (state= {id:0,
    title:'',
    price:0,
    description:'',
    category:'',
    image:'',
    rating:{rate:0,count:0}},action:Action) =>{
    switch (action.type) {
        case "FETCH_MERCHAN_DETAIL":
            return action.payload;
        
        default:
            return state;
    }
}

export default merchan;
