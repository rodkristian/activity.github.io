document.getElementById("btn_primary").addEventListener("click", function () {
    document.getElementById("div-body").classList.add("bg-primary");
    document.getElementById("div-body").classList.remove("bg-info");
    document.getElementById("div-body").classList.remove("bg-danger");
    document.getElementById("div-body").classList.remove("bg-success");
    document.getElementById("div-body").classList.remove("bg-secondary");
    document.getElementById("div-body").classList.remove("bg-warning");
    document.getElementById("div-body").classList.remove("bg-light");
    document.getElementById("div-body").classList.remove("bg-dark");
});

document.getElementById("btn_info").addEventListener("click", function () {
    document.getElementById("div-body").classList.remove("bg-primary");
    document.getElementById("div-body").classList.add("bg-info");
    document.getElementById("div-body").classList.remove("bg-danger");
    document.getElementById("div-body").classList.remove("bg-success");
    document.getElementById("div-body").classList.remove("bg-secondary");
    document.getElementById("div-body").classList.remove("bg-warning");
    document.getElementById("div-body").classList.remove("bg-light");
    document.getElementById("div-body").classList.remove("bg-dark");
});

document.getElementById("btn_danger").addEventListener("click", function () {
    document.getElementById("div-body").classList.remove("bg-primary");
    document.getElementById("div-body").classList.remove("bg-info");
    document.getElementById("div-body").classList.add("bg-danger");
    document.getElementById("div-body").classList.remove("bg-success");
    document.getElementById("div-body").classList.remove("bg-secondary");
    document.getElementById("div-body").classList.remove("bg-warning");
    document.getElementById("div-body").classList.remove("bg-light");
    document.getElementById("div-body").classList.remove("bg-dark");
});

document.getElementById("btn_success").addEventListener("click", function () {
    document.getElementById("div-body").classList.remove("bg-primary");
    document.getElementById("div-body").classList.remove("bg-info");
    document.getElementById("div-body").classList.remove("bg-danger");
    document.getElementById("div-body").classList.add("bg-success");
    document.getElementById("div-body").classList.remove("bg-secondary");
    document.getElementById("div-body").classList.remove("bg-warning");
    document.getElementById("div-body").classList.remove("bg-light");
    document.getElementById("div-body").classList.remove("bg-dark");
});

document.getElementById("btn_secondary").addEventListener("click", function () {
    document.getElementById("div-body").classList.remove("bg-primary");
    document.getElementById("div-body").classList.remove("bg-info");
    document.getElementById("div-body").classList.remove("bg-danger");
    document.getElementById("div-body").classList.remove("bg-success");
    document.getElementById("div-body").classList.add("bg-secondary");
    document.getElementById("div-body").classList.remove("bg-warning");
    document.getElementById("div-body").classList.remove("bg-light");
    document.getElementById("div-body").classList.remove("bg-dark");
});

document.getElementById("btn_warning").addEventListener("click", function () {
    document.getElementById("div-body").classList.remove("bg-primary");
    document.getElementById("div-body").classList.remove("bg-info");
    document.getElementById("div-body").classList.remove("bg-danger");
    document.getElementById("div-body").classList.remove("bg-success");
    document.getElementById("div-body").classList.remove("bg-secondary");
    document.getElementById("div-body").classList.add("bg-warning");
    document.getElementById("div-body").classList.remove("bg-light");
    document.getElementById("div-body").classList.remove("bg-dark");
});

document.getElementById("btn_light").addEventListener("click", function () {
    document.getElementById("div-body").classList.remove("bg-primary");
    document.getElementById("div-body").classList.remove("bg-info");
    document.getElementById("div-body").classList.remove("bg-danger");
    document.getElementById("div-body").classList.remove("bg-success");
    document.getElementById("div-body").classList.remove("bg-secondary");
    document.getElementById("div-body").classList.remove("bg-warning");
    document.getElementById("div-body").classList.add("bg-light");
    document.getElementById("div-body").classList.remove("bg-dark");
});

document.getElementById("btn_dark").addEventListener("click", function () {
    document.getElementById("div-body").classList.remove("bg-primary");
    document.getElementById("div-body").classList.remove("bg-info");
    document.getElementById("div-body").classList.remove("bg-danger");
    document.getElementById("div-body").classList.remove("bg-success");
    document.getElementById("div-body").classList.remove("bg-secondary");
    document.getElementById("div-body").classList.remove("bg-warning");
    document.getElementById("div-body").classList.remove("bg-light");
    document.getElementById("div-body").classList.add("bg-dark");
});
