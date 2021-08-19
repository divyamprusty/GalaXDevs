import React from 'react'

export default function footer() {
    return (
        <div>
            <footer className="text-gray-600 body-font">
            <div>
                <div className="container mx-auto py-4 px-5 flex flex-col sm:flex-col">
                    <p style={{ color: "#010101", fontSize: "17px" }} className="text-gray-500 text-sm text-center sm:text-center" >
                        Made with <span style={{ color: "red" }}>{"<3 "}</span>by <a href='https://exun.co'>Exun Clan</a>
                    </p>
                </div>
            </div>
            </footer>
        </div>
    )
}
