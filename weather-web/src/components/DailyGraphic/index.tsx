import "./dailyGraphic.scss";
import Clock from "../../assets/images/clock.png";
import Feel from "../../assets/images/feel.png";
import Wind from "../../assets/images/wind.png";
import Drop from "../../assets/images/drop.png";
import Sunny from "../../assets/images/sunny.png";

interface IDailyGraphicProps {
  data?: any;
}

const DailyGraphic: React.FC<IDailyGraphicProps> = ({ data }) => {
  const airConditionsArray = data.airConditions.split("::");
  const dateArray = data.date.split(":");

  return (
    <div className="daily-graphic">
      <div className="daily-graphic__top">
        <div className="daily-graphic__top-inner">
          <img src={Clock} alt="weather" />
          <h3>
            {dateArray[1]} {dateArray[2]}PM {dateArray[3]}{" "}
          </h3>
        </div>
        <h1>AIR CONDITIONS</h1>
      </div>

      <div className="daily-graphic__bottom">
        <div className="daily-graphic__bottom-box">
          <img src={Feel} alt="weather" />
          <div>
            <h4>Real Feel</h4>
            <h4>{airConditionsArray[0]}°</h4>
          </div>
        </div>
        <div className="daily-graphic__bottom-box">
          <img src={Wind} alt="weather" />
          <div>
            <h4>Wind</h4>
            <h4>{airConditionsArray[2]} km/hr</h4>
          </div>
        </div>{" "}
        <div className="daily-graphic__bottom-box">
          <img src={Drop} alt="weather" />
          <div>
            <h4>Change of Rain</h4>
            <h4>{airConditionsArray[1]}%</h4>
          </div>
        </div>{" "}
        <div className="daily-graphic__bottom-box">
          <img src={Sunny} alt="weather" />
          <div>
            <h4>UV Index</h4>
            <h4>{airConditionsArray[3]}</h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DailyGraphic;
