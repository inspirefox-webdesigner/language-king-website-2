-- Create table for dynamic ebook pages
CREATE TABLE IF NOT EXISTS dynamic_ebook_pages (
  id INT AUTO_INCREMENT PRIMARY KEY,
  page_slug VARCHAR(255) UNIQUE NOT NULL,
  page_title VARCHAR(255) NOT NULL,
  is_active BOOLEAN DEFAULT TRUE,
  
  -- Banner Section
  banner_bg_image VARCHAR(255),
  new_tips_image VARCHAR(255),
  expert_text TEXT,
  expert_avatar VARCHAR(255),
  expert_name VARCHAR(100),
  expert_title VARCHAR(100),
  main_heading TEXT,
  main_description TEXT,
  learning_points JSON,
  cta_button_text VARCHAR(100),
  cta_button_text_mobile VARCHAR(100),
  save_text TEXT,
  save_text_mobile TEXT,
  other_books_heading VARCHAR(100),
  other_books_subheading VARCHAR(100),
  book_1_image VARCHAR(255),
  book_2_image VARCHAR(255),
  book_3_image VARCHAR(255),
  book_4_image VARCHAR(255),
  
  -- Book Box Section
  ebook_title VARCHAR(100),
  ebook_subtitle VARCHAR(255),
  ebook_price VARCHAR(20),
  aiportal_title VARCHAR(100),
  aiportal_subtitle VARCHAR(255),
  aiportal_image VARCHAR(255),
  aiportal_features TEXT,
  aiportal_original_price VARCHAR(20),
  aiportal_price VARCHAR(20),
  prediction_file_title VARCHAR(100),
  prediction_file_subtitle VARCHAR(255),
  prediction_file_price VARCHAR(20),
  
  -- FAQs (stored as JSON array)
  faqs JSON,
  
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);
