import React, {Component} from 'react';

// const styles = {
//   title: {
//     display: 'flex',
//     flexDirection: 'column',
//     alignItems: 'center',
//     padding: '1rem',
//
//   },
//   logo: {
//     height: '22rem',
//     backgroundColor: 'white',
//     borderRadius: '1rem',
//     margin: '1rem'
//   }
// };

export class Title extends Component {
  render() {
    return (
      <div id="header">
        <div className="content">
          <div className="inner">
            <h1 >FINANCE_HELPER</h1>
            <p>Những chuyên gia thực thụ có thể giúp bạn hoàn tất hồ sơ vay vốn một cách nhanh chóng và chính xác nhất</p>
          </div>
        </div>
      </div>
    );
  }
}