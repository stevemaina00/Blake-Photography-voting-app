import React from 'react'

export const individualImage = ({image}) => {
  return (
    <div className='photo'>
        <img src = {image.urls.small} alt="images" />
    </div>
  )
}
