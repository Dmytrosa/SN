import React from "react";
import q from'./Settings.module.css';

const Settings =() =>{

    return(
        
<div className='main'>
      its my Settings
       </div> 

    );
}
export default Settings;
// import React, { useEffect, useState } from 'react';
// import { useForm } from 'react-hook-form';

// export default function MyForm(props) {
//   const { register, handleSubmit, formState: { errors }, reset } = useForm();
//   const [canSubmit, setCanSubmit] = useState(true);

//   const onSubmit = (data) => {
//     // Обробка даних форми тут
//   }

//   useEffect(() => {
//     // Перевірка чи є помилки валідації
//     if (Object.keys(errors).length > 0) {
//       setCanSubmit(false);
//     } else {
//       setCanSubmit(true);
//     }
//   }, [errors]);

//   return (
//     <form onSubmit={handleSubmit(onSubmit)}>
//       {/* Реєстрація полів форми */}
//       <input {...register('firstName', { required: true })} />
//       <input {...register('lastName', { required: true })} />

//       {/* Відображення помилок валідації */}
//       {errors.firstName && <p>Введіть ім'я</p>}
//       {errors.lastName && <p>Введіть прізвище</p>}

//       {/* Кнопка подачі форми */}
//       <button type="submit" disabled={!canSubmit}>Подати</button>
//     </form>
//   );
// }
