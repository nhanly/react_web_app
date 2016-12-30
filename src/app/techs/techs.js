import React, {Component} from 'react';
import axios from 'axios';

import {Tech} from './tech';

const styles = {
  container: {
    margin: '1rem'
  },
  h2: {
    fontWeight: 300,
    fontSize: '1.5rem'
  },
  techs: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around'
  },
  techContainer: {
    width: '100%'
  }
};

export class Techs extends Component {
  constructor() {
    super();
    this.state = {techs: []};
  }

  componentDidMount() {
    axios
      .get('app/techs/techs.json')
      .then(response => {
        this.setState({techs: response.data});
      });
  }

  render() {
    return (
      <div style={styles.container}>
        <div style={styles.techs}>
          <div className="container-fluid" style={styles.techContainer}>
            <div className="row">
              {this.state.techs.map((tech, i) => (
                <Tech key={i} tech={tech}/>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
