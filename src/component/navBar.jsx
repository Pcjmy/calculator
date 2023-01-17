import React from 'react'
import { Component } from 'react'

class NavBar extends Component {
  state = {}
  render() {
    return (
      <React.Fragment>
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
          <div className="container">
            <a className="navbar-brand" href="#">Web</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarText">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="#">首页</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">计算器</a>
                </li>
              </ul>
              <span className="navbar-text">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                  <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="#">登录</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">注册</a>
                  </li>
                </ul>
              </span>
            </div>
          </div>
        </nav>
      </React.Fragment>
    )
  }
}

export default NavBar