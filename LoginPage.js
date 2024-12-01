
class LoginPage{

visit()
{
cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')

}

fillusername(value)
{

const emailfield=cy.get("input[placeholder='Username']")
emailfield.clear()
emailfield.type(value)
return this

}

fillpwd(value)
{
const passwordfield=cy.get("input[placeholder='Password']")
passwordfield.clear()
passwordfield.type(value)
return this

}

submit()
{
const button=cy.get("button[type='submit']")
button.click()
}
}

export default LoginPage