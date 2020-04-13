import React from "react";

import { Cards, Chart, CountryPicker, Header, Footer } from "./components";
import { fetchData } from "./api";

import "./App.styles.scss";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      data: {},
      country: "",
    };
  }

  async componentDidMount() {
    const fetchedData = await fetchData();

    this.setState({
      data: fetchedData,
    });
  }

  handleCountryChange = async (country) => {
    const fetchedData = await fetchData(country);

    this.setState({
      data: fetchedData,
      country: country,
    });
  };

  render() {
    const { data , country} = this.state;

    return (
      <div className="container">
        <Header></Header>
        <Cards data={data} />
        <CountryPicker handleCountryChange={this.handleCountryChange} />
        <Chart data={data} country = {country} />
        <div className="src">
          <span className="source">Source: Johns Hopkins University</span>
        </div>
        <Footer></Footer>
      </div>
    );
  }
}

export default App;
