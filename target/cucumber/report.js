$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/java/Parabank.feature");
formatter.feature({
  "line": 1,
  "name": "Parabank",
  "description": "",
  "id": "parabank",
  "keyword": "Feature"
});
formatter.before({
  "duration": 8101619800,
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
  "duration": 230686900,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.clickOnRegister()"
});
formatter.result({
  "duration": 715644400,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.verifySignUpPageDisplayed()"
});
formatter.result({
  "duration": 62978500,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.fillSignUpForm()"
});
formatter.result({
  "duration": 1862841400,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.isRegistrationIsSuccessful()"
});
formatter.result({
  "duration": 49943800,
  "status": "passed"
});
formatter.after({
  "duration": 686759900,
  "status": "passed"
});
formatter.before({
  "duration": 6008075600,
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
formatter.step({
  "line": 15,
  "name": "verify customer login is displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitions.userOnHomepage()"
});
formatter.result({
  "duration": 48322100,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.userLogsIn()"
});
formatter.result({
  "duration": 1660351100,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.isAccountServicesDisplayed()"
});
formatter.result({
  "duration": 64329500,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.userLogsOut()"
});
formatter.result({
  "duration": 1008081500,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.isCustomerLoginDisplayed()"
});
formatter.result({
  "duration": 38571500,
  "status": "passed"
});
formatter.after({
  "duration": 685314900,
  "status": "passed"
});
formatter.before({
  "duration": 5857467400,
  "status": "passed"
});
formatter.scenario({
  "line": 17,
  "name": "User Logsout",
  "description": "",
  "id": "parabank;user-logsout",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 18,
  "name": "user is on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 19,
  "name": "user logs in after registration",
  "keyword": "When "
});
formatter.step({
  "line": 20,
  "name": "verify account services is displayed",
  "keyword": "Then "
});
formatter.step({
  "line": 21,
  "name": "user logs out",
  "keyword": "When "
});
formatter.step({
  "line": 22,
  "name": "verify customer login is displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitions.userOnHomepage()"
});
formatter.result({
  "duration": 45869800,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.userLogsIn()"
});
formatter.result({
  "duration": 1222328800,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.isAccountServicesDisplayed()"
});
formatter.result({
  "duration": 57536100,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.userLogsOut()"
});
formatter.result({
  "duration": 1025047900,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.isCustomerLoginDisplayed()"
});
formatter.result({
  "duration": 36507700,
  "status": "passed"
});
formatter.after({
  "duration": 1137496400,
  "status": "passed"
});
formatter.before({
  "duration": 5815008200,
  "status": "passed"
});
formatter.scenario({
  "line": 24,
  "name": "bill payment",
  "description": "",
  "id": "parabank;bill-payment",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 25,
  "name": "user is on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 26,
  "name": "user logs in after registration",
  "keyword": "When "
});
formatter.step({
  "line": 27,
  "name": "user clicks on bill pay",
  "keyword": "When "
});
formatter.step({
  "line": 28,
  "name": "verify bill payment service is displayed",
  "keyword": "Then "
});
formatter.step({
  "line": 29,
  "name": "user fill bill payment form and click on send payment",
  "keyword": "When "
});
formatter.step({
  "line": 30,
  "name": "verify bill payment is complete and bill amount is right",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitions.userOnHomepage()"
});
formatter.result({
  "duration": 36335100,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.userLogsIn()"
});
formatter.result({
  "duration": 1432599800,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.openBillPayment()"
});
formatter.result({
  "duration": 643267500,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.isBillPaymentServiceDisplayed()"
});
formatter.result({
  "duration": 40085800,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.fillBillPayment()"
});
formatter.result({
  "duration": 1270647900,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.isAccountOpened()"
});
formatter.result({
  "duration": 651201200,
  "status": "passed"
});
formatter.after({
  "duration": 679248600,
  "status": "passed"
});
formatter.before({
  "duration": 5826503700,
  "status": "passed"
});
formatter.scenario({
  "line": 32,
  "name": "Update Profile",
  "description": "",
  "id": "parabank;update-profile",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 33,
  "name": "user is on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 34,
  "name": "user logs in after registration",
  "keyword": "When "
});
formatter.step({
  "line": 35,
  "name": "user clicks on update contact info",
  "keyword": "When "
});
formatter.step({
  "line": 36,
  "name": "verify update profile is displayed",
  "keyword": "Then "
});
formatter.step({
  "line": 37,
  "name": "user updates city to \u0027Alexandria\u0027",
  "keyword": "When "
});
formatter.step({
  "line": 38,
  "name": "verify profile updated is displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitions.userOnHomepage()"
});
formatter.result({
  "duration": 48054200,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.userLogsIn()"
});
formatter.result({
  "duration": 1522041600,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.updateContactInfo()"
});
formatter.result({
  "duration": 630906200,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.verifyIfUpdateProfile()"
});
formatter.result({
  "duration": 53884500,
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
  "duration": 1430756100,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.verifyProfileUpdateSuccess()"
});
formatter.result({
  "duration": 34034500,
  "status": "passed"
});
formatter.after({
  "duration": 668153200,
  "status": "passed"
});
formatter.before({
  "duration": 6475603800,
  "status": "passed"
});
formatter.scenario({
  "line": 40,
  "name": "User requests loan",
  "description": "",
  "id": "parabank;user-requests-loan",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 41,
  "name": "user is on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 42,
  "name": "user logs in after registration",
  "keyword": "When "
});
formatter.step({
  "line": 43,
  "name": "verify account services is displayed",
  "keyword": "Then "
});
formatter.step({
  "line": 44,
  "name": "user clicks on request a loan",
  "keyword": "When "
});
formatter.step({
  "line": 45,
  "name": "user fill the application for a loan \"10\" with down payment \"1\"",
  "keyword": "When "
});
formatter.step({
  "line": 46,
  "name": "verify the loan is successful",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitions.userOnHomepage()"
});
formatter.result({
  "duration": 48379600,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.userLogsIn()"
});
formatter.result({
  "duration": 1451937200,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.isAccountServicesDisplayed()"
});
formatter.result({
  "duration": 37655300,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.requestALoan()"
});
formatter.result({
  "duration": 891828400,
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
  "duration": 390328400,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.verifyLoanIsSuccesful()"
});
formatter.result({
  "duration": 559630100,
  "status": "passed"
});
formatter.after({
  "duration": 662538600,
  "status": "passed"
});
});