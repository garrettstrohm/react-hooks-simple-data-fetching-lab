// create your App component here
import{useEffect, useState} from 'react'

function App() {
    const [dogPic, setDogPic] = useState("")
    const [isLoaded, setIsLoaded] = useState(false)

    useEffect(() => {
        fetch('https://dog.ceo/api/breeds/image/random')
        .then(r => r.json())
        .then(data => {
            setDogPic(data.message)
            setIsLoaded(true)
        })
    }, [])

    if(!isLoaded) {
        return <p>Loading...</p>
    }

    return(
        <img src={dogPic} alt='A Random Dog'/>
    );
}

export default App