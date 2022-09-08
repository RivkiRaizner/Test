//*1
//get list of users by multiple ids
`GET/api.com/users?id=id1,id2,id3,id4,id5`;

//*2
//update user by id
`PUT/api.com/users?id=1234`;
//in the req.body we can to pass user's object in order to replace and update his.

//*3
//create multiple users
`POST/api.com/users`
//in the req.body we can to pass multiple users to create them.