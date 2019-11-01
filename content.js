var openedSearch = false;
var searchButton = document.getElementById('marketSearchB');

//activate when search button is clicked (popup loaded)
searchButton.addEventListener('click', function () {
    //only run the first time
    if (!openedSearch) {
        //set filter to lowest
        document.getElementById("sortFilt").childNodes[1].selected = "selected";

        //uncheck first 3 rarities
        var inputs = document.getElementsByTagName('input');
        for (var i = 0; i < inputs.length; i++) {
            if (inputs[i].type.toLowerCase() == 'checkbox') {
                if (inputs[i].id.slice(-1) <= 2) {
                    inputs[i].checked = false;
                }
            }
        }
        openedSearch = true;
    }
});