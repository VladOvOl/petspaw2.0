import axios from "axios"

const user = "userCherGPT123"
const url = `https://api.thecatapi.com/v1/favourites?sub_id=${user}`;
const api_key = "live_wCSQrK0y86aqtTKrwgFOAe92Maam3kDZ8H0e8IEGBahx6FVxLn7rjncBqZCJnQFr"


export const axiosGetImg2 = async() => {
    let response = await axios.get(url,{headers: {
        'x-api-key': api_key
    }})
    .then((response)=>{console.log(response.data)}).catch(error => {
        console.log(error)
    })

    
    return response
}