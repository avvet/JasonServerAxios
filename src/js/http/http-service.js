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

class myAxiosClass {
  getAll(){
    axios.get(BASE_URL + USERS + DIVIDER + '1')
      .then(function (response) {
        console.log(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  };
}

let myAxios = new myAxiosClass();

export{myAxios};