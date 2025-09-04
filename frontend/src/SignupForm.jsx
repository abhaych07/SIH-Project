import React, { useState } from "react";
import "./SignupForm.css";

export default function SignupForm() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    dob: "",
    phone: "",
    email: "",
    disorder: "",
    tests: "",
    history: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const nextStep = () => setStep(step + 1);
  const prevStep = () => setStep(step - 1);

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("✅ Form Submitted! Check console for details.");
    console.log(formData);
  };

  return (
    <div className="form-container">
      <h2>📝 Sign Up</h2>

      {/* Progress Bar */}
      <div className="progress-bar">
        <div
          className={`step ${step >= 1 ? "active" : ""}`}
        >
          1
        </div>
        <div className={`line ${step === 2 ? "active" : ""}`}></div>
        <div
          className={`step ${step === 2 ? "active" : ""}`}
        >
          2
        </div>
      </div>
      <p className="step-text">Step {step} of 2</p>

      {step === 1 && (
        <form>
          <label>Name:</label>
          <input type="text" name="name" value={formData.name} onChange={handleChange} required />

          <label>Age:</label>
          <input type="number" name="age" value={formData.age} onChange={handleChange} />

          <label>Date of Birth:</label>
          <input type="date" name="dob" value={formData.dob} onChange={handleChange} />

          <label>Phone:</label>
          <input type="tel" name="phone" value={formData.phone} onChange={handleChange} />

          <label>Email:</label>
          <input type="email" name="email" value={formData.email} onChange={handleChange} />

          <button type="button" onClick={nextStep} className="next-btn">
            Next →
          </button>
        </form>
      )}

      {step === 2 && (
        <form onSubmit={handleSubmit}>
          <label>Type of Psychological Disorder:</label>
          <input type="text" name="disorder" value={formData.disorder} onChange={handleChange} />

          <label>Tests you want:</label>
          <input type="text" name="tests" value={formData.tests} onChange={handleChange} />

          <label>Previous History:</label>
          <textarea name="history" value={formData.history} onChange={handleChange}></textarea>

          <div className="btn-group">
            <button type="button" onClick={prevStep} className="back-btn">
              ← Back
            </button>
            <button type="submit" className="submit-btn">
              Submit ✅
            </button>
          </div>
        </form>
      )}
    </div>
  );
}
