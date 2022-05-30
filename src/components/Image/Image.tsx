import React from 'react'
import { ResponseData } from '../../models/model'

const Image: React.FC<{result: any}> = (props) => {
   const photo = props.result;
    console.log(photo.id);
  return (
    <div>Image id: {photo.id}
        <img src={photo.urls.small} />
    </div>
  )
}

export default Image