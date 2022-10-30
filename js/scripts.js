// naturis anteba chakroba + turn on/ off gilaki dizainebiturt


let anteba = () =>{
    document.getElementById("light").src = "img/on.png";
    document.getElementById("button").style.backgroundColor = "red";
    document.getElementById("button").innerHTML = "TurnOff"
}

let chakroba = () =>{
    document.getElementById("light").src = "img/off.png";
    document.getElementById("button").style.backgroundColor = "green";
    document.getElementById("button").innerHTML = "TurnOn"
}


let universal = () =>{
    let address = document.getElementById("light").src;
    let jondo = "file:///C:/Users/hp/Desktop/homework10/img/off.png";

    if( address == jondo){
        anteba();
    }else{
        chakroba();
    }
}