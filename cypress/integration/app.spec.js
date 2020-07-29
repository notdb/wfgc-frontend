//import ListOfArcades from "../../src/components/listOfArcades.js";

context("Visits homepage", () => {
  beforeEach((done)=>{
    cy.visit('http://localhost:4550/');
    console.log(done);
  })
  describe('Soemthing', ()=>{
  it("Arcades-list has the list of arcades", ()=>{
    cy.get(".searchForm", {timeout: 4000})
  })
  });
});
