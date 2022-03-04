//compute the total amount: principal + interest 
function compute()
{
    var principal = document.getElementById("principal").value;

    //if principal <= 0 alert user and stop calculation
    if (principal <= 0) {
        alert("Enter a positive number")
        document.getElementById("principal").focus()
        return
    }
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;
    //calculate interest
    var interest = principal * years * rate /100;
    var year = new Date().getFullYear()+parseInt(years);
    var result = document.getElementById("result")

    //show result
    result.innerHTML = `If you deposit <mark>${principal}</mark>,<br>\
    at an interest rate of <mark>${rate}</mark>%.<br>\
    You will receive an amount of <mark>${interest}</mark>,<br>\
    in the year <mark>${year}</mark><br>`
    document.getElementById("principal").focus()
}

//update rate when user clicks on rate input
function updateRate() 
{
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText=rateval;
}
        