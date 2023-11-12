import "./topbar.scss";
import LocationIcon from "../../assets/images/location.png";
import Thunder from "../../assets/images/thunder.png";

interface ITopbarProps {
  data?: any;
}

const Topbar: React.FC<ITopbarProps> = ({ data }) => {
  return (
    <div className="topbar">
      <div className="topbar__left">
        <div className="topbar__left-top">
          <img src={LocationIcon} alt="weather" />
          <h4>{data.city}</h4>
        </div>
        <h3>{data.type}</h3>
        <h1>{data.degree}°C</h1>
      </div>
      <div className="topbar__center">
        <img src={Thunder} alt="weather" />
      </div>
      <div className="topbar__right">
        <h2>Sunday | 12 Dec 2023</h2>
      </div>
    </div>
  );
};

export default Topbar;
