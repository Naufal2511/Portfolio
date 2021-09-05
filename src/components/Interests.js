import React from 'react'

export default function Interests() {
    return (
        <div className = "container interest" id ="interests">
            <h1>Interests</h1>
            <div className="content">
                <div className="card">
                    <div className="img">
                        <img src = "https://i.imgur.com/sDm8v6C.jpg" alt = "DSA images" title = "Isn't DSA fun ?" />
                    </div>
                    <div className="imgCap">
                        Data Structures and Algorithms
                    </div>
                </div>
                <div className="card">
                    <div className="img">
                        <img src = "https://i.imgur.com/ej6Vof8.png"  alt = "web dev img" title = "I love web development !"/>
                    </div>
                    <div className="imgCap">
                        Web development
                    </div>
                </div>
                <div className="card">
                    <div className="img">
                        <img src = "https://i.imgur.com/wldsLVd.jpg" alt = "Problem solving image" title = "Problem Solving is Fun !"/>
                    </div>
                    <div className="imgCap">
                        Problem Solving
                    </div>
                </div>
            </div>
        </div>
    )
}
