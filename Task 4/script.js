function checkLength() {
    const password = document.getElementById("password").value;
    const bar = document.getElementById("LengthBar");
    const text = document.getElementById("LengthText");

    const length = password.length;

    if (length <= 3) {
        bar.style.width = "50%";
        bar.style.backgroundColor = "red";
        text.textContent = "Weak";
    } 
    else if (length >= 4 && length < 8) {
        bar.style.width = "75%";
        bar.style.backgroundColor = "orange";
        text.textContent = "Medium";
    } 
    else {
        bar.style.width = "100%";
        bar.style.backgroundColor = "green";
        text.textContent = "Strong";
    }
}
