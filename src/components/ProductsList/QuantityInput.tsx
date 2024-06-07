import React, { useState } from 'react';

interface QuantityInputProps {
  initialQuantity?: number;
  min?: number;
  max?: number;
}

const QuantityInput: React.FC<QuantityInputProps> = ({ initialQuantity = 1, min = 1, max = 100 }) => {
  const [quantity, setQuantity] = useState(initialQuantity);

  const handleIncrease = () => {
    if (quantity < max) {
      setQuantity(quantity + 1);
    }
  };

  const handleDecrease = () => {
    if (quantity > min) {
      setQuantity(quantity - 1);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value);
    if (!isNaN(value) && value >= min && value <= max) {
      setQuantity(value);
    }
  };

  return (
    <div className="quantity-input">
      <button onClick={handleDecrease} disabled={quantity <= min}>-</button>
      <input type="number" value={quantity} onChange={handleChange} />
      <button onClick={handleIncrease} disabled={quantity >= max}>+</button>
    </div>
  );
};

export default QuantityInput;
