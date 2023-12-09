import React, { useState } from 'react';
const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phoneNumber: '',
    text: '',
  });

  const handelChange = e => {
    const { name, value } = e.target;
    setFormData(prevData => ({ ...prevData, [name]: value }));
  };

  const handelSubmit = async e => {
    e.preventDefault();

    await sendDataToServer(formData);
  };

  const sendDataToServer = async formData => {
    try {
      const { name, email, phoneNumber, text } = formData;
      if (!name || !email || !phoneNumber || !text) {
        alert('Please fill all the data');
        return;
      }
      const response = await fetch('http://localhost:4000/submit-form', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      setFormData({
        name: '',
        email: '',
        phoneNumber: '',
        text: '',
      });
      if (response.ok) {
        console.log('Form data successfully sent to the server!');
      } else {
        console.log('Failed to send form data to the server');
      }
    } catch (error) {
      console.error('Error sending form data:', error);
    }
  };
  return (
    <div className="contact">
      <main>
        <h1>Contact Us</h1>

        <form>
          <div>
            <label htmlFor="">Name</label>
            <input
              type="text"
              required
              placeholder="abc"
              name="name"
              value={formData.name}
              onChange={handelChange}
            />
          </div>

          <div>
            <label htmlFor="">Email</label>
            <input
              type="email"
              required
              placeholder="abc@abc.com"
              name="email"
              value={formData.email}
              onChange={handelChange}
            />
          </div>
          <div>
            <label htmlFor="">Phone Number</label>
            <input
              type="number"
              required
              placeholder="1234567890"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handelChange}
            />
          </div>
          <div>
            <label htmlFor="">Message</label>
            <input
              type="text"
              required
              name="text"
              placeholder="Tell us about your query..."
              value={formData.text}
              onChange={handelChange}
              //   onChange={e => setText(e.target.value)}
            />
          </div>

          <button type="submit" onClick={handelSubmit}>
            Sumbit
          </button>
        </form>
      </main>
    </div>
  );
};

export default ContactUs;
