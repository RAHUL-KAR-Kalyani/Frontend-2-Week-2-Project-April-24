document.addEventListener("DOMContentLoaded", function() {
    // const counter = document.getElementById("counter");
    const counter1 = document.querySelector("#counter");
    const incrementBtn = document.querySelector("#incrementBtn");
    const decrementBtn = document.querySelector("#decrementBtn");
    const clearBtn = document.querySelector("#clearBtn");
    const error = document.querySelector("#error");

    // Initial count value
    let count = 0;

    // Function to update counter and button visibility
    function updateCounter() {
        counter.innerText = count;
        if (count === 0) {
            decrementBtn.disabled = true;
            clearBtn.style.display = "none";
            error.style.display = "block";
        } 
        else {
            decrementBtn.disabled = false;
            clearBtn.style.display = "block";
            error.style.display = "none";
        }
    }

    // Increment button click event
    incrementBtn.addEventListener("click", function() {
        count++;
        updateCounter();
    });

    // Decrement button click event
    decrementBtn.addEventListener("click", function() {
        if (count > 0) {
            count--;
            updateCounter();
        }
    });

    // Clear button click event
    clearBtn.addEventListener("click", function() {
        count = 0;
        updateCounter();
    });

    // Initial counter update
    updateCounter();
});
