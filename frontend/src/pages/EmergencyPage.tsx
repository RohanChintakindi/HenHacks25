import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import EmergencyTypeCard from "../components/EmergencyTypeCard";
import axios from "axios";
import { Flame, Cross, Car } from "lucide-react";

function EmergencyPage() {
  const make_call = async (type: string) => {
    try {
      const response = await axios.post(`http://127.0.0.1:5000/call-${type}`);
      alert(response.data.message); // Show the response message
    } catch (error) {
      console.error("Error making the call:", error);
    }
  };

  const navigate = useNavigate();
  const [phoneNumber, setPhoneNumber] = useState("");
  const [selectedEmergency, setSelectedEmergency] = useState<string | null>(
    null
  );
  const [phoneError, setPhoneError] = useState(false);

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/\D/g, "");
    setPhoneNumber(value);
    setPhoneError(value.length > 0 && value.length !== 10);
  };

  const isFormValid = phoneNumber.length === 10 && selectedEmergency !== null;

  const navigateToHome = () => {
    navigate("/");
  };

  const handleSubmit = () => {
    if (isFormValid) {
      if (selectedEmergency === "Fire Emergency") {
        make_call("fire");
      } else if (selectedEmergency === "Medical Emergency") {
        make_call("medical");
      } else if (selectedEmergency === "Traffic Accident") {
        make_call("traffic");
      }
      navigate("/score", {
        state: {
          phoneNumber,
          emergencyType: selectedEmergency,
        },
      });
    }
  };

  return (
    <>
      <div className="text-center max-w-4xl mx-auto mb-16">
        <h1 className="text-6xl font-bold mb-8 pb-4">
          <span className="bg-gradient-to-r from-[#4318D1] to-[#A78BFA] inline-block text-transparent bg-clip-text">
            Choose Your Emergency Type
          </span>
        </h1>
        <p className="subtitle text-xl text-gray-400 mb-12">
          Select the type of emergency and enter your contact details for
          immediate assistance
        </p>
      </div>

      <div className="max-w-2xl mx-auto mb-12">
        <div className="mb-6">
          <label htmlFor="phone" className="block text-gray-400 mb-2">
            Phone Number (required)
          </label>
          <div className="flex">
            <div className="bg-gray-800 text-white px-4 py-3 rounded-l-md border-r border-gray-700 flex items-center">
              <span>+1</span>
            </div>
            <input
              type="tel"
              id="phone"
              value={phoneNumber}
              onChange={handlePhoneChange}
              placeholder="Enter a verified phone number"
              className={`bg-gray-800 text-white tracking-widest px-4 py-3 rounded-r-md flex-1 focus:outline-none focus:ring-2 ${
                phoneError
                  ? "focus:ring-red-500 border border-red-500"
                  : "focus:ring-indigo-500"
              }`}
              maxLength={10}
            />
          </div>
          {phoneError && (
            <p className="text-red-500 mt-2">
              Phone number must be exactly 10 digits
            </p>
          )}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-12">
        <EmergencyTypeCard
          color="linear-gradient(90deg,rgb(180, 56, 42) 0%, rgb(197, 165, 48) 100%)"
          icon={<Flame className="text-white" size={36} />}
          title="Fire Emergency"
          isSelected={selectedEmergency === "Fire Emergency"}
          onClick={() => setSelectedEmergency("Fire Emergency")}
        />
        <EmergencyTypeCard
          color="linear-gradient(90deg,rgb(158, 16, 0) 0%, rgb(59, 0, 0) 100%)"
          icon={<Cross className="text-white" size={36} />}
          title="Medical Emergency"
          isSelected={selectedEmergency === "Medical Emergency"}
          onClick={() => setSelectedEmergency("Medical Emergency")}
        />
        <EmergencyTypeCard
          color="linear-gradient(90deg,rgb(160, 16, 0) 0%, rgb(0, 41, 155) 100%)"
          icon={<Car className="text-white" size={36} />}
          title="Traffic Accident"
          isSelected={selectedEmergency === "Traffic Accident"}
          onClick={() => setSelectedEmergency("Traffic Accident")}
        />
      </div>

      <div className="flex justify-center gap-4 mt-8">
        <button
          onClick={navigateToHome}
          className="border border-white hover:bg-white/20 text-white px-8 py-3 rounded-md transition-all duration-300 transform font-medium"
        >
          Back
        </button>
        <button
          disabled={!isFormValid}
          onClick={handleSubmit}
          className={`px-8 py-3 rounded-md transition-all duration-300 font-medium ${
            isFormValid
              ? "bg-[#4318D1] hover:bg-[#7451E6] text-white transform"
              : "bg-gray-600 text-gray-400 cursor-not-allowed"
          }`}
        >
          Submit Emergency Request
        </button>
      </div>
    </>
  );
}

export default EmergencyPage;
