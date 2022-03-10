const products = [
    {id: 1, title: 'Notebook', price: 2000, img:'<img class = "img__product" = src="./img/laptop.jpg" width="200" height="200" '},
    {id: 2, title: 'Mouse', price: 20, img:'<img class = "img__product" src="./img/mouse.jpg" width="200" height="200"'},
    {id: 3, title: 'Keyboard', price: 200, img:'<img class = "img__product" "img__product" src="./img/keyboard.jpg" width="200" height="200"'},
    {id: 4, title: 'Gamepad', price: 50, img:'<img class = "img__product" "img__product" src="./img/gamepad.jpg" width="200" height="200"'},
];

//Функция для формирования верстки каждого товара
//Добавить в выводе изображение
const renderProduct = (title, price,img) => {
    return `<div class="product-item">
                ${img}
                <h3>${title}</h3>
                <p>${price}</p>
                <button class="buy-btn">Купить</button>
            </div>`
};
const renderPage = list => {
    const productsList = list.map(item => renderProduct(item.price,item.title,item.img));
    console.log(productsList);
    document.querySelector('.products').innerHTML = productsList.join('');
};
renderPage(products);