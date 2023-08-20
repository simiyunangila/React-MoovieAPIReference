import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import ImageContainer from '../../../Atoms/ImageContainer';
import { getUpcoming } from "../../../Utils/utilities";
import './style.css'

const MovieSlider = () => { 
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);  

  useEffect(() => {
    (async () => {
      setLoading(true);
      const movies = await getUpcoming();
      setMovies(movies.results);
      setLoading(false);
    })();
  }, []); 
  
  if (loading) {
    return <h1>Loading movies...</h1>;
  }  const 
  max = 10;
  const maxMovies = movies.slice(0, max); 
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,  };  return (
    <div className="movies-slider">
      <Slider{...sliderSettings}>
        {maxMovies.map((item) => (
          <div key={item.id} className="movie-slide">
            <ImageContainer props={item} useBackgroundImage={true} />          
          </div>
        ))}
      </Slider>
    </div>
  );
};
export default MovieSlider; 
