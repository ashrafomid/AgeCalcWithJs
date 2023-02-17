const months = [31,28,31,30, 31, 30, 31,31,30, 31, 30, 31];
function agaCalculate(){
    let today = new Date();
    let inputDate =     new Date(document.getElementById("date-input").value);
    let birthMomth, birthDate, birthYear ;

    let birthDetails = {
        date: inputDate.getDate(),
        month: inputDate.getMonth()+1,
        year: inputDate.getFullYear(),
    }
    let currentYear = today.getFullYear();
    let currentMonth = today.getMonth();
    let currentDay = today.getDay();

    leapChecker(currentYear);

    if(
        birthDetails.year > currentYear ||
        (birthDetails.month > currentMonth && birthDetails.year == currentYear) ||
        (birthDetails.date> currentDay && birthDetails.year == currentYear && birthDetails.month == currentMonth)
    ){
        alert('Not born Yet!');
        DisplayResult("-","-","-")
        return;
    }
    birthYear = currentYear - birthDetails.year;
    if(currentMonth >= birthDetails.month){
        birthMomth = currentMonth - birthDetails.month;
    }
    else{
        birthYear--;
        birthMomth = 12 +currentMonth - birthDetails.month;
    }
    
    if(currentDay>= birthDetails.date){
        birthDate = currentDay- birthDetails.date;
    }
    else{
        birthMomth--;
        let days = months[currentMonth-2];
        birthDate = days+ currentDay - birthDetails.date;
        if(birthMomth<0){
            birthMomth = 11;
            birthYear--;
        }
    }
    DisplayResult(birthYear,birthMomth,birthDate);

}
function leapChecker(year){
    if(year%4 ==0 || (year%100==0 && year%400==0)){
        months[1] =29
    }
    else{
        months[1] = 28;
    }
    console.log(year,months[1]);
}
function DisplayResult(birthYear,birthMomth,birthDate){
    document.getElementById("years").textContent = birthYear;
    document.getElementById("months").textContent = birthMomth;
    document.getElementById("days").textContent = birthDate;
}
//https://api.nsia.gov.af/print-individual-form?reference_no=297736187&token=ae34adc904cd8451c0b13584acc5ea4f11944096