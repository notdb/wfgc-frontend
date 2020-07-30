//import ListOfArcades from "../../src/components/listOfArcades.js";

describe("Visits homepage", () => {
  beforeEach(() => {
    cy.visit("/");
  });
  describe("Basic component rendering tests", () => {
    it("Arcades-list has the list of arcades", () => {
      cy.get(".searchForm").contains("Enter");
    });
    it("Search results contains text", () => {
      cy.get(".searchResults").contains("Your nearest weeklies:");
    });
    it("ListOfArcades renders (with no external data)", () => {
      cy.get(".arcades-list").contains("List of top Arcades:");
    });
    it("Login component renders", () => {
      cy.get("header").contains("Home");
      cy.get("header").contains("Login");
    });
  });
});
