
import { useState } from "react";

const ParcelForm = () => {
  const [formData, setFormData] = useState({
    from: "",
    to: "",
    weight: "",
    dimensions: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <form className="space-y-4">
      <div>
        <label htmlFor="from" className="block">Adresse de départ</label>
        <input
          type="text"
          name="from"
          id="from"
          value={formData.from}
          onChange={handleChange}
          className="w-full p-2 border border-gray-300 rounded"
        />
      </div>
      <div>
        <label htmlFor="to" className="block">Adresse d’arrivée</label>
        <input
          type="text"
          name="to"
          id="to"
          value={formData.to}
          onChange={handleChange}
          className="w-full p-2 border border-gray-300 rounded"
        />
      </div>
      <div>
        <label htmlFor="weight" className="block">Poids du colis</label>
        <input
          type="number"
          name="weight"
          id="weight"
          value={formData.weight}
          onChange={handleChange}
          className="w-full p-2 border border-gray-300 rounded"
        />
      </div>
      <div>
        <label htmlFor="dimensions" className="block">Dimensions du colis</label>
        <input
          type="text"
          name="dimensions"
          id="dimensions"
          value={formData.dimensions}
          onChange={handleChange}
          className="w-full p-2 border border-gray-300 rounded"
        />
      </div>
      <button className="bg-green-500 text-white px-6 py-3 rounded-lg mt-4">Calculer le prix</button>
    </form>
  );
};

export default ParcelForm;
