const review = document.getElementById("review");
const reviewContainer = document.getElementById("review_container");
const createReviewBtn = document.getElementById("submit-button");


function openFormCreation() {
    const reviewForm = document.createElement("form");
    /*reviewForm.setAttribute('method', "post");
    reviewForm.setAttribute('action', "/submit-page");*/
    reviewForm.className ='review-form';
    reviewForm.id = 'reviewForm';

         reviewForm.innerHTML = `
         <button class="close-btn" id="close_btn" onclick="closeForm()"> X </button>
        <h2>Let Us Know How We Did!</h2>
        <label for="name" class="label">Name:</label><br>
        <input type="text" id="name" name="name"><br>
        <label for="email" class="label">Email:</label><br>
        <input type="email" id="email" name="email" class=""><br>
        <label for="message" class="label">Review</label><br>
        <input type="textarea" id="textarea" name="textarea" class="textarea"><br>
        <button type="submit" value="Submit" class="submit-review-btn"> SUBMIT </button>
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

const cancelBtn = document.getElementById("cancel_btn");

function closeForm() {
    reviewForm.style.dispaly = 'none';
}

createReviewBtn.addEventListener('click', openFormCreation);
cancelBtn.addEventListener('click', closeForm);


