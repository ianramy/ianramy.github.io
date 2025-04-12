// src/utils/calcExperience.jsx

export function calculateExperience(startDate) {
  const start = new Date(startDate);
  const now = new Date();

  const diffMs = now - start;
  const diffDate = new Date(diffMs);

  const years = Math.floor(diffMs / (1000 * 60 * 60 * 24 * 365.25));
  const months = Math.floor((diffMs / (1000 * 60 * 60 * 24 * 30.4375)) % 12);

  if (years > 0 && months > 0) return `${years} year${years > 1 ? "s" : ""} ${months} month${months > 1 ? "s" : ""}`;
  if (years > 0) return `${years} year${years > 1 ? "s" : ""}`;
  if (months > 0) return `${months} month${months > 1 ? "s" : ""}`;
  return "Less than 1 month";
}
