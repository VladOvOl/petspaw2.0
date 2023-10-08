import axios from "axios"
import { FC } from "react";


    
const api_key = "live_wCSQrK0y86aqtTKrwgFOAe92Maam3kDZ8H0e8IEGBahx6FVxLn7rjncBqZCJnQFr"


export const AxiosGetImgs = async(limit:number,breed:string) => {
    let url = `https://api.thecatapi.com/v1/images/search?breed_ids=${breed}&limit=${limit}`;
    let response = await axios.get(url,{headers: {
        'x-api-key': api_key
    }})
    .then((response)=>{return(response.data)}).catch(error => {
        console.log(error)
    })

    return response
}

