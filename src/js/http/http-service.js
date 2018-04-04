import axios from "axios";

const BASE_URL = 'http://localhost:3000/';
const USERS = 'users';
const COMP = 'companies';
const DIVIDER = '/';


// let funct = function getAll(){
//   axios.get(BASE_URL + USERS + DIVIDER + '1')
//     .then(function (response) {
//       console.log(response.data);
//     })
//     .catch(function (error) {
//       console.log(error);
//     });
// };
// export {funct};

//////////////////////////////////////////////////////

// class HttpServiceClass {
//   getAll(){
//     axios.get(BASE_URL + USERS)
//       .then(function (response) {
//         console.log(response.data);
//         getTitles(response.data);
//       })
//       .catch(function (error) {
//         console.log(error,'My error');
//       });
//   };
//   getDescription(callback){
//     axios.get(BASE_URL + COMP + DIVIDER + '1')
//       .then(response =>{
//         callback(response.data.description);
//         console.log(response.data.description);
//       })
//       .catch(error =>{
//         console.log(error,'my error');
//       })
//   };
//   // getId(){
//   //   axios.get(BASE_URL + USERS, {
//   //     params: {
//   //       ID: 1
//   //     }
//   //   })
//   //     .then(function (response) {
//   //       console.log(response.data);
//   //     })
//   //     .catch(function (error) {
//   //       console.log(error);
//   //     });
//   // };
//   postAll(){
//     axios.post((BASE_URL + USERS ), {
//         firstname: 'Fred',
//         lastname: 'Flintstone',
//         email: 'fred@gmail.com',
//         age: '45',
//         companyId: '4'
//       })
//       .then(function (response) {
//         console.log(response.data);
//       })
//       .catch(function (error) {
//         console.log(error);
//       });
//   };
//  patchAll(){
//     axios.patch((BASE_URL + USERS + DIVIDER + '2'), {
//       firstname: 'Jorge',
//       lastname: 'Flintstone',
//       email: 'fred@gmail.com',
//       age: '20',
//       companyId: '5'
//     })
//       .then(function (response) {
//         console.log(response.data);
//       })
//       .catch(function (error) {
//         console.log(error);
//       });
//   };
//   deleteAll(){
//     axios.delete(BASE_URL + USERS + DIVIDER + 'JLUtNRk')
//       .then(function (response) {
//         console.log(response.data);
//       })
//       .catch(function (error) {
//         console.log(error);
//       });
//   };
//
//
// }
// function getTitles(users) {
//   users.map(user => console.log(user.age, 'MY TITLE'));
//
// }
//
//
// let httpService = new HttpServiceClass();
//
// export{httpService};

class HttpServiceClass{
  getPost(callback){
    axios.get(BASE_URL + 'post')
      .then(response => {
        console.log(response.data.age);
        callback(response.data.age);

      })
      .catch(error => {
        console.log(error, 'my error');
      });
  };
  mapPost(){
    axios.get(BASE_URL + COMP)
      .then(response => {
        console.log(response.data);
        compTitle(response.data);
      })
      .catch(error => {
        console.log(error, 'my error');
      });
  };
  postNewUser(){
    axios.post(BASE_URL + USERS,{
      firstname: "Tom",
      lastname: "Golubev",
      email: "tom@gmail.com",
      age: "68",
      companyId: "5"
    })
      .then(response => {
        console.log(response.data);
      })
      .catch(error => {
        console.log(error,'my error');
      })
  };
  patchInfo(id){
    axios.patch(BASE_URL + USERS + DIVIDER + id,{
      age:89
      })
      .then(response => {
        console.log(response.data);
      })
      .catch(error => {
        console.log(error, 'my error');
      })
  };
  deleteInfo(compId){
    axios.delete(BASE_URL + COMP + DIVIDER + compId )
      .then(response => {
        console.log(response.data);

      })
      .catch(error =>{
        console.log(error,'my error');
      })
  };
}

function compTitle(companies){
  companies.map(company => console.log(company.name));
}

let httpService = new HttpServiceClass();
export {httpService};