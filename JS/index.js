const review = document.getElementById("review");
const reviewContainer = document.getElementById("review_container");
const createReviewBtn = document.getElementById("submit-button");


function openFormCreation() {
    const reviewForm = document.createElement("form");
    reviewForm.setAttribute('method', "post");
    reviewForm.setAttribute('action', "/submit-page");
    reviewForm.className ='review-form';
    reviewForm.id = 'reviewForm';

         reviewForm.innerHTML = `
        <h2>Let Us Know How We Did!</h2>
        <label for="name">Name:</label><br>
        <input type="text" id="name" name="name"><br>
        <label for="email">Email:</label><br>
        <input type="email" id="email" name="email"><br>
        <label for="message">Review</label><br>
        <input type="textarea" id="textarea" name="textarea"><br>
        <input type="submit" value="Submit">
    `;
        

    /*reviewForm.appendChild(reviewerName);
    reviewForm.appendChild(reviewerMessage);
    reviewForm.appendChild(submitReview); */

    reviewContainer.appendChild(reviewForm);

    document.body.appendChild(reviewForm);
}

function openForm() {
    openFormCreation();
    reviewContainer.style.display = 'flex';
    console.log("Form has been created");
}

function validateForm() {
    if (reviewerName == "") {
        alert("Name feild must be filled out");
        return false;
    }
    
}

createReviewBtn.addEventListener('click', openFormCreation);



