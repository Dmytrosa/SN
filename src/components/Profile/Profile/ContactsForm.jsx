import React, { useState } from "react";
import { useForm } from "react-hook-form";
import q from "../../Assets/Form.module.css"
import axios from "axios"

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: { "API-KEY": "8604cc03-3d58-4a45-8602-e011234bfbbf" }
})


export const ContactsInfo = (props) => {
  const [resultat, setResult] = useState(null);
  const [github, setGithub] =useState(props.profile.contacts.github)
  const [instagram, setInstagram] =useState(props.profile.contacts.instagram)
  const [twitter, setTwitter] =useState(props.profile.contacts.twitter)
  const [website, setWebsite] =useState(props.profile.contacts.website)
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm();

  const onSubmit = async (data) => {
    const GitHub =data.GitHub
    const Instagram =data.Instagram
    const Twitter =data.Twitter
    const Website = data.Website

    const aboutMe = props.profile.aboutMe
    const LookingForAJob =props.profile.lookingForAJob
    const StackDescription =props.profile.lookingForAJobDescription
    const FullName = props.profile.fullName

    const contacts ={
      facebook: null, 
      website: Website,
      vk: null,
      twitter: Twitter,
      instagram: Instagram,
      youtube: null,
      github: GitHub,
      mainLink: null}

const response =  await instance.put(`/profile`, {
  lookingForAJob: LookingForAJob,
  lookingForAJobDescription: StackDescription,
  aboutMe: aboutMe,
  FullName: FullName,
  contacts: contacts})

  const result =  response.data.messages
  if (response.data.messages.length != 0) {
    setResult(result)
  } else {
    props.setIsContactsActive(false)
    debugger
    await props.ApdateContactsInfo(data.GitHub, data.Instagram, data.Twitter, data.Website)
    reset();
  }
  };
  
  const onDenyHandler =(e)=>{
    e.preventDefault()
    props.setIsContactsActive(false)
  }

  return (
    <div className={q.body}>
      <form className={q.form} onSubmit={handleSubmit(onSubmit)}>
        <section>
          <h1 className={q.h1}>Personal Info</h1>
         
          <label className={q.label} htmlFor="GitHub">GitHub</label>
          <input className={q.input}
            id="GitHub"
            aria-invalid={errors.GitHub ? "true" : "false"}
            {...register("GitHub", {
              })}
            type="GitHub"
            placeholder="GitHub"
            value={github}
            onChange={(e)=>{setGithub(e.target.value)}}
          />
          {errors.GitHub && <p>{errors.GitHub.message2}</p>}
          {errors.GitHub && <span className={q.span} role="alert">{errors.GitHub.message}</span>}

         
          <label className={q.label} htmlFor="Instagram">Instagram</label>
          <input className={q.input}
            id="Instagram"
            aria-invalid={errors.Instagram ? "true" : "false"}
            {...register("Instagram", {
              })}
            type="Instagram"
            placeholder="Instagram"
            value={instagram}
            onChange={(e)=>{setInstagram(e.target.value)}}
          />
          {errors.Instagram && <p>{errors.Instagram.message2}</p>}
          {errors.Instagram && <span className={q.span} role="alert">{errors.Instagram.message}</span>}

         
          <label className={q.label} htmlFor="Twitter">Twitter</label>
          <input className={q.input}
            id="Twitter"
            aria-invalid={errors.Twitter ? "true" : "false"}
            {...register("Twitter", {
              })}
            type="Twitter"
            placeholder="Twitter"
            value={twitter}
            onChange={(e)=>{setTwitter(e.target.value)}}
          />
          {errors.Twitter && <p>{errors.Twitter.message2}</p>}
          {errors.Twitter && <span className={q.span} role="alert">{errors.Twitter.message}</span>}

         
          <label className={q.label} htmlFor="Website">Website</label>
          <input className={q.input}
            id="Website"
            aria-invalid={errors.Website ? "true" : "false"}
            {...register("Website", {
              })}
            type="Website"
            placeholder="Website"
            value={website}
            onChange={(e)=>{setWebsite(e.target.value)}}
          />
          {errors.Website && <p>{errors.Website.message2}</p>}
          {errors.Website && <span className={q.span} role="alert">{errors.Website.message}</span>}


           </section>
        <button className={q.button} type="submit" >SUBMIT</button>
        <button className={q.button}  onClick={(e)=>{onDenyHandler(e)}}>Deny</button>
      </form>
    </div>

  );
}