document.addEventListener("DOMContentLoaded", () => {
  const voteBtns = document.querySelectorAll(".vote-btn");

  // Initialize votes
  let votes = JSON.parse(localStorage.getItem("votes")) || {
    "A Gentle Blend": 0,
    "One Sunny Day": 0,
    "Cherry Pop": 0
  };

  // Update Results
  function updateResults() {
    for (let cake in votes) {
      const span = document.getElementById(`vote-${cake}`);
      if (span) span.textContent = votes[cake];
    }

    // Winning Cake
    let leader = Object.entries(votes).sort((a, b) => b[1] - a[1])[0];
    if (leader[1] > 0) {
      document.getElementById("leading-cake").textContent = `${leader[0]} is leading with ${leader[1]} votes!`;
    } else {
      document.getElementById("leading-cake").textContent = "No votes yet – be the first!";
    }
  }

  // Vote Button
  voteBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      const cakeName = btn.dataset.cake;
      votes[cakeName]++;
      localStorage.setItem("votes", JSON.stringify(votes));
      updateResults();
    });
  });

  // Initial load
  updateResults();
});
