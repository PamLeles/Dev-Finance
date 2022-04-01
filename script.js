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
        const CSSClass = transaction.amount >= 0 ? "income" : "expense";
        
        const html = `
            <td class="description">${transaction.description}</td>
            <td class="${CSSClass}">${transaction.amount}</td>
            <td class="date">${transaction.date}</td>
            <td>
                <img src="./assets/minus.svg" alt="Remover Transação">
            </td>
        `;

        return html;
    }
}

transactions.forEach((transaction) => {
    DOM.addTransaction(transaction);
});
