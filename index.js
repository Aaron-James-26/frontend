// console.log(fetch('https://e-cdns-images.dzcdn.net/images/cover/4e8ebae30709cff2ad91f5c29ad7a068/500x500-000000-80-0-0.jpg')
// .then(response => {
//     console.log(response)
//     return response.blob();
// })
// .then(blob =>{
//     console.log(blob)
//     document.querySelector('#myImage').src=URL.createObjectURL(blob)
// })
// .catch(error =>{
//     console.log(error)
// })
// )



//id selector
const content=document.querySelector("#content")

//loading page
window.addEventListener("load", () =>{
    getUsers()
})

function getUsers(){
    let html=""

    fetch("https://bscs3a-api-crud-1-semi.onrender.com/api/miyembro" , {mode: "cors"})//online
    //fetch("http://localhost:5000/api/miyembro" , {mode: "cors"}) //offline
    .then((response) =>{
        console.log(response)
        return response.json()
    })
    .then((data)=>{     
        console.log(data)
        data.forEach((element) =>{
            html += `<li>${element.first_name} ${element.last_name}</li>`
        })

        content.innerHTML = html
    })
    .catch((error) =>{
        console.log(error)
    })

}

















