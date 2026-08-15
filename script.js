function calculateROI() {

  const ticket = Number(document.getElementById("ticket").value);
  const travel = Number(document.getElementById("travel").value);
  const hotel = Number(document.getElementById("hotel").value);
  const other = Number(document.getElementById("other").value);
  const revenue = Number(document.getElementById("revenue").value);

  const investment = ticket + travel + hotel + other;

  const profit = revenue - investment;

  const roi = investment > 0
    ? (profit / investment) * 100
    : 0;

  document.getElementById("results").innerHTML = `
    <strong>Total Investment:</strong> $${investment.toFixed(2)}<br>
    <strong>Net Return:</strong> $${profit.toFixed(2)}<br>
    <strong>ROI:</strong> ${roi.toFixed(1)}%
  `;
}
