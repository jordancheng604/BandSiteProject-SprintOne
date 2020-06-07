console.log('hello');

const showarr1 = [
    {
        Date: "Mon Dec 17 2018",
        Venue: "Ronald Lane",
        Location: "San Francisco, CA"
    },
    {
        Date: "Tue Jul 18 2019",
        Venue: "Pier 3 East",
        Location: "San Francisco, CA"
    },
    {
        Date: "Fri Jul 22 2019",
        Venue: "View Loungue",
        Location: "San Francisco, CA"
    },
    {
        Date: "Sat Aug 12 2019",
        Venue: "Hyatt Agency",
        Location: "San Francisco, CA"
    },
    {
        Date: "Fri Sept 05 2019",
        Venue: "Moscow Center",
        Location: "San Francisco, CA"
    },
    {
        Date: "Wed Aug 11 2019",
        Venue: "Pres Club",
        Location: "San Francisco, CA"
    },
]


//Creating the table and applying inputs from the array above.

let parent = document.querySelector(".show__event");

for(let i=0;i<showarr1.length;i++){
    

   

    

    let dateHeader = document.createElement('span');
    dateHeader.classList.add("show__dateH--mobile");
    parent.appendChild(dateHeader);
    document.querySelectorAll(".show__dateH--mobile")[i].innerHTML  = ('DATE');

    let showCard = document.createElement('div');
    showCard.classList.add("show__date2");
    parent.appendChild(showCard);
    document.querySelectorAll(".show__date2")[i].innerHTML = showarr1[i].Date

   
    

     let venueHeader = document.createElement('span');
    venueHeader.classList.add("show__venueH--mobile");
    parent.appendChild(venueHeader);
    document.querySelectorAll(".show__venueH--mobile")[i].innerHTML  = ('VENUE');

    let showCard2 = document.createElement('div');
    showCard2.classList.add("show__venue2");
    parent.appendChild(showCard2);
    document.querySelectorAll('.show__venue2')[i].innerHTML = showarr1[i].Venue

  

    let locationHeader = document.createElement('span');
    locationHeader.classList.add("show__locationH--mobile");
    parent.appendChild(locationHeader);
    document.querySelectorAll(".show__locationH--mobile")[i].innerHTML  = ('LOCATION');


    let showCard3 = document.createElement('div');
    showCard3.classList.add("show__location2");
    parent.appendChild(showCard3);
    document.querySelectorAll('.show__location2')[i].innerHTML = showarr1[i].Location

    let showCard9 = document.createElement('button');
    showCard9.classList.add("buyTixButton")
    parent.appendChild(showCard9);
    document.querySelectorAll('button')[i].innerHTML = ("BUY TICKETS")
}


