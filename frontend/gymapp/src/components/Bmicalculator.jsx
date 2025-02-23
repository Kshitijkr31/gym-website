import React, { useState } from "react";
import { toast } from "react-toastify";

const Bmicalculator = () => {
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [gender, setGender] = useState("");
  const [bmi, setBmi] = useState("");

  const calculateBMI = (e) => {
    e.preventDefault();

    if (!height || !weight || !gender) {
      toast.error("Please fill correct details, all are compulsory!");
      return;
    }

    const heightInMeters = height / 100;
    const BMI = (weight / (heightInMeters * heightInMeters)).toFixed(2);
    setBmi(BMI);

    if (BMI < 18.5) {
      toast.warning(
        "You are Underweight. Consider taking advice from a diet specialist."
      );
    } else if (BMI >= 18.5 && BMI < 24.9) {
      toast.success("Excellent, you are in Normal weight. Enjoy!");
    }
    else if(BMI >= 24.9) {
      toast.error("Obese !! you are Overweight ");
    } 
  };

  return <section className="bmi">
    <h1>BMI CALCULTOR</h1>
    <div className="container">
      <div className="wrapper">
      <form onSubmit={calculateBMI}>
            <div>
              <label>Height (cm)</label>
              <input
                type="number"
                value={height}
                onChange={(e) => {
                  setHeight(e.target.value);
                }}
                required
              />
            </div>
            <div>
              <label>Weight (kg)</label>
              <input
                type="number"
                value={weight}
                onChange={(e) => {
                  setWeight(e.target.value);
                }}
                required
              />
            </div>
            <div>
              <label>Gender (Male )</label>
              <select
                value={gender}
                onChange={(e) => {
                  setGender(e.target.value);
                }}
                required
              >
                <option value="Select">Select Gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
              </select>
            </div>
            <button className="buttons" type="submit">Calculate BMI</button>
          </form>
      </div>
      <div className="wrapper">
        <img src="https://raw.githubusercontent.com/Zeeshu911/MERN_STACK_GYM_WEBSTITE_WITH_EMAIL_FUNCTIONALITY/main/frontend/public/bmi.jpg" alt="bmi image" />
      </div>
    </div>
  </section>
};

export default Bmicalculator;
