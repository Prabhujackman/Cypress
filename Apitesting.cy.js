describe('APItests', () => {

    it('Get', () => {
        cy.request('GET', 'https://reqres.in/api/users?page=2').then((response) => {
            expect(response.status).equal(200)
            expect(response.body.data[0].first_name).equal('Michael')
            expect(response.body.data[1].id).equal(8)
            expect(response.body.data[2].avatar).equal("https://reqres.in/img/faces/9-image.jpg")
        })
    })

    it('Post', () => {
        var test = {
            "name": "morpheus",
            "job": "leader"
        }
        cy.request('POST', 'https://reqres.in/api/users', test).then((response) => {
            expect(response.status).equal(201)
            expect(response.body.name).equal('morpheus')
            expect(response.body.job).equal('leader')
        })
    })

    it('Put', () => {
        var test1 = {
            "name": "Prabhu",
            "job": "Jackman"
        };
        cy.request('PUT', 'https://reqres.in/api/users/2', test1).then((response) => {
            expect(response.status).equal(200)
            expect(response.body.name).equal('Prabhu')
            expect(response.body.job).equal('Jackman')
        });
    })

    it('Delete', () => {
        cy.request('DELETE', 'https://reqres.in/api/users/2').then((response) => {
            expect(response.status).equal(204)
        })
    })

})
