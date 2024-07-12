



    cy.request({
        method:"POST",url:'https://demoqa.com/Account/v1/User',header: {
            'Content-type': "application/json"
        },
        

        body: {
            "userName": username,
            "passWord": password
        }
    }).then((Response) => {
        expect(Response.status).to.qa(201);
        cy.wrap(Response.body).should('deep.include', {
            username: username,
        });
        let data = {
            "username": nvanh001,
            "password": anhnv321,
            "userId": Response.body.userID
        }
        cy.writeFile("cypress/fixtures/dataLogin1.json", data)
    });
;