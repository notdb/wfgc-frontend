//import ListOfArcades from "../../src/components/listOfArcades.js";

describe("Visits homepage", () => {
  beforeEach((done)=>{
    cy.visit('http://localhost:4550/', {onload: ()=>{
      console.log('hi')
    }})
    console.log(done);
  })
  describe('Soemthing', ()=>{
  it("Arcades-list has the list of arcades", ()=>{
    cy.get(".searchForm", {timeout: 4000})
  })
  });
});
