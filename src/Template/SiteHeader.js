import React from 'react'

function SiteHeader() {
    return (
        <>
            {/* Header */}
            <header
                className="w3-display-container w3-content w3-wide"
                style={{ maxWidth: 1200, minWidth: 500 }}
                id="home"
            >
                <img
                    className="w3-image"
                    src="https://circle.youthop.com/wp-content/uploads/2021/05/photo-1507842217343-583bb7270b66.jpg"
                    alt="Library"
                    width={1100}
                    height={400}
                />
                <div className="w3-display-bottomleft w3-padding-large w3-opacity">
                    <h1 className="w3-xxlarge">Kütüphane</h1>
                </div>
            </header>
        </>

    )
}

export default SiteHeader