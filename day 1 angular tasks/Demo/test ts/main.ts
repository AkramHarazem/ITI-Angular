class Account {

    constructor(public Acc_no: number | string, public Balance: number) {

    }
    debitAmount() {
        return 'debit amount'
    }
    creditAmount() {
        return 'credit amount'

    }
    getBalance() {
        return this.Balance;
    }
}

interface IAccount {
    addCustomer();
    removeCustomer();
}

class SavingAccount extends Account implements IAccount {
    Date_of_opening: (string | number)

    constructor(accNo: number | string, balance: number, public Min_Balance: number) {
        super(accNo, balance)
    }
    addCustomer() {
        return 'customer'
    };
    removeCustomer() {
        return 'customer'

    };
}

class currentAccount extends Account implements IAccount {
    Date_of_opening: (string | number)

    constructor(accNo: number | string, balance: number, public Interest_rate: number) {
        super(accNo, balance)
    }
    addCustomer() {
        return 'customer'

    };
    removeCustomer() {
        return 'customer'
    };
}