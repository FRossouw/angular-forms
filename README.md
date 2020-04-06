# **Angular Forms Application**

## Project Status Badges
---
Master Branch

[![CircleCI](https://circleci.com/gh/FRossouw/angular-forms.svg?style=svg)](https://circleci.com/gh/FRossouw/angular-forms)

Development Branch

[![CircleCI](https://circleci.com/gh/FRossouw/angular-forms/tree/development.svg?style=svg)](https://circleci.com/gh/FRossouw/angular-forms/tree/development)

## **Project URL**
---
https://angular-forms-b6c93.web.app/

## **Project Introduction**
---
- Due Date: 08 April 2020

This is an application demonstrating various Angular forms. 
1. Angular Template Driven Forms
2. Angular Reactive Forms

### Requirements
The project should:
1. be an Angular Application. [Project scaffolding] ☑
2. be statically linted through Circle Ci. [Feature] ☑
3. be deployed to Firebase. [Feature] ☑
4. be an installable progressive web application (PWA). [Feature] ☑
5. make use of SCSS styling. [Feature] ☑
6. make use of CSS Grid or Flex. [Feature] ☑
7. make use of custom validators. [Feature] ☑
8. make use error messages correctly (e.g. Inline). [Feature] ☑
9. on submit shown the object details either via the console or alerts. [Feature] ☑

## **Angular Template Driven Form**
---

### Form Details:
This will be an address form handling all address related data/information and validation.

![](https://raw.githubusercontent.com/FRossouw/angular-forms/bug-fixes/screenshots/address-form-1.PNG)
![](https://raw.githubusercontent.com/FRossouw/angular-forms/bug-fixes/screenshots/address-form-2.PNG)
![](https://raw.githubusercontent.com/FRossouw/angular-forms/bug-fixes/screenshots/address-form-3.PNG)
![](https://raw.githubusercontent.com/FRossouw/angular-forms/bug-fixes/screenshots/address-form-4.PNG)

## **Angular Reactive Form**
---

### Form Details:
This will be a customer form handling all customer/person related data/information and validation.

![](https://raw.githubusercontent.com/FRossouw/angular-forms/bug-fixes/screenshots/contact-form-1.PNG)
![](https://raw.githubusercontent.com/FRossouw/angular-forms/bug-fixes/screenshots/contact-form-2.PNG)
![](https://raw.githubusercontent.com/FRossouw/angular-forms/bug-fixes/screenshots/contact-form-3.PNG)
![](https://raw.githubusercontent.com/FRossouw/angular-forms/bug-fixes/screenshots/contact-form-4.PNG)

## **Custom Validators**
---
All validator functions make use of Regex to validate user inputs.

### *Phone Number Validation*
This validator function checks whether a phone number is local to South Africa.

```javascript
const isValid = /^\+27/.test(control.value);
```

### *Phone Number Length Validation*
This validator function checks whether a phone number is the correct length of a South African phone number.

```javascript
const isValid = /^\+27[0-9]{9}$/.test(control.value);
```

### *Postal Code Validation*
This validator function checks whether a postal code is valid.

```javascript
 const isValid = /^[0-9]{4}$/.test(control.value);
```

### *Street Validation*
This validator function checks whether a street is valid or not.
Options would include:
- `Street` or `street`
- `St` or `st`
- `Avenue` or `avenue`
- `Ave` or `ave`
- `Lane` or `lane`
- `Laan` or `laan`
- `Ln` or `ln` or `LN`

```javascript
const isValid = /street|Street|st|St|avenue|Avenue|ave|Ave|lane|Lane|laan|Laan|ln|Ln|LN/.test(control.value);
```
