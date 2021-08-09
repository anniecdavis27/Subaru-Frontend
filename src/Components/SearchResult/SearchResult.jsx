import './searchresult.css';
import { Link } from "react-router-dom";

function SearchResult({result}) {
    console.log(result._id)
  return (
    <div className="SearchResult">
      <h2>{result.model}</h2>
      <h3>{result.year}</h3>
      <p>{result.price}</p>
      <img src={result.imageurl} alt="image" />
      <Link to={`/cars/${result._id}`} className='learn-more-link'>
        Learn More...
      </Link>
    </div>
  );
}

export default SearchResult;