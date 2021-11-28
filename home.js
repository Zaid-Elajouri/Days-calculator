function get_days(myvalue){
    var day1 = document.getElementById("d1").value;
    var day2 = document.getElementById("d2").value;
    const date_one = new Date(day1);
    const date_two = new Date(day2);
    const time = Math.abs(date_two - date_one);//Math.abs returns the absolute value of the operation,Ex: the absolute value of -8 is the same as the absolute value of 8
    const days = Math.ceil(time/(1000*60*60*24));//converting time calculated from milliseconds to days
                                                 //Math.ceil method rounds a number to the nearest integer value
    document.getElementById("result").innerHTML ="Number of days between the two dates is *"+days+"* days";
              
}

var btn = document.getElementById("btn");
     btn.addEventListener("click", get_days(myvalue) ,{
     
}, false);
