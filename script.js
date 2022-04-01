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
        id: 1,
        description: 'luz',
        amount: -50000,
        date: '29/03/2022'
    },
    {
        id: 2,
        description: 'Criação Website',
        amount: 500000,
        date: '29/03/2022'
    },
    {
        id: 3,
        description: 'internet',
        amount: -20000,
        date: '29/03/2022'
    },
    {
        id: 3,
        description: 'app',
        amount: 200000,
        date: '29/03/2022'
    }
]

const Transaction = {
    incomes() {
        // somar entradas
    },
    expenses() {
        // somar saídas
    },
    total() {
        // entradas - saídas
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
    }
}

const Utils = {
    formatCurrency(value){
        const signal = Number(value) < 0 ? "-": ""
        value = String(value).replace(/\D/g,"")
        value = Number(value) / 100
        // abaixo iremos transformar o número em moeda
        value = value.toLocaleString("pt-BR",{
            style: "currency", //estilo moeda
            currency: "BRL" //transformando a moeda em real br;
        }) 

        return signal + value 
    }
}

transactions.forEach((transaction) => {
    DOM.addTransaction(transaction);
});
