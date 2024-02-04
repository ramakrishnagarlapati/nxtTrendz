import Popup from 'reactjs-popup'
import {useState} from 'react'
import {IoMdClose} from 'react-icons/io'

import 'reactjs-popup/dist/index.css'

import './index.css'

const PaymentModal = ({cartListLength, total}) => {
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState('')
  const [isOrderConfirmed, setIsOrderConfirmed] = useState(false)
  const isCashOnDeliverySelected = selectedPaymentMethod === 'Cash on Delivery'
  const isConfirmOrderDisabled = isCashOnDeliverySelected
    ? false
    : !selectedPaymentMethod
  const handlePaymentMethodChange = e => {
    setSelectedPaymentMethod(e.target.value)
  }
  const handleConfirmOrder = () => {
    setIsOrderConfirmed(true)
  }
  return (
    <Popup
      modal
      trigger={
        <button type="button" className="checkout-button">
          Checkout
        </button>
      }
    >
      {close => (
        <>
          <button
            type="button"
            className="popup-close-button"
            onClick={() => close()}
          >
            <IoMdClose size={24} />
          </button>

          <h2 className="select-payment-heading">Select Payment Method</h2>

          <form className="payment-form">
            <label className="input-label">
              <input
                type="radio"
                value="Card"
                disabled
                checked={selectedPaymentMethod === 'Card'}
                onChange={handlePaymentMethodChange}
              />
              Card
            </label>
            <label className="input-label">
              <input
                type="radio"
                value="Net Banking"
                disabled
                checked={selectedPaymentMethod === 'Net Banking'}
                onChange={handlePaymentMethodChange}
              />
              Net Banking
            </label>
            <label className="input-label">
              <input
                type="radio"
                value="UPI"
                disabled
                checked={selectedPaymentMethod === 'UPI'}
                onChange={handlePaymentMethodChange}
              />
              UPI
            </label>
            <label className="input-label">
              <input
                type="radio"
                value="Wallet"
                disabled
                checked={selectedPaymentMethod === 'Wallet'}
                onChange={handlePaymentMethodChange}
              />
              Wallet
            </label>
            <label className="input-label">
              <input
                type="radio"
                value="Cash on Delivery"
                checked={isCashOnDeliverySelected}
                onChange={handlePaymentMethodChange}
              />
              Cash on Delivery
            </label>
          </form>
          <div className="summary">
            <p className="cart-total-items">Total Items: {cartListLength}</p>
            <p className="total-price">
              Total Price: <span className="total-value">Rs {total}/-</span>
            </p>
          </div>

          <button
            type="button"
            className="confirm-order-btn"
            disabled={isConfirmOrderDisabled}
            onClick={handleConfirmOrder}
          >
            Confirm Order
          </button>

          {isOrderConfirmed && (
            <p className="confirm-order">
              Your order has been placed successfully
            </p>
          )}
        </>
      )}
    </Popup>
  )
}

export default PaymentModal
