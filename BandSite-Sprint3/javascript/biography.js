//Axios - getting the information.
const getCommURL = 'https://project-1-api.herokuapp.com/comments?api_key=d5d66f4a-686f-4232-b639-d17e6936b0be';

getCommz2 = () => {
axios
.get(getCommURL)
.then(res => {
console.log(res.data.reverse)
res.data.forEach(commzAxios=>{
    commAx(commzAxios);
})})
.catch(err => {
    console.log(err)
})}
getCommz2();

//Displaying comments.
commAx = (commzAxios) => {
    let parent3 = document.getElementById("axioscontainer");    
        let showShow = document.createElement('div');
        showShow.classList.add("showShowComm1");
        parent3.appendChild(showShow);
    
        let showShowPic = document.createElement('img');
        showShowPic.classList.add("showShowPic");
        showShow.appendChild(showShowPic);
    
        let showShowName = document.createElement('div');
        showShowName.classList.add("showShowName");
        showShowName.innerText = `${commzAxios.name}`;
        showShow.appendChild(showShowName);
   
        let showShowDate = document.createElement('div');
        showShowDate.classList.add("showShowDate");
        showShowDate.innerText = `Date: ${(commzAxios.timestamp)}`;
        showShow.appendChild(showShowDate);
    
        let showShowComment = document.createElement('div');
        showShowComment.classList.add("showShowComment");
        showShowComment.innerText = `${commzAxios.comment}`;
        showShow.appendChild(showShowComment);        
}

//Taking new comment and displaying it.
let displayComment3 = document.getElementById('commentForm');
displayComment3.addEventListener("submit", function(event){
    event.preventDefault();
let newVariable = { 
    Image: "",
    name: "",
    Date: "",
    comment: "",
}; 
newVariable.name=document.querySelector('input').value;
newVariable.comment=document.querySelector('#textArea1').value;
postcommz = () => {

axios
.post(getCommURL,{
    name: `${document.querySelector('input').value}`,
    comment: `${document.querySelector('#textArea1').value}`,
})
.then(res => {
    console.log(res.data)
    getCommz2();
    })
.catch(err=>{console.log(err);});
}

postcommz();
document.querySelector('input').value = '';
document.querySelector('#textArea1').value ='';
})

// .newCommz
newCommz = () => {
    let displayComment3 = document.getElementById('newCommz')

    let showShow = document.createElement('div');
    showShow.classList.add("showShowComm1");
    displayComment3.appendChild(showShow);

    let showShowName = document.createElement('div');
    showShowName.classList.add("showShowName");
    showShowName.innerText = `${document.querySelector('input').value}`;
    showShow.appendChild(showShowName);

    let showShowComment = document.createElement('div');
    showShowComment.classList.add("showShowComment");
    showShowComment.innerText = `${document.querySelector('#textArea1').value}`;
    showShow.appendChild(showShowComment);
}
