//import ListOfArcades from "../../src/components/listOfArcades.js";

describe("Visits homepage", () => {
  beforeEach(()=> {
    cy.visit('/', {timeout: 30000})
    /*
    {onload: ()=>{
      console.log('hi')
    }}
    */
  })
  describe('Soemthing', ()=>{
  it("Arcades-list has the list of arcades", ()=>{
    cy.get(".searchForm", {timeout: 40000})
  })
  });
});
