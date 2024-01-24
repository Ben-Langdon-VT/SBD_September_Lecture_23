import React from 'react';
function AboutMe() {
    const city = "Shelburne";
    const state = "Vermont";

    let styles = {
        ul: {
            textAlign: 'left',
            color: 'red',
        },

        p: {
            fontSize: '20pt'
        }
    }

    return (
        <div>
            <p styles = {styles.p}>
                I am from {city} {state}
            </p>
            <ul style= {styles.ul}>
                <li>Bolton Valley Ski Resort</li>
                <li>Cosco</li>
                <li>The woods behind my house</li>
            </ul>
        </div>
    )
}

export default AboutMe;