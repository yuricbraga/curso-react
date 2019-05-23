import React from "react";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = { lat: null };
  }

  // React says we have to define render!!
  render() {
    window.navigator.geolocation.getCurrentPosition(
      position => console.log(position),
      err => console.log(err)
    );

    return <div>Latidude: </div>;
  }
}

export default App;
