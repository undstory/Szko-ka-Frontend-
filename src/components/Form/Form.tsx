import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import StyledInput from "../Input/Input";
import StyledButton from "../Button/Button";

type FormValues = {
  query: string;
};

const Form: React.FC<{ setQuery: (query: string) => void }> = (props) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>();

  const formHandler: SubmitHandler<FormValues> = (data) => {
    props.setQuery(data.query);
  };

  const onError = () => {
    console.log("wrong");
  };

  return (
    <form onSubmit={handleSubmit(formHandler, onError)}>
      <StyledInput
        type="text"
        {...register("query", {
          required: "You have to enter a word",
          pattern: {
            value: /[A-Z]$/i,
            message: "Something went wrong",
          },
        })}
        placeholder="Word..."
      />


      <StyledButton type="submit">Search</StyledButton>

      {errors.query ? (
        <>
          {errors.query?.type === "required" && (
            <p style={{color: "#D64045", marginTop: "10px"}}>
              {errors.query.message}
            </p>
          )}
          {errors.query?.type === "pattern" && (
            <p style={{ color: "#E3E36A", marginTop: "10px" }}>
              {errors.query.message}
            </p>
          )}
        </>
      ) : null}
    </form>
  );
};

export default Form;
