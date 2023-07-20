async function checkOwnership() {
    let name = args.name || 'stranger'
    let greeting = 'Hello ' + name + '!'
    console.log(greeting)
    return {"body sec": greeting}
}

exports.main = checkOwnership;
