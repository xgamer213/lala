function acceptApology() {
    // Display message if the apology is accepted
    document.getElementById('responseMessage').innerText = "hehehe, i knew krdo gi maaf!!!!";
    document.getElementById('responseMessage').classList.add("accepted");
    document.getElementById('responseMessage').classList.remove("declined");
}

function declineApology() {
    // Display message if the apology is declined
    document.getElementById('responseMessage').innerText = ", penchod wtf? wapis jao aur accept karo apology";
    document.getElementById('responseMessage').classList.add("declined");
    document.getElementById('responseMessage').classList.remove("accepted");
}
