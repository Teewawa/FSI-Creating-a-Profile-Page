let content = document.querySelector(".js-generated.content");

//code starts here -tiara

//Create an H1 Element
let header = document.createElement("h1");
//Set class attribute to 'dog-name'
header.setAttribute("class", "dog-name");
//Append "Rizzo" to the header
header.append("Rizzo");
//Append the header to the page
content.append(header);

//Create a div with class name 'dog-content'
let dogContent = document.createElement("div");
//Set class attribute to 'dog-content
dogContent.setAttribute("class", "dog-content");
//Appened to content
content.append(dogContent);

//Create an image element with class name 'dog-image' with scr = ''
let dogImage = document.createElement("img");
dogImage.setAttribute("class", "dog-image");
dogImage.setAttribute("src", "./assets/rizzo.jpg");
//Append to dog-content div
dogContent.append(dogImage);

//Create div inside div class="dog-content"
let dogDetails = document.createElement("div");
dogDetails.setAttribute("class", "dog-details");

//Append to dog-content div
dogContent.append(dogDetails);

//Create H3 header with text "Description"
descriptionHeader = document.createElement("h3");
descriptionHeader.textContent = "Description:";
dogDetails.append(descriptionHeader);

//Create paragraph
paragraph = document.createElement("p");
paragraph.textContent =
  "This gentle dog is aloof toward her owner, and never comes when called. She always acts as though any stranger she meets will harm her, and dislikes other animals.";
dogDetails.append(paragraph);

//Create another h3 with text 'Feeding Times:'
feedingTimeHeader = document.createElement("h3");
feedingTimeHeader.textContent = "Feeding Times:";
dogDetails.append(feedingTimeHeader);

//Create a ul with list of 9:00 am li 12:00 pm li 5:00 pm
let uList = document.createElement("ul");

//Create list items (li) with text content '9:00 am 12:00 pm 5:00 pm
let nineAM = document.createElement("li");
let twelvePM = document.createElement("li");
let fivePM = document.createElement("li");
nineAM.textContent = "9:00 am";
twelvePM.textContent = "12:00 pm";
fivePM.textContent = "5:00 pm";
//Add list (li) to the ul
uList.append(nineAM);
uList.append(twelvePM);
uList.append(fivePM);
dogDetails.append(uList);
