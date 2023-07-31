import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import ImageContainer from '../../../Atoms/ImageContainer';
import { getCategories } from "../../../Utils/utilities";
import './style.css'

const MovieSlider = () => { 
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);  useEffect(() => {
    (async () => {
      setLoading(true);
      const movies = await getCategories();
      setMovies(movies.results);
      setLoading(false);
    })();
  }, []);  if (loading) {
    return <h1>Loading movies...</h1>;
  }  const limit = 4;
  const limitedMovies = movies.slice(0, limit);  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,  };  return (
    <div className="movies-slider">
      <Slider{...sliderSettings}>
        {limitedMovies.map((item) => (
          <div key={item.id} className="movie-slide">
            <ImageContainer props={item} useBackgroundImage={true} />          
          </div>
        ))}
      </Slider>
    </div>
  );
};
export default MovieSlider; 
