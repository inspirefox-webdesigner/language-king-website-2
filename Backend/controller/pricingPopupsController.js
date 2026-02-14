import pool from "../db/connection.js";

// Get popup by card ID
export const getPopupByCard = async (req, res) => {
  try {
    const { cardId } = req.params;

    const [rows] = await pool.execute(
      "SELECT * FROM pricing_popups WHERE card_id = ?",
      [cardId],
    );

    if (rows.length === 0) {
      return res.json(null);
    }

    // Parse JSON fields
    const popup = rows[0];
    popup.content =
      typeof popup.content === "string"
        ? JSON.parse(popup.content)
        : popup.content;
    popup.number_of_devices =
      typeof popup.number_of_devices === "string"
        ? JSON.parse(popup.number_of_devices)
        : popup.number_of_devices;
    popup.class_timing =
      typeof popup.class_timing === "string"
        ? JSON.parse(popup.class_timing)
        : popup.class_timing;

    res.json(popup);
  } catch (error) {
    console.error("Error fetching popup:", error);
    res.status(500).json({ error: "Failed to fetch popup" });
  }
};

// Get all popups with card and tab info
export const getAllPopups = async (req, res) => {
  try {
    const [rows] = await pool.execute(`
      SELECT 
        pp.*,
        pc.title as card_title,
        pt.tab_name
      FROM pricing_popups pp
      JOIN pricing_cards pc ON pp.card_id = pc.id
      JOIN pricing_tabs pt ON pc.tab_id = pt.id
      ORDER BY pt.display_order, pc.display_order
    `);

    // Parse JSON fields
    const popups = rows.map((popup) => ({
      ...popup,
      content:
        typeof popup.content === "string"
          ? JSON.parse(popup.content)
          : popup.content,
      number_of_devices:
        typeof popup.number_of_devices === "string"
          ? JSON.parse(popup.number_of_devices)
          : popup.number_of_devices,
      class_timing:
        typeof popup.class_timing === "string"
          ? JSON.parse(popup.class_timing)
          : popup.class_timing,
    }));

    res.json(popups);
  } catch (error) {
    console.error("Error fetching all popups:", error);
    res.status(500).json({ error: "Failed to fetch popups" });
  }
};

// Create or update popup
export const upsertPopup = async (req, res) => {
  try {
    const {
      card_id,
      heading,
      content,
      validity,
      who_this_for,
      how_to_access,
      number_of_devices,
      class_timing,
      exam_fee_covered,
      contact_info,
      footer_text,
    } = req.body;

    if (!card_id || !heading) {
      return res
        .status(400)
        .json({ error: "Card ID and heading are required" });
    }

    // Check if popup exists for this card
    const [existing] = await pool.execute(
      "SELECT id FROM pricing_popups WHERE card_id = ?",
      [card_id],
    );

    if (existing.length > 0) {
      // Update existing popup
      await pool.execute(
        `UPDATE pricing_popups SET 
          heading = ?,
          content = ?,
          validity = ?,
          who_this_for = ?,
          how_to_access = ?,
          number_of_devices = ?,
          class_timing = ?,
          exam_fee_covered = ?,
          contact_info = ?,
          footer_text = ?
        WHERE card_id = ?`,
        [
          heading,
          content ? JSON.stringify(content) : null,
          validity,
          who_this_for,
          how_to_access,
          number_of_devices ? JSON.stringify(number_of_devices) : null,
          class_timing ? JSON.stringify(class_timing) : null,
          exam_fee_covered,
          contact_info,
          footer_text,
          card_id,
        ],
      );

      res.json({ message: "Popup updated successfully" });
    } else {
      // Create new popup
      const [result] = await pool.execute(
        `INSERT INTO pricing_popups 
          (card_id, heading, content, validity, who_this_for, how_to_access, number_of_devices, class_timing, exam_fee_covered, contact_info, footer_text) 
        VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
        [
          card_id,
          heading,
          content ? JSON.stringify(content) : null,
          validity,
          who_this_for,
          how_to_access,
          number_of_devices ? JSON.stringify(number_of_devices) : null,
          class_timing ? JSON.stringify(class_timing) : null,
          exam_fee_covered,
          contact_info,
          footer_text,
        ],
      );

      res.status(201).json({
        message: "Popup created successfully",
        id: result.insertId,
      });
    }
  } catch (error) {
    console.error("Error upserting popup:", error);
    res.status(500).json({ error: "Failed to save popup" });
  }
};

// Delete popup
export const deletePopup = async (req, res) => {
  try {
    const { id } = req.params;

    await pool.execute("DELETE FROM pricing_popups WHERE id = ?", [id]);

    res.json({ message: "Popup deleted successfully" });
  } catch (error) {
    console.error("Error deleting popup:", error);
    res.status(500).json({ error: "Failed to delete popup" });
  }
};

