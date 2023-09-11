const FsServices = require("../services/fs.services");





    class FsControllers {
        async getRead() { 
            let readed = await FsServices.getRead()
             return readed;

         }

         async postWrite() {
             let write = await FsServices.postWrite()
             return write;
         }
    };





    module.exports = new FsControllers();