import './program.css'

export default function Program(){
    return(
        <div className="program">
            <span className="left">
                <img src="physh.png" alt="image goes here" width={400}/>
            </span>
            <span className="right">
                <h1>Why Choose Our <span style={{ color: "blue" }}>3D Experience?</span> </h1>
                <p>We revolutionize student counselling through immersive 3D environments that make learning about your future engaging,interactive and memorable.</p>
            </span>
        </div>
    )
}