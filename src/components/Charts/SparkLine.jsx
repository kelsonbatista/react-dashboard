import React from 'react';
import { SparklineComponent, Inject, SparklineTooltip } from '@syncfusion/ej2-react-charts';

class SparkLine extends React.PureComponent {  
  render() {
    const { id, height, width, type, color, currentColor, data } = this.props;
    
    return (
      <SparklineComponent 
        id={ id }
        height={ height }
        width={ width }
        type={ type }
        lineWidth={ 1 }
        valueType='Numeric'
        fill={ color }
        border={{ color: currentColor, width: 2 }}
        dataSource={ data }
        xName='xval'
        yName='yval'  
        tooltipSettings={{
          visible: true,
          // eslint-disable-next-line no-template-curly-in-string
          format: '${xval} : ${yval}',
          trackLineSettings: {
            visible: true,
          }
        }}
      >
        <Inject services={[SparklineTooltip]} />
      </SparklineComponent>
    )
  }
}

export default SparkLine;
