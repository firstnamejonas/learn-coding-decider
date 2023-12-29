# Testing

Return back to the [README.md](README.md) file.

## Code Validation

### HTML

I have used the recommended [HTML W3C Validator](https://validator.w3.org) to validate all of my HTML files.

| Page | W3C URL | Screenshot | Notes |
| --- | --- | --- | --- |
| Home | [W3C](https://validator.w3.org/nu/?doc=https%3A%2F%2Ffirstnamejonas.github.io%2Flearn-coding-decider%2F) | ![screenshot](documentation/html-validation-home.png) | Pass: No Errors |
| Confirmation | [W3C](https://validator.w3.org/nu/?doc=https%3A%2F%2Ffirstnamejonas.github.io%2Flearn-coding-decider%2Fconfirmation.html) | ![screenshot](documentation/html-validation-confirmation.png) | Pass: No Errors |

### CSS

I have used the recommended [CSS Jigsaw Validator](https://jigsaw.w3.org/css-validator) to validate all of my CSS files.

| File | Jigsaw URL | Screenshot | Notes |
| --- | --- | --- | --- |
| style.css | [Jigsaw](https://jigsaw.w3.org/css-validator/validator?uri=https%3A%2F%2Ffirstnamejonas.github.io%2Flearn-coding-decider%2F&profile=css3svg&usermedium=all&warning=1&vextwarning=&lang=de) | ![screenshot](documentation/css-validation-style.png) | Pass: No Errors |

### JavaScript

I have used the recommended [JShint Validator](https://jshint.com) to validate all of my JS files.

| File | Screenshot | Notes |
| --- | --- | --- |
| script.js | ![screenshot](documentation/js-validation-script.png) | Pass: No Errors or Warnings |


## Browser Compatibility

I've tested my deployed project on multiple browsers to check for compatibility issues.

| Browser | Home | Confirmation | Notes |
| --- | --- | --- | --- |
| Chrome | ![screenshot](documentation/browser-chrome-home.png) | ![screenshot](documentation/browser-chrome-confirmation.png) | Works as expected |
| Firefox Developer Edition | ![screenshot](documentation/browser-firefox-home.png) | ![screenshot](documentation/browser-firefox-confirmation.png) | Works as expected |
| Safari | ![screenshot](documentation/browser-safari-home.png) | ![screenshot](documentation/browser-safari-confirmation.png) | Works as expected |


## Responsiveness

I've tested my deployed project on multiple devices to check for responsiveness issues.

| Device | Home | Confirmation | Notes |
| --- | --- | --- | --- |
| Mobile (DevTools) | ![screenshot](documentation/responsive-mobile-home.png) | ![screenshot](documentation/responsive-mobile-confirmation.png) | Works as expected |
| Tablet (DevTools) | ![screenshot](documentation/responsive-tablet-home.png) | ![screenshot](documentation/responsive-tablet-confirmation.png) | Works as expected |
| Desktop | ![screenshot](documentation/browser-chrome-home.png) | ![screenshot](documentation/browser-chrome-confirmation.png) | Works as expected |
| IPhone13 | ![screenshot](documentation/responsive-iphone13-home.png) | ![screenshot](documentation/responsive-iphone13-confirmation.png) | Works as expected |


## Lighthouse Audit

I've tested my deployed project using the Lighthouse Audit tool to check for any major issues.

| Page | Mobile | Desktop | Notes |
| --- | --- | --- | --- |
| Home | ![screenshot](documentation/lighthouse-home-mobile.png) | ![screenshot](documentation/lighthouse-home-desktop.png) | Some minor warnings |
| Confirmation | ![screenshot](documentation/lighthouse-confirmation-mobile.png) | ![screenshot](documentation/lighthouse-confirmation-desktop.png) | Some warnings for accessibility. I fixed the score to 94, you can find out more about it in the [bugs](#bugs) section |


## Defensive Programming

Defensive programming was manually tested with the below user acceptance testing:

| Page | Expectation | Test | Result | Passed |
| --- | --- | --- | --- | --- |
| All Pages - Header | | | | |
| | The logo in the header of all pages is expected to redirect the user to the home page | Tested the feature by clicking on the logo in the header | The feature behaved as expected, and redirected me to the homepage / top of the page | Test concluded and passed |
| | The link in the header of all pages is expected to send the user to the Decider Section | Tested the feature by clicking on the link | The feature behaved as expected, and send me to the decider section | Test concluded and passed |
| Home | | | | |
| | The link in the hero section is expected to send the user to the Decider Section | Tested the feature by clicking on the link | The feature behaved as expected, and send me to the decider section | Test concluded and passed |
| | The buttons in the decider section are expected to display another question when clicked by the user. After clicking through multiple questions, the user should see a positive or a negative result, that coding is for them or not with icons and a button below. | Tested the feature by clicking through the questions | The feature behaved as expected, and I got one positive result and one negative result | Test concluded and passed |
| | The button that is shown when a negative result is displayed, should reload the decider, so that the user can begin all over again, when he clicks the button | Tested the feature by clicking the button | The feature behaved as expected, and it restarted the decider | Test concluded and passed |
| | The button that is shown when a positive result is displayed, should display the form, so that the user can sign up for the newsletter, when he clicks the button | Tested the feature by clicking the button | The feature behaved as expected, and the form with a short instruction displays | Test concluded and passed |
| | When the form is submitted it should not accept empty fields except the last name field because it’s optional. After submitting the user should be send to the confirmation page. | Tested the feature by submitting the form with inputs and without inputs | The feature behaved as expected, the user gets an alert to fill out the required fields, when trying to submit the form without filling out the required fields. The user is send to the confirmation page when submitting the form with all required fields filled out. | Test concluded and passed |
| | The link in the newsletter section is expected to send the user to the Decider Section | Tested the feature by clicking on the link | The feature behaved as expected, and send me to the decider section | Test concluded and passed |
| All Pages - Footer | | | | |
| | When the user clicks on the Facebook icon, he should be send to Facebook | Tested the feature by clicking on the icon | The feature behaved as expected, and send me to Facebook | Test concluded and passed |
| | When the user clicks on the Instagram icon, he should be send to Instagram | Tested the feature by clicking on the icon | The feature behaved as expected, and send me to Instagram | Test concluded and passed |
| | When the user clicks on the Twitter icon, he should be send to Twitter | Tested the feature by clicking on the icon | The feature behaved as expected, and send me to Twitter | Test concluded and passed |
| Confirmation Page | | | | |
| | The link in the hero section „Reanswer Decider!“ is expected to send the user to the Decider Section on the home page where the user is able to reanswer the decider. | Tested the feature by clicking on the link | The feature behaved as expected, and send me to the decider section. | Test concluded and passed |
| | The link in the hero section „Newsletter details!“ is expected to send the user to the newsletter section on the home page where the user can get more information about the newsletter he just signed up for. | Tested the feature by clicking on the link | The feature behaved as expected, and send me to the newsletter section. | Test concluded and passed |


## User Story Testing

| User Story | Screenshot | Tested | Works
| --- | --- | --- | --- |
| As a new site user, I would like to utilize the Decider so that I can determine if pursuing programming is a suitable career path for me. | ![screenshot](documentation/feature03_1.png) | Yes | Yes |
| As a new site user, I would like to have clear guidance throughout the decision-making process so that I can navigate the Decider seamlessly. | ![screenshot](documentation/feature03.png) | Yes | Yes |
| As a new site user, I would like to have the aYeslity to reconsider my decision and restart the Decider so that I can learn more about my suitability for programming. | ![screenshot](documentation/feature06.png) | Yes | Yes |
| As a returning site user, I would like to show the Decider to my friends, enabling them to experience the Decider and discover their own coding potential. | ![screenshot](documentation/browser-chrome-home.png) | Yes | Yes |
| As a returning site user, I would like to learn more about the newsletter I signed up for after the decider. | ![screenshot](documentation/feature04.png) | Yes | Yes |


## Bugs
**Bug #01:**
- Accessibility rating of 85 due to aria-labels, that are not directly matching with content of anchor elements:

    ![screenshot](documentation/lighthouse-confirmation-mobile.png)
    ![screenshot](documentation/lighthouse-confirmation-desktop.png)

- To fix this, I've optimized the aria-labels and got a score of 94 with just one minor warning left, which is acceptable because the aria-label has the same content as the anchor element.

    ![screenshot](documentation/lighthouse-confirmation-mobile_fixed.png)
    ![screenshot](documentation/lighthouse-confirmation-desktop_fixed.png)

**Bug #02:**
- Content in the main section of the confirmation page was pushed down on wider screens due to 100vh in styles.css for body selector:

    ![screenshot](documentation/feature06.png)

- To fix this, I've deleted the 100vh from the body selector and added it to hero-section-confirmation id-selector:

    ![screenshot](documentation/feature06_fixed.png)

## Unfixed Bugs

There are no remaining bugs that I am aware of.