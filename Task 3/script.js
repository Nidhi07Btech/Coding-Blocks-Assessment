const planSelect = document.getElementById("planSelect");
const priceEl = document.getElementById("price");
const planName = document.getElementById("planName");

let basePrices = {
    basic: "499",
    pro: "999",
    premium: "1499"
};

let isYearly = false;

planSelect.addEventListener("change", () => {
    const plan = planSelect.value;
    planName.textContent = capitalize(plan);
    priceEl.textContent = basePrices[plan];
    isYearly = false; 
});
function toggleYearly() {
    const plan = planSelect.value;

    if (!isYearly) {
        priceEl.textContent = basePrices[plan] + "9";
        isYearly = true;
    } else {
        priceEl.textContent = basePrices[plan];
        isYearly = false;
    }
}
