const nameInput = document.getElementById("nameInput");
const roleInput = document.getElementById("roleInput");
const bioInput = document.getElementById("bioInput");
const colorInput = document.getElementById("colorInput");

const nameText = document.getElementById("nameText");
const roleText = document.getElementById("roleText");
const bioText = document.getElementById("bioText");

nameInput.addEventListener("input", () => {
    nameText.textContent = nameInput.value || "Name";
});

roleInput.addEventListener("input", () => {
    roleText.textContent = roleInput.value || "Role";
});

bioInput.addEventListener("input", () => {
    bioText.textContent = bioInput.value || "bio";
});

colorInput.addEventListener("input", () => {
    roleText.style.color = colorInput.value;
});

function resetProfile() {
    nameInput.value = "";
    roleInput.value = "";
    bioInput.value = "";
    nameText.textContent = "Name";
    roleText.textContent = "Role";
    bioText.textContent = "bio";
    roleText.style.color = "pink";
}
