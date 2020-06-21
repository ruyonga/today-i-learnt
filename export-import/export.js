/**
 * There are two types of export. 
 * Named exports - 0 or more exports per module
 * Named export - one export per ,odiles.
 */

export let nameOne = 'Some name'
export function newName(){}
export class className {}

const nameTwo = 'some name'
let something = 'somthing'
const otherFunc = () => {}

//Export list
export {nameTwo, something, otherFunc}

//Renaming
export {nameOne as mainName}

//Distructure, rename and export
export const {one, two: next} = o


//Defaut exports.
const three = '3'
export default someExpression
export default function myFunction() {}
export {three as default}
