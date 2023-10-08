import axios from "axios"

const url = `https://api.thecatapi.com/v1/favourites`;
const api_key = "live_wCSQrK0y86aqtTKrwgFOAe92Maam3kDZ8H0e8IEGBahx6FVxLn7rjncBqZCJnQFr"
const user = "userCherGPT123"

export const axiosPostImg = async(id:string) => {
    let response = await axios.post(url,{
        "sub_id":user,
        "image_id":id
    },{headers: {
        'x-api-key': api_key
    }})
    .then((response)=>{console.log(response.data)}).catch(error => {
        console.log(error)
    })

    
    return response
}