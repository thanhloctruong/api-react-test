var inittialState = [
    {
        id : 1,
        name : "ip 6 plus",
        price : 400,
        status : true 
    },
    {
        id : 2,
        name : "ip 7 plus",
        price : 500,
        status : false 
    },
    {
        id : 3,
        name : "ip 8 plus",
        price : 600,
        status : true 
    }
];
const products = (state = inittialState, action) => {
    switch(action.type ){
        default: return [...state];
    }
}
export default products;