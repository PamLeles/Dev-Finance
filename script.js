const Modal = {
    open() {
        //abrir modal
        //add class active ao modal
        document
            .querySelector('.modal-overlay')
            .classList.add('active')

    },
    close() {
        //fechar modal
        //remover a class active do modal
        document
            .querySelector('.modal-overlay')
            .classList.remove('active')
    }
}
const transactions = [
    {
        
        description: 'luz',
        amount: -50000,
        date: '29/03/2022'
    },
    {
        
        description: 'Criação Website',
        amount: 500000,
        date: '29/03/2022'
    },
    {
        
        description: 'internet',
        amount: -20000,
        date: '29/03/2022'
    },
    {
        
        description: 'app',
        amount: 200000,
        date: '29/03/2022'
    }
]

const Transaction = { //const responsavel por fazer o cálculo!
    all: transactions, //refaturação no código
    add(transaction) {
        Transaction.all.push(transaction)//colocar dentro do array 
        App.reload()
    },

    remove(index){
        Transaction.all.splice(index,1)//posição do array
        App.reload()

    },

    incomes() {
        let income = 0;
        // pegar todas transações
        //para cada transação 
        Transaction.all.forEach(transaction => {
            //se maior que 0 
            if (transaction.amount > 0) {
                // somar a uma variavel
                income += transaction.amount;
                // mesma coisa que income = income + transaction.amount;
                // ou seja income = 0, transaction. amount =  valor das transações.
            }

        })

        //retornar a variavel
        return income;

    },

    expenses() {
        let expense = 0;
        Transaction.all.forEach(transaction => {
            //se menor que 0 
            if (transaction.amount < 0) {
                expense += transaction.amount;
            }

        })

        return expense;

    },

    total() {
        // entradas - saídas
        return Transaction.incomes() + Transaction.expenses();

    }
}
const DOM = {
    transactionsContainer: document.querySelector('#data-table tbody'),
    addTransaction(transaction, index) {
        const tr = document.createElement('tr');
        tr.innerHTML = DOM.innerHTMLTransaction(transaction);
        DOM.transactionsContainer.appendChild(tr);
    },
    innerHTMLTransaction(transaction) {
        const CSSClass = transaction.amount > 0 ? "income" : "expense";

        const amount = Utils.formatCurrency(transaction.amount)
        //>trocar transaction.amount para amount - dessa forma ele irá tranformar
        // o valor que antes eram apenas números, para a moeda/real. 


        const html = `
            <td class="description">${transaction.description}</td>
            <td class="${CSSClass}">${amount}</td>
            <td class="date">${transaction.date}</td>
            <td>
                <img src="./assets/minus.svg" alt="Remover Transação">
            </td>
        `;

        return html;
    },
    updateBalance() {
        //mostar atualizando de valor nos cards
        //chamar id
        document
            .getElementById('incomeDisplay')
            .innerHTML = Utils.formatCurrency(Transaction.incomes())
        document
            .getElementById('expenseDisplay')
            .innerHTML = Utils.formatCurrency(Transaction.expenses())
        document
            .getElementById('totalDisplay')
            .innerHTML = Utils.formatCurrency(Transaction.total())


    },
    clearTransactions(){
        DOM.transactionsContainer.innerHTML = ""
    }

}

const Utils = {
    formatCurrency(value) {
        const signal = Number(value) < 0 ? "-" : ""
        value = String(value).replace(/\D/g, "")
        value = Number(value) / 100
        // abaixo iremos transformar o número em moeda
        value = value.toLocaleString("pt-BR", {
            style: "currency", //estilo moeda
            currency: "BRL" //transformando a moeda em real br;
        })

        return signal + value //retorna o dinheiro posito ou negativo;
    }
}

const App = {
    init() {
        Transaction.all.forEach(transaction => {
            DOM.addTransaction(transaction);
        });

        DOM.updateBalance();



    },
    reload() {
        DOM.clearTransactions()
        App.init()
    },
}
App.init();

