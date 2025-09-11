import React, { useState } from "react";

// Single-file React component for a counselling ticket form.
// Tailwind CSS classes are used for styling (no imports required here).
// Usage: paste into a React app (e.g., create-react-app / Vite) and ensure Tailwind is configured.

export default function CounsellingForm() {
  const [description, setDescription] = useState("");
  const [status, setStatus] = useState("OPEN");
  const [level, setLevel] = useState("GENERAL");
  const [meetingLocation, setMeetingLocation] = useState("");
  const [timing, setTiming] = useState(""); // ISO-like string from <input type="datetime-local">
  const [concerns, setConcerns] = useState([]);
  const [severity, setSeverity] = useState("");
  const [counsellorType, setCounsellorType] = useState("");
  const [submitted, setSubmitted] = useState(null);

  const CONCERNS = ["ANXIETY", "DEPRESSION", "STRESS", "ACADEMIC", "RELATIONSHIP"];

  function toggleConcern(value) {
    setConcerns(prev => {
      if (prev.includes(value)) return prev.filter(c => c !== value);
      return [...prev, value];
    });
  }

  function validate() {
    // Required: description, timing, concerns (at least one), severity
    if (!description.trim()) return { ok: false, message: "Description is required." };
    if (!timing) return { ok: false, message: "Timing (date + time) is required." };
    if (concerns.length === 0) return { ok: false, message: "Select at least one concern." };
    if (!severity) return { ok: false, message: "Severity is required." };
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
      timing, // e.g. "2025-09-11T18:00"
      concerns,
      severity,
      counsellorType: counsellorType || null,
      createdAt: new Date().toISOString(),
    };

    // For demo, we'll just set submitted state to show the JSON. In a real app you'd POST to an API.
    setSubmitted({ success: true, payload });
  }

  return (
    <div className="min-h-screen bg-gray-50 flex items-start justify-center py-10 px-4">
      <form
        onSubmit={handleSubmit}
        className="max-w-3xl w-full bg-white rounded-2xl shadow-lg p-8 space-y-6"
        aria-label="Counselling ticket form"
      >
        <h1 className="text-2xl font-semibold">Create Counselling Ticket</h1>

        {/* Description (required) */}
        <div>
          <label htmlFor="description" className="block text-sm font-medium text-gray-700">
            Description <span className="text-red-500">*</span>
          </label>
          <textarea
            id="description"
            value={description}
            onChange={e => setDescription(e.target.value)}
            rows={6}
            required
            className="mt-2 w-full rounded-xl border-gray-300 shadow-sm focus:ring-2 focus:ring-indigo-200 p-3"
            placeholder="Write a detailed description of the issue or problem you're facing..."
          />
          <p className="mt-1 text-xs text-gray-500">Explain the issue in detail so the counsellor can prepare.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Status */}
          <div>
            <label htmlFor="status" className="block text-sm font-medium text-gray-700">
              Status
            </label>
            <select
              id="status"
              value={status}
              onChange={e => setStatus(e.target.value)}
              className="mt-2 block w-full rounded-lg border-gray-300 p-2"
            >
              <option>OPEN</option>
              <option>CLOSED</option>
              <option>PENDING</option>
            </select>
            <p className="text-xs text-gray-500 mt-1">Defines the current state of the ticket.</p>
          </div>

          {/* Level */}
          <div>
            <label htmlFor="level" className="block text-sm font-medium text-gray-700">
              Level
            </label>
            <select
              id="level"
              value={level}
              onChange={e => setLevel(e.target.value)}
              className="mt-2 block w-full rounded-lg border-gray-300 p-2"
            >
              <option>GENERAL</option>
              <option>URGENT</option>
              <option>CRITICAL</option>
            </select>
            <p className="text-xs text-gray-500 mt-1">Indicates the priority level of the ticket.</p>
          </div>
        </div>

        {/* Meeting Location (optional) */}
        <div>
          <label htmlFor="meetingLocation" className="block text-sm font-medium text-gray-700">
            Meeting Location <span className="text-gray-400">(optional)</span>
          </label>
          <input
            id="meetingLocation"
            value={meetingLocation}
            onChange={e => setMeetingLocation(e.target.value)}
            type="text"
            placeholder='e.g., "Room 202" or "https://meet.google.com/abc-defg"'
            className="mt-2 w-full rounded-lg border-gray-300 p-2"
          />
          <p className="text-xs text-gray-500 mt-1">Optional — specify physical room or an online link.</p>
        </div>

        {/* Timing (required) */}
        <div>
          <label htmlFor="timing" className="block text-sm font-medium text-gray-700">
            Timing <span className="text-red-500">*</span>
          </label>
          <input
            id="timing"
            required
            value={timing}
            onChange={e => setTiming(e.target.value)}
            type="datetime-local"
            className="mt-2 w-full rounded-lg border-gray-300 p-2"
            aria-describedby="timing-help"
          />
          <p id="timing-help" className="text-xs text-gray-500 mt-1">Pick a date and time for the session.</p>
        </div>

        {/* Concerns (required - multi) */}
        <fieldset>
          <legend className="text-sm font-medium text-gray-700">Concerns <span className="text-red-500">*</span></legend>
          <p className="text-xs text-gray-500 mb-2">Select one or more concerns.</p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {CONCERNS.map(c => (
              <label
                key={c}
                className="inline-flex items-center space-x-2 rounded-lg border p-2"
              >
                <input
                  type="checkbox"
                  checked={concerns.includes(c)}
                  onChange={() => toggleConcern(c)}
                  aria-checked={concerns.includes(c)}
                />
                <span className="text-sm">{c}</span>
              </label>
            ))}
          </div>
        </fieldset>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Severity (required) */}
          <div>
            <label htmlFor="severity" className="block text-sm font-medium text-gray-700">
              Severity <span className="text-red-500">*</span>
            </label>
            <select
              id="severity"
              required
              value={severity}
              onChange={e => setSeverity(e.target.value)}
              className="mt-2 block w-full rounded-lg border-gray-300 p-2"
            >
              <option value="">-- choose severity --</option>
              <option>LOW</option>
              <option>MEDIUM</option>
              <option>HIGH</option>
            </select>
            <p className="text-xs text-gray-500 mt-1">Defines the intensity/seriousness of the issue.</p>
          </div>

          {/* Counsellor Type (optional) */}
          <div>
            <label htmlFor="counsellorType" className="block text-sm font-medium text-gray-700">
              Counsellor Type <span className="text-gray-400">(optional)</span>
            </label>
            <select
              id="counsellorType"
              value={counsellorType}
              onChange={e => setCounsellorType(e.target.value)}
              className="mt-2 block w-full rounded-lg border-gray-300 p-2"
            >
              <option value="">-- no preference --</option>
              <option>PSYCHOLOGIST</option>
              <option>THERAPIST</option>
              <option>MENTOR</option>
            </select>
            <p className="text-xs text-gray-500 mt-1">Optional — choose the preferred counsellor type.</p>
          </div>
        </div>

        <div className="flex items-center justify-between space-x-4">
          <button
            type="submit"
            className="inline-flex items-center px-5 py-2 rounded-lg bg-indigo-600 text-white font-medium hover:bg-indigo-700 focus:ring-2 focus:ring-indigo-200"
          >
            Submit Ticket
          </button>

          <button
            type="button"
            onClick={() => {
              // reset form
              setDescription("");
              setStatus("OPEN");
              setLevel("GENERAL");
              setMeetingLocation("");
              setTiming("");
              setConcerns([]);
              setSeverity("");
              setCounsellorType("");
              setSubmitted(null);
            }}
            className="inline-flex items-center px-4 py-2 rounded-lg border text-sm"
          >
            Reset
          </button>
        </div>

        {/* Submission / Preview area */}
        <div className="pt-4">
          {submitted === null ? (
            <p className="text-sm text-gray-500">Fill required fields and click <strong>Submit Ticket</strong>.</p>
          ) : submitted.success ? (
            <div className="rounded-lg bg-green-50 p-4 border border-green-100">
              <h3 className="font-medium">Ticket prepared (demo)</h3>
              <p className="text-sm text-gray-600 mt-1">Below is the JSON payload you'd send to a server:</p>
              <pre className="mt-2 overflow-auto text-xs bg-white p-3 rounded-lg border">{JSON.stringify(submitted.payload, null, 2)}</pre>
            </div>
          ) : (
            <div className="rounded-lg bg-red-50 p-3 border border-red-100 text-sm text-red-700">{submitted.message}</div>
          )}
        </div>
      </form>
    </div>
  );
}
