

interface Action{
    type:string
}


const categories = (state:'ALL',action:Action) =>{
    switch (action.type) {
        case "MANCLOTH":
            return "men's clothing";
        case "WOMANCLOTH":
            return "women's clothing";
        case "ELECTRONIC":
            return "electronics";
        case "JEWELERY":
            return "jewelery";
        case "ALL":
            return 'ALL';
    
        default:
            return 'ALL';
    }
}

export default categories;