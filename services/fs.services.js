const fs = require('fs');

// let fsReadedFile = fs.readFile('data.json', 'utf-8', function(error, data) {
//     // console.log('асинхронное чтение файла');
//     if(error) throw error;
//     console.log(typeof data);
//     const obj = JSON.parse(data);
//     console.log(data);
//     // console.log(typeof data);
// })

class FsService {
    getRead() {
        return new Promise ((res, req) => {
            let fsReadedFile = fs.readFile('data.json', 'utf-8', function(error, data) {
                // console.log('асинхронное чтение файла');
                if(error) throw error;
                console.log(typeof data);
                const obj = JSON.parse(data);
                console.log(data);
                // console.log(typeof data);
            })
            res(fsReadedFile)
        })
    }


    postWrite() {
        return new Promise ((res, req) => {
            // console.log('write');
            let data = fs.readFileSync('data.json', 'utf-8');
            console.log(data);
            const obj = JSON.parse(data);
                console.log(obj);
            obj.push(req.body);
            // console.log(obj);
          let result =  fs.writeFile('data.json', JSON.stringify(obj, null, 3), function(error){
                if(error) throw error;
                console.log('завершено');
            })
            res(result)
        })
    }
};


module.exports = new FsService ();