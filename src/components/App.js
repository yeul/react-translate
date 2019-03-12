import React from "react";

class App extends React.Component {
  state = { language: "english" };

  onLanguageChange = language => {
    this.setState({ language });
  };

  render() {
    return (
      <div className="ui container">
        <div>
          Select a language:
          <i
            className="flag us"
            onClick={() => this.onLanguageChange("english")}
          />
          <i
            className="flag ru"
            onClick={() => this.onLanguageChange("russian")}
          />
        </div>
        {this.state.language}
      </div>
    );
  }
}

export default App;
