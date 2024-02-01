let handler = m => m

handler.all = async function (m) {
    let user = global.db.data.users[m.sender]
    if ((user.money * 1) > 99999999999999999999998) {
    	let money = user.money-99999999999999999999998
        user.money = 99999999999999999999998
        user.bank += money
    } else if ((user.money * 1) < 0) {
        user.money = 0
    }
    if ((user.limit * 1) > 999999) {
    	let limit = user.limit-100000
        user.limit = 100000
        user.exp += limit * 100000
    } else if ((user.limit * 1) < 0) {
        user.limit = 0
    }
    if ((user.health * 1) > 100) {
        user.health = 100
    } else if ((user.health * 1) < 0) {
        user.health = 0
    }
}

export default handler 
