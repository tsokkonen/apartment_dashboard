import React from "react"
import { XYFrame } from "semiotic"

export default props => {
    const { data, color } = props
    return(
    <div>
        <XYFrame
            points={data}
            size={[500, 500]}
            xAccessor={"area"}
            yAccessor={d => d.unit_price/1000}
            axes={[{orient: "left", label: "unit price (1000 €)"}, 
                {orient: "bottom", label: "area (square meters)"}]}
            margin={{left: 90, right: 20, top: 20, bottom: 70}}
            pointStyle={d => ({ fill: color[d.condition], stroke: "black", r: 3})}
            hoverAnnotation={true}
            tooltipContent={d => {
                return <div className="tooltip-content">
                <p>Region: {d.region}</p>
                <p>Year: {d.year}</p>
                <p>Balcony: {d.balcony}</p>
                </div>
            }}
        />
    </div>
    )
}