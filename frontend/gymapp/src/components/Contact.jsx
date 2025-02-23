import React, { useState } from "react";
import axios from "axios";
import { ClipLoader } from "react-spinners";
import { toast } from "react-toastify";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setMail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const sendMail = async (e) => {
    e.preventDefault();
    setLoading(true); // Corrected this line
    try {
      const { data } = await axios.post(
        "https://gym-website-backend-67cj.onrender.com/send/mail",
        {
          name,
          email,
          message,
        },
        { withCredentials: true, headers: { 'Content-Type': 'application/json' } }
      );
      setName("");
      setMail("");
      setMessage("");
      toast.success(data.message);
      setLoading(false);
    } catch (error) {
      toast.error(error.response.data.message);
      setLoading(false); // Ensure loading is stopped on error
    }
  };
  
  return (
    <section className='contact'>
      <form onSubmit={sendMail}>
        <h1>Contact Us</h1>
        <div>
          <label>Name</label>
          <input
            type='text'
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div>
          <label>Email</label>
          <input
            type='email'
            value={email}
            onChange={(e) => setMail(e.target.value)}
          />
        </div>
        <div>
          <label>Message</label>
          <input
            type='text'
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
        </div>
        <button
          type='submit'
          disabled={loading}
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: "15px",
          }}
        >
          {loading && <ClipLoader size={20} color="white"/>}
          Send Message
        </button>
      </form>
    </section>
  );
};

export default Contact;
