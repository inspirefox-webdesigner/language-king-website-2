import connection from "../db/connection.js";

// PTE Students Controllers
export const getAllPTEStudents = async (req, res) => {
  try {
    const conn = await connection;
    const [rows] = await conn.execute(
      "SELECT * FROM pte_students ORDER BY created_at DESC"
    );
    res.json(rows);
  } catch (error) {
    console.error("Error fetching PTE students:", error);
    res.status(500).json({ message: "Error fetching PTE students" });
  }
};


export const getPTEStudentById = async (req, res) => {
  try {
    const { id } = req.params;
    const conn = await connection;
    const [rows] = await conn.execute(
      "SELECT * FROM pte_students WHERE id = ?",
      [id]
    );

    if (rows.length === 0) {
      return res.status(404).json({ message: "PTE student not found" });
    }

    res.json(rows[0]);
  } catch (error) {
    console.error("Error fetching PTE student:", error);
    res.status(500).json({ message: "Error fetching PTE student" });
  }
};

export const createPTEStudent = async (req, res) => {
  try {
    const { name, country, flag, image, gradient } = req.body;
    const conn = await connection;

    const [result] = await conn.execute(
      "INSERT INTO pte_students (name, country, flag, image, gradient) VALUES (?, ?, ?, ?, ?)",
      [name, country, flag, image, gradient]
    );

    res.status(201).json({
      message: "PTE student created successfully",
      id: result.insertId,
    });
  } catch (error) {
    console.error("Error creating PTE student:", error);
    res.status(500).json({ message: "Error creating PTE student" });
  }
};

export const updatePTEStudent = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, country, flag, image, gradient } = req.body;
    const conn = await connection;

    const [result] = await conn.execute(
      "UPDATE pte_students SET name = ?, country = ?, flag = ?, image = ?, gradient = ? WHERE id = ?",
      [name, country, flag, image, gradient, id]
    );

    if (result.affectedRows === 0) {
      return res.status(404).json({ message: "PTE student not found" });
    }

    res.json({ message: "PTE student updated successfully" });
  } catch (error) {
    console.error("Error updating PTE student:", error);
    res.status(500).json({ message: "Error updating PTE student" });
  }
};

export const deletePTEStudent = async (req, res) => {
  try {
    const { id } = req.params;
    const conn = await connection;

    const [result] = await conn.execute(
      "DELETE FROM pte_students WHERE id = ?",
      [id]
    );

    if (result.affectedRows === 0) {
      return res.status(404).json({ message: "PTE student not found" });
    }

    res.json({ message: "PTE student deleted successfully" });
  } catch (error) {
    console.error("Error deleting PTE student:", error);
    res.status(500).json({ message: "Error deleting PTE student" });
  }
};

// NAATI-CCL Students Controllers
export const getAllNAATICCLStudents = async (req, res) => {
  try {
    const conn = await connection;
    const [rows] = await conn.execute(
      "SELECT * FROM naati_ccl_students ORDER BY created_at DESC"
    );
    res.json(rows);
  } catch (error) {
    console.error("Error fetching NAATI-CCL students:", error);
    res.status(500).json({ message: "Error fetching NAATI-CCL students" });
  }
};

export const getNAATICCLStudentById = async (req, res) => {
  try {
    const { id } = req.params;
    const conn = await connection;
    const [rows] = await conn.execute(
      "SELECT * FROM naati_ccl_students WHERE id = ?",
      [id]
    );

    if (rows.length === 0) {
      return res.status(404).json({ message: "NAATI-CCL student not found" });
    }

    res.json(rows[0]);
  } catch (error) {
    console.error("Error fetching NAATI-CCL student:", error);
    res.status(500).json({ message: "Error fetching NAATI-CCL student" });
  }
};

export const createNAATICCLStudent = async (req, res) => {
  try {
    const { name, country, flag, image, gradient } = req.body;
    const conn = await connection;

    const [result] = await conn.execute(
      "INSERT INTO naati_ccl_students (name, country, flag, image, gradient) VALUES (?, ?, ?, ?, ?)",
      [name, country, flag, image, gradient]
    );

    res.status(201).json({
      message: "NAATI-CCL student created successfully",
      id: result.insertId,
    });
  } catch (error) {
    console.error("Error creating NAATI-CCL student:", error);
    res.status(500).json({ message: "Error creating NAATI-CCL student" });
  }
};

export const updateNAATICCLStudent = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, country, flag, image, gradient } = req.body;
    const conn = await connection;

    const [result] = await conn.execute(
      "UPDATE naati_ccl_students SET name = ?, country = ?, flag = ?, image = ?, gradient = ? WHERE id = ?",
      [name, country, flag, image, gradient, id]
    );

    if (result.affectedRows === 0) {
      return res.status(404).json({ message: "NAATI-CCL student not found" });
    }

    res.json({ message: "NAATI-CCL student updated successfully" });
  } catch (error) {
    console.error("Error updating NAATI-CCL student:", error);
    res.status(500).json({ message: "Error updating NAATI-CCL student" });
  }
};

export const deleteNAATICCLStudent = async (req, res) => {
  try {
    const { id } = req.params;
    const conn = await connection;

    const [result] = await conn.execute(
      "DELETE FROM naati_ccl_students WHERE id = ?",
      [id]
    );

    if (result.affectedRows === 0) {
      return res.status(404).json({ message: "NAATI-CCL student not found" });
    }

    res.json({ message: "NAATI-CCL student deleted successfully" });
  } catch (error) {
    console.error("Error deleting NAATI-CCL student:", error);
    res.status(500).json({ message: "Error deleting NAATI-CCL student" });
  }
};

// PTE Fame Controllers
export const getAllPTEFame = async (req, res) => {
  try {
    const conn = await connection;
    const [rows] = await conn.execute(
      "SELECT * FROM pte_fame ORDER BY created_at DESC"
    );
    res.json(rows);
  } catch (error) {
    console.error("Error fetching PTE Fame:", error);
    res.status(500).json({ message: "Error fetching PTE Fame" });
  }
};

export const getPTEFameById = async (req, res) => {
  try {
    const { id } = req.params;
    const conn = await connection;
    const [rows] = await conn.execute("SELECT * FROM pte_fame WHERE id = ?", [
      id,
    ]);

    if (rows.length === 0) {
      return res.status(404).json({ message: "PTE Fame entry not found" });
    }

    res.json(rows[0]);
  } catch (error) {
    console.error("Error fetching PTE Fame entry:", error);
    res.status(500).json({ message: "Error fetching PTE Fame entry" });
  }
};

export const createPTEFame = async (req, res) => {
  try {
    const {
      title,
      student_name,
      band,
      video_url,
      video_placeholder_img,
      student_img,
      flag_img,
    } = req.body;
    const conn = await connection;

    const [result] = await conn.execute(
      "INSERT INTO pte_fame (title, student_name, band, video_url, video_placeholder_img, student_img, flag_img) VALUES (?, ?, ?, ?, ?, ?, ?)",
      [
        title,
        student_name,
        band,
        video_url,
        video_placeholder_img,
        student_img,
        flag_img,
      ]
    );

    res.status(201).json({
      message: "PTE Fame entry created successfully",
      id: result.insertId,
    });
  } catch (error) {
    console.error("Error creating PTE Fame entry:", error);
    res.status(500).json({ message: "Error creating PTE Fame entry" });
  }
};

export const updatePTEFame = async (req, res) => {
  try {
    const { id } = req.params;
    const {
      title,
      student_name,
      band,
      video_url,
      video_placeholder_img,
      student_img,
      flag_img,
    } = req.body;
    const conn = await connection;

    const [result] = await conn.execute(
      "UPDATE pte_fame SET title = ?, student_name = ?, band = ?, video_url = ?, video_placeholder_img = ?, student_img = ?, flag_img = ? WHERE id = ?",
      [
        title,
        student_name,
        band,
        video_url,
        video_placeholder_img,
        student_img,
        flag_img,
        id,
      ]
    );

    if (result.affectedRows === 0) {
      return res.status(404).json({ message: "PTE Fame entry not found" });
    }

    res.json({ message: "PTE Fame entry updated successfully" });
  } catch (error) {
    console.error("Error updating PTE Fame entry:", error);
    res.status(500).json({ message: "Error updating PTE Fame entry" });
  }
};

export const deletePTEFame = async (req, res) => {
  try {
    const { id } = req.params;
    const conn = await connection;

    const [result] = await conn.execute("DELETE FROM pte_fame WHERE id = ?", [
      id,
    ]);

    if (result.affectedRows === 0) {
      return res.status(404).json({ message: "PTE Fame entry not found" });
    }

    res.json({ message: "PTE Fame entry deleted successfully" });
  } catch (error) {
    console.error("Error deleting PTE Fame entry:", error);
    res.status(500).json({ message: "Error deleting PTE Fame entry" });
  }
};

// NAATI CCL Results Controllers
export const getAllNAATICCLResults = async (req, res) => {
  try {
    const conn = await connection;
    const [rows] = await conn.execute(
      "SELECT * FROM naati_ccl_results ORDER BY created_at DESC"
    );
    res.json(rows);
  } catch (error) {
    console.error("Error fetching NAATI CCL Results:", error);
    res.status(500).json({ message: "Error fetching NAATI CCL Results" });
  }
};

export const getNAATICCLResultById = async (req, res) => {
  try {
    const { id } = req.params;
    const conn = await connection;
    const [rows] = await conn.execute(
      "SELECT * FROM naati_ccl_results WHERE id = ?",
      [id]
    );

    if (rows.length === 0) {
      return res
        .status(404)
        .json({ message: "NAATI CCL Result entry not found" });
    }

    res.json(rows[0]);
  } catch (error) {
    console.error("Error fetching NAATI CCL Result entry:", error);
    res.status(500).json({ message: "Error fetching NAATI CCL Result entry" });
  }
};

export const createNAATICCLResult = async (req, res) => {
  try {
    const {
      title,
      student_name,
      band,
      video_url,
      video_placeholder_img,
      student_img,
      flag_img,
    } = req.body;
    const conn = await connection;

    const [result] = await conn.execute(
      "INSERT INTO naati_ccl_results (title, student_name, band, video_url, video_placeholder_img, student_img, flag_img) VALUES (?, ?, ?, ?, ?, ?, ?)",
      [
        title,
        student_name,
        band,
        video_url,
        video_placeholder_img,
        student_img,
        flag_img,
      ]
    );

    res.status(201).json({
      message: "NAATI CCL Result entry created successfully",
      id: result.insertId,
    });
  } catch (error) {
    console.error("Error creating NAATI CCL Result entry:", error);
    res.status(500).json({ message: "Error creating NAATI CCL Result entry" });
  }
};

export const updateNAATICCLResult = async (req, res) => {
  try {
    const { id } = req.params;
    const {
      title,
      student_name,
      band,
      video_url,
      video_placeholder_img,
      student_img,
      flag_img,
    } = req.body;
    const conn = await connection;

    const [result] = await conn.execute(
      "UPDATE naati_ccl_results SET title = ?, student_name = ?, band = ?, video_url = ?, video_placeholder_img = ?, student_img = ?, flag_img = ? WHERE id = ?",
      [
        title,
        student_name,
        band,
        video_url,
        video_placeholder_img,
        student_img,
        flag_img,
        id,
      ]
    );

    if (result.affectedRows === 0) {
      return res
        .status(404)
        .json({ message: "NAATI CCL Result entry not found" });
    }

    res.json({ message: "NAATI CCL Result entry updated successfully" });
  } catch (error) {
    console.error("Error updating NAATI CCL Result entry:", error);
    res.status(500).json({ message: "Error updating NAATI CCL Result entry" });
  }
};

export const deleteNAATICCLResult = async (req, res) => {
  try {
    const { id } = req.params;
    const conn = await connection;

    const [result] = await conn.execute(
      "DELETE FROM naati_ccl_results WHERE id = ?",
      [id]
    );

    if (result.affectedRows === 0) {
      return res
        .status(404)
        .json({ message: "NAATI CCL Result entry not found" });
    }

    res.json({ message: "NAATI CCL Result entry deleted successfully" });
  } catch (error) {
    console.error("Error deleting NAATI CCL Result entry:", error);
    res.status(500).json({ message: "Error deleting NAATI CCL Result entry" });
  }
};

// Testimonial Video Controllers
export const getTestimonialVideo = async (req, res) => {
  try {
    const conn = await connection;
    const [rows] = await conn.execute(
      "SELECT * FROM testimonial_video ORDER BY updated_at DESC LIMIT 1"
    );

    if (rows.length === 0) {
      return res.status(404).json({ message: "Testimonial video not found" });
    }

    res.json(rows[0]);
  } catch (error) {
    console.error("Error fetching testimonial video:", error);
    res.status(500).json({ message: "Error fetching testimonial video" });
  }
};

export const createOrUpdateTestimonialVideo = async (req, res) => {
  try {
    const { video_url, video_placeholder_img } = req.body;
    const conn = await connection;

    // Check if a record exists
    const [existing] = await conn.execute(
      "SELECT id FROM testimonial_video LIMIT 1"
    );

    if (existing.length > 0) {
      // Update existing record
      const [result] = await conn.execute(
        "UPDATE testimonial_video SET video_url = ?, video_placeholder_img = ?, updated_at = CURRENT_TIMESTAMP WHERE id = ?",
        [video_url, video_placeholder_img, existing[0].id]
      );

      res.json({ message: "Testimonial video updated successfully" });
    } else {
      // Create new record
      const [result] = await conn.execute(
        "INSERT INTO testimonial_video (video_url, video_placeholder_img) VALUES (?, ?)",
        [video_url, video_placeholder_img]
      );

      res.status(201).json({
        message: "Testimonial video created successfully",
        id: result.insertId,
      });
    }
  } catch (error) {
    console.error("Error saving testimonial video:", error);
    res.status(500).json({ message: "Error saving testimonial video" });
  }
};
