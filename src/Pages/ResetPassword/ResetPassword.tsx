import { Button } from "@mui/material";
import { Formik, useFormik } from "formik";
import { useReducer, useState } from "react";
import { useParams } from "react-router-dom";
import http from "../../Services/Services";
import utility from "../../utility/utility";
import styles from "./ResetPassword.module.scss";

export function ResetPasswordReducer(state: any, actions: {type:string,payload:any}) {
  switch (actions.type) {
    case "setNewPassword":
      state.newPassword=actions.payload;
      return state;
    // case "setConfirmPassword":
    //   state.confirmPassword=actions.payload;
    //   return state;
    default:
      return state;
  }
}
export function ResetPassword() {
  const [state, dispatchResetPassword] = useReducer(ResetPasswordReducer, {
    newPassword: "",
    // confirmPassword:""
  });
  const params = useParams();
  const token = params.id;
  console.log(token)
  if (token) {
    utility.modifyStore("token", token);
  }

  async function submitForm(event:any) {
    event.preventDefault();
    try {
      let values = { password: state.newPassword};
      let ResetPassword = await http.post(`auth/reset-password/${token}`, values);
      console.log(ResetPassword)
    } catch (e: any) {
      console.log("error");
    }
  }
  // submitForm();

  return (
    <>
      <div className={styles.Container}>
        <div className={styles.center}>
          <h1>ResetPassword</h1>
          <form className={styles.loginForm} onSubmit={submitForm}>
            <div className={styles["text-field"]}>
              <input
                type="text"
                name="newPassword"
                id="newPassword"
                onChange={(e) => {
                  dispatchResetPassword({ type: "setNewPassword", payload: e.target.value });
                }}
                required
              />
              <span></span>
              <label htmlFor="newPassword">NewPassword</label>
            </div>
               {/* <div className={styles["text-field"]}>
              <input
                type="text"
                name="confirmPassword"
                id="confirmPassword"
                onChange={(e) => {
                  dispatchResetPassword({ type: "setConfirmPassword", payload: e.target.value });
                }}
                required
              />
              <span></span>
              <label htmlFor="confirmPassword">confirmPassword</label>
            </div> */}
            <input type="submit" value="confirm" />
          </form>
        </div>
      </div>
    </>
  );
}
