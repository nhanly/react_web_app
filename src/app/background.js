/**
 * Created by Lee.Ly on 12/30/2016.
 */
import React, {Component} from 'react';
const styles = {
  background: {
    position: 'fixed',
    top: '0',
    left: '0',
    width: '100%',
    height: '100vh',
    zIndex: '1'
  }
};
export class Background extends Component {
  render() {
    return (
      <div id="bg" style={styles.background}></div>
    );
  }
}
