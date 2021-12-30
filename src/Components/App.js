import { useState } from 'react';
import axios from 'axios';

const App = () => {
  const [rocketLaunches, setRocketLaunches] = useState([]);

  const url = 'https://fdo.rocketlaunch.live/json/launches/next/5';

  const getRockets = () => {
    axios.get(url).then((res) => {
      const results = res.data.result;

      const displayText = results.map((launch) => {
        return <li key={launch.name}>{launch.launch_description}</li>;
      });
      setRocketLaunches(displayText);
      // name, date_str, launch_description,
    });
  };
  return (
    <div>
      <div id="launchesDiv">
        <h1 id="headerText">Get the next five rocket launches!</h1>
        <button id="getLauchesBtn" onClick={getRockets}>
          Click For Launches
        </button>
        <div id="resultDiv">{rocketLaunches}</div>
      </div>
      <div id="descField">
        <h1 id="descHeader">Description</h1>
        <p id="descParagraph">
          This application utilizes the Rocket Launch API and will display the
          next five space related launches that are scheduled.
        </p>
      </div>
    </div>
  );
};

export default App;
