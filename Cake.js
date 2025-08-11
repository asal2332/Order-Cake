
document.addEventListener('DOMContentLoaded', () => {
    const elements = {
        quantityInput: document.querySelector('.quantity-input'),
        quantityText: document.querySelector('.quantity-text'),
        totalPrice: document.querySelector('.total-price'),
        plusBtn: document.querySelector('.plus-btn'),
        minusBtn: document.querySelector('.minus-btn')
    };

    let quantity = 1;
    const unitPrice = 3;

    const updatePrices = () => {
        elements.quantityInput.value = quantity;
        elements.quantityText.textContent = quantity.toString();

        const total = unitPrice * quantity;
        elements.totalPrice.textContent = total + ' $';
    };

    elements.plusBtn.addEventListener('click', () => {
        quantity++;
        updatePrices();
    });

    elements.minusBtn.addEventListener('click', () => {
        if (quantity > 1) {
            quantity--;
            updatePrices();
        }
    });

    updatePrices();
});


