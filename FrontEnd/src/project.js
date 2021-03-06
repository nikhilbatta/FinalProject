// this isnt implemnted yet.
export class AuthenticateUser {
  apilogin(username, password) {
    return new Promise(function (resolve, reject) {
      let request = new XMLHttpRequest();
      const url = `http://localhost:4000/user/authenticate`

      request.onreadystatechange = function () {
        if (this.readyState == 4 && this.status === 200) {

          resolve(request.response);
        }
      }
      var parameters = {
        "Username": username,
        "Password": password
      };

      request.open("POST", url);
      request.setRequestHeader("Content-Type", "application/json")
      request.send(JSON.stringify(parameters));

    })
  }
}
// this gets all users , it has been tested
export class AllUsers {
  getAllUsers() {
    return new Promise(function (resolve, reject) {
      let request = new XMLHttpRequest();
      const url = `http://localhost:4000/users`

      request.open("GET", url);
      request.setRequestHeader("Content-Type", "application/json")
      request.send()
      request.onreadystatechange = function () {
        if (this.readyState == 4 && this.status === 200) {

          resolve(request.response);
        }
      }
    })
  }
}
// this is getting all the questions, this still needs to be tested. 
export class AllQuestions {
  getAllQuestions() {
    return new Promise(function (resolve, reject) {
      let request = new XMLHttpRequest();
      const url = `http://localhost:4000/api/question`

      request.open("GET", url);
      request.setRequestHeader("Content-Type", "application/json")
      request.send()
      request.onreadystatechange = function () {

        if (this.readyState == 4 && this.status === 200) {

          resolve(request.response);
        }
      }
    })
  }
}
// this is me getting started to right the post function for questions
export class PostQuestion {
  postQuestion(questionDescription, jsonToken) {
    return new Promise(function (resolve, reject) {
      let request = new XMLHttpRequest();
      const url = `http://localhost:4000/api/question`

      var parameters = {
        "QuestionDescription": questionDescription
      };
      request.open("POST", url);
      request.setRequestHeader("Content-Type", "application/json")
      request.setRequestHeader("Authorization", "Bearer " + jsonToken)
      request.send(JSON.stringify(parameters))
      request.onreadystatechange = function () {
        if (this.readyState == 4 && this.status === 200) {

          resolve(request.response);
        }
      }
    })
  }
}

export class PostUser {
  postUser(naMe, last, Uname, passWord) {
    return new Promise(function (resolve, reject) {
      let request = new XMLHttpRequest();
      const url = `http://localhost:4000/user`

      var parameters = {
        "FirstName": naMe,
        "LastName": last,
        "Username": Uname,
        "Password": passWord
      };
      request.open("POST", url);
      request.setRequestHeader("Content-Type", "application/json")
      request.send(JSON.stringify(parameters))
      request.onreadystatechange = function () {

        if (this.readyState == 4 && this.status === 200) {

          resolve(request.response);
        }
      }
    })
  }

}
export class GetSpecificQ {
  getSpecificQuestion(questionID) {
    console.log("this is the question id from the api" + questionID);
    return new Promise(function (resolve, reject) {
      let request = new XMLHttpRequest();
      const url = `http://localhost:4000/api/question/${questionID}`;

      request.open("GET", url);
      request.setRequestHeader("Content-Type", "application/json")
      request.send()
      request.onreadystatechange = function () {
        console.log(this.readyState);
        if (this.readyState == 4 && this.status === 200) {

          resolve(request.response);
        }
      }
    })

  }
}


  export class PostAnswer{
    postAnswer(answerDescription, jsonToken){
        return new Promise(function(resolve,reject){
            let request = new XMLHttpRequest();
            var rworking = JSON.parse(window.localStorage.getItem('specificQuestion'));
            const url = `http://localhost:4000/api/answer/${rworking.id}`
            
                  var parameters = {
                  "AnswerDescription": answerDescription
                };
                request.open("POST", url);
                request.setRequestHeader("Content-Type", "application/json")
                request.setRequestHeader("Authorization", "Bearer " + jsonToken)
                request.send(JSON.stringify(parameters))
                request.onreadystatechange = function(){
                    
                    if(this.readyState == 4 && this.status === 200){

                        resolve(request.response);
                      }
            }
        })
    }
  }
  export class GetUserPage{
    getSpecificUser(jsonToken){
      return new Promise(function(resolve,reject){
        let request = new XMLHttpRequest();
        const url = 'http://localhost:4000/user/userpage'

        request.open("GET", url);
        request.setRequestHeader("Content-Type", "application/json")
        request.setRequestHeader("Authorization", "Bearer " + jsonToken)
        request.send();
        request.onreadystatechange = function(){
          if(this.readyState == 4 && this.status == 200){
            resolve(request.response);
          }
          console.log("success in call for user page")
        }
      })
    }
  }


  // export class MeetUp {
  //   getMeetUps(){
  //     return new Promise(function(resolve,reject){
  //       let request = new XMLHttpRequest();
  //       const url = 'https://maps.googleapis.com/maps/api/place/textsearch/json?query=123+main+street&key=AIzaSyDJRc1PEuI7261VDspYiJryqqhfRXZ4BWs'

  //       request.open("GET", url);
  //       // request.setRequestHeader("Content-Type", "application/json")
  //       // request.setRequestHeader("Authorization", "Bearer " + jsonToken)
        
  //       request.send();
  //       request.onreadystatechange = function(){
  //         if(this.readyState == 4 && this.status == 200){
  //           resolve(request.response);
  //         }
  //         console.log("success in call for meet up")
  //       }
  //     })
  //   }
  // }


