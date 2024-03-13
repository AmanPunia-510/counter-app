const counting = document.querySelector(".counting");
const show = document.querySelector(".show-value");
const addbtn = document.querySelector(".add-button");
const save = document.querySelector(".save-button");
let i = 0;
let num_array = [];

// update the value on click

addbtn.addEventListener("click", () => {
    i++;
    counting.innerHTML = i;
});

// save the previous value with updated value

save.addEventListener("click", () => {
    if (counting.innerHTML > 0) {
    num_array.push(i);
    show.innerHTML = num_array.join(",");
    i = 0;
    counting.innerHTML = i;
}
});


function refreshPage() {
    location.reload();
}