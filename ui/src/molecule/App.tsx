import * as React from "react"
import Footer from "src/atom/Footer"
import HeaderJumbotron from "src/atom/HeaderJumbotron"
import retrieveIpsumText from "src/utils/IpsumTextGenerator"
import IpsumGeneratorButton from "../atom/IpsumGeneratorButton"
import "../style/App.css"

class App extends React.Component {
  public render() {
    return (
      <div className="App">
        <HeaderJumbotron />
        <main>
          <i
            id="redo-btn"
            className="fas fa-sync-alt"
            onClick={retrieveIpsumText}
          />
          <IpsumGeneratorButton />
          <div id="text-area" />
        </main>
        <Footer />
      </div>
    )
  }
}

export default App
