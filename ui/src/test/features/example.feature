Feature: UI Testing on Sauce Demo

  @Test1
  Scenario: Sign up and validate login
    Given Given I am on the Sauce Demo Home Page
    When I click on Sign Up Button
    Then I fill out the sign up form with First Name, Last Name, Email Address, and Password
    When I click on Create Account
    Then I see login successful
 
  @Test2
  Scenario: Sign up and validate login
    Given Given I am on the Sauce Demo Home Page
    When I click on Customer Login Button
    Then I fill out the login form with Email Address and Password
    When I click on Sign In
    Then I validate that user signed in
