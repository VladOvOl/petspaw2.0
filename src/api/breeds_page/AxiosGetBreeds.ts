import axios from "axios"

const url = `https://api.thecatapi.com/v1/breeds`;
const api_key = "live_wCSQrK0y86aqtTKrwgFOAe92Maam3kDZ8H0e8IEGBahx6FVxLn7rjncBqZCJnQFr"

export const axiosGetBreeds = async() => {
    let response = await axios.get(url,{headers: {
        'x-api-key': api_key
    }})
    .then((response)=>{return(response.data)}).catch(error => {
        console.log(error)
    })
    return response
}