import axios from "axios"


// const getData = (user_id) =>{
//     return new Promise(async(resolve, reject) => {
//         const {data: user} = await axios("https://jsonplaceholder.typicode.com/users?userId=/" + user_id)
//         const {data: post} = await axios("https://jsonplaceholder.typicode.com/posts?userId=/" + user_id)
//         resolve("User: ", user, "Post: ", post)
//     })
  
// }



// async function getData(user_id){
//     const user = await axios.get("https://jsonplaceholder.typicode.com/users/" + user_id)
//     console.log("User: ", user)

//     const post = await axios.get("https://jsonplaceholder.typicode.com/posts?userId=/" + user_id)
//     const userData = user.data
//     const postData = post.data

//     console.log("Post: ", post)
//     const result = {
//         user:userData,
//         post:postData
//     }
//     return result
// }

// (async() => {
//     try{
//        const userId = 1
//        const result = await getData(userId)
//        console.log(result.user)
//        console.log("Post: ", result.post)
      

     
//     }catch(exception){
//         console.log("Something Wrong!", exception)
//     }
// })()


// Promise.all([getData(1)]).then(console.log).catch(console.log)


async function getData(number){
    const {data: user} = await axios("https://jsonplaceholder.typicode.com/users/" + number)
    const {data: post} = await axios("https://jsonplaceholder.typicode.com/posts/" + number)

    console.log("User: ", user)
    console.log("Post: ", post)
}

export default getData;