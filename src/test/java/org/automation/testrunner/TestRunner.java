package org.automation.testrunner;


import org.junit.AfterClass;
import org.junit.runner.RunWith;

import com.cucumber.listener.Reporter;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;



@RunWith(Cucumber.class)
@CucumberOptions(features = "src/test/java/Parabank.feature", glue = "org.automation.stepdefinitions", plugin = {
		"com.cucumber.listener.ExtentCucumberFormatter:target/cucumber-reports/report.html", "pretty", "html:target/cucumber", }

)
public class TestRunner {
	
	/**
	 * 
	 */
	@AfterClass
    public static void writeExtentReport() {
        Reporter.loadXMLConfig("src/extent-config.xml");
    }
 

}