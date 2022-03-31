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
    addTransaction(transaction, index) {
        const tr = document.createElement('tr')
        tr.innerHTML = DOM.innerHTMLTransaction()
    },
    innerHTMLTransaction(transaction) {
        const html = `
        <tr>
            <td class="description">luz</td>
            <td class="expense"> - R$ 500,00</td>
            <td class="date">29/03/2022</td>
            <td>
                <img src="./assets/minus.svg" alt="Remover Transação">
            </td>
        </tr>
        `
        return html

    }
}
DOM.addTransaction(transactions[0])
