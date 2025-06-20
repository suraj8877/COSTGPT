class TuneBotPage {
 clickTunebotModule() {
    return cy.contains('Tune Bot').should('be.visible').click();
 }
 clickOnEditButton() {
    return cy.get('button').contains('Edit').should('be.visible').click();
 }
 addNewText() {
    return cy.get('textarea.mantine-Textarea-input').click().clear().type('This is a test text for the Tune Bot module.').should('have.value', 'This is a test text for the Tune Bot module.');
 }
 
selectPreferredTechStack() {
    return cy.get('div[class="w-full text-gray-800 m_46b77525 mantine-InputWrapper-root mantine-MultiSelect-root"]').click({force: true})
    .type('Python{enter}').click();

    } 
 
 technologyshouldavoid() {

    return cy.get("div[class='w-full mb-4 mt-2 w-[70%] text-gray-800 m_46b77525 mantine-InputWrapper-root mantine-MultiSelect-root']").click({force: true})
    .type('Spring{enter}').click();
 }
 showFeaturetoggleButtonEnabled() {
    return cy.get('span[class="bg-gray-400 peer-checked:group-[.is-checked]:bg-primary-600 m_93039a1d mantine-Switch-thumb"]').eq(0).click();
 }
 showPricingtoggleButtonEnabled() {
    return cy.get('span[class="bg-gray-400 peer-checked:group-[.is-checked]:bg-primary-600 m_93039a1d mantine-Switch-thumb"]').eq(1).click();
 }
 showDeliveryTimelinestoggleButtonEnabled() {
    return cy.get('span[class="bg-gray-400 peer-checked:group-[.is-checked]:bg-primary-600 m_93039a1d mantine-Switch-thumb"]').eq(2).click();
 }
 suggestResponsesToggleButtonEnabled() {
    return cy.get('span[class="bg-gray-400 peer-checked:group-[.is-checked]:bg-primary-600 m_93039a1d mantine-Switch-thumb"]').eq(3).click();
 }
 clickSaveButton() {
    return cy.contains('Save').should('be.visible').click();
 }
 
}

export default new TuneBotPage();