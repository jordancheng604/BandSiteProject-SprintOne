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

const showarr2 =[];
const arr33 = [];
// const
//https://project-1-api.herokuapp.com/showdates?api_key=d5d66f4a-686f-4232-b639-d17e6936b0be

//Axios get test
const getSDURL = 'https://project-1-api.herokuapp.com/showdates?api_key=d5d66f4a-686f-4232-b639-d17e6936b0be';

getDates = () => {
axios
.get(getSDURL)
.then(result => {console.log(result.data)
result.data.forEach((showzzz)=>{
    showTable(showzzz);
    })
}
)
// .then(res.data = arr33.push)
// .then(res => {res.data.forEach(()=> {commz();})})
.catch(err => {
    console.log(err)
    });
}
getDates();


showTable = (showzzz) => {
    let parent3 = document.getElementById("AxiosForEachShowTable2");    
    // showarr1.forEach(myFunction);
    // function myFunction(currentValue) {

        let showShow = document.createElement('div');
        showShow.classList.add("showShowComm1");
        parent3.appendChild(showShow);
        // document.getElementById("test22").innerText=currentValue.Name;
    
        let showShowPic = document.createElement('div');
        showShowPic.classList.add("showShowPic");
        showShow.appendChild(showShowPic);
        showShowPic.innerText = '';
    
        let showShowName = document.createElement('div');
        showShowName.classList.add("showShowName");
        showShowName.innerText = `${showzzz.date}`;
        showShow.appendChild(showShowName);

        // document.querySelectorAll(".showShowName").innerText='currentValue.Name';
    
        let showShowDate = document.createElement('div');
        showShowDate.classList.add("showShowDate");
        showShow.appendChild(showShowDate);
        showShowDate.innerText = `${showzzz.place}`;
    
        let showShowComment = document.createElement('div');
        showShowComment.classList.add("showShowComment");
        showShow.appendChild(showShowComment);
        showShowComment.innerText = `${showzzz.location}`;
    
    // };
    }
    // showTable();









// showTable = (showzzz) => {
//     let showTable = document.getElementById('AxiosForEachShowTable2');
    
//     let showContainer = document.createElement("div");
//     showContainer.classList.add('showContainerrr');
//     // showContainer.className='showContainer';
//     showTable.appendChild(showContainer);

//     let showDate22 = document.createElement("div
//     ")







//     let showDateDate = document.createElement("div");
//     showDateDate.className='showDateDate';
//     showDateDate.innerText=`Date: ${showzzz.data,date}`;
//     showContainer.appendChild(showDateDate);
// }
    
    // response=arr33.push;
    // const weatherObj = response.data.list[0].main;

    // success function
    // writeWeather(weatherObj)

    
    
// .then(result => result.data(arr33.push))

// .then((result) => {
//     let someDates = result;
//     console.log(someDates)
//     // someDates(result.data);
//     } 
// )
// const geDa = res.data
// return geDa
// .then(result = () => {showarr2.push})

// showarr2.push(getDates());
// const disDates = () => {
// }
// console.log(arr33);
// console.log(showarr1);

// function getShowdates() {
//     axios.get('https://project-1-api.herokuapp.com/showdates?api_key=d5d66f4a-686f-4232-b639-d17e6936b0be')
//     .then(function (response){
//         console.log(response);
//     })
//     .catch(function (error) {
//         console.log(error);
//     })
//     }


// commz = () => {
//     let parent3 = document.getElementById("AxiosForEachShowTable");    
//     showarr1.forEach(myFunction);
//     function myFunction(currentValue) {
//         let showShow = document.createElement('div');
//         showShow.classList.add("showShowComm1");
//         parent3.appendChild(showShow);
//         // document.getElementById("test22").innerText=currentValue.Name;
    
//         let showShowPic = document.createElement('img');
//         showShowPic.classList.add("showShowPic");
//         showShow.appendChild(showShowPic);
//         // showShowPic.innerText = currentValue.Name
    
//         let showShowName = document.createElement('div');
//         showShowName.classList.add("showShowName");
//         showShow.appendChild(showShowName);
//         showShowName.innerText = currentValue.Date
//         // document.querySelectorAll(".showShowName").innerText='currentValue.Name';
    
//         let showShowDate = document.createElement('div');
//         showShowDate.classList.add("showShowDate");
//         showShow.appendChild(showShowDate);
//         showShowDate.innerText = currentValue.Venue
    
//         let showShowComment = document.createElement('div');
//         showShowComment.classList.add("showShowComment");
//         showShow.appendChild(showShowComment);
//         showShowComment.innerText = currentValue.Location
    
//     };
//     }
//     commz();














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