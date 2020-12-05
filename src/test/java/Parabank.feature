Feature: Parabank

  Scenario: Register
    Given user is on homepage
    When user clicks on register
    Then verify Signing up page is displayed
    When user fills form
    Then registration is successful

  Scenario: User Login
    Given user is on homepage
    When user logs in after registration
    Then verify account services is displayed
    When user logs out
    Then verify customer login is displayed

  Scenario: User Logsout
    Given user is on homepage
    When user logs in after registration
    Then verify account services is displayed
    When user logs out
    Then verify customer login is displayed

  Scenario: bill payment
    Given user is on homepage
    When user logs in after registration
    When user clicks on bill pay
    Then verify bill payment service is displayed
    When user fill bill payment form and click on send payment
    Then verify bill payment is complete and bill amount is right

  Scenario: Update Profile
    Given user is on homepage
    When user logs in after registration
    When user clicks on update contact info
    Then verify update profile is displayed
    When user updates city to 'Alexandria'
    Then verify profile updated is displayed

  Scenario: User requests loan
    Given user is on homepage
    When user logs in after registration
    Then verify account services is displayed
    When user clicks on request a loan
    When user fill the application for a loan "10" with down payment "1"
    Then verify the loan is successful
