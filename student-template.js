"use strict";

// Практическая работа №7
// Тема: DOM и управление элементами страницы.
// Заполните только участки TODO.
// Имена функций и объект window.domLab не изменяйте.

// 1. Изменение текста заголовка.
function changeTitle(text) {
    const title = document.querySelector("#main-title");
    title.textContent = text;
    return title.textContent;
}

// 2. Показать / скрыть информационный блок.
function toggleInfo() {
    const info = document.querySelector("#info-block");
    info.classList.toggle("hidden");
    return !info.classList.contains("hidden");
}

// 3. Изменение ссылки.
function updateLink(url, label) {
    const link = document.querySelector("#main-link");
    link.textContent = label;
    link.setAttribute("href", url);
    return link;
}

// 4. Динамический пункт списка.
function addListItem(text) {
    const list = document.querySelector("#task-list");

    const li = document.createElement("li");

    const span = document.createElement("span");
    span.textContent = text;

    const button = document.createElement("button");
    button.textContent = "Удалить";
    button.addEventListener("click", () => {
        li.remove();
    });

    li.append(span, button);
    list.append(li);

    return li;
}

// 5. Карточка товара.
function createProductCard(product) {
    const card = document.createElement("article");
    card.classList.add("product-card");

    const title = document.createElement("h3");
    title.textContent = product.name;

    const price = document.createElement("p");
    price.textContent = "Цена: " + product.price + " ₸";

    card.append(title, price);
    return card;
}

// 6. Вывод массива товаров.
function renderProducts(products) {
    const container = document.querySelector("#products");
    container.innerHTML = "";

    for (let i = 0; i < products.length; i++) {
        const card = createProductCard(products[i]);
        container.append(card);
    }

    return container.children.length;
}

window.domLab = {
    changeTitle,
    toggleInfo,
    updateLink,
    addListItem,
    createProductCard,
    renderProducts,
};