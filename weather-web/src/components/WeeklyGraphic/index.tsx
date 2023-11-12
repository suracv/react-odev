import "./weeklyGraphic.scss";
import Heart from "../../assets/images/heart.png";
import Img1 from "../../assets/images/Rectangle 15.png";
import Img2 from "../../assets/images/Rectangle 16.png";
import Img3 from "../../assets/images/Rectangle 17.png";
import Img4 from "../../assets/images/Rectangle 18.png";

interface IWeeklyGraphicProps {
  placeholder?: string;
}

const WeeklyGraphic: React.FC<IWeeklyGraphicProps> = ({ placeholder }) => {
  return (
    <div className="weekly-graphic">
      <div className="weekly-graphic__top">
        <img src={Heart} alt="weather" />

        <h1>Activities in your area</h1>
      </div>
      <div className="weekly-graphic__bottom">
        <div className="weekly-graphic__img">
          <img src={Img1} alt="weather" />
        </div>
        <div className="weekly-graphic__img">
          <img src={Img2} alt="weather" />
        </div>
        <div className="weekly-graphic__img">
          <img src={Img3} alt="weather" />
        </div>
        <div className="weekly-graphic__img">
          <img src={Img4} alt="weather" />
        </div>
      </div>
    </div>
  );
};

export default WeeklyGraphic;
