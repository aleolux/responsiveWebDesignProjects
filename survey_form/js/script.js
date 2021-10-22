function EnableDisableTextBox() {
    var chkYes = document.getElementById("other");
    var txtPassportNumber = document.getElementById("other-text");
    txtPassportNumber.disabled = chkYes.checked ? false : true;
    if (!txtPassportNumber.disabled) {
        txtPassportNumber.focus();
    }
}