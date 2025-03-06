const jokeEle = document.getElementById('joke')
const jokeBtn = document.getElementById('jokeBtn')

jokeBtn.addEventListener('click',generateJoke)
generateJoke()

//using async/wait
async function generateJoke(){
    const config ={
        headers:{
            'Accept': 'application/json'
        }

    }

    const res = await fetch('https://icanhazdadjoke.com',config)
    const data = await res.json()
    jokeEle.innerText = data.joke

}


//using .then
// function generateJoke(){
//     const config ={
//         headers:{
//             'Accept': 'application/json'
//         }

//     }


//     // fetch('https://v2.jokeapi.dev/joke/Any',config)
//     // .then((res) => res.json())
//     // .then((data) => {
//     //     jokeEle.innerHTML = data.joke
//     // })

//     fetch('https://icanhazdadjoke.com',config)
//     .then((res) => res.json())
//     .then((data) => {
//         jokeEle.innerHTML = data.joke
//     })

// }
