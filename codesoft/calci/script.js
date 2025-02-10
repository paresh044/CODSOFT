document.addEventListener("DOMContentLoaded", function() {
    const display = document.getElementById("display");
    const buttons = document.querySelectorAll("button");

    buttons.forEach(button => {
        button.addEventListener("click", function() {
            const value = this.textContent;
            
            if (value === "C") {
                display.value = "";
            } else if (value === "=") {
                try {
                    display.value = eval(display.value);
                } catch (e) {
                    alert("Invalid Expression");
                    display.value = "";
                }
            } else {
                display.value += value;
            }
        });
    });
});
