import React from "react";

import classes from "./Input.css";

const Input = React.forwardRef((props, ref) => {
  return (
    //phan show lên HTML và sẽ định nghĩa thẻ input bên trong html
    <div className={classes.input}>
      <label htmlFor={props.input.id}> {props.label} </label>
      {/* ref là 1 thuộc tính cua input. và lúc này nó được set  giá trị cho 
      biến amountInputRef. Có nghĩa là amountInputRef được gán là thuojc tính ref của input
      và thuojc tính ref này có nhiệm vụ lấy giá trị .current.value như các các thuojc tính onchange khác
      .value để lấy giá trị nhập vào.  */}
      <input ref={ref} {...props.input} />
    </div>
  );
});

export default Input;
