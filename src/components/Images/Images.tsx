import React from 'react'

const Image: React.FC<{result: any}> = (props) => {
   const photos = props.result;
  return (
    <div>Author:
       {photos.map((el : any) => {
          return (
              <img key={el.id} src={el.urls.small} />
              )
       })}
    </div>
  )
}

export default Image
