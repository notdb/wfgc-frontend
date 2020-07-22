//import ListOfArcades from "../../src/components/listOfArcades.js";

describe("Visits homepage", () => {
  it("Loads the page", () => {
    cy.visit("http://localhost:4550");
    //cy.get(".arcades-list").contains("List of top Arcades");
  });
  it("Arcades-list has the list of arcades", ()=>{
    cy.get(".arcades-list").contains("List of top Arcades");
  })
});
