"use client";
import { useState } from "react";
import { toast } from 'react-toastify';

const ContactForm = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        budget: "",
        message: "",
        interest: [],
      });
    
      const [errors, setErrors] = useState({});
      const [submitted, setSubmitted] = useState(false);
    
      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
      };
    
      const handleInterestClick = (interest) => {
        setFormData((prevState) => {
          const newInterest = prevState.interest.includes(interest)
            ? prevState.interest.filter((item) => item !== interest)
            : [...prevState.interest, interest];
          return { ...prevState, interest: newInterest };
        });
      };
    
      const validate = () => {
        let tempErrors = {};
        if (!formData.name.trim()) tempErrors.name = "Name is required";
        if (!formData.email.trim()) {
          tempErrors.email = "Email is required";
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
          tempErrors.email = "Invalid email format";
        }
        if (!formData.subject.trim()) tempErrors.subject = "Subject is required";
        if (!formData.budget) tempErrors.budget = "Budget is required";
        if (!formData.message.trim()) tempErrors.message = "Message is required";
        if (formData.interest.length === 0) tempErrors.interest = "Please select at least one interest";
        
        setErrors(tempErrors);
        return Object.keys(tempErrors).length === 0;
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        if (validate()) {
          setSubmitted(true);
          toast.success('Form submitted successfully!');
          setFormData({ name: "", email: "", subject: "", budget: "", message: "", interest: [] });
          setErrors({});
        }
      };  
  return (
    <div className="contact-container">
        <div className="section-title">
        <h3>Let's Talk 👋 About Your Project</h3>
        <p>Interested in working with me? Submit your project inquiry using the form below.</p>
        </div>
        <div className="interested">
        <p>I'm interested in...</p>
        <div className="item-list">
            {["UI UX Design", "Mobile App", "Web Design", "Web Development"].map((item) => (
            <div 
                key={item} 
                className={`btn item ${formData.interest.includes(item) ? 'filled' : ''}`}
                onClick={() => handleInterestClick(item)}
            >
                {item}
            </div>
            ))}
        </div>
        {errors.interest && <p className="error" style={{ color: "red" }}>{errors.interest}</p>}
        </div>
        <h3 className="request">Request a quote</h3>            
        <form onSubmit={handleSubmit} className="contact-form">
        <div className="input-container">
            <div className="input-control">
            <label>Name:</label>
            <input type="text" name="name" value={formData.name} onChange={handleChange} />
            {errors.name && <p style={{ color: "red" }}>{errors.name}</p>}
            </div>
            <div className="input-control">
            <label>Email:</label>
            <input type="email" name="email" value={formData.email} onChange={handleChange} />
            {errors.email && <p style={{ color: "red" }}>{errors.email}</p>}
            </div>
        </div>

        <div className="input-container">
            <div className="input-control">
            <label>Subject:</label>
            <input type="text" name="subject" value={formData.subject} onChange={handleChange} />
            {errors.subject && <p style={{ color: "red" }}>{errors.subject}</p>}
            </div>
            <div className="input-control">
            <label>Budget:</label>
            <select name="budget" value={formData.budget} onChange={handleChange}>
                <option value="">Select Budget</option>
                <option value="<$1000">&lt;$1000</option>
                <option value="$1000-$5000">$1000-$5000</option>
                <option value="$5000-$10000">$5000-$10000</option>
                <option value="$10000+">$10000+</option>
            </select>
            {errors.budget && <p style={{ color: "red" }}>{errors.budget}</p>}
            </div>
        </div>
        <div className="input-container">
            <div className="input-control text-area">
            <label>Comment:</label>
            <textarea name="message" value={formData.message} onChange={handleChange} />
            {errors.message && <p style={{ color: "red" }}>{errors.message}</p>}
            </div>
        </div>
        <button className="btn filled send-message" type="submit">Send Message</button>
        </form>
    </div>
  )
}

export default ContactForm
