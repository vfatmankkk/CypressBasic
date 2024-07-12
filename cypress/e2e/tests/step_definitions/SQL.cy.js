describe('test SQL',() => {

    it('TC1 sql select', () => {
        const sql = 'select * from student';
        cy.query(sql).then((result) => {
            expect(result).to.have.length(7);

            // get row data item
            result.forEch(students => {
                cy.log(studens.name)
            })
        });

    });
    it('TC2 inserts a new student', () => {
        const insertQuery = `
        INSERT INTO students (adno, name, class, section, fees, house)
        VALUE (21,'ViAn', '12', 'S', 9999, 'Gay')`;

        cy.query(insertQuery).then(result => {
            expect(result.affectedRow).to.equal(1);
        });
    });


})