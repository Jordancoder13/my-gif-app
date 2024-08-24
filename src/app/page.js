// pages/index.js
import './styles/home.css';
import GifSearch from './components/GifSearch';

export default function Home() {
  return (
    <div className="home-container">
      <h1>Welcome to GIF Search App</h1>
      <div className="gif-search-container">
        <GifSearch />
      </div>
    </div>
  );
}
