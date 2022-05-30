import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'
import Form from '../../components/Header/Form/Form';
import { Image } from '../../components/Image/Image';
import { API_URL_RANDOM } from '../../api/api';

const Random = () => {

const [query, setQuery ] = useState('cat');
const [result, setResult] = useState([]);
const [isFetching, setIsFetching] = useState(true);


useEffect(() => {
    if(query) {
      axios
        .get(API_URL_RANDOM, {
            params: {
                query: query,
                page: 1
            }
        })
        .then((data) => {
            setResult(data.data);
        });
  }
 }, [query]);

  return (
    <div>Random

        <Form />
        {!isFetching && (<Image />)}
        <Link to="/" ><button>home</button></Link>
    </div>
  )
}

export default Random