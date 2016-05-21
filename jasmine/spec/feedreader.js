'use strict';
$(function () {
    /* This is our first test suite - a test suite just contains
     * a related set of tests. This suite is all about the RSS
     * feeds definitions, the allFeeds variable in our application.
     */
    describe('RSS Feeds', function () {
        /* This is our first test - it tests to make sure that the
         * allFeeds variable has been defined and that it is not
         * empty. Experiment with this before you get started on
         * the rest of this project. What happens when you change
         * allFeeds in app.js to be an empty array and refresh the
         * page?
         */
        it('are defined', function () {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });


        /* TODO: Write a test that loops through each feed
         * in the allFeeds object and ensures it has a URL defined
         * and that the URL is not empty.
         */

        it('allFeeds URLs are defined and non-empty', function () {
            allFeeds.forEach(function (feed) {
                expect(feed.url).toBeDefined();
                expect(feed.url).not.toBe('');
            });
        });

        /* TODO: Write a test that loops through each feed
         * in the allFeeds object and ensures it has a name defined
         * and that the name is not empty.
         */

        it('allFeeds names are defined and non-empty', function () {
            allFeeds.forEach(function (feed) {
                expect(feed.name).toBeDefined();
                expect(feed.name).not.toBe('');
            });
        });
    });


    /* TODO: Write a new test suite named "The menu" */

    describe('The menu', function () {

        /* TODO: Write a test that ensures the menu element is
         * hidden by default. You'll have to analyze the HTML and
         * the CSS to determine how we're performing the
         * hiding/showing of the menu element.
         */

        it('menu element hidden by default', function () {
            expect($('body').hasClass('menu-hidden')).toBe(true);
        });

        /* TODO: Write a test that ensures the menu changes
         * visibility when the menu icon is clicked. This test
         * should have two expectations: does the menu display when
         * clicked and does it hide when clicked again.
         */

        it('menu changes visibility when icon clicked', function () {
            var menuIcon = $('.menu-icon-link');
            var bodyElement = $('body');
            menuIcon.click();
            expect(bodyElement.hasClass('menu-hidden')).toBeFalsy();

            menuIcon.click();
            expect(bodyElement.hasClass('menu-hidden')).toBeTruthy();
        })

    });

    /* TODO: Write a new test suite named "Initial Entries" */

    describe('Initial Entries', function () {

        /* TODO: Write a test that ensures when the loadFeed
         * function is called and completes its work, there is at least
         * a single .entry element within the .feed container.
         * Remember, loadFeed() is asynchronous so this test will require
         * the use of Jasmine's beforeEach and asynchronous done() function.
         */

        beforeEach(function (done) {
            loadFeed(0, done);
        });
        it('loadFeeder populates atleast one entry', function () {
            expect($('.feed .entry').length).toBeGreaterThan(0);
        });
    });

    /* TODO: Write a new test suite named "New Feed Selection" */

    describe('New Feed Selection', function () {

        /* TODO: Write a test that ensures when a new feed is loaded
         * by the loadFeed function that the content actually changes.
         * Remember, loadFeed() is asynchronous.
         */
        var initialFeed, reloadedFeed;
        beforeEach(function (done) {
            loadFeed(1, function() {
                initialFeed = $('.feed').html();
                loadFeed(2, function() {
                    reloadedFeed = $('.feed').html();
                    done();
                });
            });
        });

        it('feed changes on reload', function () {
            var reloadedFeed = $('.feed');
            var initalFeedHtml = initialFeed.toString();
            var finalFeedHtml = reloadedFeed.toString();
            var isEqual = initalFeedHtml === finalFeedHtml;
            expect(isEqual).not.toBe(true);
        });
    });
}());
