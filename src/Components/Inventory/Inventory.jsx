import './inventory.css';
import SearchResult from '../SearchResult/SearchResult';


function Inventory({cars}) {
  return (
    <div className="Inventory">
      <div className="model-flex">
            {cars.map((item) => {
            return <SearchResult result={item} />;
          })} 
        </div>
    </div>
  );
}

export default Inventory;
