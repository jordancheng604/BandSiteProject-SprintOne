//Axios get data.
const getSDURL = 'https://project-1-api.herokuapp.com/showdates?api_key=d5d66f4a-686f-4232-b639-d17e6936b0be';

getDates = () => {
axios
.get(getSDURL)
.then(result => {console.log(result.data)
result.data.forEach((showzzz)=>{
    showTable(showzzz);
    })})
.catch(err => {
    console.log(err)
    });
}
getDates();

showTable = (showzzz) => {
    let parent3 = document.getElementById("containerTwo");    

        let showShow = document.createElement('div');
        showShow.classList.add("show_dateContainer");
        parent3.appendChild(showShow);

        let showShowPic = document.createElement('span');
        showShowPic.classList.add("show__date2H--mobile");
        showShow.appendChild(showShowPic);
        showShowPic.innerText = 'Date';
    
        let showShowName = document.createElement('span');
        showShowName.classList.add("show__dateShowDate");
        showShowName.innerText = `${showzzz.date}`;
        showShow.appendChild(showShowName);
    
        let showVenHead = document.createElement('span');
        showVenHead.classList.add("show__venueH--mobile");
        showShow.appendChild(showVenHead);
        showVenHead.innerText = 'Venue';

        let showShowDate = document.createElement('span');
        showShowDate.classList.add("show__venue2");
        showShow.appendChild(showShowDate);
        showShowDate.innerText = `${showzzz.place}`;

        let showLocalHead = document.createElement('span');
        showLocalHead.classList.add("show__locationH--mobile");
        showShow.appendChild(showLocalHead);
        showLocalHead.innerText = 'Location';
    
        let showShowComment = document.createElement('span');
        showShowComment.classList.add("show__location2");
        showShow.appendChild(showShowComment);
        showShowComment.innerText = `${showzzz.location}`;

        let showBuyTix = document.createElement('button');
        showBuyTix.classList.add("buyTixButton");
        showShow.appendChild(showBuyTix);
        showBuyTix.innerText = 'BUY TICKETS';
        }
