import React, { useState } from "react";
import textData from "./formText.json"; // assuming JSON file is saved as formText.json in same folder

export default function CounsellingForm() {
  const [description, setDescription] = useState("");
  const [status, setStatus] = useState(textData.form.status.options[0]);
  const [level, setLevel] = useState(textData.form.level.options[0]);
  const [meetingLocation, setMeetingLocation] = useState("");
  const [timing, setTiming] = useState("");
  const [concerns, setConcerns] = useState([]);
  const [severity, setSeverity] = useState("");
  const [counsellorType, setCounsellorType] = useState("");
  const [submitted, setSubmitted] = useState(null);

  function toggleConcern(value) {
    setConcerns(prev => {
      if (prev.includes(value)) return prev.filter(c => c !== value);
      return [...prev, value];
    });
  }

  function validate() {
    if (!description.trim()) return { ok: false, message: `${textData.form.description.label} ${textData.form.description.required} is required.` };
    if (!timing) return { ok: false, message: `${textData.form.timing.label} ${textData.form.timing.required} is required.` };
    if (concerns.length === 0) return { ok: false, message: `Select at least one ${textData.form.concerns.legend}.` };
    if (!severity) return { ok: false, message: `${textData.form.severity.label} ${textData.form.severity.required} is required.` };
    return { ok: true };
  }

  function handleSubmit(e) {
    e.preventDefault();
    const v = validate();
    if (!v.ok) {
      setSubmitted({ success: false, message: v.message });
      return;
    }

    const payload = {
      description: description.trim(),
      status,
      level,
      meetingLocation: meetingLocation.trim() || null,
      timing,
      concerns,
      severity,
      counsellorType: counsellorType || null,
      createdAt: new Date().toISOString(),
    };
    setSubmitted({ success: true, payload });
  }

  return (
    <div className="min-h-screen bg-gray-50 flex items-start justify-center py-10 px-4">
      <form
        onSubmit={handleSubmit}
        className="max-w-3xl w-full bg-white rounded-2xl shadow-lg p-8 space-y-6"
        aria-label="Counselling ticket form"
      >
        <h1 className="text-2xl font-semibold">{textData.form.title}</h1>

        {/* Description */}
        <div>
          <label htmlFor="description" className="block text-sm font-medium text-gray-700">
            {textData.form.description.label} <span className="text-red-500">{textData.form.description.required}</span>
          </label>
          <textarea
            id="description"
            value={description}
            onChange={e => setDescription(e.target.value)}
            rows={6}
            required
            className="mt-2 w-full rounded-xl border-gray-300 shadow-sm focus:ring-2 focus:ring-indigo-200 p-3"
            placeholder={textData.form.description.placeholder}
          />
          <p className="mt-1 text-xs text-gray-500">{textData.form.description.helperText}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Status */}
          <div>
            <label htmlFor="status" className="block text-sm font-medium text-gray-700">
              {textData.form.status.label}
            </label>
            <select
              id="status"
              value={status}
              onChange={e => setStatus(e.target.value)}
              className="mt-2 block w-full rounded-lg border-gray-300 p-2"
            >
              {textData.form.status.options.map(option => (
                <option key={option}>{option}</option>
              ))}
            </select>
            <p className="text-xs text-gray-500 mt-1">{textData.form.status.helperText}</p>
          </div>

          {/* Level */}
          <div>
            <label htmlFor="level" className="block text-sm font-medium text-gray-700">
              {textData.form.level.label}
            </label>
            <select
              id="level"
              value={level}
              onChange={e => setLevel(e.target.value)}
              className="mt-2 block w-full rounded-lg border-gray-300 p-2"
            >
              {textData.form.level.options.map(option => (
                <option key={option}>{option}</option>
              ))}
            </select>
            <p className="text-xs text-gray-500 mt-1">{textData.form.level.helperText}</p>
          </div>
        </div>

        {/* Meeting Location */}
        <div>
          <label htmlFor="meetingLocation" className="block text-sm font-medium text-gray-700">
            {textData.form.meetingLocation.label} <span className="text-gray-400">{textData.form.meetingLocation.optional}</span>
          </label>
          <input
            id="meetingLocation"
            value={meetingLocation}
            onChange={e => setMeetingLocation(e.target.value)}
            type="text"
            placeholder={textData.form.meetingLocation.placeholder}
            className="mt-2 w-full rounded-lg border-gray-300 p-2"
          />
          <p className="text-xs text-gray-500 mt-1">{textData.form.meetingLocation.helperText}</p>
        </div>

        {/* Timing */}
        <div>
          <label htmlFor="timing" className="block text-sm font-medium text-gray-700">
            {textData.form.timing.label} <span className="text-red-500">{textData.form.timing.required}</span>
          </label>
          <input
            id="timing"
            required
            value={timing}
            onChange={e => setTiming(e.target.value)}
            type="datetime-local"
            className="mt-2 w-full rounded-lg border-gray-300 p-2"
          />
          <p className="text-xs text-gray-500 mt-1">{textData.form.timing.helperText}</p>
        </div>

        {/* Concerns */}
        <fieldset>
          <legend className="text-sm font-medium text-gray-700">{textData.form.concerns.legend} <span className="text-red-500">{textData.form.concerns.required}</span></legend>
          <p className="text-xs text-gray-500 mb-2">{textData.form.concerns.helperText}</p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {textData.form.concerns.options.map(c => (
              <label key={c} className="inline-flex items-center space-x-2 rounded-lg border p-2">
                <input
                  type="checkbox"
                  checked={concerns.includes(c)}
                  onChange={() => toggleConcern(c)}
                />
                <span className="text-sm">{c}</span>
              </label>
            ))}
          </div>
        </fieldset>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Severity */}
          <div>
            <label htmlFor="severity" className="block text-sm font-medium text-gray-700">
              {textData.form.severity.label} <span className="text-red-500">{textData.form.severity.required}</span>
            </label>
            <select
              id="severity"
              required
              value={severity}
              onChange={e => setSeverity(e.target.value)}
              className="mt-2 block w-full rounded-lg border-gray-300 p-2"
            >
              <option value="">{textData.form.severity.defaultOption}</option>
              {textData.form.severity.options.map(option => (
                <option key={option}>{option}</option>
              ))}
            </select>
            <p className="text-xs text-gray-500 mt-1">{textData.form.severity.helperText}</p>
          </div>

          {/* Counsellor Type */}
          <div>
            <label htmlFor="counsellorType" className="block text-sm font-medium text-gray-700">
              {textData.form.counsellorType.label} <span className="text-gray-400">{textData.form.counsellorType.optional}</span>
            </label>
            <select
              id="counsellorType"
              value={counsellorType}
              onChange={e => setCounsellorType(e.target.value)}
              className="mt-2 block w-full rounded-lg border-gray-300 p-2"
            >
              <option value="">{textData.form.counsellorType.defaultOption}</option>
              {textData.form.counsellorType.options.map(option => (
                <option key={option}>{option}</option>
              ))}
            </select>
            <p className="text-xs text-gray-500 mt-1">{textData.form.counsellorType.helperText}</p>
          </div>
        </div>

        <div className="flex items-center justify-between space-x-4">
          <button
            type="submit"
            className="inline-flex items-center px-5 py-2 rounded-lg bg-indigo-600 text-white font-medium hover:bg-indigo-700 focus:ring-2 focus:ring-indigo-200"
          >
            {textData.form.buttons.submit}
          </button>

          <button
            type="button"
            onClick={() => {
              setDescription("");
              setStatus(textData.form.status.options[0]);
              setLevel(textData.form.level.options[0]);
              setMeetingLocation("");
              setTiming("");
              setConcerns([]);
              setSeverity("");
              setCounsellorType("");
              setSubmitted(null);
            }}
            className="inline-flex items-center px-4 py-2 rounded-lg border text-sm"
          >
            {textData.form.buttons.reset}
          </button>
        </div>

        {/* Submission Preview */}
        <div className="pt-4">
          {submitted === null ? (
            <p className="text-sm text-gray-500">{textData.form.submission.initialMessage}</p>
          ) : submitted.success ? (
            <div className="rounded-lg bg-green-50 p-4 border border-green-100">
              <h3 className="font-medium">{textData.form.submission.successTitle}</h3>
              <p className="text-sm text-gray-600 mt-1">{textData.form.submission.successDescription}</p>
              <pre className="mt-2 overflow-auto text-xs bg-white p-3 rounded-lg border">{JSON.stringify(submitted.payload, null, 2)}</pre>
            </div>
          ) : (
            <div className="rounded-lg bg-red-50 p-3 border border-red-100 text-sm text-red-700">{submitted.message || textData.form.submission.errorMessage}</div>
          )}
        </div>
      </form>
    </div>
  );
}
