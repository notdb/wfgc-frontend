//import ListOfArcades from "../../src/components/listOfArcades.js";

describe("Visits homepage", () => {
  beforeEach(()=>{
    cy.visit('/');
  })
  it("Arcades-list has the list of arcades", ()=>{
    cy.get(".searchForm", {timeout: 4000})
  })
});
