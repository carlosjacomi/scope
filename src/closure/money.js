moneyBox = (coins) => {
    let saveCoins = 0
    saveCoins += coins
    console.log(`MoneyBox: ${saveCoins}`)
}

moneyBox(5)//5
moneyBox(5)//5

//usando closure

moneyBox2 = () => {
    let saveCoins = 0
    countCoins = (coins) => {
        saveCoins += coins
        console.log(`MoneyBox: $${saveCoins}`)
    }
    return countCoins
}

const MyMoneyBox = moneyBox2()
MyMoneyBox(5)//5
MyMoneyBox(5)//10
MyMoneyBox(15)//25

const moneyBoxAna = moneyBox2()
moneyBoxAna(10)
moneyBoxAna(20)
moneyBoxAna(5)