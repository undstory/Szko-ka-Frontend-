import React from 'react'


const Image: React.FC<{result: any}> = (props) => {
   const photo = props.result;
    const { color, id, likes, views, urls, user } = photo;
    console.log();
  return (
    <div>Author: {user.name}
        <img src={urls.small} alt={photo.alt_description} title={photo.alt_description} />
        Likes: {likes}
    </div>
  )
}

export default Image