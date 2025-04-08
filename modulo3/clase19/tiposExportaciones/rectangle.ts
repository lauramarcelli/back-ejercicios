//declaramos primero las funciones y constantes, y luego las exportamos al final del archivo utilizando la exportacion separada

const calculateRectangleArea = (width: number, height: number): number => {return width * height}

const RECTANGE_NAME = "Rectangle"

//exportacion separada
export {calculateRectangleArea, RECTANGE_NAME}