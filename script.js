const products = [

{
  id: 0,
  imgae:"https://cdn.shopclues.com/images1/thumbnails/111789/320/320/151324261-111789323-1665756202.jpg",
  title: "Branded Shoes 1",
  price : 500,
  discrption: "any discription"
  
},
{
  id: 1,
  imgae: "https://cdn.shopclues.com/images1/thumbnails/111789/320/320/151324261-111789323-1665756202.jpg",
  title: "Branded Shoes 1",
  price : 500,
  
},
{
  id: 2,
  imgae: "https://cdn.shopclues.com/images1/thumbnails/111789/320/320/151324261-111789323-1665756202.jpg",
  title: "Branded Shoes 1",
  price : 500,
  
},
{
  id: 3,
  imgae: "https://cdn.shopclues.com/images1/thumbnails/111789/320/320/151324261-111789323-1665756202.jpg",
  title: "Branded Shoes 1",
  price : 500,
  
},
{
  id: 4,
  imgae: "https://cdn.shopclues.com/images1/thumbnails/111789/320/320/151324261-111789323-1665756202.jpg",
  title: "Branded Shoes 1",
  price : 500,
  
},
{
  id: 5,
  imgae: "https://cdn.shopclues.com/images1/thumbnails/111789/320/320/151324261-111789323-1665756202.jpg",
  title: "Branded Shoes 1",
  price : 500,
  
},
{
  id: 6,
  imgae: "https://cdn.shopclues.com/images1/thumbnails/111789/320/320/151324261-111789323-1665756202.jpg",
  title: "Branded Shoes 1",
  price : 500,
  
},
{
  id: 7,
  imgae: "https://cdn.shopclues.com/images1/thumbnails/111789/320/320/151324261-111789323-1665756202.jpg",
  title: "Branded Shoes 1",
  price : 500,
  
},
{
  id: 8,
  imgae: "https://cdn.shopclues.com/images1/thumbnails/111789/320/320/151324261-111789323-1665756202.jpg",
  title: "Branded Shoes 1",
  price : 500,
  
},
{
  id: 9,
  imgae: "https://cdn.shopclues.com/images1/thumbnails/111789/320/320/151324261-111789323-1665756202.jpg",
  title: "Branded Shoes 1",
  price : 500,
  
},
{
  id: 10,
  imgae: "https://cdn.shopclues.com/images1/thumbnails/111789/320/320/151324261-111789323-1665756202.jpg",
  title: "Branded Shoes 1",
  price : 500,
  
},
{
  id: 11,
  imgae: "https://cdn.shopclues.com/images1/thumbnails/111789/320/320/151324261-111789323-1665756202.jpg",
  title: "Branded Shoes 1",
  price : 500,
  
},
{
  id: 12,
  imgae: "https://cdn.shopclues.com/images1/thumbnails/111789/320/320/151324261-111789323-1665756202.jpg",
  title: "Branded Shoes 1",
  price : 500,
  
},

{
  id: 13,
  imgae: "https://cdn.shopclues.com/images1/thumbnails/111789/320/320/151324261-111789323-1665756202.jpg",
  title: "Branded Shoes 1",
  price : 500,
  
},
{
  id: 14,
  imgae: "https://cdn.shopclues.com/images1/thumbnails/111789/320/320/151324261-111789323-1665756202.jpg",
  title: "Branded Shoes 1",
  price : 500,
  
},
{
  id: 15,
  imgae: "https://cdn.shopclues.com/images1/thumbnails/111789/320/320/151324261-111789323-1665756202.jpg",
  title: "Branded Shoes 1",
  price : 500,
  
},
{
  id: 16,
  imgae: "https://cdn.shopclues.com/images1/thumbnails/111789/320/320/151324261-111789323-1665756202.jpg",
  title: "Branded Shoes 1",
  price : 500,
  
},
{
  id: 17,
  imgae: "https://cdn.shopclues.com/images1/thumbnails/111789/320/320/151324261-111789323-1665756202.jpg",
  title: "Branded Shoes 1",
  price : 500,
  
},
{
  id: 18,
  imgae: "https://cdn.shopclues.com/images1/thumbnails/111789/320/320/151324261-111789323-1665756202.jpg",
  title: "Branded Shoes 1",
  price : 500,
  
},
{
  id: 19,
  imgae: "https://cdn.shopclues.com/images1/thumbnails/111789/320/320/151324261-111789323-1665756202.jpg",
  title: "Branded Shoes 1",
  price : 500,
  
},
{
  id: 20,
  imgae:"https://cdn.shopclues.com/images1/thumbnails/111789/320/320/151324261-111789323-1665756202.jpg",
  title: "Branded Shoes 1",
  price : 500,
  
},
]


const root = document.getElementById("productss");

const createCard = (product) => {
    const cardElement = document.createElement("div");
    cardElement.classList.add("card");

    const getImage = () => {
        const image = document.createElement("img");
        image.src = product.image;
        image.alt = product.title;

        const imgContainer = document.createElement("div");
        imgContainer.appendChild(image);

        return imgContainer;
    };

    const getTitle = () => {
        const title = document.createElement("h1");
        title.innerHTML = product.title;

        return title;
    };

    const getRating = () => {
        const rating = document.createElement("span");
        rating.innerHTML = `
            <i class="fa fa-star"></i>
            <i class="fa fa-star"></i>
            <i class="fa fa-star"></i>
            <i class="fa fa-star"></i>
        `;

        return rating;
    };

    const getPrice = () => {
        const price = document.createElement("p");
        price.innerHTML = product.price;

        return price;
    };

    const getButton = () => {
        const button = document.createElement("button");
        button.id = product.id;
        button.innerHTML = "Add to cart";

        return button;
    };

    cardElement.appendChild(getImage());
    cardElement.appendChild(getTitle());
    cardElement.appendChild(getRating());
    cardElement.appendChild(getPrice());
    cardElement.appendChild(getButton());

    root.appendChild(cardElement);
};

products.forEach(createCard);
