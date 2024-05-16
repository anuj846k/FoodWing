import { render,screen } from "@testing-library/react"
import Contact from "../Contact";
import "@testing-library/jest-dom"

//This is called  Unit Testing 
// Unit testing is a type of software testing where individual units or components of a software are tested.


describe("Contact us Test Cases",()=>{
    
    it("Should load Button inside Contact component",()=>{
        render(<Contact/>);
    
        const button=screen.getByRole("button")
    
        //Assertion
    
        expect(button).toBeInTheDocument();
    });
    
    it("Should load input inside Contact component",()=>{
        render(<Contact/>);
    
        const inputName=screen.getByPlaceholderText("Name")
    
        //Assertion
    
        expect(inputName).toBeInTheDocument();
    });
    
    it("Should load 2 input boxes inside Contact component",()=>{
        render(<Contact/>);
        //Querying
    
        const inputBoxes=screen.getAllByRole("textbox");
        
        // console.log(inputBoxes[0])
        // console.log(inputBoxes.length);
    
        //Assertion
    
        expect(inputBoxes.length).toBe(3);
    });

})


