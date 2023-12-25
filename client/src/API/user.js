const mongoose = require('mongoose');

//mongoose.set('strictQuery', false);

const uri = 'mongodb+srv://traidingteam:KING.d@1382@tt.n7atopk.mongodb.net/?retryWrites=true&w=majority';

mongoose.connect(uri).then(()=>{
    console.log('connected to mongodb');
}).catch((err)=>{
    console.log('could not connect to mongodb');
});

// async function getUsers(mongoose) {
//     const db = mongoose.connection.db;
//     const userCollection = db.collection('users');
    
    
//     return await userCollection.find().toArray();
// }

function connectDB() {
    mongoose.connect(uri).then(()=>{
        console.log('connected to mongodb');
    }).catch((err)=>{
        console.log('could not connect to mongodb');
    });
}

const userSchema = new mongoose.Schema({
    username: {type:String, required: true},
    email: {type:String, required: true},
    admin: Boolean,
    date: {type: Date, default: Date.now}
});
//String , Number , Date , Buffer , Array , ObjectID

const User = mongoose.model('User',userSchema);


async function createUser() {
    const user = new User({
        first_name: 'mohammad',
        last_name: 'rezaee',
        favorites: ['sport','music'],
        admin: true,
    });
    
    const resault = await user.save();

    return resault;
}

async function getUsers() {
    //for all users
    const users = await User.find();

  //users have admin: true or first_name: 'mohammad'
    //  const users = await User.find().or({admin: true},{first_name: 'mohammad'});

    // //for firstname : mohammad user
    // const users = await User.find({
    //     first_name: 'mohammad'
    // });
    
    // const users = await User.find({
    //     first_name: 'mohammad'
    // }.limit(5).sort({first_name: 1})).select({first_name: 1, last_name: 1});
    
    // const users = await User.find({
    //     first_name: 'mohammad'
    // }.limit(5).sort({first_name: 1})).select({first_name: 1, last_name: 1}).count();
    
    return users;
}


//update documents way 1
async function updateUser(id) {
    getUsers();
    const user = await User.findById(id);
    //const user = await User.findOne({_id: id});
    //const user = await User.find({_id: id});

    if(!user) return;
    user.admin = true;
    user.first_name = "updated name";

    user.set({
        admin : true,
        first_name : "updated name",
    });

    //save document
    await user.save();
}



async function deleteUser(id) {
    //first document by id remove
    await User.deleteOne({_id: id});
    //all document by id remove
    await User.deleteMany({_id: id});
    //show and delete object
    const resault = await User.findByIdAndRemove({_id:id});

    console.log(resault);
}

exports = {
    connectDB,
    createUser,
    getUsers,
    updateUser,
    deleteUser,

}