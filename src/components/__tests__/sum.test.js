import {sum} from '../sum';

test('Sum function should calculate sum of two numbers', () => {
    const result=sum(3,5);
    
    //Assertion 
    expect(result).toBe(8);
  
})  

