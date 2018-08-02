/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function() {
    /* This is our first test suite - a test suite just contains
    * a related set of tests. This suite is all about the RSS
    * feeds definitions, the allFeeds variable in our application.
    */
    describe('RSS Feeds', function() {
        /* This is our first test - it tests to make sure that the
         * allFeeds variable has been defined and that it is not
         * empty. Experiment with this before you get started on
         * the rest of this project. What happens when you change
         * allFeeds in app.js to be an empty array and refresh the
         * page?
         */
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });


        /* It tests to make sure that each feed
         * in the allFeeds object has a URL defined
         * and that the URL is not empty.
         */
		it('each feed has defined URL and it is not empty', function() {
			allFeeds.forEach(function(feed) {
				expect(feed.url).toBeDefined();
				expect(feed.url.length).not.toBe(0);
			}); 
		});


        /* I tests to make sure that each feed
         * in the allFeeds object has a name defined
         * and that the name is not empty.
         */
		it('each feed has a name defined and it is not empty', function() {
			allFeeds.forEach(function(feed) {
				expect(feed.name).toBeDefined();
				expect(feed.name.length).not.toBe(0);
			});
		});
    });


    /* Test suite which contains set of tests for the Menu,
	 *to tests its default state and when it's clicked.
	 */
	describe('The menu', function() {
        /* It tests that the menu element is
         * hidden by default, by checking if body element
		 * contain 'menu-hidden' class
         */
		it('is hidden by default', function() {
			expect(document.body.classList.contains('menu-hidden')).toBe(true);
		});

         /* It tests that the menu changes
          * visibility when the menu icon is clicked.  does the menu display when
          * clicked and does it hide when clicked again.
          */
		it('changes visibility when clicked', function() {
			
			// The menu displays when clicked
			document.querySelector('.menu-icon-link').click();
			expect(document.body.classList).not.toContain('menu-hidden');
			
			// The menu hides when clicked again
			document.querySelector('.menu-icon-link').click(); 
			expect(document.body.classList).toContain('menu-hidden');
		});
	});
	
    /* Test suite which contains test of initial entries 
	 * for asynchronous function loadFeed()
	 */
	describe('Initial Entries', function() {
        /* TODO: Write a test that ensures when the loadFeed
         * function is called and completes its work, there is at least
         * a single .entry element within the .feed container.
         * Remember, loadFeed() is asynchronous so this test will require
         * the use of Jasmine's beforeEach and asynchronous done() function.
         */
	});
	
    /* TODO: Write a new test suite named "New Feed Selection" */

        /* TODO: Write a test that ensures when a new feed is loaded
         * by the loadFeed function that the content actually changes.
         * Remember, loadFeed() is asynchronous.
         */
	
	
}());
