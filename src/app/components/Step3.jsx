"use client";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

const schema = z
  .object({
    username: z.string().min(4, "Minimum 4 characters"),
    password: z.string().min(6, "Minimum 6 characters"),
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords must match",
    path: ["confirmPassword"],
  });

export default function Step3({
  nextStep,
  prevStep,
  updateFormData,
  defaultValues,
}) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
    defaultValues,
  });

  const onSubmit = (data) => {
    updateFormData(data);
    nextStep();
  };

  return (
    <div className=" items-center justify-center mx-auto flex">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="space-y-4 font-bold text-right  inline-block mb-5"
      >
        <h2 className="font-light mt-3 text-green-500 text-right">
          Step 3: Account Setup
        </h2>

        <div>
          <label className="text-xl">Username : </label>
          <input
            {...register("username")}
            className="border ml-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-600"
          />
          {errors.username && (
            <p className="text-red-500">{errors.username.message}</p>
          )}
        </div>

        <div>
          <label className="text-xl">Password : </label>
          <input
            type="password"
            {...register("password")}
            className="border ml-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-600"
          />
          {errors.password && (
            <p className="text-red-500">{errors.password.message}</p>
          )}
        </div>

        <div>
          <label className="text-xl">Confirm Password : </label>
          <input
            type="password"
            {...register("confirmPassword")}
            className="border ml-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-600"
          />
          {errors.confirmPassword && (
            <p className="text-red-500">{errors.confirmPassword.message}</p>
          )}
        </div>

        <div className="flex justify-between gap-4 max-sm:flex-col">
          <button
            type="button"
            onClick={prevStep}
            className="px-4 py-2 bg-gray-300 text-gray-800 rounded hover:bg-gray-400"
          >
            Previous Step
          </button>
          <button
            type="submit"
            className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
          >
            Next Step
          </button>
        </div>
      </form>
    </div>
  );
}
