function classifyDate(date) {
    const now = new Date();
    const currentYear = now.getFullYear();

    // Support year numbers (e.g. 2024)
    if (typeof date === 'number' && date < 10000) {
        if (date < currentYear - 1) {
            return "ancient";
        } else if (date <= currentYear) {
            return "past";
        } else if (date > currentYear + 1) {
            return "distant future";
        } else {
            return "future";
        }
    }

    // Support Date objects, strings, and millisecond timestamps
    const targetDate = new Date(date);
    if (isNaN(targetDate.getTime())) {
        return "invalid date";
    }

    const oneYearAgo = new Date(now);
    oneYearAgo.setFullYear(now.getFullYear() - 1);

    const oneYearHence = new Date(now);
    oneYearHence.setFullYear(now.getFullYear() + 1);

    if (targetDate < oneYearAgo) {
        return "ancient";
    } else if (targetDate <= now) {
        return "past";
    } else if (targetDate > oneYearHence) {
        return "distant future";
    } else {
        return "future";
    }
}

// Verification Tests
console.log("--- Year Numbers ---");
console.log("2024 (ancient):", classifyDate(2024));
console.log("2025 (past):", classifyDate(2025));
console.log("2026 (past):", classifyDate(2026));
console.log("2027 (future):", classifyDate(2027));
console.log("2028 (distant future):", classifyDate(2028));

console.log("\n--- Full Dates ---");
console.log("2 years ago (ancient):", classifyDate(new Date(Date.now() - 2 * 365.25 * 24 * 60 * 60 * 1000)));
console.log("6 months ago (past):", classifyDate(new Date(Date.now() - 180 * 24 * 60 * 60 * 1000)));
console.log("6 months hence (future):", classifyDate(new Date(Date.now() + 180 * 24 * 60 * 60 * 1000)));
console.log("2 years hence (distant future):", classifyDate(new Date(Date.now() + 2 * 365.25 * 24 * 60 * 60 * 1000)));


