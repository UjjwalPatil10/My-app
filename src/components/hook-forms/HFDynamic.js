import React from "react";
import {
  useForm,
  useFieldArray,
  useController,
  Controller,
} from "react-hook-form";

const HFDynamic = () => {
  const { register, control, handleSubmit, reset, trigger, setError } = useForm(
    {
      //DefaultValues:{}; you can populate the fields by this attribute
    }
  );
  const { fields, append, remove } = useFieldArray({
    control,
    name: "test",
  });
  return (
    <>
      <form onSubmit={handleSubmit((data) => console.log(data))}>
        <ul>
          {fields.map((item, index) => (
            <li key={item.id}>
              <input {...register(`test.${index}.firstName`)} />
              <input {...register(`test.${index}.yesName`)} />
              <Controller
                render={({ field }) => <input {...field} />}
                name={`test.${index}.lastName`}
                control={control}
              />
              <button type="button" onClick={() => remove(index)}>
                Delete
              </button>
            </li>
          ))}
        </ul>

        <button
          type="button"
          onClick={() =>
            append({ firstName: "bill", lastName: "luo", yesName: "reva" })
          }
        >
          append
        </button>
        <input type="submit" />
      </form>
    </>
  );
};

export default HFDynamic;
