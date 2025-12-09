-- Create free_ebook_banner table if it doesn't exist
CREATE TABLE IF NOT EXISTS free_ebook_banner (
  id INT AUTO_INCREMENT PRIMARY KEY,
  banner_bg_image VARCHAR(255) DEFAULT '',
  new_tips_image VARCHAR(255) DEFAULT '',
  expert_text VARCHAR(500) DEFAULT 'LEARN FROM THE EXPERT + MORE:',
  expert_name VARCHAR(100) DEFAULT 'Abhishek',
  expert_title VARCHAR(100) DEFAULT 'PTE Master Trainer',
  expert_avatar VARCHAR(255) DEFAULT '',
  main_heading VARCHAR(200) NOT NULL,
  main_description TEXT NOT NULL,
  learn_heading VARCHAR(100) DEFAULT 'YOU\'LL LEARN HOW TO:',
  learn_point_1 VARCHAR(200) DEFAULT 'Attempt R&W blanks',
  learn_point_2 VARCHAR(200) DEFAULT 'Difference b/w linkers, starters and connectors',
  learn_point_3 VARCHAR(200) DEFAULT 'Quiz to test your learning',
  cta_button_text VARCHAR(100) DEFAULT 'Start 7-Day Free Trial',
  save_text VARCHAR(300) DEFAULT 'Save $33 by using AI Portal + Prediction File + 6 Books',
  other_books_heading VARCHAR(100) DEFAULT 'Other Books',
  other_books_subheading VARCHAR(100) DEFAULT 'PTE Study Material',
  book_1_image VARCHAR(255) DEFAULT '',
  book_2_image VARCHAR(255) DEFAULT '',
  book_3_image VARCHAR(255) DEFAULT '',
  book_4_image VARCHAR(255) DEFAULT '',
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

-- Insert default data if table is empty
INSERT INTO free_ebook_banner (
  main_heading, 
  main_description
) 
SELECT 
  'PTE Reading Blanks Free E-book',
  'Learn how to solve PTE Reading Blanks with confidence, master linkers, starters, and connectors, test your skills with an interactive quiz, and boost your score effortlessly'
WHERE NOT EXISTS (SELECT 1 FROM free_ebook_banner);
