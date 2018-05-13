import React, { Component } from "react"
import BrushableScatterplot from "./BrushableScatterplot"
import Barchart from "./Barchart"
import apartmentdata from "./data/apartmentdata.json"
import { typeColors } from "./settings/color"
import "./flexboxgrid.min.css"
import "./App.css"

function freqs(data) {
  let counts = {}
  data.map(d => counts[d.region] 
    ? counts[d.region] += 1 
    : counts[d.region] = 1
  )
  return counts
}

const numberSoldByRegion = []
const counts = freqs(apartmentdata)
Object.keys(counts).map(d => 
  numberSoldByRegion.push({region: d, count: counts[d]})
)

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="row">
          <div className="col-xs-6">
            <div className="box">
              <BrushableScatterplot
                data={apartmentdata} color={typeColors}
              />
            </div>
          </div>
          <div className="col-xs-6">
            <Barchart
              data={numberSoldByRegion}
              />
          </div>
        </div>
      </div>
    )
  }
}

export default App
