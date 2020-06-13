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

const showarr2 =[]
// const
//https://project-1-api.herokuapp.com/showdates?api_key=d5d66f4a-686f-4232-b639-d17e6936b0be

//Axios get test
const getSDURL = 'https://project-1-api.herokuapp.com/showdates?api_key=d5d66f4a-686f-4232-b639-d17e6936b0be';

const getDates = () => {
axios.get(getSDURL)
.then(result => console.log(result.data))
.then((response) => {
    const weatherObj = response.data.list[0].main;

    // success function
    writeWeather(weatherObj)
  })

// .then((result) => {
//     let someDates = result;
//     console.log(someDates)
//     // someDates(result.data);
//     } 
// )
// const geDa = res.data
// return geDa
// .then(result = () => {showarr2.push})
.catch(err => console.log(err));
}





showarr2.push(getDates());


// const disDates = () => {

// }

console.log(showarr2);
console.log(showarr1);

// function getShowdates() {
//     axios.get('https://project-1-api.herokuapp.com/showdates?api_key=d5d66f4a-686f-4232-b639-d17e6936b0be')
//     .then(function (response){
//         console.log(response);
//     })
//     .catch(function (error) {
//         console.log(error);
//     })
//     }



showz = () => {
//insert function!!!
let parent2 = document.getElementById("containerTwo");
for(let i=0;i<showarr1.length;i++){
        let showCard = document.createElement('div');
        showCard.classList.add("show__dateContainer");
        parent2.appendChild(showCard);

    let showCardC = document.createElement('span');
    showCardC.classList.add("show__date2H--mobile");
    showCard.appendChild(showCardC);
    document.querySelectorAll(".show__date2H--mobile")[i].innerText= ('Date')

    let Card2 = document.createElement('span');
    Card2.classList.add("show__dateShowDate");
    showCard.appendChild(Card2);
    document.querySelectorAll('.show__dateShowDate')[i].innerText = showarr1[i].Date

    let venueHeader = document.createElement('span');
    venueHeader.classList.add("show__venueH--mobile");
    showCard.appendChild(venueHeader);
    document.querySelectorAll(".show__venueH--mobile")[i].innerHTML  = ('VENUE');

    let showCard2 = document.createElement('span');
    showCard2.classList.add("show__venue2");
    showCard.appendChild(showCard2);
    document.querySelectorAll('.show__venue2')[i].innerText = showarr1[i].Venue

    let locationHeader = document.createElement('span');
    locationHeader.classList.add("show__locationH--mobile");
    showCard.appendChild(locationHeader);
    document.querySelectorAll(".show__locationH--mobile")[i].innerHTML  = ('LOCATION');

    let showCard3 = document.createElement('span');
    showCard3.classList.add("show__location2");
    showCard.appendChild(showCard3);
    document.querySelectorAll('.show__location2')[i].innerText = showarr1[i].Location

    let showCard9 = document.createElement('button');
    showCard9.classList.add("buyTixButton")
    showCard.appendChild(showCard9);
    document.querySelectorAll('button')[i].innerHTML = ("BUY TICKETS")
}
}
showz();