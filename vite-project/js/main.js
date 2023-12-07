const foods = [
  {
    name: "Spaghetti Bolognese",
    hasMeat: true,
    price: 12.99,
    image:
      "https://www.slimmingeats.com/blog/wp-content/uploads/2010/04/spaghetti-bolognese-36-720x720.jpg",
  },
  {
    name: "Vegetable Stir-Fry",
    hasMeat: false,
    price: 9.99,
    image:
      "https://natashaskitchen.com/wp-content/uploads/2020/08/Vegetable-Stir-Fry-2.jpg",
  },
  {
    name: "Roast Chicken",
    hasMeat: true,
    price: 14.5,
    image:
      "https://assets.bonappetit.com/photos/62f5674caf9bae430097be0f/1:1/w_2560%2Cc_limit/0810-no-fail-roast-chicken-v2.jpg",
  },
  {
    name: "Margherita Pizza",
    hasMeat: false,
    price: 11.0,
    image:
      "https://i0.wp.com/www.onceuponachef.com/images/2020/06/Margherita-Pizza.jpg?resize=760%2C1081&ssl=1",
  },
  {
    name: "Beef Stroganoff",
    hasMeat: true,
    price: 15.99,
    image:
      "https://www.recipetineats.com/wp-content/uploads/2018/01/Beef-Stroganoff_2-1-1.jpg",
  },
  {
    name: "Mushroom Risotto",
    hasMeat: false,
    price: 10.5,
    image:
      "https://lindseyeatsla.com/wp-content/uploads/2020/12/Lindseyeatsla_Mushroom_Risotto-9.jpg",
  },
  {
    name: "Barbecue Ribs",
    hasMeat: true,
    price: 18.75,
    image:
      "https://cafedelites.com/wp-content/uploads/2018/06/Oven-Pork-Ribs-IMAGE-5.jpg",
  },
  {
    name: "Caprese Salad",
    hasMeat: false,
    price: 8.5,
    image:
      "https://natashaskitchen.com/wp-content/uploads/2019/08/Caprese-Salad-6.jpg",
  },
  {
    name: "Sausage Rolls",
    hasMeat: true,
    price: 7.99,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZ2yyE1j3FqX9a-I9htt8HVmz11OhkkgBPp1FI4btMsQ&s",
  },
  {
    name: "Pesto Pasta",
    hasMeat: false,
    price: 9.25,
    image:
      "https://cdn.loveandlemons.com/wp-content/uploads/2022/07/pesto-pizza-1.jpg",
  },
  {
    name: "Beef Burger",
    hasMeat: true,
    price: 13.5,
    image:
      "https://www.allrecipes.com/thmb/5JVfA7MxfTUPfRerQMdF-nGKsLY=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/25473-the-perfect-basic-burger-DDMFS-4x3-56eaba3833fd4a26a82755bcd0be0c54.jpg",
  },
  {
    name: "Falafel Wrap",
    hasMeat: false,
    price: 8.75,
    image:
      "https://www.wearesovegan.com/wp-content/uploads/2019/08/howtomakeveganfalafel-h1.jpg",
  },
  {
    name: "Pulled Pork Sandwich",
    hasMeat: true,
    price: 11.99,
    image:
      "https://saltpepperskillet.com/wp-content/uploads/pulled-pork-sandwiches-on-butcher-paper-horizontal.jpg",
  },
  {
    name: "Vegetarian Sushi",
    hasMeat: false,
    price: 12.0,
    image:
      "https://www.justonecookbook.com/wp-content/uploads/2023/05/Vegetarian-Sushi-Rolls-9707-I-1.jpg",
  },
  {
    name: "Beef Tacos",
    hasMeat: true,
    price: 10.25,
    image:
      "https://feelgoodfoodie.net/wp-content/uploads/2017/04/Ground-Beef-Tacos-9.jpg",
  },
  {
    name: "Vegetable Lasagna",
    hasMeat: false,
    price: 13.75,
    image:
      "https://www.smalltownwoman.com/wp-content/uploads/2022/03/Vegetable-Lasagna-Recipe-Card.jpg",
  },
  {
    name: "Lamb Kebabs",
    hasMeat: true,
    price: 16.5,
    image:
      "https://images.immediate.co.uk/production/volatile/sites/30/2020/08/spring-lamb-skewers-17aaaba.jpg?quality=90&resize=500,454",
  },
];

// Function to create cards based on food items
function createCards(foods) {
  const cardContainer = document.getElementById("cardsContainer");
  cardContainer.innerHTML = ""; // Clear the current cards

  foods.forEach((food) => {
    // Generating HTML for each food item as a card
    const cardHTML = `
      <div class="card">
        <h2>${food.name}</h2>
        <p>${food.hasMeat ? "Contains Meat" : "Vegetarian"}</p>
        <p>Price: $${food.price}</p>
        <img src="${food.image}" alt="${food.name}">
      </div>
    `;

    // Inserting the generated card HTML into the container
    cardContainer.insertAdjacentHTML("beforeend", cardHTML);
  });
}

// Sorting functions
const sortByName = () => {
  // Sort foods by name and create cards with the sorted list
  const sortedMenu = foods.slice().sort((a, b) => a.name.localeCompare(b.name));
  createCards(sortedMenu);
};

const sortByVeggie = () => {
  // Filter vegetarian items and create cards with them
  const veggie = foods.filter((food) => !food.hasMeat);
  createCards(veggie);
};

const sortByPrice = () => {
  // Sort foods by price and create cards with the sorted list
  const price = foods.slice().sort((a, b) => a.price - b.price);
  createCards(price);
};

// Call the function to initially generate cards
createCards(foods);

// Event listeners for sorting buttons
document.getElementById("alpha").addEventListener("click", sortByName);
document.getElementById("money").addEventListener("click", sortByPrice);
document.getElementById("Vegetarian").addEventListener("click", sortByVeggie);

// Theme toggle button functionality
const themeToggle = document.getElementById("theme-toggle");
const body = document.body;

themeToggle.addEventListener("click", () => {
  // Toggle dark theme by toggling CSS class on the body
  body.classList.toggle("dark-theme");
});

/* function cardsort() {
const Vegie = foods.filter((food) => !food.hasMeat);
  Vegie.forEach((food) => DOMSelectors.cards.insertAdjacentHTML("beforeend",`<div class="card" id="all">
  <h2 class="text">${food.name}</h2>
  <img src="${food.image}" alt="" class="card-img">
  <h2 class="info">Type: ${food.hasMeat ? "Meat" : "Vegetarian"}</h2>
  <p>Price: $${food.price}</p>
  </div>`));
}

function cardsor() {
  const Alpha = foods.slice().sort((a, b) => a.name.localeCompare(b.name));
  Alpha.forEach((food) => DOMSelectors.cards.insertAdjacentHTML("beforeend",`<div class="card" id="all">
  <h2 class="text">${food.name}</h2>
  <img src="${food.image}" alt="" class="card-img">
  <h2 class="info">Type: ${food.hasMeat ? "Meat" : "Vegetarian"}</h2>
  <p>Price: $${food.price}</p>
  </div>`));
}

function cardso() {
  const PRic = foods.slice().sort((a, b) => a.price - b.price);
  PRic.forEach((food) => DOMSelectors.cards.insertAdjacentHTML("beforeend",`<div class="card" id="all">
  <h2 class="text">${food.name}</h2>
  <img src="${food.image}" alt="" class="card-img">
  <h2 class="info">Type: ${food.hasMeat ? "Meat" : "Vegetarian"}</h2>
  <p>Price: $${food.price}</p>
  </div>`));
}

function clearCards() {
  const cardContainer = document.getElementById("cardsContainer");
  cardContainer.innerHTML = ""; 
}

 */