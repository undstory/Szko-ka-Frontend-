import {useRef} from 'react'
import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form'

type FormValues = {
  query: string;
}

const FormGallery: React.FC<{setQuery: (query: string) => void}> = (props) => {


  const { register, handleSubmit, formState: { errors } } = useForm<FormValues>();

  const inputRef = useRef<HTMLInputElement | null>(null);


const formHandler:  SubmitHandler<FormValues> = (data) => {
  props.setQuery(data.query)
}

const onError = () => {
  console.log("wrong")
}

  return (
    <form onSubmit={handleSubmit(formHandler, onError)}>
        <input type="text"  {...register("query", { required: true })}  />
        <button type="submit" >Search</button>
    </form>
  )
}

export default FormGallery















  // console.log(inputRef)
  // const formHandler = (event: Event)=> {
  //   const value = (event.target as HTMLInputElement).value;
  //   // props.setQuery(data.inputRef.current.value);
  //   console.log(value)
  // };
  // const inputChangeHandler = (data: string, e: React.FormEvent<HTMLInputElement>) : void=> {
  //   console.log(e.currentTarget.value)
  //   props.setQuery(e.currentTarget.value);
  // }

//   const inputChangeHandler: SubmitHandler<FormValues> = (data, e: React.FormEvent<HTMLFormElement> ) : void => {
// props.setQuery(data.query)
//   }