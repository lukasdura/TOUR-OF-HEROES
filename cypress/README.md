 __TOUR OF HEROES__ 




Tests are created in folfer __Cypress/e2e__.

Tests are divided into three folders. 

__Dashboards.tests__

__Heroes.tests__ 

__Few.tests.runing.on.diferent.devices__

The project is on GitHub : https://github.com/lukasdura/TOUR-OF-HEROES.git

The project has three branches __main  - final-version  -  seruce-version__

__main branch__ - Here are created all UI tests.

__final version__ - In this branch is broken app  Tour of heroes. I tried to add to the app "Building a template-driven form". Tried more times without success.

__secure version__ - Is only to be sure. I wanted to have one free and clear branch.

The tests are runing in section Actions on CI on GitHub Actions.

---------------------------------------------------------------------------------------------------------------------------------------------------

__Dashboards.tests__

* __Button.clear.messages.cy.js__ -  Check if works the button "Clear messages"

* __Click.on.top.heroes1.cy.js__ - Click on the first top hero and check the inside of Hero if it is all OK

* __Click.on.top.heroes2.cy.js__ - Click on the second top hero and check the inside of Hero if it is all OK

* __Click.on.top.heroes3.cy.js__ - Click on the third top hero and check the inside of Hero if it is all OK

* __Click.on.top.heroes4.cy.js__ - Click on the fourth top hero and check the inside of Hero if it is all OK

* __Dashboard.and.Heroes.cy.js__ - Check if Dashboard and Heroes are on the page, and if they works

* __Hero.search.cy.js__  -FIRST TEST -testing if the searchbar is working. SECOND TEST-testing if the automatically offering a response is working

* __Title.massages.cy.js__

* __Title.name.cy.js__

* __Top.heroes.cy.js__

* __Visit.page.cy.js__


---------------------------------------------------------------------------------------------------------------------------------------------------

__Heroes.tests__

* __Click.on.heroes.cy__ - Check if it is possible to click on Heroes

* __Create.nine.more.heroes.cy__ - Creating nine news heroes, in one test

* __Create.one.new.hero.cy__ - Creating one new hero

* __Delete.all.heroes.cy__ - Deleting all heroes in one test

* __Delete.one.hero.cy__ - Deleting one hero in  test

* __Check.heroes.page.cy__ - Only visit the hero page

* __Check.titles.texts.buttons.cy__ - Check titles, texts and buttons on page

* __Opening.and.checking.eight.hero.cy__ - Click on the hero number 19 and check the inside of Hero if it is all OK


* __Opening.and.checking.fifth.hero.cy__ - Click on the hero number 16 and check the inside of Hero if it is all OK 

* __Opening.and.checking.first.hero.cy__ - Click on the hero number 12 and check the inside of Hero if it is all OK

* __Opening.and.checking.fourth.hero.cy__ - Click on the hero number 15 and check the inside of Hero if it is all OK

* __Opening.and.checking.ninth.hero.cy__ - Click on the hero number 20 and check the inside of Hero if it is all OK

* __Opening.and.checking.second.hero.cy__ - Click on the hero number 13 and check the inside of Hero if it is all OK

* __Opening.and.checking.seventh.hero.cy__ - Click on the hero number 18 and check the inside of Hero if it is all OK

* __Opening.and.checking.sixth.hero.cy__ - Click on the hero number 17 and check the inside of Hero if it is all OK

* __Opening.and.checking.third.hero.cy__ - Click on the hero number 14 and check the inside of Hero if it is all OK


---------------------------------------------------------------------------------------------------------------------------------------------------

__Few.tests.runing.on.diferent.devices__

* __diferent.devices.resolutions.cy__ - Run the same test on  diferent devices/resolution 

* __run.tests.in.deferent.browsers.cy__ - Run the same test on  diferent browsers chrome/electron









