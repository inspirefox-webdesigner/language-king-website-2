import db from "../db/connection.js";

export const getAllHomeTestimonials = async (req, res) => {
  try {
    const [rows] = await db.execute(
      "SELECT * FROM home_testimonials ORDER BY created_at DESC",
    );
    res.json(rows);
  } catch (error) {
    console.error("Error fetching home testimonials:", error);
    res
      .status(500)
      .json({
        error: "Failed to fetch home testimonials",
        details: error.message,
      });
  }
};

export const getHomeTestimonialById = async (req, res) => {
  try {
    const [rows] = await db.execute(
      "SELECT * FROM home_testimonials WHERE id = ?",
      [req.params.id],
    );
    if (rows.length === 0) {
      return res.status(404).json({ error: "Home testimonial not found" });
    }
    res.json(rows[0]);
  } catch (error) {
    console.error("Error fetching home testimonial:", error);
    res
      .status(500)
      .json({
        error: "Failed to fetch home testimonial",
        details: error.message,
      });
  }
};

export const createHomeTestimonial = async (req, res) => {
  try {
    const { video_url, thumbnail, text, avatar, name, subtitle, time, rating } =
      req.body;
    const [result] = await db.execute(
      "INSERT INTO home_testimonials (video_url, thumbnail, text, avatar, name, subtitle, time, rating) VALUES (?, ?, ?, ?, ?, ?, ?, ?)",
      [
        video_url || "",
        thumbnail || "",
        text || "",
        avatar || "",
        name || "",
        subtitle || "",
        time || "",
        rating || 5,
      ],
    );
    res.status(201).json({
      id: result.insertId,
      message: "Home testimonial created successfully",
    });
  } catch (error) {
    console.error("Error creating home testimonial:", error);
    res
      .status(500)
      .json({
        error: "Failed to create home testimonial",
        details: error.message,
      });
  }
};

export const updateHomeTestimonial = async (req, res) => {
  try {
    const { video_url, thumbnail, text, avatar, name, subtitle, time, rating } =
      req.body;
    await db.execute(
      "UPDATE home_testimonials SET video_url = ?, thumbnail = ?, text = ?, avatar = ?, name = ?, subtitle = ?, time = ?, rating = ? WHERE id = ?",
      [
        video_url || "",
        thumbnail || "",
        text || "",
        avatar || "",
        name || "",
        subtitle || "",
        time || "",
        rating || 5,
        req.params.id,
      ],
    );
    res.json({ message: "Home testimonial updated successfully" });
  } catch (error) {
    console.error("Error updating home testimonial:", error);
    res
      .status(500)
      .json({
        error: "Failed to update home testimonial",
        details: error.message,
      });
  }
};

export const deleteHomeTestimonial = async (req, res) => {
  try {
    await db.execute("DELETE FROM home_testimonials WHERE id = ?", [
      req.params.id,
    ]);
    res.json({ message: "Home testimonial deleted successfully" });
  } catch (error) {
    console.error("Error deleting home testimonial:", error);
    res
      .status(500)
      .json({
        error: "Failed to delete home testimonial",
        details: error.message,
      });
  }
};
