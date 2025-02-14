describe('JSONPlaceholder API Tests', function() {
    const baseUrl = 'https://jsonplaceholder.typicode.com';
  
    // GET all posts
    it('GET - Should fetch all posts', function() {
      cy.request(`${baseUrl}/posts`).then((response) => {
        expect(response.status).to.eq(200);
        expect(response.body).to.be.an('array');
        expect(response.body[1]).to.have.property('id',2);
        expect(response.body[1]).to.have.property('title','qui est esse')
        expect(response.body).to.have.property('length', 100);
      });
    });
  
    // GET a single post
    it('GET - Should fetch a single post', function() {
      cy.request(`${baseUrl}/posts/1`).then((response) => {
        expect(response.status).to.eq(200);
        expect(response.body).to.have.property('id', 1);
        expect(response.body).to.have.property('userId', 1);
        expect(response.body).to.have.property('title','sunt aut facere repellat provident occaecati excepturi optio reprehenderit')
      });
    });


    it('GET - comments from single post', function(){
        cy.request(`${baseUrl}/posts/1/comments`).then((response) => {
            expect(response.status).to.eq(200);
            expect(response.body).to.have.property('length',5)
            expect(response.body[0]).to.have.property('postId',1)
            expect(response.body[0]).to.have.property('name','id labore ex et quam laborum')
            expect(response.body[4]).to.have.property('id',5)
            expect(response.body[4]).to.have.property('email','Hayden@althea.biz')
        })
    })
  
    // POST a new post
    it('POST - Should create a new post', function() {
      const newPost = {
        title: 'API testing',
        body: 'JSON placeholder',
        userId: 1,
        Object : 'quote',
        commitId : 186
      };
  
      cy.request({
        method: 'POST',
        url: `${baseUrl}/posts`,
        body: newPost,
      }).then((response) => {
        expect(response.status).to.eq(201);
        expect(response.body).to.have.property('id'); // JSONPlaceholder returns an id
        expect(response.body.title).to.eq(newPost.title);
        expect(response.body.userId).to.eq(newPost.userId);
        expect(response.body).to.have.property('Object','quote');
        expect(response.body).to.have.property('commitId',186);

      });
    });
  
    // PUT to update a post
    it('PUT - Should update a post', function() {
      const updatedPost = {
        id: 1,
        title: 'updated title',
        body: 'updated body',
        userId: 1,
        Object : 'updated obj',
        commitId : 18

      };
  
      cy.request({
        method: 'PUT',
        url: `${baseUrl}/posts/1`,
        body: updatedPost,
      }).then((response) => {
        expect(response.status).to.eq(200);
        expect(response.body.title).to.eq(updatedPost.title);
        expect(response.body.body).to.eq(updatedPost.body);
        expect(response.body).to.have.property('Object','updated obj');
        expect(response.body).to.have.property('commitId',18);
      });
    });

        // PATCH to update a post
        it('PATCH - Should update the title of the post', function() {
          const updatedData = {
            title: 'updated title',
          };
      
          cy.request({
            method: 'PATCH',
            url: `${baseUrl}/posts/1`,
            body: updatedData,
          }).then((response) => {
            expect(response.status).to.eq(200);
            expect(response.body.title).to.eq(updatedData.title);
          });
        });
      
  
    // DELETE a post
    it('DELETE - Should delete a post', function() {
      cy.request({
        method: 'DELETE',
        url: `${baseUrl}/posts/1`,
      }).then((response) => {
        expect(response.status).to.eq(200);
      });
    });
  });
  