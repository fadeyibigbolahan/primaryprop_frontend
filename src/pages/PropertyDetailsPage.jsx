import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import fallbackimage from "../assets/fallbackimage.jpg";

const PropertyDetails = () => {
  const { id } = useParams();
  const [property, setProperty] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get(`https://primaryprop-backend.onrender.com/api/listings/${id}`)
      .then((res) => {
        setProperty(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Failed to load property:", err);
        setLoading(false);
      });
  }, [id]);

  if (loading) return <div className="p-4">Loading...</div>;
  if (!property) return <div className="p-4">Property not found.</div>;

  return (
    <div className="p-4 max-w-4xl mx-auto">
      <Link to="/" className="text-blue-500 underline mb-4 inline-block">
        ← Back to Listings
      </Link>
      <h1 className="text-2xl font-bold mb-2">{property.address}</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
        {(property.images.length ? property.images : [fallbackimage]).map(
          (url, i) => (
            <img
              key={i}
              src={url}
              alt={`Property ${i}`}
              className="w-full h-64 object-cover rounded-xl"
            />
          )
        )}
      </div>
      <p className="text-gray-700">
        {property.type} • {property.status}
      </p>
      <p className="text-xl text-green-600 font-semibold mt-2">
        ${property.price?.toLocaleString()}
      </p>
      <p className="text-sm text-gray-500 mt-1">
        {property.bedrooms} Beds • {property.bathrooms} Baths • {property.area}{" "}
        sqft
      </p>
    </div>
  );
};

export default PropertyDetails;
