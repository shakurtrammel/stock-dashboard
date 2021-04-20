import React from 'react';
import { VictoryChart, VictoryArea }from 'victory';



  const PriceChart = (props) => {
      return (
        <VictoryChart height={150}>
            <VictoryArea
                data={[ 
                    { x: 1, y: 2, y0: 0 },
                    { x: 2, y: 3, y0: 0 },
                    { x: 3, y: 5, y0: 0 },
                    { x: 4, y: 4, y0: 0 },
                ]}
                style={{
                    data: {
                        fill: "#372f7f", fillOpacity: 0.7, stroke: "#6d59bb", strokeWidth: 2
                    }
                }}
            />
        </VictoryChart>
      );
  }

  export default PriceChart;