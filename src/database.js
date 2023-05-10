const mongoose = require('mongoose');
mongoose.connect("mongodb+srv://jesusheredia497:heredia10@clusterh.bg0bxhl.mongodb.net/FerroElectrica?retryWrites=true&w=majority")
.then(
    db=>console.log("Mongodb connected"))
.catch(
    err=>console.error(err));