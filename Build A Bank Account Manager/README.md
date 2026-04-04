Project Overview

This project is part of the FreeCodeCamp JavaScript Certification, specifically from the lab "Build a Bank Account Management Program". It focuses on applying object-oriented programming (OOP) concepts to simulate a simple banking system.

The application models a bank account that allows users to perform basic financial operations such as deposits and withdrawals, while also maintaining a structured transaction history. This project is designed to strengthen understanding of class-based design, state management, and data handling in JavaScript.

🔗 Project Link: (https://www.freecodecamp.org/learn/javascript-v9/lab-bank-account-manager/build-a-bank-account-management-program)

Features

The system is built around a BankAccount class that represents a user’s bank account. Each account maintains a balance and a transaction history, where every transaction is recorded as an object containing its type (deposit or withdrawal) and the corresponding amount.

The application supports core banking operations such as depositing and withdrawing funds. Deposits increase the account balance and are only accepted when the amount is greater than zero. Withdrawals decrease the balance and are only processed when the amount is valid and does not exceed the available balance. Each successful transaction is recorded and returns a confirmation message, while invalid operations return appropriate error messages.

In addition to transaction handling, the system provides utility methods to check the current balance and retrieve transaction summaries. Users can view all deposit transactions or all withdrawal transactions in a structured string format, making it easy to review financial activity.

An instance of the bank account is also initialized with multiple transactions, including both deposits and withdrawals, ensuring that the system reflects a realistic usage scenario with a balance exceeding $100.
