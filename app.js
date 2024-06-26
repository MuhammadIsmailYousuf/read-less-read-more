function toggleReadMore() {
    const dots = document.getElementById("dots");
    const moreText = document.getElementById("more");
    const btnText = document.getElementById("readMoreBtn");

    if (dots.style.display === "none") {
        dots.style.display = "inline";
        btnText.textContent = "Read More";
        moreText.style.display = "none";
    } else {
        dots.style.display = "none";
        btnText.textContent = "Read Less";
        moreText.style.display = "inline";
    }
}
