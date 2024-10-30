(function() {
    let screen = document.querySelector(".screen");
    let buttons = document.querySelectorAll(".btn");
    let clear = document.querySelector(".btn-clear");
    let equal = document.querySelector(".btn-equal");

    buttons.forEach(function(button) {
        button.addEventListener("click", function(e) {
            let value = e.target.dataset.num;
            if (value) {
                screen.value += value;
                console.log(`Button pressed: ${value}`); // Log button value
            }
        });
    });

    equal.addEventListener("click", function(e) {
        if (screen.value === "") {
            screen.value = "";
        } else {
            try {
                console.log(`Evaluating: ${screen.value}`); // Log expression before evaluation
                let answer = eval(screen.value);
                screen.value = answer;
            } catch (error) {
                console.log("Error:", error); // Log error details
                screen.value = "Error";
            }
        }
    });

    clear.addEventListener("click", function(e) {
        screen.value = "";
    });
})();
