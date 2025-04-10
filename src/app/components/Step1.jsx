"use client";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

const schema = z.object({
  fullName: z.string().min(1, "Full Name is required"),
  email: z.string().email("Invalid email"),
  phone: z.string().min(10, "Phone must be at least 10 digits"),
});

export default function Step1({ nextStep, updateFormData, defaultValues }) {
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
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 font-bold text-right  inline-block mb-5">
      <h2 className="font-light mt-3 text-green-500 text-right">Step 1: Personal Information</h2>

      <div>
        <label className="text-xl">Full Name :</label>
        <input {...register("fullName")} className="border ml-2 rounded-lg hover:bg-gray-100" />
        {errors.fullName && (
          <p className="text-red-500">{errors.fullName.message}</p>
        )}
      </div>

      <div>
        <label className="text-xl">Email :</label>
        <input {...register("email")} className="border ml-2 rounded-lg hover:bg-gray-100 " />
        {errors.email && <p className="text-red-500">{errors.email.message}</p>}
      </div>

      <div>
        <label className="text-xl">Phone Number :</label>
        <input {...register("phone")} className="border ml-2 rounded-lg hover:bg-gray-100" />
        {errors.phone && <p className="text-red-500">{errors.phone.message}</p>}
      </div>

      <button type="submit" className="px-4 py-2 max-sm:w-full bg-blue-600 text-white rounded hover:bg-blue-700">
        Next Step
      </button>
    </form>
    </div>
  );
}
