var cocktailSearchEl= document.getElementById("search-button");
var oldCocktailEl= document.getElementById("search-history");
var clearHirstoryEl= document.getElementById("clear-history");
var randomEl= document.getElementById("random");

//clear modal
var clearModal = function() {
  var modalHolderEl= document.getElementById("modalId");
  if (modalHolderEl) {modalHolderEl.remove()};
};

// display modal
var displayModal = function(modalTitle, modalText) {
  clearModal();
  var modalEl = document.createElement("div");
  modalEl.id ="modalId"
  modalEl.innerHTML = '<div class="reveal-" id="exampleModal1" data-reveal><h1>'+modalTitle+'</h1><p class="lead">'+modalText+'</p></div>'   ///<button class="close-button" data-close aria-label="Close modal" type="button"><span aria-hidden="true">&times;</span></button>
  console.log(modalEl);
  var modalHolderEl= document.getElementById("modal-holder");
  modalHolderEl.append(modalEl);
};

// clear history
var clearHistory = function() {
    clearModal();
    cocktailsList=[] ;
    localStorage.setItem("cocktailsList", JSON.stringify(cocktailsList));
    loadCocktails();
    oldCocktailEl = document.getElementById("cocktail-info-ul");
    if (oldCocktailEl){
        oldCocktailEl.remove();
        var oldCocktailEl = document.createElement("ul");
        oldCocktailEl.id = "cocktail-info-ul";
        oldCocktailDivEl =document.getElementById("cocktail-info");
        oldCocktailDivEl.append(oldCocktailEl);
    };
};

// Display old search
var loadCocktails = function() {
    oldSearchEl = document.getElementById("search-history-ul");
    if (oldSearchEl){
    oldSearchEl.remove();
    var oldSearchEl = document.createElement("ul");
    oldSearchEl.id = "search-history-ul";
    oldSearchEl.classList="list";
    oldSearchDivEl =document.getElementById("search-history");
    oldSearchDivEl.append(oldSearchEl);};
  
    cocktailsList = JSON.parse(localStorage.getItem("cocktailsList"));
    if (cocktailsList){
      for (var i = 0; i < cocktailsList.length; i++)  { 
        var cocktailEl = document.createElement("li");
        cocktailEl.id="old-cocktail";
        // add classlist to search history
        cocktailEl.classList="button";
        cocktailEl.setAttribute("style", "font-family: 'Courgette', cursive;")
        cocktailEl.textContent = cocktailsList[i].text;
        oldSearchEl.append(cocktailEl);
      };
    };
  };

// save the cocktail to history and local storage
var saveCocktail = function(cocktail){
    cocktailsList = JSON.parse(localStorage.getItem("cocktailsList"));
    
    if (cocktailsList){
      var cocktailObject ={text:cocktail.toLowerCase()};
      
      if (!cocktailsList.some(cocktailob => cocktailob.text.toLowerCase() == cocktail.toLowerCase()))
        {cocktailsList.push(cocktailObject);};
    }
    else {if (!cocktail =="") {cocktailsList=[{text:cocktail.toLowerCase()}]};
        };
  
    localStorage.setItem("cocktailsList", JSON.stringify(cocktailsList));
  
    loadCocktails();
  };

// display the cocktail details
var displayCocktail = async function(CocktailData) {
    
    // check if api returned any data
    if (CocktailData.drinks.length === 0) {
      displayModal("API Issue", "Contact the website administrator. No data found.");
      return;
    };
    
    oldCocktailEl = document.getElementById("cocktail-info-ul");
    if (oldCocktailEl){
    oldCocktailEl.remove();
    var oldCocktailEl = document.createElement("ul");
    oldCocktailEl.id = "cocktail-info-ul";
    oldCocktailDivEl =document.getElementById("cocktail-info");
    oldCocktailDivEl.append(oldCocktailEl);
    };
    
    var cocktailIngListEl= document.getElementById("cocktail-info-ul");

    // loop over data
    for (var i = 0; i < CocktailData.drinks.length; i++) {
        var cocktailIngEl = document.createElement("li");
        cocktailIngEl.id="cocktail-name";
        cocktailIngEl.innerHTML = "Name: " +CocktailData.drinks[i].strDrink ;
        cocktailIngListEl.append(cocktailIngEl);

        var cocktailIngEl = document.createElement("li");
        cocktailIngEl.id="cocktail-ingredient";
        cocktailIngEl.innerHTML = "Ingredients: " +CocktailData.drinks[i].strIngredient1 
        if (!(CocktailData.drinks[i].strIngredient2==null)) 
          {cocktailIngEl.innerHTML=cocktailIngEl.innerHTML+", "+ CocktailData.drinks[i].strIngredient2};
        if (!(CocktailData.drinks[i].strIngredient3==null)) 
          {cocktailIngEl.innerHTML=cocktailIngEl.innerHTML+", "+ CocktailData.drinks[i].strIngredient3};  
        if (!(CocktailData.drinks[i].strIngredient4==null)) 
          {cocktailIngEl.innerHTML=cocktailIngEl.innerHTML+", "+ CocktailData.drinks[i].strIngredient4};
        if (!(CocktailData.drinks[i].strIngredient5==null)) 
          {cocktailIngEl.innerHTML=cocktailIngEl.innerHTML+", "+ CocktailData.drinks[i].strIngredient5};  
        if (!(CocktailData.drinks[i].strIngredient6==null)) 
          {cocktailIngEl.innerHTML=cocktailIngEl.innerHTML+", "+ CocktailData.drinks[i].strIngredient6};
        if (!(CocktailData.drinks[i].strIngredient7==null)) 
          {cocktailIngEl.innerHTML=cocktailIngEl.innerHTML+", "+ CocktailData.drinks[i].strIngredient7};  
        if (!(CocktailData.drinks[i].strIngredient8==null)) 
          {cocktailIngEl.innerHTML=cocktailIngEl.innerHTML+", "+ CocktailData.drinks[i].strIngredient8};
        if (!(CocktailData.drinks[i].strIngredient9==null)) 
          {cocktailIngEl.innerHTML=cocktailIngEl.innerHTML+", "+ CocktailData.drinks[i].strIngredient9};  
        if (!(CocktailData.drinks[i].strIngredient10==null)) 
          {cocktailIngEl.innerHTML=cocktailIngEl.innerHTML+", "+ CocktailData.drinks[i].strIngredient10};
        if (!(CocktailData.drinks[i].strIngredient11==null)) 
          {cocktailIngEl.innerHTML=cocktailIngEl.innerHTML+", "+ CocktailData.drinks[i].strIngredient11};  
        if (!(CocktailData.drinks[i].strIngredient12==null)) 
          {cocktailIngEl.innerHTML=cocktailIngEl.innerHTML+", "+ CocktailData.drinks[i].strIngredient12};
        if (!(CocktailData.drinks[i].strIngredient13==null)) 
          {cocktailIngEl.innerHTML=cocktailIngEl.innerHTML+", "+ CocktailData.drinks[i].strIngredient13}; 
        if (!(CocktailData.drinks[i].strIngredient14==null)) 
          {cocktailIngEl.innerHTML=cocktailIngEl.innerHTML+", "+ CocktailData.drinks[i].strIngredient14};
        if (!(CocktailData.drinks[i].strIngredient15==null)) 
          {cocktailIngEl.innerHTML=cocktailIngEl.innerHTML+", "+ CocktailData.drinks[i].strIngredient15};  
        cocktailIngListEl.append(cocktailIngEl);

        var cocktailInsEl = document.createElement("li");
        cocktailInsEl.id="cocktail-instructions";
        cocktailInsEl.innerHTML = "Instructions: " +CocktailData.drinks[i].strInstructions ;
        cocktailIngListEl.append(cocktailInsEl);

        var cocktailImgEl = document.createElement("img");
        cocktailImgEl.id="cocktail-image";
        cocktailImgEl.src = CocktailData.drinks[i].strDrinkThumb;
        cocktailImgEl.innerHTML = "</br>" ;
        cocktailIngListEl.append(cocktailImgEl);
    };
}

// call api to get the cocktail details
var getCocktail = function(event) {
    clearModal();
    var checkRandom = false;
    //get the cocktail name from the search form
    if ($(this)[0].id=="search-button" || $(this)[0].id=="random"){
        if ($(this)[0].id=="random"){checkRandom = true;};
    event.preventDefault();
    var cocktail = document.getElementById("searchTerm").value;
    
    document.getElementById("searchTerm").value="";
    
        oldCocktailEl = document.getElementById("cocktail-info-ul");
        if (oldCocktailEl){
           // displays results
            oldCocktailEl.remove();
            var oldCocktailEl = document.createElement("ul");
            oldCocktailEl.id = "cocktail-info-ul";
            oldCocktailDivEl =document.getElementById("cocktail-info");
            oldCocktailDivEl.append(oldCocktailEl);
        };

    }
    else {var cocktail = event.target.textContent};
  
    // check if there is a string in the city name field
    if ( (checkRandom == false) && cocktail.length == 0) {
      displayModal("Missing Data", "Please enter a cocktail name.");
      return;
    };
    
    // format the github api url
    if ($(this)[0].id=="random"){var apiUrl ="https://www.thecocktaildb.com/api/json/v1/1/random.php";}
    else {var apiUrl ="https://www.thecocktaildb.com/api/json/v1/1/search.php?s="+cocktail };
  
    // make a request to the url
    fetch(apiUrl)
      .then(function(response) {
        // request was successful
        if (response.ok) {
          response.json().then(function(data) {
              if (data.drinks) {
                if (cocktail) {saveCocktail(cocktail);}
                else {saveCocktail(data.drinks[0].strDrink)};
                displayCocktail(data);
              }
              else {
                  displayModal("Cocktail Not Found","Sorry, we don't have this cocktail!");
              };  
          });
        } else {
          displayModal("Error","Contact the website administrator. "+response.statusText);
        }
      })
  
      .catch(function(error) {
        displayModal("Unable To Connect","Contact the website administrator. "+error)
      });
  };

// load old cocktails
loadCocktails();

// click the search button
cocktailSearchEl.addEventListener("click", getCocktail);

// click the clear history button
clearHirstoryEl.addEventListener("click", clearHistory);

// click the random button
randomEl.addEventListener("click", getCocktail);

// click on one of the old cocktails
oldCocktailEl.addEventListener("click", getCocktail);