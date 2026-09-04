# Abstractions.
# Bank Class->
# deposits, withdrawal,
# show account.
# getter and setter. ->
# -> easy to scale function <understing>

# -> Login account
# -> Create account
# -> Deposit
# -> withdrawal
# -> account balance

"""
Static <it does not change>.<class properties> properties, <Belong to the class>
Static Method.<class method. <Function belongs to the class>

Why would you want to use a class property.
"""

class BankAccount:
    clients = 0 #static
    bank_name = "Post Bank" #static property
    
    # this -> .<
    def __init__(self, name, balance, account_no):
        self.name = name
        self.balance = balance
        self.account_no = account_no
        #BankAccount.clients = BankAccount.clients + 1
        #self._class_.clients = self._class_.clients + 1
        #self._class_.add_client()
        BankAccount.add_client()
        #self._class_.bank_name = name_bank
        #self._class_.clients += 1
        #BankAccount.clients += self.clients
        
    #data i read
    @property
    def balance(self):
        print("somebody tried to read johns balance")
        return self._balance
        
    #to control updated
    @balance.setter
    def balance(self, value):
        if not isinstance(value, (int, float)):
            print("Ensure you pass a number for new balance")
            return
        if value < 0:
            print("Ensure now balance must not be less than 0")
            return
        self._balance = value
        
    #Instance method< self->object>
    def deposit(self):
        pass
        
    def withdrawal(self):
        pass
        
    def show_account_details(self):
        print(f"Owner {self.name}")
        print(f"Balance {self.balance}")
        print(f"Account No {self.account_no}")
        
    #Static Method.<class method><cls> @staticmethod ->
    
    @staticmethod
    def calculate_interest(amount, year):
        rate = 10
        interest_per_year = amount * (rate / 100)
        interset_total = interest_per_year * year
        total = amount + interset_total
        print(f"if you take a loan, of ${amount} , interest rate per year {interest_per_year}")
        print(f"Total interest {interset_total}, total to pay {total} after {year}")
        
    #Class Method. 
    #class itself.
    @classmethod
    def add_client(cls):
        cls.clients = cls.clients + 1
        
john = BankAccount(name="John Mwangi", balance=0, account_no="223344223")
print("Total clients", BankAccount.clients)

samuel = BankAccount(name="Samuel", balance=0, account_no="223344223")
print("Total clients", BankAccount.clients)

BankAccount.calculate_interest(50000, 3)
