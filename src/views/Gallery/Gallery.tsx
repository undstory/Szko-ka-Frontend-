import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'
import Form from '../../components/Form/Form';
import Images  from '../../components/Images/Images';
import { API_URL_GALLERY } from '../../api/api';

const Gallery = () => {

const [query, setQuery ] = useState('cat');
const [result, setResult] = useState([]);
const [isFetching, setIsFetching] = useState(true);


useEffect(() => {
    if(query) {
      axios
        .get(API_URL_GALLERY, {
            params: {
                query: query,
                page: 1,
                per_page: 9
            }
        })
        .then((data) => {
            setResult(data.data.results);
            console.log(data.data.results)
            setIsFetching(false);
        });
  }
 }, [query]);

  return (
    <div>
        <Form setQuery={setQuery} />
        {!isFetching && (<Images result={result} />)}


        <Link to="/" ><button>home</button></Link>
    </div>
  )
}

export default Gallery