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
    constructor(container='.products'){
        this.container = container;
        this.goods = [];
        this._fetchProducts();//рекомендация, чтобы метод был вызван в текущем классе
        this.render();//вывод товаров на страницу
    }
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
    
    render(){
        const block = document.querySelector(this.container);
        for(let product of this.goods){
            const item = new ProductItem(product);
            block.insertAdjacentHTML("beforeend",item.render());
//           block.innerHTML += item.render();
        }
    }
}

class ProductItem{
    constructor(product,img='https://via.placeholder.com/200x150'){
        this.title = product.title;
        this.id = product.id;
        this.price = product.price;
        this.img = img;
    }
    render(){
        return `<div class="product-item">
                <img src="${this.img}">
                <h3>${this.title}</h3>
                <p>${this.price}</p>
                <button class="buy-btn">Купить</button>
            </div>`
    }
}

let list = new ProductList();



class Basket {                  // Класс корзины
    constructor (order,total){
        this.order = order;     //количество товара в корзине
        this.total = total;     // товаоа на сумму
    }
}

class BasketElements {              // Класс элементов корзины
    constructor (plus,minus,del){
        this.plus = plus;           //увеличение количества товара
        this.minus = minus;         //уменьшение количества товара
        this.del = del;             //удаление товара
    }

    }
