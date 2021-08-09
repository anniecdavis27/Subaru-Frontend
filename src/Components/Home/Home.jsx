import './home.css';
import Hero from '../Hero/Hero';
import SearchModule from '../SearchModule/SearchModule';
import GetInTouch from '../GetInTouch/GetInTouch';


function Home({cars}) {
  

  return (
    <div className="Home">
      <Hero />
      <SearchModule cars={cars} />
      <GetInTouch />
    </div>
  );
}

export default Home;
