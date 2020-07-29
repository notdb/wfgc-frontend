//import ListOfArcades from "../../src/components/listOfArcades.js";

describe("Visits homepage", () => {
  beforeEach(()=> {
    cy.visit('/')
  })
  describe('Something', ()=>{
  it("Arcades-list has the list of arcades", ()=>{
    cy.get(".searchForm")
  })
  });
});
