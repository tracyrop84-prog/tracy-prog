"""
    Abstractions.
    Bank Class ->
    deposits, withdrawal,
    show account.
    getter and setter. ->
    -> easy to scale function <understanding>
    
    -> Login account
    -> Create account
    -> Deposit
    -> Withdrawal
    -> account balance
"""
class BankAccount:
    def __init__(self,name,balance,account_no):
        self.name=name
        self.balance=balance
        self.account_no=account_no
        
    def get_balance(self,):
        return self.balance
    def deposit(self,deposit_amount):
        self.balance=self.balance+deposit_amount
    def withdrawal(self,withdrawal_amount):
        if withdrawal_amount<=self.balance:
            self.balance=self.balance-withdrawal_amount
        else:
            print("Insufficient funds")

        
    def show_account_details(self):
        print("\n--- Account Details ---")
        print("Account name:",self.name)
        print("balance:",self.balance)
        print("Account no:",self.account_no)
        print("-----------------------")
        

tracy=BankAccount(name="tracy",balance=3000,account_no="457287792")
tracy.deposit(600)
tracy.withdrawal(7)
tracy.show_account_details()