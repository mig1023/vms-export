
function after_link(data) {
    alert(data.info);
}

//экспортируем функцию в область видимости загруженной страницы
exportFunction(after_link, unsafeWindow, {defineAs: "after_link"});
