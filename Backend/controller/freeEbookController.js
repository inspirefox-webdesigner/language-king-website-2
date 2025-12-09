import db from "../db/connection.js";

// Get Free E-book banner data
const getFreeEbookBanner = async (req, res) => {
  try {
    const query =
      "SELECT * FROM free_ebook_banner ORDER BY updated_at DESC, id DESC LIMIT 1";
    const [rows] = await db.execute(query);

    if (rows.length === 0) {
      // Create default record if none exists
      const defaultData = {
        banner_bg_image: "",
        new_tips_image: "",
        expert_text: "LEARN FROM THE EXPERT + MORE:",
        expert_name: "Abhishek",
        expert_title: "PTE Master Trainer",
        expert_avatar: "",
        main_heading: "PTE Reading Blanks Free E-book",
        main_description:
          "Learn how to solve PTE Reading Blanks with confidence, master linkers, starters, and connectors, test your skills with an interactive quiz, and boost your score effortlessly",
        learn_heading: "YOU'LL LEARN HOW TO:",
        learning_points: [
          "Attempt R&W blanks",
          "Difference b/w linkers, starters and connectors",
          "Quiz to test your learning",
        ],
        cta_button_text: "Start 7-Day Free Trial",
        save_text: "Save $33 by using AI Portal + Prediction File + 6 Books",
        other_books_heading: "Other Books",
        other_books_subheading: "PTE Study Material",
        book_1_image: "",
        book_2_image: "",
        book_3_image: "",
        book_4_image: "",
      };

      // Insert default data into database
      const insertQuery = `
        INSERT INTO free_ebook_banner (
          banner_bg_image, new_tips_image, expert_text, expert_name, expert_title,
          expert_avatar, main_heading, main_description, learn_heading,
          learning_points, cta_button_text,
          save_text, other_books_heading, other_books_subheading,
          book_1_image, book_2_image, book_3_image, book_4_image
        ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
      `;

      await db.execute(insertQuery, [
        "",
        "",
        defaultData.expert_text,
        defaultData.expert_name,
        defaultData.expert_title,
        "",
        defaultData.main_heading,
        defaultData.main_description,
        defaultData.learn_heading,
        JSON.stringify(defaultData.learning_points),
        defaultData.cta_button_text,
        defaultData.save_text,
        defaultData.other_books_heading,
        defaultData.other_books_subheading,
        "",
        "",
        "",
        "",
      ]);

      return res.json(defaultData);
    }

    // Add cache headers to prevent caching issues
    res.set({
      "Cache-Control": "no-cache, no-store, must-revalidate",
      Pragma: "no-cache",
      Expires: "0",
    });

    const data = rows[0];
    // Parse learning_points if it's a JSON string
    if (data.learning_points && typeof data.learning_points === "string") {
      try {
        data.learning_points = JSON.parse(data.learning_points);
      } catch (e) {
        data.learning_points = [];
      }
    }

    res.json(data);
  } catch (error) {
    console.error("Error fetching free ebook banner:", error);
    console.error("Error details:", error.message);
    res.status(500).json({
      message: "Failed to fetch banner data",
      error: error.message,
    });
  }
};

// Update Free E-book banner data
const updateFreeEbookBanner = async (req, res) => {
  try {
    const {
      banner_bg_image,
      new_tips_image,
      expert_text,
      expert_name,
      expert_title,
      expert_avatar,
      main_heading,
      main_description,
      learn_heading,
      learning_points,
      cta_button_text,
      cta_button_text_mobile,
      save_text,
      save_text_mobile,
      other_books_heading,
      other_books_subheading,
      book_1_image,
      book_2_image,
      book_3_image,
      book_4_image,
    } = req.body;

    // Validate required fields
    if (!main_heading || !main_description) {
      return res.status(400).json({
        message: "Main heading and description are required fields",
      });
    }

    // Update the single record (id=1)
    const updateQuery = `
      UPDATE free_ebook_banner SET
        banner_bg_image = ?,
        new_tips_image = ?,
        expert_text = ?,
        expert_name = ?,
        expert_title = ?,
        expert_avatar = ?,
        main_heading = ?,
        main_description = ?,
        learn_heading = ?,
        learning_points = ?,
        cta_button_text = ?,
        cta_button_text_mobile = ?,
        save_text = ?,
        save_text_mobile = ?,
        other_books_heading = ?,
        other_books_subheading = ?,
        book_1_image = ?,
        book_2_image = ?,
        book_3_image = ?,
        book_4_image = ?,
        updated_at = CURRENT_TIMESTAMP
      WHERE id = 1
    `;

    const values = [
      banner_bg_image || "",
      new_tips_image || "",
      expert_text || "",
      expert_name || "",
      expert_title || "",
      expert_avatar || "",
      main_heading,
      main_description,
      learn_heading || "",
      JSON.stringify(learning_points || []),
      cta_button_text || "",
      cta_button_text_mobile || "",
      save_text || "",
      save_text_mobile || "",
      other_books_heading || "",
      other_books_subheading || "",
      book_1_image || "",
      book_2_image || "",
      book_3_image || "",
      book_4_image || "",
    ];

    await db.execute(updateQuery, values);

    // Return success with updated data
    res.json({
      message:
        "Banner updated successfully! Changes are now live on the website.",
      success: true,
      timestamp: new Date().toISOString(),
    });
  } catch (error) {
    console.error("Error updating free ebook banner:", error);
    console.error("Error details:", error.message);
    res.status(500).json({
      message: "Failed to update banner. Please try again.",
      error: error.message,
      success: false,
    });
  }
};

export { getFreeEbookBanner, updateFreeEbookBanner };
