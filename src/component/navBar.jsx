import React from 'react'
import { Component } from 'react'
import { Link } from 'react-router-dom'

class NavBar extends Component {
  state = {}
  render() {
    return (
      <React.Fragment>
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
          <div className="container">
            <Link className="navbar-brand" to="/">Web</Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarText">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link className="navbar-brand" to="/home">首页</Link>
                </li>
                <li className="nav-item">
                <Link className="navbar-brand" to="/calc">计算器</Link>
                </li>
              </ul>
              <span className="navbar-text">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                  <li className="nav-item">
                    <Link className="navbar-brand" to="/login">登录</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="navbar-brand" to="/register">注册</Link>
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