const item ={
    "689145740844" : {
        name: "JavaScript Textbook",
        price: "34.95"
    },
    "4549292070248" : {
        name: "Xerox Paper",
        price: "10.99"
    },
    "092265222983":{
        name: "First Aid Kit",
        price: "20.99"
    },

    "X002ELVL3J":{
        name: "Box of Pencils (50ct.)",
        price: "15.99"
    },
    "686024002468":{
        name: "Sanitizing Wipes",
        price: "10.99"
    },
    "860004186236":{
        name: "N95 Face Masks",
        price: "15.99"
    },
    "036000214000":{
        name: "Kleenex",
        price: "3.99"
    },
    "8809693254156":{
        name: "Hand Sanitizer",
        price: "7.99"
    },
    "036500060480":{
        name: "Printer Paper",
        price: "9.99"
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

//create variables for both the Add to Cart button and the itemContainer
const addBtn = document.getElementById("addBtn");
const itemContainer = document.getElementById("itemContainer");

function addItem(){
    //create variables that hold the barcode of the item and its quantity
    const itemBarcode = document.getElementById("itemBarcode").value;
    const itemQuantity = document.getElementById("quantity").value;

    //if the barcode of the item is inside of item objects then it will be added to the cart
    if(item.hasOwnProperty(itemBarcode)){
        const container = document.createElement("div");
        const pItem = document.createElement("p");
        const pPrice = document.createElement("p");
        const pQuantity = document.createElement("p");

        itemContainer.appendChild(container);
        container.appendChild(pItem);
        container.appendChild(pPrice);
        container.appendChild(pQuantity);

        //change the innerText of p elements to the name, price and the quantity of the item
        pItem.innerText = item[itemBarcode].name;
        pPrice.innerText = item[itemBarcode].price;
        pQuantity.innerText = itemQuantity;
    }
    //if the input is empty, alert this
    else if(itemBarcode === ""){
        alert("You have to add something");
    }
    //if the barcode of the item is not in the item object, alert this
    else{
        alert("Item is not available");
    }

    //reset the input of itemBarcode and quantity
    document.getElementById("itemBarcode").value = "";
    document.getElementById("quantity").value = "";
}
addBtn.addEventListener("click", addItem);