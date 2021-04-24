import React from 'react'

const ImageList = (props) => {

    const images = props.images.map((image) => {
        return (
        <div className='details'>
            <img classname="details" key={image.id} src={image.webformatURL} alt=""/>
        </div>
        )
    })

    return(
        
        <div class="ui small images">
            {images}
        </div>
    )
}

export default ImageList
