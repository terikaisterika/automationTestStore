///<reference types="Cypress"/>
class ProductCardPO {
  getProductCart() {
    return cy.get("#product_details");
  }
  geth1ProductName() {
    return cy.get("h1.productname span").invoke("text");
  }
  checkh1ProductName(name) {
    cy.get("h1.productname span")
      .invoke("text")
      .then((productName) => {
        expect(productName.toLowerCase()).to.be.eq(name);
      });
  }
}
export default ProductCardPO;
