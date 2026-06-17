Feature: Login on Rahul Shetty Academy Eventhub website
    Scenario: Login with valid credentials
        Given I navigate to Eventhub Login page
        When I enter email "hely@gmail.com"
        And I enter password "Hely@3014"
        And I click the Login button
        Then I should see the Dashboard Page