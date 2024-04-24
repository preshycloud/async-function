// ES5

// async function fetchData(){
    // asynchronous function goes in here

    // await keyword
//     const data = await fetch("https://jsonplaceholder.typicode.com/users")
//     const response = await data.json()
//     console.log(response)
// }
// fetchData()

// we declare the function before the async function
// ES6
// const fetchData2 = async() => {
     // asynchronous function goes in here
// }

const fetchAlbums = async() => {
    try {
        const data2 = await fetch("https://jsonplaceholder.typicode.com/albums")
        const res = await data2.json()
        console.log(res)
    } catch (error) {
        console.log(error)
    }
}

fetchAlbums()
