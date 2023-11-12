import "./activities.scss";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useRef } from "react";
import Sunny from "../../assets/images/sunny.png";
import Rainy from "../../assets/images/rainy.png";
import SunnyCloudy from "../../assets/images/sunny-cloudy.png";
import SunnyRainy from "../../assets/images/sunny-rainy.png";
import Thunder from "../../assets/images/thunder.png";
import LeftIcon from "../../assets/images/left.png";
import RightIcon from "../../assets/images/right.png";

interface IActivitiesProps {
  data?: any;
}

const Activities: React.FC<IActivitiesProps> = ({ data }) => {
  const sliderRef = useRef(null) as any;

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 7,
    slidesToScroll: 1,
  };
  const goToPrevious = () => {
    if (sliderRef.current) {
      sliderRef.current.slickPrev();
    }
  };

  const goToNext = () => {
    if (sliderRef.current) {
      sliderRef.current.slickNext();
    }
  };
  const getWeatherImage = (type: any) => {
    switch (type) {
      case "sunny":
        return Sunny;
      case "rainy":
        return Rainy;
      case "sunny cloudy":
        return SunnyCloudy;
      case "sunny rainy":
        return SunnyRainy;
      case "thunder":
        return Thunder;
      default:
        return Sunny;
    }
  };
  return (
    <div className="activities">
      <button
        onClick={goToPrevious}
        disabled={
          sliderRef.current && sliderRef.current.state.currentSlide === 0
        }
      >
        <img src={LeftIcon} />
      </button>{" "}
      <Slider ref={sliderRef} {...settings}>
        {Object.keys(data.current).map((day) => (
          <div key={day}>
            <div className="activities__day">
              <h3>{day.toLocaleUpperCase()}</h3>
              <img
                src={getWeatherImage(data.current[day].type)}
                alt={data.current[day].type}
              />

              <p> {data.current[day].degree}°</p>
            </div>
          </div>
        ))}
        {Object.keys(data.previous).map((day) => (
          <div key={day}>
            <div className="activities__day">
              <h3>{day.toLocaleUpperCase()}</h3>
              <img
                src={getWeatherImage(data.previous[day].type)}
                alt={data.current[day].type}
              />
              <p>{data.previous[day].degree}°</p>
            </div>
          </div>
        ))}
        {Object.keys(data.next).map((day) => (
          <div key={day}>
            <div className="activities__day">
              <h3>{day.toLocaleUpperCase()}</h3>
              <img
                src={getWeatherImage(data.next[day].type)}
                alt={data.current[day].type}
              />{" "}
              <p>{data.next[day].degree}°</p>
            </div>
          </div>
        ))}
      </Slider>
      <button
        onClick={goToNext}
        disabled={
          sliderRef.current &&
          sliderRef.current.state.currentSlide ===
            sliderRef.current.state.slideCount - 1
        }
      >
        <img src={RightIcon} />
      </button>
    </div>
  );
};

export default Activities;
