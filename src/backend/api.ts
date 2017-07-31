var util = require('util');
var {Router} = require('express');
var aws = require('aws-sdk');

// load aws config
aws.config.loadFromPath('./src/credentials');


export function createNewCommentEmailNotification() {

  var router = Router()

  router.route('/email')
    .post(function(req, res) {
      var postData = req.body;
      
      if (postData) {
        console.log("the req body: " + postData);

        // load AWS SES
        var ses = new aws.SES({apiVersion: '2017-07-29'});

        //Set the email parameters
        var params = {
          Destination: {
            ToAddresses: [
                "planpassive@gmail.com"
            ]
          }, 
          Message: {
          Body: {
            Html: {
            Charset: "UTF-8", 
            Data: "<div>Plan Passive received a new comment for blog: " +
                  "<a class=\"ulink\" href=\"http://planpassive.com/blogs/" + 
                  postData.blog.url + "\" target=\"_blank\">" +
                  postData.blog.title +"</a>.</div>" +
                  "<div> <b>Comment from: </b>" + postData.name +
                  "</div>" +
                  "<div> <b>Content: </b>" + postData.content +
                  "</div>"
            }
          }, 
          Subject: {
            Charset: "UTF-8", 
            Data: "Congrats PlanPassive New Comments"
          }
          }, 
          Source: "planpassive@gmail.com", 
        };

        // this sends the email
        ses.sendEmail(params, function(err, data) {
          if (err) console.log(err, err.stack); // an error occurred
          else     console.log(data);           // successful response
        });
        return res.send("Email Sent");
      }

      return res.end();
    });

  // router.param('todo_id', function(req, res, next, todo_id) {
  //   // ensure correct prop type
  //   var id = Number(req.params.todo_id);
  //   try {
  //     var todo = TODOS[id];
  //     req.todo_id = id;
  //     req.todo = TODOS[id];
  //     next();
  //   } catch (e) {
  //     next(new Error('failed to load todo'));
  //   }
  // });

  // router.route('/todos/:todo_id')
  //   .get(function(req, res) {
  //     console.log('GET', util.inspect(req.todo, {colors: true}));

  //     res.json(req.todo);
  //   })
  //   .put(function(req, res) {
  //     console.log('PUT', util.inspect(req.body, {colors: true}));

  //     var index = TODOS.indexOf(req.todo);
  //     var todo = TODOS[index] = req.body;

  //     res.json(todo);
  //   })
  //   .delete(function(req, res) {
  //     console.log('DELETE', req.todo_id);

  //     var index = TODOS.indexOf(req.todo);
  //     TODOS.splice(index, 1);

  //     res.json(req.todo);
  //   });

  return router;
};
