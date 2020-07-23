//import ListOfArcades from "../../src/components/listOfArcades.js";

context("Visits homepage", () => {
  beforeEach(()=>{
    cy.visit('/');
  })
  describe('Soemthing', ()=>{
  it("Arcades-list has the list of arcades", ()=>{
    cy.get(".searchForm", {timeout: 4000})
  })
  });
});
