const transactions = [
{ customerId: 1, amount: 100, date: '2024-03-01' },
{ customerId: 2, amount: 150, date: '2024-03-01' },
{ customerId: 1, amount: 200, date: '2024-03-02' },
{ customerId: 3, amount: 50, date: '2024-03-02' },
{ customerId: 2, amount: 120, date: '2024-03-03' }
]
//1. Calculate the total number of transactions
const totalTransactions = transactions.length;

//2.Calculate total amount of all transactions
const totalAmount = transactions.reduce((acc, transaction) => acc + transaction.amount, 0);

//3.Calculate the average amount of transaction
const averageTransactionAmount = totalAmount / totalTransactions;

//4. Group transactions by Date
const transactionsPerDay = transactions.reduce((acc, transaction) => { //A callback function that is 
// executed on each item.An initial value for the accumulator ({} here, i.e., an empty object).
    if(!acc[transaction.date]){
        acc[transaction.date] = [];
    }
    acc[transaction.date].push(transaction);
    return acc;
}, {});

//5.Group all transactions by Customer
const transactionsPerCustomer = transactions.reduce((acc, transaction) => {
    if(!acc[transaction.customerId]){
        acc[transaction.customerId] = [];
    }
    acc[transaction.customerId].push(transaction);
    return acc;
}, {});

//6.Combine all rsults into a single object
const result = {
    totalTransactions,
    totalAmount,
    averageTransactionAmount,
    transactionsPerDay,
    transactionsPerCustomer
};
console.log(JSON.stringify(result, null, 2));


