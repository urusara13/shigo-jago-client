import React from "react"; 

function EditModal({ close, errorMessage }) {
  return(
    <>
    <div>{errorMessage}</div>
    <button onClick={close}>확인</button>
    </>
  )
}

export default EditModal;
