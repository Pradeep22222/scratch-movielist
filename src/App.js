import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import { SearchForm } from './components/SearchForm';
import { MovieCard } from './components/MovieCard';
import { MovieArea } from './components/MovieArea';
function App() {
  return (
    <div>
      <SearchForm></SearchForm>
      <div className="d-flex justify-content-center mt-5">
        <MovieCard></MovieCard>
      </div>
      <hr/>
      <div className="d-flex justify-content-around"><MovieArea></MovieArea></div>
    </div>
  );
}

export default App;
