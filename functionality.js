
var collections = []

function addToCart(src,name,price){
    prod ={
        source : src,
        name: name,
        price: price,
        
       

    }
    collections.push(prod)
    console.log(collections)
   
    
}



function ad(){

    console.log(collections)
    
    for( let i =0 ;i<collections.length;i++){

        var  prod = document.createElement("div");
        var image =  document.createElement("img");
        
        image.src = String(collections[i].source)
        image.width =300
        image.height =300
        var bold = document.createElement("h3")
        console.log(String(collections[i].source))
        var text = document.createTextNode(i+". Item Name:"+collections[i].name);
        bold.appendChild(text)
        prod.appendChild(bold)
        prod.appendChild(image)
        var ele = document.getElementById("add")
        ele.appendChild(prod);
        ele.appendChild(document.createElement('br'))
    }
    collections=[]


 

}

