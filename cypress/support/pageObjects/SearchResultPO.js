class SearchResultPO {
  checkProductName(partName) {
    cy.get(".fixed_wrapper a.prdocutname").each((el) => {
      expect(el.text().toLowerCase()).to.be.include(partName);
      expect(el.attr("title").toLowerCase()).to.be.include(partName);
    });
  }
}
export default SearchResultPO;
