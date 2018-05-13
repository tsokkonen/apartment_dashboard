import React from "react"
import { OrdinalFrame } from "semiotic"

export default props => {
    const { data } = props
    return (
    <div>
        <OrdinalFrame type="bar" projection="horizontal"
            oLabel={d => <text transform="translate(-70,2)" fontSize={10}>{d}</text>}
            oPadding={5}
            data={data.sort((a,b) => a.count - b.count)}
            size={[500, 500]}
            style={{fill: "#637783"}}
            rAccessor={"count"}
            oAccessor={"region"}
            axis={[{orient: "left"}, 
                   {orient: "bottom", label: "number of apartments sold"}]}
            margin={{left: 120, right: 20, top: 20, bottom: 70}}
        />
    </div>
    )
}