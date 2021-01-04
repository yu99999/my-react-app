import React from "react"
import ReactDom from "react-dom"
import App from "./App"
import {enableMapSet} from "immer"

enableMapSet()

ReactDom.render(
  <App />,
  document.getElementById('app')
)
