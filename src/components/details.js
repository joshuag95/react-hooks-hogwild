import react, { useState } from "react";


const HogDetails = ({ hogStuff }) => {
    return (
        <div>
            <h1>{hogStuff.name}</h1>
            <h3>{hogStuff.specialty}</h3>
            <h2>{hogStuff.weight}</h2>
            <div>{hogStuff["highest medal achieved"]} Medal Achieved</div>
            {hogStuff.greased ? <h1> READY FOR FUN</h1> : <div>No Grease</div>}
        </div>
    )
}

const HogFront = ({ hogStuff }) => {
    return (
        <div>
            <h1>{hogStuff.name}</h1>
            <img src={hogStuff.image} />
        </div>
    )
}

function Details({ hogStuff }) {

    const [showDetails, setShowDetails] = useState(false)

    function handleSetShowDetails(e) {
        setShowDetails((showDetails) => !showDetails)
    }


    return (
        <div onClick={handleSetShowDetails} className="ui eight wide column">
            {showDetails ?
                <HogDetails hogStuff={hogStuff} /> :
                <HogFront hogStuff={hogStuff} />}
        </div>

    )

};

export default Details;