const wrapper = document.querySelector(".sliderWrapper");
const menuItems = document.querySelectorAll(".menuItem");

const products = [
  {
    id: 1,
    title: "Festive Wear",
    price: 119,
    colors: [
      {
        code: "black",
        img: "./img/festive1.png",
      },
      {
        code: "darkblue",
        img: "./img/festive1.png",
      },
    ],
  },
  {
    id: 2,
    title: "Robust Wear",
    price: 149,
    colors: [
      {
        code: "lightgray",
        img: "./img/robust1.png",
      },
      {
        code: "green",
        img: "./img/robust1.png",
      },
    ],
  },
  {
    id: 3,
    title: "Canvases",
    price: 109,
    colors: [
      {
        code: "lightgray",
        img: "./img/canvases1.png",
      },
      {
        code: "green",
        img: "./img/canvases1.png",
      },
    ],
  },
  {
    id: 4,
    title: "Athlet Wear",
    price: 129,
    colors: [
      {
        code: "black",
        img: "./img/athlet1.png",
      },

    ],
  },
  {
    id: 5,
    title: "Urban Wear",
    price: 99,
    colors: [
      {
        code: "gray",
        img: "./img/urban1.png",
      },
      {
        code: "black",
        img: "./img/urban1.png",
      },
    ],
  },
];

let choosenProduct = products[0];

const currentProductImg = document.querySelector(".productImg");
const currentProductTitle = document.querySelector(".productTitle");
const currentProductPrice = document.querySelector(".productPrice");
const currentProductColors = document.querySelectorAll(".color");
const currentProductSizes = document.querySelectorAll(".size");

menuItems.forEach((item, index) => {
  item.addEventListener("click", () => {
    //change the current slide
    wrapper.style.transform = `translateX(${-100 * index}vw)`;

    //change the choosen product
    choosenProduct = products[index];

    //change texts of currentProduct
    currentProductTitle.textContent = choosenProduct.title;
    currentProductPrice.textContent = "$" + choosenProduct.price;
    currentProductImg.src = choosenProduct.colors[0].img;

    //assing new colors
    currentProductColors.forEach((color, index) => {
      color.style.backgroundColor = choosenProduct.colors[index].code;
    });
  });
});

currentProductColors.forEach((color, index) => {
  color.addEventListener("click", () => {
    currentProductImg.src = choosenProduct.colors[index].img;
  });
});

currentProductSizes.forEach((size, index) => {
  size.addEventListener("click", () => {
    currentProductSizes.forEach((size) => {
      size.style.backgroundColor = "white";
      size.style.color = "black";
    });
    size.style.backgroundColor = "black";
    size.style.color = "white";
  });
});

const productButton = document.querySelector(".productButton");
const payment = document.querySelector(".payment");
const close = document.querySelector(".close");

productButton.addEventListener("click", () => {
  payment.style.display = "flex";
});

close.addEventListener("click", () => {
  payment.style.display = "none";
});
