import React from "react";
import { useForm } from "react-hook-form";
import q from"../../Assets/Form.module.css";
import { login } from "./userService"

export const LoginF =(props)=>{

}

export  const Login =(props)=> {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm();
  const onSubmit = async (data) => {
    // await login(data.email, data.password, data.remember);
    await props.Login_(data.email, data.password, data.remember)
    reset();
    console.log(data);
  };

  

  return (
    <div className={q.body}>
        <form className={q.form} onSubmit={handleSubmit(onSubmit)}>
      <section>
        <h1 className={q.h1}>Login</h1>
        <label className={q.label} htmlFor="email">email</label>
        <input className={q.input}
          id="email"
          aria-invalid={errors.email ? "true" : "false"}
          {...register("email", {
            required: "required",
            pattern: {
              value: /\S+@\S+\.\S+/,
              message: "Entered value does not match email format"
            }
          })}
          type="email"
          placeholder="example@mail.com"
        />
        {errors.email && <span className={q.span} role="alert">{errors.email.message}</span>}
        <label className={q.label} htmlFor="password">password</label>
        <input className={q.input}
          id="password"
          aria-invalid={errors.passward ? "true" : "false"}
          {...register("password", {
            required: "required",
            minLength: {
              value: 5,
              message: "min length is 5"
            }
          })}
          type="password"
          placeholder="password"
        />
        {errors.password && <span className={q.span} role="alert">{errors.password.message}</span>}
        <input type="checkbox" htmlFor="remember" id ="remember" 
        {...register("remember", {})}
        /> Remember
      </section>
      <button className={q.button} type="submit">SUBMIT</button>
    </form>
    </div>
    
  );
}