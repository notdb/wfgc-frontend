//import ListOfArcades from "../../src/components/listOfArcades.js";

describe("Visits homepage", () => {
  it("Arcades-list has the list of arcades", ()=>{
    cy.visit('/');
    cy.get(".arcades-list", {timeout: 10000}).contains("List of top Arcades");
  })
});
