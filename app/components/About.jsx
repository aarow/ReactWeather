var React = require('react');

var About = (props) => {
  return (
    <div>
      <h1 className="text-center page-title">About</h1>
      <p>All about weather and react. Here's the source:</p>
      <ol>
        <li>
          <a href="http://openweathermap.org/" >OpenWeatherMap</a>
        </li>
        <li>
          <a href="https://github.com/aarow/ReactWeather" >GitHub</a>
        </li>
      </ol>
    </div>
  )
}

module.exports = About;
