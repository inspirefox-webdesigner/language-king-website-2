-- Create Book-Box table for managing E-Book and AI Portal box content
CREATE TABLE IF NOT EXISTS book_box (
  id INT AUTO_INCREMENT PRIMARY KEY,
  ebook_title VARCHAR(255) NOT NULL DEFAULT 'E-Book Only',
  ebook_subtitle VARCHAR(255) NOT NULL DEFAULT 'Get 7-days Free Trial',
  ebook_price VARCHAR(50) NOT NULL DEFAULT '$0.99',
  aiportal_title VARCHAR(255) NOT NULL DEFAULT '6 Month AI Portal',
  aiportal_subtitle VARCHAR(255) NOT NULL DEFAULT 'Prediction File + 5 Books',
  aiportal_price VARCHAR(50) NOT NULL DEFAULT '$99',
  aiportal_original_price VARCHAR(50) NOT NULL DEFAULT '$129',
  aiportal_features TEXT,
  prediction_file_title VARCHAR(255) NOT NULL DEFAULT 'Prediction File',
  prediction_file_subtitle VARCHAR(255) NOT NULL DEFAULT 'Get monthly updates for 6 months',
  prediction_file_price VARCHAR(50) NOT NULL DEFAULT '$9',
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

-- Insert default data
INSERT INTO book_box (
  ebook_title, ebook_subtitle, ebook_price,
  aiportal_title, aiportal_subtitle, aiportal_price, aiportal_original_price,
  aiportal_features, prediction_file_title, prediction_file_subtitle, prediction_file_price
) VALUES (
  'E-Book Only',
  'Get 7-days Free Trial',
  '$0.99',
  '6 Month AI Portal',
  'Prediction File + 5 Books',
  '$99',
  '$129',
  '- 10 Full Mock Tests\n- 20 Sectional Tests\n- 5000+ Exam Questions\n- 5 Books Included',
  'Prediction File',
  'Get monthly updates for 6 months',
  '$9'
) ON DUPLICATE KEY UPDATE id=id;