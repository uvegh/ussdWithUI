let
    accNoTxt = document.getElementById("accNoTxt"),
    amountTxt = document.getElementById("amountTxt"),
    psswdTxt = document.getElementById("psswdTxt"),
    phoneTxt = document.getElementById("phoneTxt"),
    btnSubmit = document.getElementById("btnSubmit"),

    airtimeAcctTxt = document.getElementById("airtimeAcctTxt"),
    airtimeAmountTxt = document.getElementById("airtimeAmountTxt"),
    airtimePsswdTxt = document.getElementById("airtimePsswdTxt"),
    popupItem = document.getElementById("popupItem"),
    validateAccNo = document.getElementById("validateAccNo"),
    validateAirtimeAmount = document.getElementById("validateAirtimeAmount"),
    validatePsswd = document.getElementById("validatePsswd"),
    validatephoneTxt = document.getElementById("validatephoneTxt"),
    btnSubmitAirtime = document.getElementById("btnSubmitAirtime"),
    airtimeType = document.getElementById("airtimeType");

function showDiv(select) {
    if (select.value == 1) {
        document.getElementById('telephone').style.display = "flex";
        document.getElementById('validatephoneTxt').style.display = "block";
    } else {
        document.getElementById('telephone').style.display = "none";
        document.getElementById('validatephoneTxt').style.display = "none";
    }
    if (select.value == "") {
        document.getElementById('telephone').style.display = "none";
        document.getElementById('validatephoneTxt').style.display = "none";
    }
}


btnSubmit.addEventListener("click", function () {
    validateTransferForm()


});

btnSubmitAirtime.addEventListener("click", function () {
    validateAirtimeForm()


});

function popupAirtime() {



    // Get the modal
    var modal = document.getElementById("myModal");

    // Get the button that opens the modal


    // Get the <span> element that closes the modal
    var span = document.getElementsByClassName("close")[0];

    // When the user clicks the button, open the modal 

    modal.style.display = "block";



    popupItem.innerHTML = `
    CENTE BANK
    <i class="fa fa-bank" aria-hidden="true"></i> <br> <br>
    You are about to send ${airtimeAmountTxt.value} credit TO ${phoneTxt.value}
    <br> <br>
    <button type="reset" id="closeAirtime" style="padding: 10px 25px;
    border-radius: 30px;
font-size: 21px;
background-color: white;
:hover{
    background-color: rgb(131, 122, 122);
    padding: 13px 28px;
    transition: all 700ms ease;
}
" >
okay
</button>

    `;
    console.log(`You are about to send ${airtimeAmountTxt.value} TO ${phoneTxt.value} !!`);

    document.getElementById("closeAirtime").onclick=function () {
        modal.style.display = "none";
    }
    // When the user clicks on <span> (x), close the modal
    span.onclick = function () {
        modal.style.display = "none";
    }

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function (event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }

}

function validateTransferForm() {

    // if (accNoTxt.value == "" || accNoTxt.value == null) {

    //     validateAccNo.innerHTML = "*Account number is required!";

    //     console.log("*Account number is required!");
    // }
    // else {
    //     validateAccNo.innerHTML = "";



    // }
    if (accNoTxt.value.length == "" || accNoTxt.value.length < 10) {
        validateAccNo.innerHTML = "* Valid Account number is required";

        console.log("* Invalid Account number");
    }
    else {
        validateAccNo.innerHTML = ""
    }
    if (amountTxt.value == "" || amountTxt.value == null) {
        validateAmount.innerHTML = "*Amount is required!";
        console.log("*Amount is required!");
    }
    else {
        validateAmount.innerHTML = ""

    }



    if (psswdTxt.value == "" || psswdTxt.value == null) {
        validatePsswd.innerHTML = "*Password is required!";
        console.log("*Password is required!");
    }
    else {
        validatePsswd.innerHTML = ""



    }


    if (accNoTxt.value != "" && amountTxt.value != "" && psswdTxt.value != "" && accNoTxt.value.length == 10) {

        popup();
        clearForm();
        console.log(accNoTxt.value,
            amountTxt.value,
            psswdTxt.value);
    }




}


function validateAirtimeForm() {



    if (airtimeAmountTxt.value == "" || airtimeAmountTxt.value == null) {
        validateAirtimeAmount.innerHTML = "*Airtime amount  is required!";
        console.log("*Airtime amount is required!");
    }
    else {
        validateAirtimeAmount.innerHTML = ""

    }




    // if (phoneTxt.value == "" || phoneTxt.value == null) {
    //     console.log("*phone number is required!");
    //     validatephoneTxt.innerHTML = "*Phone number is required!";
        
    // }
    // else {
    //     validatephoneTxt.innerHTML = ""

    // }
    if (phoneTxt.value.length != 11 || phoneTxt.value == "") {
        validatephoneTxt.innerHTML = ("*invalid phone number");

    } else {
        validatephoneTxt.innerHTML = ""

    }

    if (airtimePsswdTxt.value == "" || airtimePsswdTxt.value == null) {
        validateAirtimePsswd.innerHTML = "*password  is required!";
        console.log("*password is required!");
    }
    else {
        validateAirtimePsswd.innerHTML = ""

    }

    console.log(airtimeAmountTxt.value,
        airtimePsswdTxt.value,
        psswdTxt.value);

    if (airtimeAmountTxt.value != "" && airtimePsswdTxt.value != "" && phoneTxt.value != "" && phoneTxt.value.length == 11) {

        popupAirtime();
        clearAirtimeForm();
    }
}



function clearForm() {
    accNoTxt.value = ''
    psswdTxt.value = ''
    amountTxt.value = ''


}
function clearAirtimeForm() {

    airtimeAmountTxt.value = ''
    airtimePsswdTxt.value = ''
    psswdTxt.value = ''
    phoneTxt.value = ''
}








function popup() {



    // Get the modal
    var modal = document.getElementById("myModal");

    // Get the button that opens the modal


    // Get the <span> element that closes the modal
    var span = document.getElementsByClassName("close")[0];

    // When the user clicks the button, open the modal 

    modal.style.display = "block";

    popupItem.innerHTML = `
    CENTE BANK
    <i class="fa fa-bank" aria-hidden="true"></i>  <br> <br>
    You are about to send ₦${amountTxt.value} TO ${accNoTxt.value}
    <br>  <br> 
    <button type="reset" id="close" style="padding: 10px 30px;
    border-radius: 30px;
font-size: 21px;
background-color: grey" >
okay
</button>
    `;
    console.log(`You are about to send ${amountTxt.value} TO ${accNoTxt.value}`);


    // When the user clicks on <span> (x), close the modal

    document.getElementById("close").onclick=function () {
        modal.style.display = "none";
    }
    span.onclick = function () {
        modal.style.display = "none";
        
    }

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function (event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }

}






