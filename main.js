const item ={
    "689145740844" : {
        name: "JavaScript Textbook",
        price: 34.95
    },
    "4549292070248" : {
        name: "Xerox Paper",
        price: 10.99
    },
    "092265222983":{
        name: "First Aid Kit",
        price: 20.99
    },
    "X002ELVL3J":{
        name: "Box of Pencils (50ct.)",
        price: 15.99
    },
    "686024002468":{
        name: "Sanitizing Wipes",
        price: 10.99
    },
    "860004186236":{
        name: "N95 Face Masks",
        price: 15.99
    },
    "036000214000":{
        name: "Kleenex",
        price: 3.99
    },
    "8809693254156":{
        name: "Hand Sanitizer",
        price: 7.99
    },
    "036500060480":{
        name: "Printer Paper",
        price: 9.99
    },
    "085014561877":{
        name: "Brush Pens",
        price: 10.99
    },

    "X0032YGP2T":{
        name: "Multiport Adapter",
        price: 25.99
    },
    "B07G6JT1XS":{
        name: "Scissors (20ct.)",
        price: 23.99
    },
    "9780134682334":{
        name: "iOS Programming Textbook",
        price: 119.99
    },
    "718103230759":{
        name: "Spiral Notebook",
        price: 1.99  
    }
}

//create variables 
let addBtn = document.getElementById("addBtn");
let itemContainer = document.getElementById("itemContainer");
let total = document.getElementById("total");
let totalValue = 0;
let checkoutBtn = document.getElementById("checkoutBtn");

//create object to check if the item already exist
let existItem = {};

function addItem(){
    //create variables that hold the barcode of the item and its quantity
    const itemBarcode = document.getElementById("itemBarcode").value;
    const itemQuantity = document.getElementById("itemQuantity").value;

    //if the barcode of item is empty, alert this
    if(itemBarcode === ""){
        alert("You have to add something");
    }
    //if the quantity input is empty, alert this
    if(itemQuantity === ""){
        alert("You have to add numbers of item you want");
    }
    //if the barcode of the item is inside of item objects then it will be added to the cart section
    if(item.hasOwnProperty(itemBarcode)){
        
        //checking if the item is already exist, if it is then update the quantity
        if(existItem.hasOwnProperty(itemBarcode)){

        }
        else{
        //creating elements to store the item information
        const container = document.createElement("div");
        const pItem = document.createElement("p");
        const pPrice = document.createElement("p");
        const pQuantity = document.createElement("p");

        //adding the new elements into existed elements
        itemContainer.appendChild(container);
        container.appendChild(pItem);
        container.appendChild(pPrice);
        container.appendChild(pQuantity);

        //change the innerText of p elements to the name, price and the quantity of the item
        pItem.innerText = item[itemBarcode].name;
        pPrice.innerText = item[itemBarcode].price;
        pQuantity.innerText = itemQuantity;

        //add class name to the elements
        container.classList.add("container");
        pItem.classList.add("pItem");
        pPrice.classList.add("pPrice");
        pQuantity.classList.add("pQuantity");
        }

        //updating the quantity and apply it to the total 
        existItem[itemBarcode] = itemQuantity;

        
        //change the total according to the amount of items and their prices
        totalValue += parseFloat(itemQuantity * item[itemBarcode].price);
        total.innerText= "Total: $" + totalValue.toFixed(2);
    
        //change the total grand (adding tax to the total)
        grandTotal.innerText = "Your grand total (including tax, 9.25%) is $ " + (totalValue + totalValue*0.0925).toFixed(2);
    }
    //if the barcode of the item is not in the item object, alert this
    else{
        alert("Item is not available");
    }
    //reset the input of itemBarcode and quantity
    document.getElementById("itemBarcode").value = "";
    document.getElementById("itemQuantity").value = "";
}

//after clicking the Add to Cart button, the item you scanned will appear below the cart section
addBtn.addEventListener("click", addItem);


