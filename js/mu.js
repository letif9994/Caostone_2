window.onload = function LoadData() {
    loadMountain();
};

function loadMountain() {
    let mouantainUl = document.getElementById("mouantain-ul");
    for (var i = 0; i < mountainsArray.length; i++ ) {
        mouantainUl.innerHTML += '<li>' +
        '<img src="images/'+mountainsArray[i]["img"]+'"/>'+
        '<span>'+
        mountainsArray[i]["name"]+
        '</span><br/>'+
        '<p>'+
        mountainsArray[i]["desc"]+
        '</p>'
        '</li>';
        
    }
}

