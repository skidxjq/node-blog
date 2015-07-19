/**
 * Created by mac on 15-7-11.
 */

var mongoose=requir("mongoose");
var Schema    = mongoose.Schema;
var UserSchema = new Schema({
    loginname: { type: String},
    pass: { type: String }
});

mongoose.model('User', UserSchema);
