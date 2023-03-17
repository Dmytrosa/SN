import React from "react";
import q from "../../Assets/Form.module.css";
import classNames from "classnames";
import { useForm } from "react-hook-form";

const defaultValues = {
    header: '',
    text: '',
}

export const Form = (props) => {





    return (HookForm())




    function HookForm() {
        const { register, handleSubmit, reset, formState: { errors }, formState } = useForm({
            defaultValues,
            mode: 'onBlur'
        })

        const onSubmit = data => {
            props.AddPost(data.header, data.text)
            reset();
        }
        return (
            <div className={q.body}>
            <form className={q.form} onSubmit={handleSubmit(onSubmit)}>

                <label htmlFor="header"
                    className={classNames(q.label, { [q.errorlabel]: errors.header })}>

                    Заголовок:
                </label>
                <input type="text"
                    placeholder="Назва поста"
                    className=
                    {classNames
                        (q.input, { [q.errorinput]: errors.header })
                    }
                    {...register("header", {
                        required: "Field is required",
                        maxLength: 50
                    })}
                />
                {errors.header && errors.header.type === "required" && <span className={q.span} role="alert">This is required</span>}
                {errors.header && errors.header.type === "maxLength" && <span className={q.span} role="alert">Max length exceeded</span>}
                <p></p>
                <label className={classNames(q.label, { [q.errorlabel]: errors.text })}>
                    Текст:
                </label>
                <input type="text"
                    placeholder="Назва поста"
                    className=
                    {classNames
                        (q.input, { [q.errorinput]: errors.text })
                    }
                    {...register("text", {
                        required: "Field is required",
                        maxLength: 100
                    })}
                />
                {errors.text && errors.text.type === "required" && <span className={q.span} role="alert">This is required</span>}
                {errors.text && errors.text.type === "maxLength" && <span className={q.span} role="alert">Max length exceeded</span>}

                <p>
                    <input className={q.button} type="submit" value="СТВОРИТИ"></input>
                </p>

            </form>
            </div>

        )
      
    }
}

