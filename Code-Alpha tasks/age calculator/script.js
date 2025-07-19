document.getElementById("ageForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const day = parseInt(document.getElementById("day").value);
  const month = parseInt(document.getElementById("month").value) - 1; // JS months are 0-indexed
  const year = parseInt(document.getElementById("year").value);

  const birthDate = new Date(year, month, day);
  const today = new Date();

  if (birthDate > today) {
    document.getElementById("result").innerText = "Invalid Date of Birth";
    return;
  }

  let ageYears = today.getFullYear() - birthDate.getFullYear();
  let ageMonths = today.getMonth() - birthDate.getMonth();
  let ageDays = today.getDate() - birthDate.getDate();

  if (ageDays < 0) {
    ageMonths--;
    const prevMonth = new Date(today.getFullYear(), today.getMonth(), 0);
    ageDays += prevMonth.getDate();
  }

  if (ageMonths < 0) {
    ageYears--;
    ageMonths += 12;
  }

  document.getElementById("result").innerText = 
    `You are ${ageYears} year(s), ${ageMonths} month(s), and ${ageDays} day(s) old.`;
});
