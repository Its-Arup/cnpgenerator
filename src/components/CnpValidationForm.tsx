import { useState } from "react";
import { LuUser } from "react-icons/lu";


const CnpValidationForm = () => {
  const [cnp, setCnp] = useState<string>("");

  const handleCnpChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCnp(e.target.value);
  };

  const handleSubmit = () => {
    // Add your CNP validation logic here
    console.log("Validating CNP: ", cnp);
  };

  return (
    <div className="form-container h-full w-full">
      <label htmlFor="cnp" className="form-label font-bold ">
        CNP de validat: <span style={{ color: "red" }}>*</span>
      </label>
      <div className="flex gap-3 p-4 focus:ring-1 focus:ring-blue-500 border border-[#ddd] rounded-[5px] mb-4">
        <LuUser size={"1.5rem"} className="text-gray-500 " />
        <input
          type="text"
          id="cnp"
          name="cnp"
          value={cnp}
          onChange={handleCnpChange}
          placeholder="Introduceti CNP"
          className="input-field border-none outline-none  w-full"
        />
      </div>
      <button onClick={handleSubmit} className="submit-button">
        Valideaza CNP
      </button>
    </div>
  );
};

export default CnpValidationForm;
