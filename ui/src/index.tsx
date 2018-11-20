import "bootstrap/dist/css/bootstrap.min.css"
import * as React from "react"
import * as ReactDOM from "react-dom"
import App from "./molecule/App"
import registerServiceWorker from "./registerServiceWorker"
import "./style/index.css"

ReactDOM.render(<App />, document.getElementById("root") as HTMLElement)
registerServiceWorker()
