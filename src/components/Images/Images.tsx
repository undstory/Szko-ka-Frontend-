import React from 'react'

const Image: React.FC<{result: any}> = (props) => {
   const photo = props.result;
    const { results } = photo;
    console.log(results);
  return (
    <div>Author:
       {results.map((el : any) => {
          return ( <p>
              <img key={el.id} src={el.urls.small} />
              </p>)
       })}
    </div>
  )
}

export default Image
