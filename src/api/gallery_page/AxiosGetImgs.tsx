import axios from "axios"
import { FC } from "react";


    
const api_key = "live_wCSQrK0y86aqtTKrwgFOAe92Maam3kDZ8H0e8IEGBahx6FVxLn7rjncBqZCJnQFr"


export const AxiosGetImgs = async(order:string,type:string,breed:string,limit:number) => {
    let url = `https://api.thecatapi.com/v1/images/search?mime_types=${type}&limit=${limit}&order=${order}&breed_ids=${breed}`;
    let response = await axios.get(url,{headers: {
        'x-api-key': api_key
    }})
    .then((response)=>{return(response.data)}).catch(error => {
        console.log(error)
    })

    return response
}