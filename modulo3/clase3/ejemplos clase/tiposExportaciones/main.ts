//Importamos todas las funciones y constantes de index.ts, gracias a la re-exportacion. Esto demuestra como las tres formas de exportaciones funcionan juntas en un proyecto

import { calculateCircleArea, 
    CIRCLE_NAME,
    calculateRectangleArea,
    RECTANGE_NAME, 
    calculateTriangleArea,
    TRIANGLE_NAME, 
    } from "./index";

const circleArea = calculateCircleArea(5)
console.log(`El area del ${CIRCLE_NAME} es ${circleArea}`);

const rectangleArea = calculateRectangleArea(5, 10)
console.log(`El area del ${RECTANGE_NAME} es ${rectangleArea}`);

const triangleArea = calculateTriangleArea(5, 10)
console.log(`El area del ${TRIANGLE_NAME} es ${triangleArea}`);


    
