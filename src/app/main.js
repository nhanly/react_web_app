import React, {Component} from 'react';
// import {Header} from './header'; {/*<Header/>*/}
import {Title} from './title';
import {Techs} from './techs/techs';
import {Footer} from './footer';
import {Background} from './background';

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100%',
    // backgroundImage: 'url("../asset/image/vay_sxkd.jpg")',
    opacity: '0.7'
  },
  main: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    marginBottom: '30px'
  }
};

export class Main extends Component {
  render() {
    return (
      <div>
        <div id="wrapper" style={styles.container}>

          <main style={styles.main}>
            <Title/>
            <Techs/>
          </main>
          <Footer/>
        </div>
        <Background/>
      </div>
    );
  }
}
