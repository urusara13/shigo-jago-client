import React from "react"; 
import "./editUserModal.css"

function EditModal({ gotoUI, close, errorMessage }) {
  return(
    <>
    <div className='EUMmodalBG'>
      <div className='EUMctn'>
      <div>{errorMessage}</div>
      {errorMessage === '변경된 사항이 없습니다.' ?
        <button className='btnEUM' onClick={close}>확인</button> :
        <button className='btnEUM' onClick={gotoUI}>확인</button> }
      </div>
    </div>
    </>
  )
}

export default EditModal;
