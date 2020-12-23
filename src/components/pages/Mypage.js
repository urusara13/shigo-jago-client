import React from 'react';

function Mypage(props) {

  return props.userinfo == null ? (
    <div>{props.userinfo}</div>
  ) : (
      <div>
        <h1>Mypage</h1>
        <div className='username'>
          {props.userinfo.username}
        </div>
        <div className='email'>
          {props.userinfo.email}
        </div>
        <div className='mobile'>
          {props.userinfo.mobile}
        </div>
        <button
          className="btn-logout"
          onClick={props.handleLogout}
        >Logout
        </button>
      </div>

    )

}


export default Mypage;