//Tipos diferenciados en typescript

//1. Any. Permite almancenar cualquier tipo de valor sin restricción

let anyValue: any = "Hola soy Any" //string
console.log(anyValue);
anyValue = 42; //numero
console.log(anyValue);
anyValue = {name: "TypeScript"} //objeto
console.log(anyValue);

//2. Unknow: Similar a any pero requiere verificacion antes de su uso
let unknwowValue: unknown = "Hola soy unknow"
console.log(unknwowValue);


//3. Void: se usa en funciones que no retornan valor
function logMessage(message: string): void {// se especifica el valor del parametro "string" y lo que va a devolver "void"
    console.log(message);
}
logMessage("esto es una funcion void")

//4. Never
function infiniteBucle(): never {
    while (true) {
        console.log("este bucle es infinite");        
    }
}
//infiniteBucle()

//5. Null y Undefined
let valorNull: string | null = null;// dar dos opciones de tipo de dato de las variables
console.log(valorNull);

valorNull = "ahora tiene un valor"
console.log(valorNull);






