const express = require('express')
var faker = require('faker');

const app = express()
const port = 8000;
app.use(express.json());
app.use(express.urlencoded({extended: true}))

class User {
    constructor() {
        this.id = faker.datatype.uuid();
        this.firstName = faker.name.firstName();
        this.lastName = faker.name.lastName();
        this.phoneNumber = faker.phone.phoneNumber();
        this.email = faker.internet.email();
        this.password = faker.internet.password();
    }
}
class Company {
    constructor() {
        this.id=faker.datatype.uuid();
        this.name=faker.company.companyName();
        this.street=faker.address.streetAddress();
        this.city=faker.address.city();
        this.state=faker.address.state();
        this.zipCode=faker.address.zipCode();
        this.country=faker.address.country();
    }
}
const users =  (new User())
const companies = (new Company())
const user =  (new User())
const company = (new Company())

app.get('/api/users/new',(req,res)=>{
    res.json(users)
})

app.get('/api/companies/new',(req,res)=>{
    res.json(companies)
})

app.get('/api/user/company/',(req,res)=>{
    res.json(user);
    res.json(company)
})

app.listen(port)