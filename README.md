Feed Reader Testing Application
========================

###Summary
  This project aims at explaining the Test Driven Development(TDD) technique to build projects. It enhances the agility in app building and also leads to a quality  product. In this app I have used Jasmine for front end framework testing.

----------

### Project Setup
 - Copy the repo in your system and double click on index.html.
 -  You should see a page with live feeds from Udacity.
##### Result
At the bottom of the page you should see the Jasmine Results as following image. ![Result](/Result.PNG)

### Jasmine
It is a open source testing framework to test the front-end or any JS powered application. It's easy to understand coding style makes it a popular choice for TTD and features very basic syntax. Example from wiki:

`describe('Hello world', function() {
 it('says hello', function() {
	    expect(helloWorld()).toEqual('Hello world!');});
	});`

**describe** identifies the test suite.
**it** defines the test.
**expect** defines the expected result

###Resource
1. Jasmine: http://jasmine.github.io/
2. TTD: http://agiledata.org/essays/tdd.html and http://searchsoftwarequality.techtarget.com/definition/test-driven-development
