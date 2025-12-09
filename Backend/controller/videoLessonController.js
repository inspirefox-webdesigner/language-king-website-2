import db from "../db/connection.js";

export const getAllVideoLessons = async (req, res) => {
  try {
    console.log(" Fetching all video lessons from database...");
    const [rows] = await db.execute(
      "SELECT * FROM video_lessons ORDER BY created_at DESC"
    );
    console.log(" Found", rows.length, "video lessons");
    console.log(" Data:", rows);
    res.json(rows);
  } catch (error) {
    console.error(" Error fetching video lessons:", error);
    res
      .status(500)
      .json({ error: "Failed to fetch video lessons", details: error.message });
  }
};

export const getVideoLessonById = async (req, res) => {
  try {
    const [rows] = await db.execute(
      "SELECT * FROM video_lessons WHERE id = ?",
      [req.params.id]
    );
    if (rows.length === 0) {
      return res.status(404).json({ error: "Video lesson not found" });
    }
    res.json(rows[0]);
  } catch (error) {
    console.error("Error fetching video lesson:", error);
    res
      .status(500)
      .json({ error: "Failed to fetch video lesson", details: error.message });
  }
};

export const createVideoLesson = async (req, res) => {
  try {
    const { title, thumbnail_img, video_url, description } = req.body;
    const [result] = await db.execute(
      "INSERT INTO video_lessons (title, thumbnail_img, video_url, description) VALUES (?, ?, ?, ?)",
      [title || "", thumbnail_img || "", video_url || "", description || ""]
    );
    res.status(201).json({
      id: result.insertId,
      message: "Video lesson created successfully",
    });
  } catch (error) {
    console.error("Error creating video lesson:", error);
    res
      .status(500)
      .json({ error: "Failed to create video lesson", details: error.message });
  }
};

export const updateVideoLesson = async (req, res) => {
  try {
    const { title, thumbnail_img, video_url, description } = req.body;
    await db.execute(
      "UPDATE video_lessons SET title = ?, thumbnail_img = ?, video_url = ?, description = ? WHERE id = ?",
      [
        title || "",
        thumbnail_img || "",
        video_url || "",
        description || "",
        req.params.id,
      ]
    );
    res.json({ message: "Video lesson updated successfully" });
  } catch (error) {
    console.error("Error updating video lesson:", error);
    res
      .status(500)
      .json({ error: "Failed to update video lesson", details: error.message });
  }
};

export const deleteVideoLesson = async (req, res) => {
  try {
    await db.execute("DELETE FROM video_lessons WHERE id = ?", [req.params.id]);
    res.json({ message: "Video lesson deleted successfully" });
  } catch (error) {
    console.error("Error deleting video lesson:", error);
    res
      .status(500)
      .json({ error: "Failed to delete video lesson", details: error.message });
  }
};
