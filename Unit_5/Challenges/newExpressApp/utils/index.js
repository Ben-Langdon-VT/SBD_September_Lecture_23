function timeStamp(req,res,next) {
    let date = new Date(Date.now());
    req.timestamp = date.getHours().toString().padStart(2,'0') + 
        ":" + date.getMinutes().toString().padStart(2,'0');

    console.log(`timestamp: `, req.timestamp);
    next();
}

module.exports = {
    timeStamp: timeStamp,
}