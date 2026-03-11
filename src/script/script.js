var Database = {
 keyName: "Mutant Database",
 data: []
};


function loadDataSource() {


 // obtener datos de localStorage
 var storedData = localStorage.getItem(Database.keyName);


 // convertir JSON string a objeto
 var parsedData = JSON.parse(storedData);


 // guardar solo el array response
 Database.data = parsedData.response;


}




function searchForMutantByAlias(mutantAlias) {


 var index = -1;


 // recorrer los datos
 for (var i = 0; i < Database.data.length; i++) {


   if (Database.data[i].name.alias === mutantAlias) {
     index = i;
     break;
   }


 }


 if (index === -1) {
   alert("Invalid Alias");
 } else {
   displayData(index);
 }
}




function displayData(index) {


 var mutant = Database.data[index];


 var htmlTemplate = `
  <div class="card mt-4">
    <div class="row g-0">
  
     <div class="col-md-4">
       <img src="${mutant.image}" class="img-fluid rounded-start">
     </div>
    
     <div class="col-md-8">
    
       <div class="card-body">
      
         <h3>${mutant.name.alias}</h3>
        
         <p><strong>Name:</strong> ${mutant.name.firstName} ${mutant.name.lastName}</p>
        
         <p><strong>Gender:</strong> ${mutant.profile.gender}</p>
        
         <p><strong>Eyes:</strong> ${mutant.profile.eyes}</p>
        
         <p><strong>Hair:</strong> ${mutant.profile.hair}</p>
        
         <p><strong>Height:</strong> ${mutant.profile.height}</p>
        
         <p><strong>Powers:</strong> ${mutant.powers.join(", ")}</p>
        
         <p><strong>Affiliation:</strong> ${mutant.affiliation.join(", ")}</p>
        
       </div>
      
     </div>
    
   </div>
  
 </div>
  `;


 document.querySelector("#results-section").innerHTML = htmlTemplate;
}




function getSelectedValue() {
 const selectElement = document.querySelector('#select-mutant');
 const selectedOption = selectElement.options[selectElement.selectedIndex];
 const selectedText = selectedOption.text;


 searchForMutantByAlias(selectedText);


}


document.querySelector("#select-mutant").addEventListener('change', getSelectedValue);




// CALL BY DEFAULT
loadDataSource();
