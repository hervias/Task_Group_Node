
function index(req,res){
    let nombre = req.session.datauser;
    return res.status(206).send({message:nombre});
}

function credential(req,res){
    if(req.session.datauser == req.body.key){
        return res.status(403).send({message:req.body.key}); 
    }else{
        req.session.datauser = req.body.key;
        return res.status(204).send({message:req.body.key});
    }
}

function message(req,res){
    let arreglo = [];
    if(req.session.message != null && req.session.message != undefined){
        arreglo = req.session.message;
        console.log('hola');
    }else{
        console.log('hi');
    }
    var contador = arreglo.length+1;
    var msg = {
        identifier:contador,
        msg: req.body.msg,
        tags: req.body.tags
      };

    arreglo.push(msg);
    req.session.message = arreglo;
    return res.status(200).send({'identifier':arreglo.length});
}

function messageid(req,res){
    console.log(req.params.value);

    let arreglo = [];
    if(req.session.message != null && req.session.message != undefined){
        arreglo = req.session.message;
        console.log('hola');
    }

    let mmssgg = "";
    if(arreglo.length > 0){
        arreglo.forEach(function(name){
            if(name.identifier == req.params.value){
                mmssgg = name.msg;
                console.log("encontro data");
            }
        });
    }

    return res.status(200).send({'msg':mmssgg});
}

function messagetag(req,res){
    console.log(req.params.value);

    let arreglo = [];
    if(req.session.message != null && req.session.message != undefined){
        arreglo = req.session.message;
        console.log('hola');
    }

    let mmssgg = [];
    if(arreglo.length > 0){
        arreglo.forEach(function(name){
            if(name.tags == req.params.value){
                mmssgg.push(name.msg);
                console.log("encontro data");
            }
        });
    }

    return res.status(200).send({'msg':mmssgg});
}

module.exports = {
    index,
    credential,
    message,
    messageid,
    messagetag
}