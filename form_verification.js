// Assign all elements to constants
const form = document.getElementById("form");
const first_name = document.getElementById("first_name");
const last_name = document.getElementById("last_name");
const last_name_label = document.getElementById("last_name_label");
const first_name_label = document.getElementById("first_name_label");
const email_label = document.getElementById("email_label");
const email = document.getElementById("email");
const donuts_checkbox = document.getElementById("donuts_checkbox");
const vanilla_slice_checkbox = document.getElementById("vanilla_slice_checkbox");
const randy_tart_checkbox = document.getElementById("randy_tart_checkbox");
const custard_tart_checkbox = document.getElementById("custard_tart_checkbox");
const raspberry_cheesecake_checkbox = document.getElementById("raspberry_cheesecake_checkbox");
const apple_cake_slice_checkbox = document.getElementById("apple_cake_slice_checkbox");
const product_checkboxes_label = document.getElementById("product_checkboxes_label")
const birthday_day_drop_down = document.getElementById("birthday_day_drop_down");
const birthday_month_drop_down = document.getElementById("birthday_month_drop_down");
const mailing_list_checkbox_label = document.getElementById("mailing_list_checkbox_label");
const mailing_list_checkbox = document.getElementById("mailing_list_checkbox");

// Create event for when submit button is pushed
form.addEventListener("submit", (event) => {

    //Define variables needed for function
    let alert_messages = [];
    let number_of_selections = 0;
    let is_all_correct = true;
    //change to let blah
    const birthday_day_selection = birthday_day_drop_down.options[birthday_day_drop_down.selectedIndex].value;
    const birthday_month_selection = birthday_month_drop_down.options[birthday_month_drop_down.selectedIndex].value;


    // Check Text Inputs are valid
    if (first_name.value === '') {
        first_name_label.innerText = "First Name: *";
        is_all_correct = false;
    } else {
        first_name_label.innerText = "Last name:"
    }

    if (last_name.value === '') {
        last_name_label.innerText = "Last name: *"
        is_all_correct = false;
    } else {
        last_name_label.innerText = "Last name:"
    }

    if (email.value === '') {
        email_label.innerText = "Email: *"
        is_all_correct = false;
    } else {
        email_label.innerText = "Email:"
    }

    if (is_all_correct === false) {
        alert_messages.push("Please fill out required fields.");
    }

    // Check Product Checkboxes Selection is Valid
    if (donuts_checkbox.checked === true) {
        number_of_selections += 1;
    }

    if (vanilla_slice_checkbox.checked === true) {
        number_of_selections += 1;
    }

    if (randy_tart_checkbox.checked === true) {
        number_of_selections += 1;
    }

    if (custard_tart_checkbox.checked === true) {
        number_of_selections += 1;
    }

    if (raspberry_cheesecake_checkbox.checked === true) {
        number_of_selections += 1;
    }

    if (apple_cake_slice_checkbox.checked === true) {
        number_of_selections += 1;
    }

    if (number_of_selections === 0) {
        alert_messages.push("You must select at least one product.")
        product_checkboxes_label.innerText = "Select your favourite products: *";
        event.preventDefault();
    } else {
        product_checkboxes_label.innerText = "Select your favourite products:";
    }

    // Check Birthday Drop Downs Selection is Valid
    if (birthday_day_selection === "Day" || birthday_month_selection === "Month") {
        alert_messages.push("Please specify your birthday");
        event.preventDefault();
    }

    // Check Mailing List checkbox
    if (mailing_list_checkbox.checked === true) {
        mailing_list_checkbox_label.innerText = "By ticking this box you agree to be added to Petite Treats mailing list"
    } else {
        alert_messages.push("You must agree to T&C's");
        mailing_list_checkbox_label.innerText = "By ticking this box you agree to be added to Petite Treats mailing list *"
    }

    // Display Errors
    if (alert_messages.length > 0) {
        event.preventDefault();
        alert(alert_messages.join("\n"));
    }

    // document.write(first_name.value);
    // document.write(last_name.value);
    // document.write(email.value);
    // document.write(products.join(" , "));
    // document.write(birthday_month_selection + " " + birthday_day_selection.toString());
})
