window.onload = function LoadData() {

    initStatesDropdown();
    initParkDropDown();
    document.getElementById("searchParkButton").addEventListener("click", runSearchPark);
};

function initStatesDropdown() {
    // load the dropdown list with Location Data
    const statesList = document.getElementById("statesList");
    let amountOfStates = locationsArray.length;
   
    for (let i = 0; i < amountOfStates; i++) {
    // create the option element
    let theOption = document.createElement("option");
    // set the text and value of the option you created
    theOption.textContent = locationsArray[i];
    theOption.value = locationsArray[i];
    // append the option as a child of (inside) the
    // select element
    statesList.appendChild(theOption); //Adding to the dropdown
    }
}




function initParkDropDown() {

 // load the dropdown list with Location Data
    const parkList = document.getElementById("parkList");
    let length2 = parkTypesArray.length;

    for (let i = 0; i < length2; i++) {
    // create the option element
    let theOption2 = document.createElement("option");
    // set the text and value of the option you created
    theOption2.textContent = parkTypesArray[i];
    theOption2.value = parkTypesArray[i];
    // append the option as a child of (inside) the
    // select element
    parkList.appendChild(theOption2); //Adding to the dropdown
    }
}

function runSearch()
{
   //Select the selected value from the park
    const statesList = document.getElementById("statesList");
    const selectedValue = statesList.value;
    
//Select the selected value from the park
    const parkList = document.getElementById("parkList");
    const selectedPark = parkList.value
    alert(selectedValue + " - " + selectedPark);

}

function runSearchPark()
{
   //Select the selected value from the park
    const statesList = document.getElementById("statesList");
    const selectedValue = statesList.value;

    const parkTypeList = document.getElementById("parkList");
    const selectedValueParkType = parkTypeList.value;
    
    let ulElment = document.getElementById("parkListAreaUl");
    
    const parkListBystate = nationalParksArray.filter(parks => {
        return parks.State === selectedValue;
      });
     
    const parkListByType = parkListBystate.filter(parksByType => {
        return parksByType.LocationName.includes(selectedValueParkType);
    });
    if (parkListByType.length == 0) {
        let reselut = confirm(selectedValue + " dose not have " + selectedValueParkType + "Do you want to see other parks insted?");
        if (reselut) {
            for (var i = 0; i < parkListBystate.length ; i++) {
                ulElment.innerHTML += '<li>'+
                    '<span>LocationName: '+
                    parkListBystate[i]["LocationName"]+
                    '</span>'+
                    '<address>City:'+
                    parkListBystate[i]["City"]+
                    '</address>'+
                    '<address>Address:'+
                    parkListBystate[i]["Address"]+
                    '</address>'
                '</li>';
            }
        }
    } else {
        for (var i = 0; i < parkListByType.length ; i++) {
            ulElment.innerHTML += '<li>'+
                '<span>LocationName: '+
                    parkListByType[i]["LocationName"]+
                '</span>'+
                '<address>City:'+
                    parkListByType[i]["City"]+
                '</address>'+
                '<address>Address:'+
                    parkListByType[i]["Address"]+
                '</address>'
            '</li>';
        }
    }
    
    //serch natinal park by state
    // put it list 
    // create html part (for loop)
    
    
//Select the selected value from the park
    // const parkList = document.getElementById("parkList");
    // const selectedPark = parkList.value
    // alert(selectedValue + " - " + selectedPark);

}

