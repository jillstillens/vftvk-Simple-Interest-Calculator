function compute()
{
   // get principal, rate, and years from input; return alert if principal
   // is 0 or negative; otherwise calculate interest and display message for user
   // p = document.getElementById("principal").value;
    var principal = document.getElementById("principal").value;
    if (principal < 1) 
        {
            alert ("Enter a positive number");
            document.getElementById("principal").select();
            document.getElementById("principal").focus();
            return;
        }
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;
    // calculate interest:
    var interest = principal * years * rate / 100

    //get future year based in # of years entered
    var dateobj = new Date();
    var dateObject = dateobj.getFullYear(); 
    var futureYear = dateObject + parseInt(years); 

    // break up message
    Msg1 = '<br>If you deposit ' + principal + '<br>';
    Msg2 = ' at an interest rate of ' + rate + '%' + '<br>';
    Msg3 = ' you will receive an amount of ' + interest + '<br>';
    Msg4 = ' in the year ' + futureYear + '<br>';

    document.getElementById("result").innerHTML= Msg1 + Msg2 + Msg3 + Msg4;

    // code below will just show interest, not entire string:
    // document.getElementById("result").innerHTML=interest;
}

function showVal(newVal)
{
    //display value of slider
    document.getElementById("sliderValue").innerHTML=newVal;

}

        