const API = 'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses';

/*
const products = [
    {id: 1, title: 'Notebook', price: 2000, img:'<img class = "img__product" src="./img/laptop.jpg" width="200" height="200" '},
    {id: 2, title: 'Mouse', price: 20, img:'<img class = "img__product" src="./img/mouse.jpg" width="200" height="200"'},
    {id: 3, title: 'Keyboard', price: 200, img:'<img class = "img__product" src="./img/keyboard.jpg" width="200" height="200"'},
    {id: 4, title: 'Gamepad', price: 50, img:'<img class = "img__product" src="./img/gamepad.jpg" width="200" height="200"'},
];

//Функция для формирования верстки каждого товара
//Добавить в выводе изображение

const renderProduct = (item) => {
    return `<div class="product-item"></div>
                <div>${item.img}</div>
                <h3>${item.title}</h3>
                <p>${item.price}</p>
                <button class="buy-btn">Купить</button>
            </div>`
}

const renderPage = list => {
    const productsList = list.map(item => renderProduct(item));
    console.log(productsList);
    document.querySelector('.products').innerHTML = productsList.join(''); // productsList содержит массив после обработки .map , его нужно преобразовать в строку join ('')
};
renderPage(products);
*/

const products = [
    {id: 1, title: 'Notebook', price: 2000, img:'<img class = "img__product" src="./img/laptop.jpg" width="200" height="200" '},
    {id: 2, title: 'Mouse', price: 20, img:'<img class = "img__product" src="./img/mouse.jpg" width="200" height="200"'},
    {id: 3, title: 'Keyboard', price: 200, img:'<img class = "img__product" src="./img/keyboard.jpg" width="200" height="200"'},
    {id: 4, title: 'Gamepad', price: 50, img:'<img class = "img__product" src="./img/gamepad.jpg" width="200" height="200"'},
];

class ProductList{
    constructor(container='.products') {
        this.container = container;
        this.goods = [];//массив товаров из JSON документа
        this._getProducts()
        .then(data => { //data - объект js
            this.goods = data;
            //console.log(data);
            this.render()
    });

        //this._fetchProducts();//рекомендация, чтобы метод был вызван в текущем классе
        //this.render();//вывод товаров на страницу
    }

    _getProducts() {
        return fetch(`${API}/catalogData.json`)
            .then(result => result.json())
            .catch(error => {
                console.log(error);
            });
    
    }
    //calcSum() {
     //   return this.allProducts.reduce((accum, item) => accum += item.price, 0);
    //}
    /*
    _fetchProducts(){
        this.goods = [
            {id: 1, title: 'Notebook', price: 2000},
            {id: 2, title: 'Mouse', price: 20},
            {id: 3, title: 'Keyboard', price: 200},
            {id: 4, title: 'Gamepad', price: 50},
        ];
        const sumPrice = this.goods.reduce((a,b)=>{
            a = a + b.price
            return a;
        },0)
        console.log (`${sumPrice} сумма всех товаров`) //подсчет суммы товара
    }
    */
    render() {
        const block = document.querySelector(this.container);
        for(let product of this.goods){
            const item = new ProductItem(product);
            block.insertAdjacentHTML("beforeend",item.render());
//           block.innerHTML += item.render();
        }
    }
}

class ProductItem {
    constructor(product,img='https://via.placeholder.com/200x150'){
        this.title = product.product_name;
        this.id = product.id_product;
        this.price = product.price;
        this.img = img;
    }
    render() {
        return `<div class="product-item">
                <img src="${this.img}">
                <h3>${this.title}</h3>
                <p>${this.price}</p>
                <button class="buy-btn">Купить</button>
            </div>`
    }
}

let list = new ProductList();
list.render ();
//list.calcSum ();



class Basket {        // Класс корзины
        addGood ()  {
            fetch(`${API}/getBasket.json`)
            .then(text => text.json())
            .then (data => {
                data.contents.forEach(element => {
                    document.getElementById('1').insertAdjacentHTML('beforeend',
                    `<div class="product-item" product-id="${element.id_product}">
                    <img src="${'https://via.placeholder.com/200x150'}">
                    <div class ="description">
                    <h3 class="name">${element.product_name}</h3>
                    <p class="price_p">${element.price}</p>
                    <p class="quantity">${element.quantity}</p>
                    <button class="buy-btn">Купить</button>
                    </div>`)
                });
            })
            
        }

        removeGood () {

        }
        changeGood() {

        }
        render() {

        }
    }
    let listBasket = new Basket()
    listBasket.addGood ()

class BasketElements {   // Класс элементов корзины
    render() {

        }
    }