import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { api } from "../../services/api";

export const UpdateProfile = () => {
  const navigate = useNavigate();
  const [profile, setProfile] = useState({
    fullName: "",
    phone: "",
    address: "",
    education: "",
    exp: "",
    companyName: "",
    companyWebsite: "",
    companyDescription: "",
    designation: "",
  });
  const [loading, setLoading] = useState(true);
  const [message, setMessage] = useState("");
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const res = await api.get("/users/profile", { withCredentials: true });
        setProfile(res.data);
      } catch {
        setMessage("Failed to load profile.");
      } finally {
        setLoading(false);
      }
    };
    fetchProfile();
  }, []);

  const handleChange = (e) => setProfile({ ...profile, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    try {
      await api.put("/users/profile", profile, { withCredentials: true });
      setMessage("Profile updated successfully!");
      alert("Profile updated successfully!");
      setTimeout(() => navigate("/employer-dashboard"), 1000);
    } catch {
      setMessage("Failed to update profile");
    } finally {
      setSubmitting(false);
    }
  };

  if (loading) return <p className="text-white text-center mt-16">Loading profile...</p>;

  return (
    <div className="absolute h-full w-full min-h-screen flex justify-center items-start bg-gradient-to-br from-gray-900 to-gray-800 p-6 sm:p-5 overflow-hidden">
      <motion.img
        src="/images/features-page.webp"
        alt="Update Profile"
        className="absolute inset-0 w-full h-full object-cover blur-md brightness-50 z-0"
        initial={{ scale: 1.4 }}
        animate={{ scale: 1 }}
        transition={{ duration: 8, ease: "easeInOut", repeat: Infinity, repeatType: "reverse" }}
      />
      <motion.form
        onSubmit={handleSubmit}
        className="relative z-10 bg-black/60 backdrop-blur-md p-8 sm:p-6 rounded-xl text-white w-full max-w-sm sm:max-w-md shadow-lg mt-18"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-xl sm:text-2xl font-bold mb-2 text-center mt-20">Update Profile</h1>

        <h2 className="text-base sm:text-lg font-semibold mb-1">Personal Info</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-3">
          <input type="text" name="fullName" value={profile.fullName} onChange={handleChange} placeholder="Full Name" className="p-2 rounded bg-white/10 border border-white/20 text-sm" />
          <input type="text" name="phone" value={profile.phone} onChange={handleChange} placeholder="Phone" className="p-2 rounded bg-white/10 border border-white/20 text-sm" />
          <input type="text" name="address" value={profile.address} onChange={handleChange} placeholder="Address" className="p-2 rounded bg-white/10 border border-white/20 col-span-full text-sm" />
          <input type="text" name="education" value={profile.education} onChange={handleChange} placeholder="Education" className="p-2 rounded bg-white/10 border border-white/20 text-sm" />
        </div>

        <h2 className="text-base sm:text-lg font-semibold mb-1">Company Info</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-3">
          <input type="text" name="companyName" value={profile.companyName} onChange={handleChange} placeholder="Company Name" className="p-2 rounded bg-white/10 border border-white/20 text-sm" />
          <input type="text" name="companyWebsite" value={profile.companyWebsite} onChange={handleChange} placeholder="Company Website" className="p-2 rounded bg-white/10 border border-white/20 text-sm" />
          <input type="text" name="designation" value={profile.designation} onChange={handleChange} placeholder="Designation" className="p-2 rounded bg-white/10 border border-white/20 text-sm col-span-full" />
          <textarea name="companyDescription" value={profile.companyDescription} onChange={handleChange} placeholder="Company Description" className="p-2 rounded bg-white/10 border border-white/20 col-span-full text-sm resize-none" rows={3} />
        </div>

        <div className="flex flex-col sm:flex-row gap-2">
          <button type="submit" disabled={submitting} className="flex-1 bg-teal-600 hover:bg-teal-500 py-2 rounded font-semibold text-sm disabled:opacity-50">
            {submitting ? "Updating..." : "Update Profile"}
          </button>
          <button type="button" onClick={() => navigate("/employer-dashboard")} className="flex-1 bg-gray-600 hover:bg-gray-500 py-2 rounded font-semibold text-sm">
            Cancel
          </button>
        </div>

        {message && <p className="mt-2 text-center text-yellow-400 text-sm">{message}</p>}
      </motion.form>
    </div>
  );
};
