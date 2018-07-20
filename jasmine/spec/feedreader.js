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


        //test to loop through all feeds to ensure the url is defined and exists and is not empty//
        it('URL is defined and not empty', () => {
            for (let feed of allFeeds) {
                expect(feed.url).toBeDefined();
                expect(feed.url.length).not.toBe(0);
            }
        });

        //test to loop through all feeds to ensure the name is defined and exists and is not empty//
         it('name is defined and not empty', () => {
             for (let feed of allFeeds) {
                 expect(feed.name).toBeDefined();
                 expect(feed.name.length).not.toBe(0);
             }
         })
    });


    /*test to view the menu and ensure it is hidden by default and will hide/show when clicked*/
    describe('The menu', () => {
        let m = document.querySelector('body');
        it('the element is hidden by default', () => {
            expect(m).toHaveClass('menu-hidden');
        })

        it('visibility is changed when clicked', () => {
            document.querySelector('.menu-icon-link').click();
            expect(m).not.toHaveClass('menu-hidden');
            document.querySelector('.menu-icon-link').click();
            expect(m).toHaveClass('menu-hidden');
        })
    });

    /* test to look at initial entries and ensure there is at least a single element*/
        describe('Initial Entries', () => {
            beforeEach((done) => {
                loadFeed(0, done);
            });

            it('has at least a single .entry element', () => {
                let a = document.querySelector('.feed');
                expect(a.childElementCount).toBeGreaterThan(0);
            })
        });
        

    /* TODO: Write a new test suite named "New Feed Selection" */
        describe('New Feed Selection', () => {
            let newFeedA, newFeedB;
            beforeEach((done) => {
                loadFeed(0, () => {
                    newFeedA = document.querySelector('.feed').innerHTML;
                    loadFeed(1, () => {
                        newFeedB = document.querySelector('.feed').innerHTML;
                        done();
                    })
                })
            })
            it ('content is changed', () => {
                expect(newFeedA).not.toBe(newFeedB);
            })
        });
        
}());
