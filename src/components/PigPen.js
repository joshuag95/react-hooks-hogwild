import Details from "./details"

function PigPen({ hogArray }) {

    const hogInfo = hogArray.map((hog) => {
        return (
            < Details key={hog.name} hogStuff={hog} />
        )
    })
    return (
        <div className="ui grid container">
            {hogInfo}</div>
    )
}
export default PigPen