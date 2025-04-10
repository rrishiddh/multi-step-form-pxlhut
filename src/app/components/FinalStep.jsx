"use client";

export default function FinalStep({ formData, prevStep, isSubmitDisabled, handleSubmit }) {
  return (
    <div className=" items-center justify-center mx-auto flex">

    <div className="space-y-4 font-bold text-right  inline-block mb-5 max-sm:w-full">
      <h2 className="font-light mt-3 text-green-500 text-right ">Step 4: Review & Submit</h2>

      <ul className=" space-y-2  font-light ml-5 text-right">
        <li><span className="text-xl font-bold">Full Name:</span> {formData.fullName}</li>
        <li><span className="text-xl font-bold">Email:</span> {formData.email}</li>
        <li><span className="text-xl font-bold">Phone:</span> {formData.phone}</li>
        <li><span className="text-xl font-bold">Street:</span> {formData.street}</li>
        <li><span className="text-xl font-bold">City:</span> {formData.city}</li>
        <li><span className="text-xl font-bold">Zip:</span> {formData.zip}</li>
        <li><span className="text-xl font-bold">Username:</span> {formData.username}</li>
      </ul>

      <div className="flex justify-between gap-4 max-sm:flex-col">
        <button onClick={prevStep} className="px-4 py-2 bg-gray-300 text-gray-800 rounded hover:bg-gray-400">Previous Step</button>
        <button onClick={handleSubmit} disabled={isSubmitDisabled} className={isSubmitDisabled ? 'text-white bg-green-500 font-bold py-2 px-4 rounded cursor-not-allowed' : 'bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'}>
        {isSubmitDisabled ? 'Submission Done' : 'Submit Now' }
        </button>
      </div>
    </div>
    </div>
  );
}
