import Contact from "../models/Contact.js";

export async function createContact(req, res, next) {
  try {
    const { name, email, subject, message } = req.body;

    if (!name || !email || !subject || !message) {
      return res.status(400).json({ message: "All fields are required." });
    }

    const validEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    if (!validEmail) {
      return res.status(400).json({ message: "Please provide a valid email address." });
    }

    const contact = await Contact.create({ name, email, subject, message });
    res.status(201).json({
      message: "Message received successfully.",
      id: contact._id
    });
  } catch (error) {
    next(error);
  }
}

export async function getContacts(req, res, next) {
  try {
    const contacts = await Contact.find().sort({ createdAt: -1 }).limit(100);
    res.json(contacts);
  } catch (error) {
    next(error);
  }
}
