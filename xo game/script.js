flag = 1; //flag=1 X, flag =0 O
broj_poteza = 0;
function klik(input){
    if(input.value == ""){
        if(flag == 1){
            input.value = "X";
            flag = 0;
        }
        else {
            input.value = "O";
            flag = 1;
        }
        broj_poteza++;

    }

    if(broj_poteza == 9)
    alert("Neriješeno!");
    else{
        //provjeravanje pobjede
        var b1 = document.getElementById("b1").value;
        var b2 = document.getElementById("b2").value;
        var b3 = document.getElementById("b3").value;
        var b4 = document.getElementById("b4").value;
        var b5 = document.getElementById("b5").value;
        var b6 = document.getElementById("b6").value;
        var b7 = document.getElementById("b7").value;
        var b8 = document.getElementById("b8").value;
        var b9 = document.getElementById("b9").value;
        //vodoravne provjere
        if (b1 == b2 && b1 == b3){
            if(b1 == "X")
            alert("X je pobjednik");
            else if(b1 == "O")
            alert("O je pobjednik");
        }

        if (b4 == b5 && b4 == b6){
            if(b4 == "X")
            alert("X je pobjednik");

            else if (b4 == "O")
            alert("O je pobjednik");
        }

        if(b7 == b8 && b7 == b9){
            if(b7 == "X")
            alert ("X je pobjednik");

            else if (b7 == "O")
            alert("O je pobjednik");
        }

        //uspravne provjere
        if(b1 == b4 && b1 == b7){
            if(b1 == "X")
            alert("X je pobjednik");
            else if (b1== "O")
            alert("O je pobjednik");
        }
        if(b3 == b6 && b3 == b9){
            if(b3 == "X")
            alert("X je pobjednik");
            else if (b3 == "O")
            alert("O je pobjednik");
        }
        //dijagonalne provjere
        if(b1 == b5 && b1 == b9){
            if(b1 == "X")
            alert("X je pobjednik");
            else if (b1 == "O")
            alert("O je pobjednik");        
        }

        if(b3 == b5 && b3 == b7){
            if(b3 == "X")
            alert("X je pobjednik");
            else if(b3 == "O")
            alert("O je pobjednik");
        }
    }
}

function reset(){
    var b1 = document.getElementById("b1");
    var b2 = document.getElementById("b2");
    var b3 = document.getElementById("b3");
    var b4 = document.getElementById("b4");
    var b5 = document.getElementById("b5");
    var b6 = document.getElementById("b6");
    var b7 = document.getElementById("b7");
    var b8 = document.getElementById("b8");
    var b9 = document.getElementById("b9");

    b1.value = "";
    b2.value = "";
    b3.value = "";
    b4.value = "";
    b5.value = "";
    b6.value = "";
    b7.value = "";
    b8.value = "";
    b9.value = "";

    broj_poteza = 0;
}