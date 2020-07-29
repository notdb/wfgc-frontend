//import ListOfArcades from "../../src/components/listOfArcades.js";

describe("Visits homepage", () => {
  beforeEach(()=> {
    cy.visit('/')
  })
  describe('Somethng', ()=>{
  it("Arcades-list has the list of arcades", ()=>{
    cy.get(".searchForm")
  })
  });
});
