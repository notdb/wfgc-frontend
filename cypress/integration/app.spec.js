//import ListOfArcades from "../../src/components/listOfArcades.js";

describe("Visits homepage", () => {
  it("test", () => {
    cy.visit("http://localhost:3000");
    cy.get(".arcades-list").contains("List of top Arcades");
  });
});
