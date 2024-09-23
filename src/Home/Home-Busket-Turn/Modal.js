import { useForm } from "react-hook-form";
import "../Home-Busket-Turn/Modal.scss";
export const Modal = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log("Submitted data:", data);
    setTimeout(() => {
      console.log("Payment successful: Payment processed successfully");
      alert("Payment successful: Payment processed successfully");
    }, 1000);
  };

  return (
    <div className="card-payments-container">
      <h2 className="form-title">Payment Form</h2>
      <form className="payment-form" onSubmit={handleSubmit(onSubmit)}>
        <div className="form-group">
          <label htmlFor="cardNumber" className="form-label">
            Card Number
          </label>
          <input
            id="cardNumber"
            className="form-input"
            type="text"
            placeholder="1234 5678 9012 3456"
            {...register("cardNumber", {
              required: "Card number is required",
              pattern: {
                value: /^\d{4} \d{4} \d{4} \d{4}$/,
                message: "Invalid card number format. Use XXXX XXXX XXXX XXXX.",
              },
            })}
          />
          {errors.cardNumber && (
            <p className="form-error">{errors.cardNumber.message}</p>
          )}
        </div>

        <div className="form-group">
          <label htmlFor="expiryDate" className="form-label">
            Expiry Date (MM/YY)
          </label>
          <input
            id="expiryDate"
            className="form-input"
            type="text"
            placeholder="MM/YY"
            {...register("expiryDate", {
              required: "Expiry date is required",
              pattern: {
                value: /^(0[1-9]|1[0-2])\/\d{2}$/,
                message: "Invalid expiry date format. Use MM/YY.",
              },
            })}
          />
          {errors.expiryDate && (
            <p className="form-error">{errors.expiryDate.message}</p>
          )}
        </div>

        <div className="form-group">
          <label htmlFor="cvv" className="form-label">
            CVV
          </label>
          <input
            id="cvv"
            className="form-input"
            type="number"
            placeholder="123"
            {...register("cvv", {
              required: "CVV is required",
              minLength: {
                value: 3,
                message: "CVV must be 3 digits.",
              },
              maxLength: {
                value: 3,
                message: "CVV must be 3 digits.",
              },
            })}
          />
          {errors.cvv && <p className="form-error">{errors.cvv.message}</p>}
        </div>

        <button className="submit-button" type="submit">
          Pay Now
        </button>
      </form>
    </div>
  );
};
