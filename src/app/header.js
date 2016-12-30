import React, {Component} from 'react';
import {Button} from './button';
const styles = {
  header: {
    display: 'flex',
    alignItems: 'center',
    backgroundColor: '#c9302c',
    borderColor: '#ac2925',
    position: 'fixed',
    width: '100%',
    minHeight: '50px',
    zIndex: '100',
    boxShadow: '1px 6px 16px 0px rgba(0,0,0,0.75)'
  },
  title: {
    flex: 1,
    fontSize: '1.5rem',
    margin: '1rem'
  },
  date: {
    flex: 1,
    textAlign: 'right',
    margin: '1rem',
    color: 'white'
  }
};

const headerName = 'ANH COP APPLICATION';

export class Header extends Component {
  render() {
    return (
      <header style={styles.header}>
        <p style={styles.title}>
          <a href="https://github.com/FountainJS/generator-fountain-webapp" target="_blank">
            {headerName}
          </a>
        </p>
        <p style={styles.date}>
          <Button/>
        </p>
      </header>
    );
  }
}
