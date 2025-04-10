"use client";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

const schema = z.object({
  street: z.string().min(1, "Street Address is required"),
  city: z.string().min(1, "City is required"),
  zip: z
    .string()
    .min(5, "Zip Code must be at least 5 digits")
    .regex(/^\d+$/, "Only numbers allowed"),
});

export default function Step2({
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
          Step 2: Address Details
        </h2>

        <div>
          <label className="text-xl">Street Address :</label>
          <input
            {...register("street")}
            className="border ml-2 rounded-lg hover:bg-gray-100"
          />
          {errors.street && (
            <p className="text-red-500">{errors.street.message}</p>
          )}
        </div>

        <div>
          <label className="text-xl">City :</label>
          <input
            {...register("city")}
            className="border ml-2 rounded-lg hover:bg-gray-100"
          />
          {errors.city && <p className="text-red-500">{errors.city.message}</p>}
        </div>

        <div>
          <label className="text-xl">Zip Code :</label>
          <input
            {...register("zip")}
            className="border ml-2 rounded-lg hover:bg-gray-100"
          />
          {errors.zip && <p className="text-red-500">{errors.zip.message}</p>}
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
