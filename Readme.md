Project with BDD with Cucumber/Selenium/Junit/Extent reports
=================

The project is a behavior driven development(BDD) for the sample website http://parabank.parasoft.com/ for the following Scenarios:

- Register
- User Login
- User Logout
- bill payment
- Update Profile
- User requests loan

The project consists of the following:
--------------------------------------
* Cucumber Feature file Parabank.feature  has the .feature extension and is stored src/test/java/
* StepDefinations.java under the package org.automation.stepdefinations contains the mapping between the code and each step of the scenario.
* TestRunner.java under org.automation.testrunner. You can define the feature you are using, the StepDefinations.java as the glue used to link to feature and also the path for generating the extent report and path of extent report config.

Installation:
This project is a maven project, and can be both acquired from github and imported as a maven project in eclipse/intellij. The chrome driver stored in src\chromedriver.exe, this supports the last version of chrome browser at the time the project was done, however if chrome browser is of a different version this will make the automation not work. Be sure to download and replace the chrome driver corresponding to chrome browser version

The extent report is stored in target\cucumber-reports\report.html
