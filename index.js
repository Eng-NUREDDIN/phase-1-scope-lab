// Write your solution in this file!
var customerName="bob";
var bestCustomer ;
const leastFavoriteCustomer="nour";
function upperCaseCustomerName(){
    customerName= customerName.toLocaleUpperCase();
    return customerName;
}
function setBestCustomer(){
     bestCustomer ="not bob"   
}
function overwriteBestCustomer(name){
    bestCustomer=name;
}
function changeLeastFavoriteCustomer(){
    leastFavoriteCustomer="bob";
}