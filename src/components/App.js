import React, {useState, useEffect} from "react";

function App() {
    const [dogImage, setDogImage] = useState("");

    useEffect(() => {
        fetch("https://dog.ceo/api/breeds/image/random")
            .then((resp) => resp.json())
            .then((data) => {
                setDogImage(data.message)
            });
    }, []);

    if (!dogImage) return <p>Loading...</p>

    return (
        <img alt="A Random Dog" src={dogImage}></img>
    );
};

export default App;
