let http=require("http");
let url=require("url");
let formidable = require('formidable');
let fs = require('fs');
http.createServer(function (req, res) {
        if(req.url=="/fileupload"){
              let form=new formidable.IncomingForm();
              form.parse(req, function(err, fields, files){
                let oldpath = files.filetoupload[0].filepath;
                let newpath='C:/Users/HP/Documents/Lab1/'+files.filetoupload.originalFilename;
                fs.rename(oldpath, newpath, function(err){
                    if (err) throw err;
                    res.write('File uploaded and moved!');
                    res.end();
                })
              })
        }else{
              res.writeHead(200, {'Content-Type':'text/html'})
              res.write('<form action="/fileupload" method="post" enctype="multipart/form-data">');
              res.write('<input type="file" id="myFile" name="filetoupload">');
              res.write('<input type="submit">')
              res.write('</form>')
              res.end();
        }
        }).listen(8080);

