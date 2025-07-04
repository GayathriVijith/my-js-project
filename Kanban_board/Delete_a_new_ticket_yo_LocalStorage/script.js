// FETCHING ALL THE TICKET CONTAINERS IN AN ARRAY
let ticketContArr = document.querySelectorAll(".ticket-cont");
let removeBtn = document.querySelector(".remove-btn");

let removeFlag = false;

// REMOVE BUTTON HANDLES removeFlag and creates ALERT
removeBtn.addEventListener("click", function () {
  removeFlag = !removeFlag;

  if (removeFlag === true) {
    alert("delete button has been activated");
    removeBtn.style.backgroundColor = "red";
  } else {
    removeBtn.style.backgroundColor = "inherit";
  }
});

// TRAVERSING THROUGH THAT ARRAY
for (let i = 0; i < ticketContArr.length; i++) {
  // ADDING CLICK EVENTLISTENER TO THE ICON
  ticketContArr[i].addEventListener("click", (e) => {
    if (removeFlag === false) return; // if(!removeFlag) return;

    ticketContArr[i].remove(); // ui Removal

    // WRITE SOLUTION HERE ============================================
    let idx = getTicketIdx( 
        ticketContArr[i].querySelector(".ticket-id").innerText
      );

    ticketsArr.splice(idx, 1);
    localStorage.setItem("ticketsDB", JSON.stringify(ticketsArr));
  });
}

// A FUNCTION TO GET THE TICKET INDEX FROM MAIN DATA ARRAY
function getTicketIdx(id) {
  let ticketIdx = ticketsArr.findIndex(function (ticketObj) {
    return ticketObj.ticketID === id;
  });

  return ticketIdx;
}
