class Account {
    constructor(Acc_no, Balance) {
        this.Acc_no = Acc_no;
        this.Balance = Balance;
    }
    debitAmount() {
        return 'debit amount';
    }
    creditAmount() {
        return 'credit amount';
    }
    getBalance() {
        return this.Balance;
    }
}
class SavingAccount extends Account {
    constructor(accNo, balance, Min_Balance) {
        super(accNo, balance);
        this.Min_Balance = Min_Balance;
    }
    addCustomer() {
        return 'customer';
    }
    ;
    removeCustomer() {
        return 'customer';
    }
    ;
}
class currentAccount extends Account {
    constructor(accNo, balance, Interest_rate) {
        super(accNo, balance);
        this.Interest_rate = Interest_rate;
    }
    addCustomer() {
        return 'customer';
    }
    ;
    removeCustomer() {
        return 'customer';
    }
    ;
}
