
let arr1 = [

    {
        Image: "placeHOLDER",
        Name: "Michael Lyons",
        Date: "12/18/2018",
        Comment: "They BLEW the ROOF off at their last show, once everyone started figuring out they were going. This is still simply the greatest opening of a concert I have EVER witnessed.",
    },

    {
        Image: "placeHOLDER",
        Name: "Gary Wong",
        Date: "12/12/2018",
        Comment: "Every time I see him shred I feel so motivated to get off my couch and hop on my board. He's so talented! I wish I can ride like him one day so I can really enjoy myself!",
    },

    {
        Image: "placeHOLDER",
        Name: "Theodore Duncan",
        Date: "11/15/2018",
        Comment: "How can someone be so good!!! You can tell he lives for this and loves to do it every day. Everytime I see him I feel instantly happy! He’s definitely my favorite ever!",
    },
];

commz = () => {
let parent3 = document.getElementById("commentList2");    
arr1.forEach(myFunction);
function myFunction(currentValue) {
    let showShow = document.createElement('div');
    showShow.classList.add("showShowComm1");
    parent3.appendChild(showShow);
    // document.getElementById("test22").innerText=currentValue.Name;

    let showShowName = document.createElement('div');
    showShowName.classList.add("showShowName");
    showShow.appendChild(showShowName);
    showShowName.innerText = currentValue.Name
    // document.querySelectorAll(".showShowName").innerText='currentValue.Name';

    let showShowDate = document.createElement('div');
    showShowDate.classList.add("showShowDate");
    showShow.appendChild(showShowDate);
    showShowDate.innerText = currentValue.Date

    let showShowComment = document.createElement('div');
    showShowComment.classList.add("showShowComment");
    showShow.appendChild(showShowComment);
    showShowComment.innerText = currentValue.Comment

};


}
commz();


let displayComment2 = document.getElementById('commentForm');
displayComment2.addEventListener("submit", function(event){
    event.preventDefault();
let newVariable = { 
    Image: "",
    Name: "",
    Date: "",
    Comment: "",
}; 
newVariable.Name=document.querySelector('input').value;
newVariable.Comment=document.querySelector('#textArea1').value;
arr1.unshift(newVariable);
document.querySelector('input').value = '';
document.querySelector('#textArea1').value ='';
console.log(commz());
}
)




//    document.getElementById("test22").innerText=currentValue.Name;





// += index + ":" + item + "<br>"


// arr1.forEach(blankUnk = () => (currentValue));
// function currentValue(item) {
//     document.getElementsByClassName("test22").innerHTML=item;
// }
// blankUnk();

let arr2 = [];




//Axios get test
const getCommURL = 'https://project-1-api.herokuapp.com/comments?api_key=d5d66f4a-686f-4232-b639-d17e6936b0be';
axios.get(getCommURL)
.then(res => (console.log(res.data)))
.catch(err => (console.log(err)));

// function getComments() {
// axios.get('https://project-1-api.herokuapp.com/comments?api_key=d5d66f4a-686f-4232-b639-d17e6936b0be')
// .then(result => console.log(result))
// .catch(err => console.error(err));
// }

// function getComments() {
//     axios ({
//         method: 'get',
//         url: 'https://project-1-api.herokuapp.com/comments?api_key=d5d66f4a-686f-4232-b639-d17e6936b0be',
//         data: {
//             name:'',
//             commnet: '',
            
//         }
//     })
//     .then(console.log(response))
// }

//Trying to do a forEach instead of a for loop...
// let parent2 = document.getElementById("commentList2");

// let funcfunc2 = () => {

//     arr1.forEach(currentValue => {
//         // console.log("forEach method: ", currentValue)
    
//     })

//     arr1.forEach(function(item){
//         arr2.unshift(item)
//     })






//     arr1.forEach(getMyStuff);
//     function getMyStuff(mystuff) {
//         document.getElementsByClassName("test22").innerHTML += mystuff + "<div>";
//     }
//     console.log(getMyStuff);





    // let commOne = document.createElement('div');
    // commOne.classList.add("show__date22");
    // parent2.appendChild(commOne);
    // commOne.innerText = arr1.item

    // let Card22 = document.createElement('div');
    // Card22.classList.add("show__venue122");
    // commOne.appendChild(Card22);
    // Card22.innerText = arr1.Name

    // let showCard22 = document.createElement('div');
    // showCard22.classList.add("show__venue22");
    // commOne.appendChild(showCard22);
    // // document.querySelectorAll('.show__venue2')[i].innerText = arr1[i].Date
    // showCard22.innerText = arr1.Date

    // let showCard32 = document.createElement('div');
    // showCard32.classList.add("show__venue32");
    // commOne.appendChild(showCard32);
    // // document.querySelectorAll('.show__venue32').innerText = arr1.Comment
    // showCard32.innerText = `${arr1.Comment}`



// }
// funcfunc2();
// console.log(arr2);



//
//
//
//
//
//
//
//this should be the original working one. works but ran into issues when adding comment.
//#1-Showing the comments from the array.
let parent = document.getElementById("commentList");

let funcfunc = (arr1) => { 
    console.log(arr1);
    for(let i=0;i<arr1.length;i++){
    let showCard = document.createElement('div');
    showCard.classList.add("show__date2");
    parent.appendChild(showCard);
    // document.querySelectorAll(".show__date2")[i].innerText = arr1[i].Image
    // showCard.innerText = arr1[i]

    //creating a text node.
    // document.createTextNode(arr1.Image);
    // document.appendTextNode(showCard);

    //add a text node.

    let Card2 = document.createElement('div');
    Card2.classList.add("show__venue1");
    showCard.appendChild(Card2);
    Card2.innerText=arr1[i].Name

    // document.createTextNode(arr1.Name);
    // console.log(document.querySelectorAll('.show__venue1')[i]);
    // document.querySelectorAll('.show__venue1')[i].innerText = arr1[i].Name
    

    let showCard2 = document.createElement('div');
    showCard2.classList.add("show__venue2");
    showCard.appendChild(showCard2);
    // document.querySelectorAll('.show__venue2')[i].innerText = arr1[i].Date
    showCard2.innerText = arr1[i].Date

    let showCard3 = document.createElement('div');
    showCard3.classList.add("show__venue3");
    showCard.appendChild(showCard3);
    // document.querySelectorAll('.show__venue3')[i].innerText = arr1[i].Comment
    showCard3.innerText = arr1[i].Comment
}
};

// funcfunc(arr1);




//
//Accepting input name and comments from end user; and to display input data on webpage comments section.
//


let displayComment = document.getElementById('commentForm');
displayComment.addEventListener("submit", function(event){
// let commentButton = document.getElementById('commentButton');
// console.log('Comment button', event);
event.preventDefault();


// let name1 = document.createElement('div');
// let input = event.target.nameInput.value;
// let name2 = document.createElement('div');
//instead of creating new elements. i just want to create objects.
//objects will.
//create new object
//
let newVariable = { 
    Image: "",
    Name: "",
    Date: "",
    Comment: "",
}; 

newVariable.Name=document.querySelector('input').value;
newVariable.Comment=document.querySelector('#textArea1').value;


// let input2 = event.target.textArea1.value;
// name1.innerText=input;
// name2.innerText=input2;
// let list = document.getElementById('newComment');
// list.appendChild(name1);
// list.appendChild(name2);
//adding
arr1.unshift(newVariable);
//axios.post goes here
// console.log(arr1);
document.querySelector('input').value = '';
document.querySelector('#textArea1').value ='';
//push to array

// console.log(funcfunc());
// arr1.splice

//(arr1.length,3,'')
    }
)


//axios calls
//top is empty array
//post
//