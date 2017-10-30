var require = meteorInstall({"imports":{"collections":{"messages":{"index.js":function(require,exports,module){

///////////////////////////////////////////////////////////////////////
//                                                                   //
// imports/collections/messages/index.js                             //
//                                                                   //
///////////////////////////////////////////////////////////////////////
                                                                     //
module.export({                                                      // 1
  Msg: function () {                                                 // 1
    return Msg;                                                      // 1
  }                                                                  // 1
});                                                                  // 1
var Msg = new Mongo.Collection('msg');                               // 1
///////////////////////////////////////////////////////////////////////

}}}},"server":{"methods.js":function(require,exports,module){

///////////////////////////////////////////////////////////////////////
//                                                                   //
// server/methods.js                                                 //
//                                                                   //
///////////////////////////////////////////////////////////////////////
                                                                     //
var Meteor = void 0;                                                 // 1
module.watch(require("meteor/meteor"), {                             // 1
    Meteor: function (v) {                                           // 1
        Meteor = v;                                                  // 1
    }                                                                // 1
}, 0);                                                               // 1
Meteor.methods({                                                     // 3
    insertUser: function (pseudo, password) {                        // 4
        var Msg = void 0;                                            // 1
        module.watch(require("/imports/collections/messages/"), {    // 1
            Msg: function (v) {                                      // 1
                Msg = v;                                             // 1
            }                                                        // 1
        }, 1);                                                       // 1
                                                                     //
        if (this.isSimulation) {                                     // 5
            console.log('simulation');                               // 6
        }                                                            // 7
                                                                     //
        Msg.insert({                                                 // 9
            pseudo: pseudo,                                          // 9
            password: password                                       // 9
        });                                                          // 9
        console.log('done');                                         // 10
    }                                                                // 11
});                                                                  // 3
///////////////////////////////////////////////////////////////////////

},"publications.js":function(require,exports,module){

///////////////////////////////////////////////////////////////////////
//                                                                   //
// server/publications.js                                            //
//                                                                   //
///////////////////////////////////////////////////////////////////////
                                                                     //
var Msg = void 0;                                                    // 1
module.watch(require("/imports/collections/messages/"), {            // 1
    Msg: function (v) {                                              // 1
        Msg = v;                                                     // 1
    }                                                                // 1
}, 0);                                                               // 1
Meteor.publish('viewMsg', function () {                              // 3
    return Msg.find({});                                             // 4
});                                                                  // 5
///////////////////////////////////////////////////////////////////////

},"main.js":function(require,exports,module){

///////////////////////////////////////////////////////////////////////
//                                                                   //
// server/main.js                                                    //
//                                                                   //
///////////////////////////////////////////////////////////////////////
                                                                     //
var Meteor = void 0;                                                 // 1
module.watch(require("meteor/meteor"), {                             // 1
  Meteor: function (v) {                                             // 1
    Meteor = v;                                                      // 1
  }                                                                  // 1
}, 0);                                                               // 1
///////////////////////////////////////////////////////////////////////

}}},{
  "extensions": [
    ".js",
    ".json"
  ]
});
require("./server/methods.js");
require("./server/publications.js");
require("./server/main.js");
//# sourceMappingURL=app.js.map
