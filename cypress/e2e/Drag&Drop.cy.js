describe('teamplate spec', () => {
    it ('TC1 - Drag & Drop', () => {
        cy.visit('https://demoqa.com/droppable')

        // cy.wait(300000)

        // Xác định các phần từ nguồn và đích
        cy.get('#draggable').as('source');
        cy.xpath("//div[@id='simpleDropContainer']//div[@id='droppable']").as('target');

        // Thực hiện thao tác kéo thả
        cy.get('@source').trigger('mousedown', {which: 1});
        cy.get('@target').trigger('mouseup', {force: true});
        cy.get(6000)
    });
})