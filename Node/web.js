var express  = require('express'),
    path     = require('path'),
    bodyParser = require('body-parser'),
    app = express();

var cors=require('cors');// pour éviter le probleme de Access-Control-Allow-Origin
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors({origin:true,credentials: true}));




/*MySql connection*/
var connection  = require('express-myconnection'),
    mysql = require('mysql');

app.use(

    connection(mysql,{
        host     : '192.168.99.100',
        port     : '3306',
        user     : 'root',
        password : '123',
        database : 'cdp',
    },'request')

);

app.get('/',function(request,response){
    response.send('Welcome');
});


var router = express.Router();
app.use('/', router);

router.route('/user').post(function(request,response,next){
	var email = request.body.email;
	var password = request.body.password;

    request.getConnection(function(error,connection){

        if (error) return next("Impossible de ce connecter");

        var requete = connection.query('SELECT  * FROM utilisateurs where email = "'+email+'" and password = "'+password+'" ',function(error,data){

            if(error){
                console.log(error);
                return next("Erreur de requete");
            }
            else
            {
            	response.send(JSON.stringify({ 
            		result : data[0]
            	}));
            }
			
            

         });

    });

});


var server = app.listen(8081,function(){

   console.log("Listening to port %s",server.address().port);

});
