function Ticket(movieName,timeOfDay,age) {
  this.movieName = movieName;
  this.timeOfDay = timeOfDay;
  this.age = age;
}


Ticket.prototype.price = function() {
  let price;
  if (this.age >= 10) {
    if (this.movieName == "one") {
      price = 10;
    } else if (this.movieName == "two") {
      price = 20;
    } else if (this.movieName == "three") {
      price = 30;
    }
    if (this.timeOfDay == "evening") {
      price = price * 2;
    }
  } else {
    price = 0;
  }
  console.log(price);
  return price;
}

// UI Logic

$(document).ready(function() {
  $("form#movieSelection").submit(function(event) {
    event.preventDefault();
    const movieName = $("#movieName").val();
    const timeOfDay = $("input:radio[name=timeOfDay]:checked").val();
    const age = $("input#age").val();

    let newTicket = new Ticket(movieName,timeOfDay,age);
    console.log(newTicket);
    console.log(newTicket.price());
    /*
    console.log(movieName);
    console.log(timeOfDay);
    console.log(age); */
  })
})
