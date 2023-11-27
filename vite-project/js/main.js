const foods = [
    {
      name: 'Spaghetti Bolognese',
      hasMeat: true,
      price: 12.99,
      image: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.YixleAz2dzjXRd3FGfaIlwHaE7%26pid%3DApi&f=1&ipt=351af767383f18fee058cf55183aef1cfe6629fd8fe5589d9dc368330165ac94&ipo=images'
    },
    {
      name: 'Vegetable Stir-Fry',
      hasMeat: false,
      price: 9.99,
      image: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.cBd8WwlTbdAg-pPDwhRZ2QHaLH%26pid%3DApi&f=1&ipt=36f62a0f2d827647157f0814631950dfcdcda5a3aaaeb6d989bcab9f405009fa&ipo=images'
    },
    {
      name: 'Roast Chicken',
      hasMeat: true,
      price: 14.50,
      image: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.sXUJcjfIJSEE-jD9S_1IMAHaHa%26pid%3DApi&f=1&ipt=bf7611409571259c5bc600a3c916c4db9ca8b7e37a5f5136db52d0a4a63d3de3&ipo=images'
    },
    {
      name: 'Margherita Pizza',
      hasMeat: false,
      price: 11.00,
      image: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.diib6W3XLdZcf2MmOZkq9gHaLE%26pid%3DApi&f=1&ipt=d34527c50567e77579b05979b9210752bd5318dea3af928b5310c9c2338cd13b&ipo=images'
    },
    {
      name: 'Beef Stroganoff',
      hasMeat: true,
      price: 15.99,
      image: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.vx1SmJ57609WQ7rSyuf7fgHaLH%26pid%3DApi&f=1&ipt=31fad242df8e523e5a89403d4ad5ea2b5007b9ae5ec7ce9b9363410e46e8e3e4&ipo=images'
    },
    {
      name: 'Mushroom Risotto',
      hasMeat: false,
      price: 10.50,
      image: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.fL1tLqHt6SZRMntz6IDWAAHaE8%26pid%3DApi&f=1&ipt=d27c418a351b1d3d101f66b776afa9ede2130e9c80a63ea29eb2683dd5a828a7&ipo=images'
    },
    {
      name: 'Barbecue Ribs',
      hasMeat: true,
      price: 18.75,
      image: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.-kWLnOKJAGz-hrufb3UCbgHaLH%26pid%3DApi&f=1&ipt=8a2e69d193be0e17fe7f66b89d6fee08ac526495a6bf62386b310af65d968f77&ipo=images'
    },
    {
      name: 'Caprese Salad',
      hasMeat: false,
      price: 8.50,
      image: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.2k2wJiUATiTH-tQMTHMiJAHaHa%26pid%3DApi&f=1&ipt=66c72ef7a14a60e8d2febc47c4d8b5c594d17fe23824b48f4c22a652d069b46d&ipo=images'
    },
    {
      name: 'Sausage Rolls',
      hasMeat: true,
      price: 7.99,
      image: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.MASB53GrFlu0UVE-Z1DdDwHaFB%26pid%3DApi&f=1&ipt=aeb3a7dad980500b93e7628313dbd1b146fbf7deab26c8d7126201a76cdfe0a1&ipo=images'
    },
    {
      name: 'Pesto Pasta',
      hasMeat: false,
      price: 9.25,
      image: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.LtiTiC9HDGuWexMA272dPgHaLG%26pid%3DApi&f=1&ipt=d3eecdf6807765f554ef91f1ad4bf1773e78e489deb28978e4fffafce433865c&ipo=images'
    },
    {
      name: 'Beef Burger',
      hasMeat: true,
      price: 13.50,
      image: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.yIV1hm906qThY0EntPebbwHaE8%26pid%3DApi&f=1&ipt=576907001a9f2381462ea16ad6be302a65b730b21f4114feb8acb3faac429bba&ipo=images'
    },
    {
      name: 'Falafel Wrap',
      hasMeat: false,
      price: 8.75,
      image: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.OD7TNK9Bw9GjY6uXuSkRwQHaLH%26pid%3DApi&f=1&ipt=e9500308da11a3167da3c8823d15e32fff2db4fc197d039d2aeb10b271a006ac&ipo=images'
    },
    {
      name: 'Pulled Pork Sandwich',
      hasMeat: true,
      price: 11.99,
      image: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.52b7bCPC4maydqdRTsuGJwHaLH%26pid%3DApi&f=1&ipt=c964def039756abf7fceaaff8b1e6b1b55098393cc17cc68f81873da869da52f&ipo=images'
    },
    {
      name: 'Vegetarian Sushi',
      hasMeat: false,
      price: 12.00,
      image: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.RTYBAy4Q-MZaTbGHTO1ViwHaE6%26pid%3DApi&f=1&ipt=47633282cbcb97a2aa5360078ba50af11611aca8b72450854d6b50b1305063c3&ipo=images'
    },
    {
      name: 'Beef Tacos',
      hasMeat: true,
      price: 10.25,
      image: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.eumGTEvWx3Gf_ob3iwEcRAHaE6%26pid%3DApi&f=1&ipt=3ae2eb258e304b2c45ecacfed9b9929332fa3c8a0497275199294cf473fcdfc5&ipo=images'
    },
    {
      name: 'Vegetable Lasagna',
      hasMeat: false,
      price: 13.75,
      image: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.jWzW2zugpQE1xbIypgY69gHaFc%26pid%3DApi&f=1&ipt=62806c40ef88b2485245013b49834b367538eab5411ec4914b9023542e3ac3fb&ipo=images'
    },
    {
      name: 'Lamb Kebabs',
      hasMeat: true,
      price: 16.50,
      image: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.WJgX5gUVpXSxy5KJ9ViHggAAAA%26pid%3DApi&f=1&ipt=7a7ba910da33bd5ed27fde75441ddd8b2079f1b3352df6db92a005df9d70d033&ipo=images'
    },
  ]

  
  function createCard(food) {
    const cardContainer = document.getElementById('cardsContainer');
  
    const card = document.createElement('div');
    card.classList.add('card');
  
    const image = document.createElement('img');
    image.src = food.image;
    image.alt = food.name;
    card.appendChild(image);
  
    const content = document.createElement('div');
    content.classList.add('card-content');
  
    const name = document.createElement('h2');
    name.textContent = food.name;
    content.appendChild(name);
  
    const hasMeat = document.createElement('p');
    hasMeat.textContent = food.hasMeat ? 'Contains Meat' : 'Vegetarian';
    content.appendChild(hasMeat);
  
    const price = document.createElement('p');
    price.textContent = `Price: $${food.price}`;
    content.appendChild(price);
  
    card.appendChild(content);
    cardContainer.appendChild(card);
  }
  
  foods.forEach(createCard);
  

  const sortedMenu = foods.sort((a, b) => a.name.localeCompare(b.name));
  console.log(sortedMenu);
  
  const Vegie = foods.filter(food => !food.hasMeat);
  console.log(Vegie)
  
  const price = foods.slice().sort((a, b) => a.price - b.price);
  console.log(price)

  const themeToggle = document.getElementById('theme-toggle');
const body = document.body;

themeToggle.addEventListener('click', () => {
  body.classList.toggle('dark-theme');
});


