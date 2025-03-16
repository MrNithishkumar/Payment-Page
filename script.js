
var section = document.querySelector(".section")
var payment_select_page = document.querySelector(".payment-select-page")

function open_netbank()
{
    section.style.display = "block"
    payment_select_page.style.display = "none"
}

function close_netbank()
{
    section.style.display = "none"
    payment_select_page.style.display = "block"
}

var upi_page = document.querySelector(".upi-page")

function open_upipage()
{
    upi_page.style.display = "block"
    section.style.display = "none"
    payment_select_page.style.display = "none"
}
function close_upipage()
{
    upi_page.style.display = "none"
    section.style.display = "none"
    payment_select_page.style.display = "block"
}

var card_page = document.querySelector(".card-page")

function opencardpage()
{
    card_page.style.display = "block"
    upi_page.style.display = "none"
    section.style.display = "none"
    payment_select_page.style.display = "none"
}

function closecardpage()
{
    card_page.style.display = "none"
    upi_page.style.display = "none"
    section.style.display = "none"
    payment_select_page.style.display = "block"
}

var op_page = document.querySelector(".op-page")
function openotherpay()
{
    op_page.style.display = "block"
    card_page.style.display = "none"
    upi_page.style.display = "none"
    section.style.display = "none"
    payment_select_page.style.display = "none"
}

function closeotherpay()
{
    op_page.style.display = "none"
    card_page.style.display = "none"
    upi_page.style.display = "none"
    section.style.display = "none"
    payment_select_page.style.display = "block"
}

document.addEventListener("contextmenu", function (event) {
    event.preventDefault(); // Disable right-click
});

document.addEventListener("keydown", function (event) {
    if (event.key == "F12" || 
        (event.ctrlKey && event.shiftKey && event.key == "I") || 
        (event.ctrlKey && event.shiftKey && event.key == "J") || 
        (event.ctrlKey && event.key == "U") || 
        (event.ctrlKey && event.key == "S") || 
        (event.ctrlKey && event.key == "H")) {
        event.preventDefault(); // Block inspect element shortcuts
    }
});

