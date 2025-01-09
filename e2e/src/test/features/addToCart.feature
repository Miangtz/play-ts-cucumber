Feature: checkOut product

  @test
  Scenario: Add to to cart any product 
    Given the user is on the My Account Page
    When the user clicks on Catalog CTA
    And the user clicks on "Black heels" product from the Products
    Then the user should be taken to product detail page for "Black heels"
    And the user clicks on Add to Cart 
    Then the user clicks on Checkout 
    And the user verifies items in the cart
    Then the user should be taken to Cart page
    And the user click on Checkout
    Then user is available to see the payment page

