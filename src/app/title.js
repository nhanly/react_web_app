import React, {Component} from 'react';

const styles = {
  formElement: {
    display: 'block',
    backgroundColor: 'black'
  },
  mainElement: {
    display: 'flex',
    marginTop: '20px'
  }
};
export class Title extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.handleUseBank = this.handleUseBank.bind(this);
    this.state = {displayForm: false, useBank: 1};
  }

  handleClick() {
    this.setState({displayForm: true, useBank: 1});
  }

  handleClose() {
    this.setState({displayForm: false});
  }

  handleUseBank() {
    const useBank = document.getElementById('useBank').value;
    this.setState({useBank: Number(useBank)});
  }

  render() {
    const displayForm = this.state.displayForm;
    const useBank = this.state.useBank;
    return (
      <div>
        {displayForm === false &&
          <div id="header">
            <div className="content">
              <div className="inner">
                <h1 >FINANCE_HELPER</h1>
                <p>Những chuyên gia thực thụ có thể giúp bạn hoàn tất hồ sơ vay vốn một cách nhanh chóng và chính xác nhất</p>
              </div>
            </div>
            <nav className="use-middle">
              <ul>
                <li><a href="#intro" onClick={this.handleClick}>Vay mua nha</a></li>
                <li><a href="#work">Vay mua xe</a></li>
                <li className="use-middle"><a href="#about">Vay sxkd</a></li>
                <li><a href="#contact" >Vay tieu dung</a></li>
              </ul>
            </nav>
          </div>
        }
        {displayForm === true &&
          <div id="main" style={styles.mainElement}>
            <article id="contact" style={styles.formElement} className="active">
              <h2 className="major">Thông tin</h2>
              <form method="post" action="#">
                <div className="field half first">
                  <label htmlFor="name">Họ tên</label>
                  <input type="text" name="name" id="name"/>
                </div>
                <div className="field half">
                  <label htmlFor="phone">Số điện thoại</label>
                  <input type="text" name="phone" id="phone"/>
                </div>
                <div className="field half first">
                  <label htmlFor="money">Số tiền cần vay</label>
                  <input type="text" name="money" id="money"/>
                </div>
                <div className="field half">
                  <label htmlFor="salary">Lương/thu nhập hàng tháng</label>
                  <input type="text" name="salary" id="salary"/>
                </div>
                <div className="field half first">
                  <label htmlFor="useBank">Nhận lương qua tk ngân hàng</label>
                  <select name="useBank" id="useBank" onChange={this.handleUseBank}>
                    <option value="1">Không</option>
                    <option value="2">Có</option>
                  </select>
                </div>
                {useBank === 2 &&
                  <div className="field half">
                    <label htmlFor="bankName">Ngân hàng</label>
                    <select name="bankName" id="bankName">
                      <option value="1">Vietcombank</option>
                      <option value="2">BIDV</option>
                      <option value="3">VietinBank</option>
                    </select>
                  </div>
                }
                <div className="field">
                  <label htmlFor="message">Ghi chu</label>
                  <textarea name="message" id="message" rows="4"></textarea>
                </div>
                <ul className="actions">
                  <li><input type="submit" value="Send Message" className="special"/></li>
                  <li><input type="reset" value="Reset"/></li>
                </ul>
              </form>
              <div className="close" onClick={this.handleClose}>Close</div>
            </article>
          </div>
        }
      </div>
    );
  }
}

// <ul className="icons">
//   <li><a href="#" className="icon fa-twitter"><span className="label">Twitter</span></a></li>
//   <li><a href="#" className="icon fa-facebook"><span className="label">Facebook</span></a></li>
//   <li><a href="#" className="icon fa-instagram"><span className="label">Instagram</span></a></li>
//   <li><a href="#" className="icon fa-github"><span className="label">GitHub</span></a></li>
// </ul>
