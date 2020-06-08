
let arr1=[
    {
        Image: "",
        Name: "Michael Lyons",
        Date: "12/18/2018",
        Comment: "They BLEW the ROOF off at their last show, once everyone started figuring out they were going. This is still simply the greatest opening of a concert I have EVER witnessed.",
    },

    {
        Image: "",
        Name: "Gary Wong",
        Date: "12/12/2018",
        Comment: "Every time I see him shred I feel so motivated to get off my couch and hop on my board. He's so talented! I wish I can ride like him one day so I can really enjoy myself!",
    },

    {
        Image: "",
        Name: "Theodore Duncan",
        Date: "11/15/2018",
        Comment: "How can someone be so good!!! You can tell he lives for this and loves to do it every day. Everytime I see him I feel instantly happy! He’s definitely my favorite ever!",
    },
];




//#1-Showing the comments from the array.
let parent = document.getElementById("commentList");

for(let i=0;i<arr1.length;i++){
    let showCard = document.createElement('div');
    showCard.classList.add("show__date2");
    parent.appendChild(showCard);
    document.querySelectorAll(".show__date2")[i].innerText= arr1[i].Image

    let Card2 = document.createElement('div');
    Card2.classList.add("show__venue1");
    showCard.appendChild(Card2);
    document.querySelectorAll('.show__venue1')[i].innerText = arr1[i].Name


    let showCard2 = document.createElement('div');
    showCard2.classList.add("show__venue2");
    showCard.appendChild(showCard2);
    document.querySelectorAll('.show__venue2')[i].innerText = arr1[i].Date


    let showCard3 = document.createElement('div');
    showCard3.classList.add("show__venue3");
    showCard.appendChild(showCard3);
    document.querySelectorAll('.show__venue3')[i].innerText = arr1[i].Comment
    
}


//Accepting input name and comments from end user; and to display input data on webpage comments section.

let displayComment = document.getElementById('commentForm');
displayComment.addEventListener("submit", function (event){
let commentButton = document.getElementById('commentButton');
console.log('Comment button', event);
event.preventDefault();
console.log('Comment button clicked! It is working!!!')


let name1 = document.createElement('div');
let input = event.target.nameInput.value;
let name2 = document.createElement('div');
let input2 = event.target.textArea1.value;
name1.innerText=input;
name2.innerText=input2;
let list = document.getElementById('newComment');
list.appendChild(name1);
list.appendChild(name2);
document.querySelector('input').value = '';
document.querySelector('#textArea1').value ='';
}
)
