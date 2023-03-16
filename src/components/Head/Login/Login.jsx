import React, { useState } from "react";
import { useForm } from "react-hook-form";
import q from "../../Assets/Form.module.css";
import axios from "axios"

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: { "API-KEY": "8604cc03-3d58-4a45-8602-e011234bfbbf" }
})



export const Login = (props) => {
  const [resultat, setResult] = useState(null);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm();

  const onSubmit = async (data) => {
    const email =data.email
    const password =data.password
    const remember =data.remember

const response =  await instance.post(`auth/login`, {email, password, remember})

  const result =  response.data.messages
  
  if (response.data.messages.length != 0) {
    setResult(result)
  } else {
    await props.Login_(data.email, data.password, data.remember)
    reset();
  }
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
                message: "Entered value does not match email format",
                message2: "props.fail",

              }
            })}
            type="email"
            placeholder="example@mail.com"
          />
          {errors.email && <p>{errors.email.message2}</p>}
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
          {resultat && <span  className={q.span}>{resultat}</span>}
          <p><input type="checkbox" htmlFor="remember" id="remember"
            {...register("remember", {})}
          /> Remember</p>
          
        </section>
        <button className={q.button} type="submit">SUBMIT</button>
      </form>
    </div>

  );
}