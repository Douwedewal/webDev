function helpMe() {
    //document.getElementById("hiddenList").style.display = 'block';
    let x = document.getElementsByClassName("hidden");
    for (let i = 0; i < x.length; i++) {
        x[i].style.display = 'block';
    }
    let y = document.getElementsByClassName("HelperButton");
    for (let j = 0; j < y.length; j++) {
        y[j].style.display = 'none';
    }
}