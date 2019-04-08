import React from 'react'

const styles = {
    div: {
        maxWidth: '1200px',
        margin: '0 auto',  
        border: '2px solid black',
        margin: '5px'
    },

    figure: {
        width: '100px',
        
    },

    img: {
        width: '100px',
        padding: '1rem',
    }
}

export default function BlogPostPreview(props) {
    return (
        <div style={styles.div}>
            <figure style={styles.figure}>
                <img style={styles.img} src={props.featuredImg.src} alt={props.featuredImg.caption} />
                <p>{props.summary}</p>
                <figcaption>{props.featuredImg.caption}</figcaption>
            </figure>
        </div>
    )
}