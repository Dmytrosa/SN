import React, { useState } from "react";
import { useForm } from "react-hook-form";
import q from "../../Assets/Form.module.css"
import axios from "axios"

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: { "API-KEY": "8604cc03-3d58-4a45-8602-e011234bfbbf" }
})


export const PersonalInfo = (props) => {
  const [resultat, setResult] = useState(null);
  const [aboutMe, setAboutMe] = useState(props.profile.aboutMe);
  const [lookingForAJob, setLookingForAJob] = useState(props.profile.lookingForAJob);
  const [lookingForAJobDescription, setLookingForAJobDescription] = 
  useState(props.profile.lookingForAJobDescription);
  const [fullName, setFullName] = useState(props.profile.fullName);



  debugger



  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm();

  const onSubmit = async (data) => {
    const LookingForAJob =data.LookingForAJob
    const StackDescription =data.StackDescription
    const AditionalInfo =data.AditionalInfo
    const FullName = data.FullName

const response =  await instance.put(`/profile`, { 
  lookingForAJob: LookingForAJob,
    lookingForAJobDescription: StackDescription,
     aboutMe: AditionalInfo,
     FullName: FullName
    })

  const result =  response.data.messages
  debugger
  if (response.data.messages.length != 0) {
    setResult(result)
  } else {
    debugger
    props.setIsPersonalInfoActive(false)
    await props.ApdatePersonalInfo( data.FullName, data.LookingForAJob, data.StackDescription, data.AditionalInfo)
    reset();
  }
  };
  
  const onDenyHandler =(e)=>{
    e.preventDefault()
    props.setIsPersonalInfoActive(false)
  }

  return (
    <div className={q.body}>
      <form className={q.form} onSubmit={handleSubmit(onSubmit)}>
        <section>
          <h1 className={q.h1}>Personal Info</h1>
         
          <label className={q.label} htmlFor="FullName">Full Name</label>
          <input className={q.input}
            id="FullName"
            aria-invalid={errors.FullName ? "true" : "false"}
            {...register("FullName", {
              })}
            type="FullName"
            placeholder="FullName"
            value={fullName}
            onChange={(e)=>{setFullName(e.target.value)}}
          />
          {errors.FullName && <p>{errors.FullName.message2}</p>}
          {errors.FullName && <span className={q.span} role="alert">{errors.FullName.message}</span>}

          <div className={q.checkBoxWithLabel}>
          <label className={q.label} htmlFor="LookingForAJob">Looking For A Job</label>
          <input className={q.inputCheck}
            id="LookingForAJob"
            aria-invalid={errors.LookingForAJob ? "true" : "false"}
            {...register("LookingForAJob", {
              })}
            type="checkbox"
            placeholder="LookingForAJob"
            value={lookingForAJob}
            onChange={(e)=>{setLookingForAJob(e.target.value)}}
          />
          </div>
          {errors.LookingForAJob && <p>{errors.LookingForAJob.message2}</p>}
          {errors.LookingForAJob && <span className={q.span} role="alert">{errors.LookingForAJob.message}</span>}
          


          <label className={q.label} htmlFor="StackDescription">Stack Description lInfo</label>
          <input className={q.input}
            id="StackDescription"
            aria-invalid={errors.StackDescription ? "true" : "false"}
            {...register("StackDescription", {
              })}
            type="StackDescription"
            placeholder="StackDescription"
            value={lookingForAJobDescription}
            onChange={(e)=>{setLookingForAJobDescription(e.target.value)}}
          />
          {errors.StackDescription && <p>{errors.StackDescription.message2}</p>}
          {errors.StackDescription && <span className={q.span} role="alert">{errors.StackDescription.message}</span>}
        
          <label className={q.label} htmlFor="AditionalInfo">Aditiona lInfo</label>
          <input className={q.input}
            id="AditionalInfo"
            aria-invalid={errors.AditionalInfo ? "true" : "false"}
            {...register("AditionalInfo", {
              })}
            type="AditionalInfo"
            placeholder="AditionalInfo"
            value={aboutMe}
            onChange={(e)=>{setAboutMe(e.target.value)}}
          />
          {errors.AditionalInfo && <p>{errors.AditionalInfo.message2}</p>}
          {errors.AditionalInfo && <span className={q.span} role="alert">{errors.AditionalInfo.message}</span>}
        </section>
        <button className={q.button} type="submit" >SUBMIT</button>
        <button className={q.button}  onClick={(e)=>{onDenyHandler(e)}}>Deny</button>
      </form>
    </div>

  );
}