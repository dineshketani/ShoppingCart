

export const addCart = (product) => {
    return{
        type:"ADDITEM",
        payload : product
    }
}

export const delItem = (product) =>{
    return{
        type: "DELETE",
        payload : product
    }
    
}