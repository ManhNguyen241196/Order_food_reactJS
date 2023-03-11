import React, { useRef, useState } from "react";
import Input from "../../UI/Input";
import classes from "./MealItemForm.module.css";

const MealItemForm = (props) => {
  const [amountIsValid, setamountIsValid] = useState(true);
  const amountInputRef = useRef();

  const submitHandler = (event) => {
    event.preventDefault();

    const enteredAmount = amountInputRef.current.value;
    const enteredAmountNumber = +enteredAmount; //Giá trị .value trả lại 1 string nên phải chuyển
    //sang dạng number

    if (enteredAmount.trim().length === 0 || enteredAmountNumber < 1) {
      return setamountIsValid(false);
    }

    props.onAddToCart(enteredAmountNumber);
  };

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <Input
        ref={amountInputRef}
        label="Amount"
        input={{
          id: "amount_" + props.id,
          type: "number",
          min: "1",
          defaultValue: "1",
          step: "1",
        }}
      ></Input>
      <button>+ Add</button>
      {!amountIsValid && <p> Hay nhap gia tri phu hop </p>}
    </form>
  );
};

export default MealItemForm;
