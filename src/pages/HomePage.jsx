import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import fallbackimage from "../assets/fallbackimage.jpg";

const HomePage = () => {
  const [listings, setListings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const ITEMS_PER_PAGE = 50; // Should match backend perPage

  const fetchListings = async (page) => {
    setLoading(true);
    try {
      const res = await axios.get(
        `https://primaryprop-backend.onrender.com/api/listings?page=${page}`
      );
      setListings(res.data.listings);
      setTotalPages(Math.ceil(res.data.totalCount / ITEMS_PER_PAGE) || page); // optional
      setLoading(false);
    } catch (err) {
      console.error("Failed to load listings:", err);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchListings(currentPage);
  }, [currentPage]);

  if (loading)
    return <div className="p-4 text-center">Loading listings...</div>;

  return (
    <div className="p-4">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
        {listings.map((listing) => (
          <Link to={`/property/${listing.id}`} key={listing.id}>
            <div className="border rounded-2xl shadow-md p-4 hover:shadow-lg transition">
              <img
                src={listing.images?.[0] || fallbackimage}
                alt={listing.address}
                className="w-full h-48 object-cover rounded-xl mb-3"
              />
              <h2 className="text-xl font-semibold">{listing.address}</h2>
              <p className="text-gray-700">
                {listing.type} • {listing.status}
              </p>
              <p className="mt-1 text-lg font-bold text-green-600">
                ${listing.price?.toLocaleString()}
              </p>
              <p className="text-sm text-gray-500">
                {listing.bedrooms} Beds • {listing.bathrooms} Baths •{" "}
                {listing.area} sqft
              </p>
            </div>
          </Link>
        ))}
      </div>

      {/* Pagination controls */}
      <div className="flex justify-center items-center gap-4">
        <button
          onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}
          disabled={currentPage === 1}
          className="px-4 py-2 bg-gray-200 rounded disabled:opacity-50"
        >
          Previous
        </button>
        <span className="font-medium">
          Page {currentPage} of {totalPages}
        </span>
        <button
          onClick={() => setCurrentPage((p) => p + 1)}
          className="px-4 py-2 bg-gray-200 rounded"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default HomePage;
