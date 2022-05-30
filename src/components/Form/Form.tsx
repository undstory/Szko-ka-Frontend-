import {useRef} from 'react'
import React from 'react';
import { useForm } from 'react-hook-form'

// interface funcProps {
//   setQuery: (query: string) => void
// }
const Form: React.FC<{setQuery: (query: string) => void}> = (props) => {
// const Form: React.FC<funcProps> = (props) => {

  const { register, handleSubmit, formState: { errors } } = useForm();

  const inputRef = useRef<HTMLInputElement | null>(null);

  console.log(inputRef)
  // const formHandler = (event: Event)=> {
  //   const value = (event.target as HTMLInputElement).value;
  //   // props.setQuery(data.inputRef.current.value);
  //   console.log(value)
  // };
  const inputChangeHandler = (e: React.FormEvent<HTMLInputElement>) : void=> {
    console.log(e.currentTarget.value)
    props.setQuery(e.currentTarget.value);
  }


  return (
    <form >
        <input type="text"  {...register('query')} ref={inputRef}  onChange={inputChangeHandler} />
        <button type="submit" >Search</button>
    </form>
  )
}

export default Form