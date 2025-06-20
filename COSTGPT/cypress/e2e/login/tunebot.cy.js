/// <reference types="cypress" />

import LoginPage from '../../pageObjects/LoginPage';
import TuneBotPage from '../../pageObjects/Tune BotPage';

describe('CostGPT Pro – Tune Bot Module', () => {
  const email = Cypress.env('CGPT_USER');
  const pass  = Cypress.env('CGPT_PASS');

  beforeEach(() => {
    LoginPage.visit();
    LoginPage.clickLoginButton();
    LoginPage.enterEmail(email);
    LoginPage.enterPassword(pass);
    LoginPage.clickSignInButton();
   
    
  });

  it('should navigate to the Tune Bot module successfully', () => {
    
     TuneBotPage.clickTunebotModule();
     TuneBotPage.clickOnEditButton();
     TuneBotPage.addNewText();
     TuneBotPage.selectPreferredTechStack();
     TuneBotPage.technologyshouldavoid
     TuneBotPage.showFeaturetoggleButtonEnabled();
     TuneBotPage.showPricingtoggleButtonEnabled();
     TuneBotPage.showDeliveryTimelinestoggleButtonEnabled();
     TuneBotPage.suggestResponsesToggleButtonEnabled();
     TuneBotPage.clickSaveButton();
   




  });
});

