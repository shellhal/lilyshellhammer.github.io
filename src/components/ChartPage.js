import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import Title from './Title';
import '../../node_modules/react-vis/dist/style.css';
import {
  XYPlot,
  XAxis,
  YAxis,
  HorizontalGridLines,
  VerticalGridLines,
  LineSeries
} from 'react-vis';

class ChartPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
    };
  }

  componentDidMount() {
    this.randomData();
  }

  randomData() {
    const data = [];

    for (let i = 0; i < 4; i++) {
      const series = [];
      for (let j = 0; j < 20; j++) {
        series.push({x: j, y: Math.floor(Math.random() * Math.floor(10))});
      }
      data.push({color: '#000000', key: i, data: series, opacity: 0.8});
    }
    this.setState({ data });
  }

  render() {
    return (
      <Container>
      <button onClick={ this.randomData.bind(this) }>New Random Data</button>
        <div className="portfolio-wrapper">
          <Title title={'Charting Library Examples'} hoverContent={''}/>
          <Col>
            <Row>
              <div className="react-vis-chart-example1">
                <XYPlot
                  width={600}
                  height={300}
                >
                  <HorizontalGridLines />
                  <VerticalGridLines />
                  <XAxis />
                  <YAxis />
                  {this.state.data.map(props => (
                    <LineSeries {...props} />
                  ))}
              </XYPlot>
              </div>
            </Row>
          </Col>
      </div>
      </Container>
    );
  }
}

export default ChartPage;
