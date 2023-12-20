function timeStamp(req,res,next) {
    let date = new Date();
    req.timestamp = date.getHours().toString().padStart(2,'0') + 
        ":" + date.getMinutes().toString().padStart(2,'0');

    // req.timestamp = date.toLocaleString([],{hour: "2-digit", minute: "2-digit"});

    console.log(`timestamp: `, req.timestamp);
    next();
}

module.exports = {
    timeStamp: timeStamp,
}