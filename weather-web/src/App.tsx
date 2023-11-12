import DailyGraphic from "./components/DailyGraphic";
import HourlyGraphic from "./components/HourlyGraphic";
import Sidebar from "./components/Sidebar";
import Topbar from "./components/Topbar";
import WeeklyGraphic from "./components/WeeklyGraphic";
import "./app.scss";
import Activities from "./components/Activities";
import Logo from "./assets/images/header-logo.png";

function App() {
  const data = {
    date: "Tue Nov 07 2023 : 8:00 : GMT",
    city: "New York",
    type: "Thunder",
    degree: 18,
    airConditions: "16::2::0.8::4",
    forecast: {
      "08:00": "26",
      "12:00": "22",
      "15:00": "16",
      "18:00": "20",
      "21:00": "22",
      "00:00": "16",
    },
    weeklyWeather: {
      previous: {
        sunday: {
          type: "sunny cloudy",
          degree: "18",
        },
        monday: {
          type: "sunny cloudy",
          degree: "19",
        },
        tuesday: {
          type: "sunny",
          degree: "24",
        },
        wednesday: {
          type: "rainy",
          degree: "15",
        },
        thursday: {
          type: "sunny rainy",
          degree: "18",
        },
        friday: {
          type: "thunder",
          degree: "14",
        },
        saturday: {
          type: "sunny",
          degree: "16",
        },
      },
      current: {
        sunday: {
          type: "thunder",
          degree: "18",
        },
        monday: {
          type: "sunny cloudy",
          degree: "24",
        },
        tuesday: {
          type: "sunny cloudy",
          degree: "25",
        },
        wednesday: {
          type: "rainy",
          degree: "14",
        },
        thursday: {
          type: "sunny rainy",
          degree: "19",
        },
        friday: {
          type: "thunder",
          degree: "13",
        },
        saturday: {
          type: "sunny",
          degree: "18",
        },
      },
      next: {
        sunday: {
          type: "sunny",
          degree: "25",
        },
        monday: {
          type: "sunny",
          degree: "26",
        },
        tuesday: {
          type: "sunny cloudy",
          degree: "24",
        },
        wednesday: {
          type: "rainy",
          degree: "21",
        },
        thursday: {
          type: "sunny rainy",
          degree: "22",
        },
        friday: {
          type: "thunder",
          degree: "17",
        },
        saturday: {
          type: "sunny",
          degree: "18",
        },
      },
    },
  };

  return (
    <div className="main">
      <div className="container">
        <div className="main-inner">
          <a>
            <img src={Logo} alt="weather" />
          </a>

          <div className="main__top">
            <Topbar data={data} />
            <HourlyGraphic data={data} />
          </div>
          <div className="main__bottom">
            <Sidebar />
            <div className="main__bottom-center">
              <WeeklyGraphic />
              <Activities data={data.weeklyWeather} />
            </div>

            <DailyGraphic data={data} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
