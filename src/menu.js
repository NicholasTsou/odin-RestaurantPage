
export function createMenu(){

    const fragment = document.createDocumentFragment();

    const menu = document.createElement('section');
    menu.classList.add('menu');

    const title = document.createElement('p');
    title.classList.add('title');
    title.textContent = 'Menu';

    const grid = document.createElement('div');
    grid.classList.add('grid');


    //creating an array of items for gridItems
    const gridItems = [
        {
            imgSrc: "./pictures/ramen.png",
            title: "Pork Ramen",
            description: "Pork Broth, Thinly Sliced Pork Belly, Wheat Flour Noodles, Soft Boiled Egg, Green Onions, Nori, Corn"
        },

        {
            imgSrc: "./pictures/noodles.png",
            title: "Stir Fried Noodles",
            description: "Thinly Sliced Beef, Homemade Sauce, Green Onions, Ginger, Garlic, Broccoli, Mushrooms"
        },

        {
            imgSrc: "./pictures/nigiri.png",
            title: "Salmon/Tuna Nigiri",
            description: "Salmon/Tuna, Rice, Wasabi, Pickled Ginger, Soy Sauce"
        },

        {
            imgSrc: "./pictures/sashimi.png",
            title: "Salmon/Tuna Sashimi",
            description: "Fresh Ahi Tuna/Salmon, Soy Sauce, Fresh Ginger, Wasabi"
        },

        {
            imgSrc: "./pictures/sushi.png",
            title: "Sakura Sushi Rolls",
            description: "White Rice, Seaweed, Cucumbers, Ahi Tuna, Avocado, Spicy Mayo, Sesame Seeds"
        },

        {
            imgSrc: "./pictures/onigiri.png",
            title: "Spicy Salmon Onigiri",
            description: "White Rice, Kewpie Mayo, Sriracha, Nori, Cooked Salmon"
        }
    ];

    //function to create and append grid section
    function createGridItems(item){
        
        const divItem = document.createElement('div');
        divItem.classList.add('item');
        
        const img = document.createElement('img');
        img.src = item.imgSrc;

        const divImageText = document.createElement('div');
        divImageText.classList.add('image-text');

        const h1 = document.createElement('h1');
        h1.textContent = item.title;

        const p = document.createElement('p');
        p.textContent = item.description;

        divImageText.appendChild(h1);
        divImageText.appendChild(p);    
        
        divItem.appendChild(img);
        divItem.appendChild(divImageText);

        grid.appendChild(divItem);
        
    }

    //loop through array and create grid items
    for(const item of gridItems){
        createGridItems(item);
    }

    menu.appendChild(title);
    menu.appendChild(grid);


    fragment.appendChild(menu);

    return fragment;
}