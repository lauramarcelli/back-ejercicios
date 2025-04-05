//VAR:

function ejemploVar(){
    //console.log(variableVar);// undefined por hosting
    var variableVar = "Soy una variable var"
    console.log(variableVar);
}
ejemploVar()

//LET
function ejemploLet(){
    //console.log(variableLet);// undefined por hosting
    let variableLet = "Soy una variable let"
    console.log(variableLet);
}
ejemploLet()

//CONST
function ejemploConst() {
    
    const variableConst = "Soy una variable const"
    console.log(variableConst);

    //variableConst = "Soy una variable const"// undefined por hosting
}
ejemploConst()