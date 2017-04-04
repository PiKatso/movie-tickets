//Back End Logic//
function Ticket(time, age) {
  this.time = time;
  this.age = age;
}

Ticket.prototype.cost = function() {
  var price = 5;
  if (this.time === "3" && this.age === "3") {
   price += 5;
 } else if (this.time === "3"  && this.age === "5") {
   price += 7;
 } else if (this.time === "5" && this.age === "3") {
   price += 7;
 } else {
   price += 9;
 }
  return price;
}

//Front End//
$(document).ready(function(){
  $("#ticket-form").submit(function(event){
    event.preventDefault();

    var inputtedGenre = $("#genre").val();
    var inputtedTime = $("#times").val();
    var inputtedAge = $("#age").val();
    var newTicket = new Ticket(inputtedTime, inputtedAge);

    var result = newTicket.cost();
    console.log(result);
    $("#result-cost").text(result);

  });

});
