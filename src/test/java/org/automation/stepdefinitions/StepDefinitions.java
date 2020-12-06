package org.automation.stepdefinitions;

import static org.testng.Assert.assertEquals;

import java.net.MalformedURLException;
import java.text.NumberFormat;
import java.time.Duration;
import java.util.List;
import java.util.Locale;

import org.apache.commons.lang3.RandomStringUtils;
import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.support.ui.ExpectedCondition;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.FluentWait;
import org.openqa.selenium.support.ui.Wait;
import org.openqa.selenium.support.ui.WebDriverWait;

import cucumber.api.java.After;
import cucumber.api.java.Before;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

/**
 * @author Ismail.Sobhy
 *
 */
public class StepDefinitions {

	public static WebDriver driver = null;
	public static JavascriptExecutor js = null;
	public static Wait waitVar = null;

	// url for the website
	public static String baseURL = "http://parabank.parasoft.com/parabank/index.htm";

	// Variables used to store random username and password when registering
	// The same username and password will be used in all scenarios
	static String username = "";
	static String password = "";

	// Variable used for storing the bill amount and verification
	static double expectedBillAmount = 0;

	/**
	 * @throws MalformedURLException
	 * @throws InterruptedException
	 * 
	 * 
	 */
	public void createDriver() throws MalformedURLException, InterruptedException {

		System.setProperty("webdriver.chrome.driver", "src/chromedriver.exe");

		driver = new ChromeDriver();

		driver.manage().deleteAllCookies();
		js = (JavascriptExecutor) driver;

		driver.navigate().to(baseURL);

		waitVar = new WebDriverWait(driver, Duration.ofSeconds(20));

		// using fluent wait
		// waitVar = new
		// FluentWait<WebDriver>(driver).withTimeout(Duration.ofSeconds(20)).pollingEvery(Duration.ofMillis(500)).ignoring(NoSuchElementException.class);

	}

	@Before
	/* 
	 * Create a driver and open the website
	 * Check if customer login is visible
	 */
	public void beforeScenario() {
		try {
			createDriver();
		} catch (MalformedURLException e) {
			e.printStackTrace();
		} catch (InterruptedException e) {
			e.printStackTrace();
		}

		
		waitVar.until(
				ExpectedConditions.visibilityOfElementLocated(By.name("username")));

	}

	/**
	 * driver quit after each scenario
	 */
	@After
	public void afterScenario() {
		driver.quit();

	}

	/**
	 *  
	 */
	@Then("^verify customer login is displayed$")
	public void isCustomerLoginDisplayed() {

		waitVar.until(
				ExpectedConditions.visibilityOfElementLocated(By.name("username")));

	}

	/**
	 * Customer login is displayed in homepage, wait for visibility
	 */
	@Given("^user is on homepage$")
	public void userOnHomepage() {

		isCustomerLoginDisplayed();
	}

	/**
	 * User fills Sign up form with random data
	 */
	@When("user fills form")
	public void fillSignUpForm() {

		driver.findElement(By.id("customer.firstName")).sendKeys(RandomStringUtils.randomAlphabetic(8));
		driver.findElement(By.id("customer.lastName")).sendKeys(RandomStringUtils.randomAlphabetic(6));
		driver.findElement(By.id("customer.address.street"))
				.sendKeys(RandomStringUtils.randomNumeric(2) + " Abbas akkad st");
		driver.findElement(By.id("customer.address.city")).sendKeys(RandomStringUtils.randomAlphabetic(6));
		driver.findElement(By.id("customer.address.state")).sendKeys(RandomStringUtils.randomAlphabetic(6));
		driver.findElement(By.id("customer.address.zipCode")).sendKeys(RandomStringUtils.randomNumeric(5));
		driver.findElement(By.id("customer.phoneNumber")).sendKeys(RandomStringUtils.randomNumeric(10));
		driver.findElement(By.id("customer.ssn")).sendKeys(RandomStringUtils.randomNumeric(14));

		username = RandomStringUtils.randomAlphabetic(8);
		driver.findElement(By.id("customer.username")).sendKeys(username);
		password = RandomStringUtils.randomAlphanumeric(8);
		driver.findElement(By.id("customer.password")).sendKeys(password);
		driver.findElement(By.id("repeatedPassword")).sendKeys(password);

		driver.findElement(By.xpath("//input[@value='Register' and @type='submit']")).click();

	}

	/*
	 * Registration is complete, welcome username is displayed
	 * 
	 */
	@Then("registration is successful")
	public void isRegistrationIsSuccessful() {
		waitVar.until(ExpectedConditions
				.visibilityOfElementLocated(By.xpath("//h1[contains(text(),'Welcome " + username + "')]")));

	}

	/*
	 * Click on Register button
	 * 
	 */
	@When("user clicks on register")
	public void clickOnRegister() {

		driver.findElement(By.xpath("//a[contains(text(),'Register')]")).click();

	}

	/**
	 * Verify Sign up label is appearing after clicking the button
	 * 
	 */
	@Then("^verify Signing up page is displayed$")
	public void verifySignUpPageDisplayed() {

		waitVar.until(ExpectedConditions
				.visibilityOfElementLocated(By.xpath("//h1[contains(text(),'Signing up is easy!')]")));

	}

	/**
	 * User types the username and password used in registration and clicks login 
	 */
	@When("^user logs in after registration$")
	public void userLogsIn() {

		driver.findElement(By.name("username")).sendKeys(username);
		driver.findElement(By.name("password")).sendKeys(password);
		driver.findElement(By.xpath("//input[@value='Log In' and @type='submit']")).click();

	}

	/**
	 * @param user
	 * @param pass
	 * Same function but as userLogsIn but takes username and password as parameters
	 */
	@When("^user logs in with Username \"(.*)\" and Password \"(.*)\"$")
	public void userLogsIn(String user, String pass) {

		driver.findElement(By.name("username")).sendKeys(user);
		driver.findElement(By.name("password")).sendKeys(pass);
		driver.findElement(By.xpath("//input[@value='Log In' and @type='submit']")).click();

	}

	/**
	 * User click on logout button
	 */
	@When("^user logs out$")
	public void userLogsOut() {

		driver.findElement(By.xpath("//a[contains(text(),'Log Out')]")).click();
	}

	/**
	 * Check Account services is displayed, usually used after log in
	 */
	@Then("^verify account services is displayed$")
	public void isAccountServicesDisplayed() {

		waitVar.until(
				ExpectedConditions.visibilityOfElementLocated(By.xpath("//h2[contains(text(),'Account Services')]")));
	}

	/**
	 * check if bill payment service is appearing after clicking the button Bill pay
	 */
	@Then("^verify bill payment service is displayed$")
	public void isBillPaymentServiceDisplayed() {

		waitVar.until(ExpectedConditions
				.visibilityOfElementLocated(By.xpath("//h1[contains(text(),'Bill Payment Service')]")));

	}

	/**
	 * 
	 */
	@When("^user clicks on bill pay$")
	public void openBillPayment() {

		WebElement element = driver.findElement(By.xpath("//a[contains(text(),'Bill Pay')]"));
		element.click();
	}

	@Then("^verify Open New Account is displayed$")
	public void isOpenNewAccountDisplayed() {

		waitVar.until(
				ExpectedConditions.visibilityOfElementLocated(By.xpath("//h1[contains(text(),'Open New Account')]")));

	}

	/**
	 * Fill bull payment for, all data is random and select first from account
	 */
	@When("^user fill bill payment form and click on send payment$")
	public void fillBillPayment() {

		waitVar.until(ExpectedConditions.visibilityOfElementLocated(By.xpath("//h1[contains(text(),'Bill Payment Service')]")));

		driver.findElement(By.name("payee.name"))
				.sendKeys(RandomStringUtils.randomAlphabetic(8) + " " + RandomStringUtils.randomAlphabetic(6));
		driver.findElement(By.name("payee.address.street"))
				.sendKeys(RandomStringUtils.randomNumeric(2) + " Abbas akkad st");
		driver.findElement(By.name("payee.address.city")).sendKeys(RandomStringUtils.randomAlphabetic(6));
		driver.findElement(By.name("payee.address.state")).sendKeys(RandomStringUtils.randomAlphabetic(6));
		driver.findElement(By.name("payee.address.zipCode")).sendKeys(RandomStringUtils.randomNumeric(5));
		driver.findElement(By.name("payee.phoneNumber")).sendKeys(RandomStringUtils.randomNumeric(10));
		String accountNumber = RandomStringUtils.randomNumeric(6);
		driver.findElement(By.name("payee.accountNumber")).sendKeys(accountNumber);
		driver.findElement(By.name("verifyAccount")).sendKeys(accountNumber);

		expectedBillAmount = 1;
		driver.findElement(By.name("amount")).sendKeys("" + expectedBillAmount);

		List<WebElement> options = driver.findElements(By.name("fromAccountId"));
		options.get(0).click();

		driver.findElement(By.xpath("//input[@value='Send Payment' and @type='submit']")).click();

	}

	/**
	 * Come bill amount and convert the input that was done while filling the amount in the form
	 * to same format
	 */
	@Then("^verify bill payment is complete and bill amount is right$")
	public void isAccountOpened() {

		waitVar.until(ExpectedConditions.visibilityOfElementLocated(By.xpath("//h1[contains(text(),'Bill Payment Complete')]")));

		String amount = driver.findElement(By.id("amount")).getText();

		Locale US = Locale.forLanguageTag("en-US");
		NumberFormat format = NumberFormat.getCurrencyInstance(US);

		assertEquals(format.format(expectedBillAmount), amount);

	}

	/**
	 * click on update contact info and wait for form with header to appear
	 */
	@When("^user clicks on update contact info$")
	public void updateContactInfo() {

		driver.findElement(By.xpath("//a[contains(text(),'Update Contact Info')]")).click();
		
	}

	/**
	 * 
	 */
	@Then("^verify update profile is displayed$")
	public void verifyIfUpdateProfile() {

		waitVar.until(ExpectedConditions.visibilityOfElementLocated(By.xpath("//h1[contains(text(),'Update Profile')]")));

	}

	/**
	 * @param city
	 *Update city in update user contact info form
	 */
	@When("^user updates city to '(\\w*)'$")
	public void updateCity(String city) {

		waitVar.until((ExpectedCondition<Boolean>) driver -> driver.findElement(By.id("customer.address.city")).getAttribute("value").length() != 0);

		driver.findElement(By.id("customer.address.city")).clear();
		driver.findElement(By.id("customer.address.city")).sendKeys(city);
		driver.findElement(By.xpath("//input[@value='Update Profile' and @type='submit']")).click();
		waitVar.until(ExpectedConditions.visibilityOfElementLocated(By.xpath("//h1[contains(text(),'Profile Updated')]")));

	}

	/**
	 * 
	 */
	@Then("^verify profile updated is displayed$")
	public void verifyProfileUpdateSuccess() {

		waitVar.until(ExpectedConditions.visibilityOfElementLocated(By.xpath("//h1[contains(text(),'Profile Updated')]")));

	}

	/**
	 * 
	 */
	@When("^user clicks on request a loan$")
	public void requestALoan() {

		driver.findElement(By.xpath("//a[contains(text(),'Request Loan')]")).click();
		waitVar.until(ExpectedConditions.visibilityOfElementLocated(By.xpath("//h1[contains(text(),'Apply for a Loan')]")));

	}

	/**
	 * @param loan
	 * @param downPayment
	 *Fill loan and downpayment and select first from account and click apply for loan
	 */
	@When("^user fill the application for a loan \"(\\d*)\" with down payment \"(\\d*)\"$")
	public void fillLoanApplicationt(String loan, String downPayment) {

		driver.findElement(By.id("amount")).sendKeys(loan);
		driver.findElement(By.id("downPayment")).sendKeys(downPayment);

		List<WebElement> options = driver.findElements(By.id("fromAccountId"));
		options.get(0).click();

		driver.findElement(By.xpath("//input[@value='Apply Now' and @type='submit']")).click();

	}

	/**
	 * 
	 */
	@Then("^verify the loan is successful$")
	public void verifyLoanIsSuccesful() {

		waitVar.until(ExpectedConditions.visibilityOfElementLocated(By.xpath("//p[text()='Congratulations, your loan has been approved.']")));

	}

}
