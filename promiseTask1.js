var container=document.createElement("div");
container.setAttribute("class","container");
var row=document.createElement("div");
row.classList.add("row","m-1");
container.append(row);
        
        async function foo(){
            let res=await fetch("https://zoo-animal-api.herokuapp.com/animals/rand"); 
            let data=await res.json();
            console.log(data);
            return bar(data);
        }
        foo();
        function bar(data){
        row.innerHTML=`<div class="col-lg-auto" >
        <div class="card border-primary mb-3" style="max-width: 18rem;">
        <div class="card-body text-primary">
        <p class="card-text">Name: ${data.name}</p>
        <p class="card-text">Type: ${data.animal_type}</p>
        <p class="card-text">Lifespan: ${data.lifespan} years</p>
        <p class="card-text">Habitat: ${data.habitat}</p>
        <p class="card-text">Diet: ${data.diet}</p>
        <p class="card-text">Location Found: ${data.geo_range}</p>        
        </div>
      </div>
      </div>`;
      document.body.append(container);
    }
     