async function loadPartial(id, file) {
    const response = await fetch(file);
    const html = await response.text();
    document.getElementById(id).innerHTML = html;
}

window.addEventListener("DOMContentLoaded", async () => {

    await loadPartial("header", "partials/header.html");
    await loadPartial("footer", "partials/footer.html");

    feather.replace();

    changeLanguage();

});