$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/java/Parabank.feature");
formatter.feature({
  "line": 1,
  "name": "Parabank",
  "description": "",
  "id": "parabank",
  "keyword": "Feature"
});
formatter.before({
  "duration": 7182993900,
  "status": "passed"
});
formatter.scenario({
  "line": 3,
  "name": "Register",
  "description": "",
  "id": "parabank;register",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 4,
  "name": "user is on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "user clicks on register",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "verify Signing up page is displayed",
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "user fills form",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "registration is successful",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitions.userOnHomepage()"
});
formatter.result({
  "duration": 88195800,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.clickOnRegister()"
});
formatter.result({
  "duration": 767544400,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.verifySignUpPageDisplayed()"
});
formatter.result({
  "duration": 27162400,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.fillSignUpForm()"
});
formatter.result({
  "duration": 1187542200,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.isRegistrationIsSuccessful()"
});
formatter.result({
  "duration": 29812000,
  "status": "passed"
});
formatter.after({
  "duration": 619087100,
  "status": "passed"
});
formatter.before({
  "duration": 5381635000,
  "status": "passed"
});
formatter.scenario({
  "line": 10,
  "name": "User Login",
  "description": "",
  "id": "parabank;user-login",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 11,
  "name": "user is on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 12,
  "name": "user logs in after registration",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "verify account services is displayed",
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "user logs out",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinitions.userOnHomepage()"
});
formatter.result({
  "duration": 23987700,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.userLogsIn()"
});
formatter.result({
  "duration": 926132500,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.isAccountServicesDisplayed()"
});
formatter.result({
  "duration": 28883300,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.userLogsOut()"
});
formatter.result({
  "duration": 809036600,
  "status": "passed"
});
formatter.after({
  "duration": 602634100,
  "status": "passed"
});
formatter.before({
  "duration": 8156875200,
  "status": "passed"
});
formatter.scenario({
  "line": 16,
  "name": "User Logsout",
  "description": "",
  "id": "parabank;user-logsout",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 17,
  "name": "user is on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 18,
  "name": "user logs in after registration",
  "keyword": "When "
});
formatter.step({
  "line": 19,
  "name": "verify account services is displayed",
  "keyword": "Then "
});
formatter.step({
  "line": 20,
  "name": "user logs out",
  "keyword": "When "
});
formatter.step({
  "line": 21,
  "name": "verify customer login is displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitions.userOnHomepage()"
});
formatter.result({
  "duration": 22782600,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.userLogsIn()"
});
formatter.result({
  "duration": 1162797000,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.isAccountServicesDisplayed()"
});
formatter.result({
  "duration": 27705000,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.userLogsOut()"
});
formatter.result({
  "duration": 907932800,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.isCustomerLoginDisplayed()"
});
formatter.result({
  "duration": 23964100,
  "status": "passed"
});
formatter.after({
  "duration": 622106800,
  "status": "passed"
});
formatter.before({
  "duration": 6753028600,
  "status": "passed"
});
formatter.scenario({
  "line": 23,
  "name": "bill payment",
  "description": "",
  "id": "parabank;bill-payment",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 24,
  "name": "user is on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 25,
  "name": "user logs in after registration",
  "keyword": "When "
});
formatter.step({
  "line": 26,
  "name": "user clicks on bill pay",
  "keyword": "When "
});
formatter.step({
  "line": 27,
  "name": "verify bill payment service is displayed",
  "keyword": "Then "
});
formatter.step({
  "line": 28,
  "name": "user fill bill payment form and click on send payment",
  "keyword": "When "
});
formatter.step({
  "line": 29,
  "name": "verify bill payment is complete and bill amount is right",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitions.userOnHomepage()"
});
formatter.result({
  "duration": 21116600,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.userLogsIn()"
});
formatter.result({
  "duration": 1072224700,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.openBillPayment()"
});
formatter.result({
  "duration": 520726800,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.isBillPaymentServiceDisplayed()"
});
formatter.result({
  "duration": 28084200,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.fillBillPayment()"
});
formatter.result({
  "duration": 666225100,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.isAccountOpened()"
});
formatter.result({
  "duration": 579387900,
  "status": "passed"
});
formatter.after({
  "duration": 613889400,
  "status": "passed"
});
formatter.before({
  "duration": 5841177600,
  "status": "passed"
});
formatter.scenario({
  "line": 31,
  "name": "Update Profile",
  "description": "",
  "id": "parabank;update-profile",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 32,
  "name": "user is on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 33,
  "name": "user logs in after registration",
  "keyword": "When "
});
formatter.step({
  "line": 34,
  "name": "user clicks on update contact info",
  "keyword": "When "
});
formatter.step({
  "line": 35,
  "name": "verify update profile is displayed",
  "keyword": "Then "
});
formatter.step({
  "line": 36,
  "name": "user updates city to \u0027Alexandria\u0027",
  "keyword": "When "
});
formatter.step({
  "line": 37,
  "name": "verify profile updated is displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitions.userOnHomepage()"
});
formatter.result({
  "duration": 23872300,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.userLogsIn()"
});
formatter.result({
  "duration": 996312100,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.updateContactInfo()"
});
formatter.result({
  "duration": 649604500,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.verifyIfUpdateProfile()"
});
formatter.result({
  "duration": 26496200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Alexandria",
      "offset": 22
    }
  ],
  "location": "StepDefinitions.updateCity(String)"
});
formatter.result({
  "duration": 1261101700,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.verifyProfileUpdateSuccess()"
});
formatter.result({
  "duration": 17148700,
  "status": "passed"
});
formatter.after({
  "duration": 710753500,
  "status": "passed"
});
formatter.before({
  "duration": 6584648000,
  "status": "passed"
});
formatter.scenario({
  "line": 39,
  "name": "User requests loan",
  "description": "",
  "id": "parabank;user-requests-loan",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 40,
  "name": "user is on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 41,
  "name": "user logs in after registration",
  "keyword": "When "
});
formatter.step({
  "line": 42,
  "name": "verify account services is displayed",
  "keyword": "Then "
});
formatter.step({
  "line": 43,
  "name": "user clicks on request a loan",
  "keyword": "When "
});
formatter.step({
  "line": 44,
  "name": "user fill the application for a loan \"10\" with down payment \"1\"",
  "keyword": "When "
});
formatter.step({
  "line": 45,
  "name": "verify the loan is successful",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitions.userOnHomepage()"
});
formatter.result({
  "duration": 22079200,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.userLogsIn()"
});
formatter.result({
  "duration": 1564208100,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.isAccountServicesDisplayed()"
});
formatter.result({
  "duration": 26786500,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.requestALoan()"
});
formatter.result({
  "duration": 725238200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "10",
      "offset": 38
    },
    {
      "val": "1",
      "offset": 61
    }
  ],
  "location": "StepDefinitions.fillLoanApplicationt(String,String)"
});
formatter.result({
  "duration": 219432300,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.verifyLoanIsSuccesful()"
});
formatter.result({
  "duration": 551491100,
  "status": "passed"
});
formatter.after({
  "duration": 626891800,
  "status": "passed"
});
});