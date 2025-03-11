document.addEventListener("DOMContentLoaded", function () {
   let Amount = document.getElementById('Amount');
   let Description = document.getElementById('Description');
   let Category = document.getElementById("Category");
   let Button = document.getElementById("onClick");
   let liElement = document.getElementById("_item");

   Button.addEventListener('click', function (e) {
       e.preventDefault(); 

       let AmountText = Amount.value.trim();
       let DescriptionText = Description.value.trim();
       let CategoryText = Category.value;

       if (AmountText === "" || DescriptionText === "") {
           alert("Please fill in all fields!");
           return;
       }

      
       let listItem = document.createElement('li');
       let uniqueID = Date.now();

       listItem.innerHTML = `
           Spended: ₹${AmountText} <br>
           Description: ${DescriptionText} <br>
           Category: ${CategoryText} <br>
           <button class="delete-btn" data-id="${uniqueID}">Delete</button>
           <button class="edit-btn" data-id="${uniqueID}">Edit</button>
           <br>
           <br>
       `;

       liElement.appendChild(listItem);

      
       Amount.value = "";
       Description.value = "";
       Category.value = "movies"; 
   });

   liElement.addEventListener('click', function (event) {
       let target = event.target;

       if (target.classList.contains('delete-btn')) {
           target.parentElement.remove(); 
       }

       if (target.classList.contains('edit-btn')) {
           let listItem = target.parentElement;
           let details = listItem.innerHTML.split("<br>");

           let amountText = details[0].split(":")[1].trim().replace("₹", "");
           let descriptionText = details[1].split(":")[1].trim();
           let categoryText = details[2].split(":")[1].trim();

           
           Amount.value = amountText;
           Description.value = descriptionText;
           Category.value = categoryText;

          
           listItem.remove();
       }
   });
});
