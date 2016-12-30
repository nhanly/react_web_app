import React, {Component} from 'react';

const styles = {
  footer: {
    // padding: '0.5rem',
    fontSize: '1rem',
    // backgroundColor: 'red',
    textAlign: 'center',
    color: 'white',
    minHeight: '50px',
    position: 'fixed',
    width: '100%',
    bottom: '0',
    boxShadow: '1px -3px 16px 0px rgba(0,0,0,0.75)'
  },
  footerContainer: {
    backgroundColor: 'red'
  },
  footerMenuMargin: {
    marginRight: '5px'
  },
  footerMenu: {
    borderRadius: '0px',
    minHeight: '50px',
    border: '2px solid white',
    borderRight: '1px solid white'
  },
  footerMenuFirst: {
    borderRadius: '0px',
    minHeight: '50px',
    border: '2px solid white',
    borderRight: '1px solid white',
    borderLeft: '0px'
  },
  footerMenuLast: {
    borderRadius: '0px',
    minHeight: '50px',
    border: '2px solid white',
    borderRight: '0px'
  },
  buttonSplitter: {
    width: '1px',
    minHeight: '50px',
    color: 'white'
  }
};

export class Footer extends Component {
  render() {
    return (
      <footer style={styles.footer}>
        <div className="container-fluid" style={styles.footerContainer}>
          <div className="row">
            <button style={styles.footerMenuFirst} type="button" className="col-lg-3 col-md-3 col-xs-3 btn btn-lg" aria-label="Left Align">
              <span style={styles.footerMenuMargin} className="glyphicon glyphicon-list" aria-hidden="true"></span>
               Menu
            </button>
            <button style={styles.footerMenu} type="button" className="col-lg-3 col-md-3 col-xs-3 btn btn-lg" aria-label="Left Align">
              <span style={styles.footerMenuMargin} className="glyphicon glyphicon-plane" aria-hidden="true"></span>
               Tài liệu
            </button>
            <button style={styles.footerMenu} type="button" className="col-lg-3 col-md-3 col-xs-3 btn btn-lg" aria-label="Left Align">
              <span style={styles.footerMenuMargin} className="glyphicon glyphicon-gift" aria-hidden="true"></span>
               Promotion
            </button>
            <button style={styles.footerMenuLast} type="button" className="col-lg-3 col-md-3 col-xs-3 btn-lg" aria-label="Left Align">
              <span style={styles.footerMenuMargin} className="glyphicon glyphicon-user" aria-hidden="true"></span>
               Checkin
            </button>
          </div>
        </div>
      </footer>
    );
  }
}
