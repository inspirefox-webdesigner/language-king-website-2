-- Create tables for Language King project
 
-- Contact table for contact form submissions
CREATE TABLE IF NOT EXISTS Contact (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    phone VARCHAR(20) NOT NULL,
    course VARCHAR(255) NOT NULL,
    form_source VARCHAR(100) DEFAULT 'Contact Form',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

 
-- Course table for course/callback form submissions  
CREATE TABLE IF NOT EXISTS Course (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    phone VARCHAR(20) NOT NULL,
    course VARCHAR(255) NOT NULL,
    form_source VARCHAR(100) DEFAULT 'Course Form',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

 
-- BookTrail table for book free trail form submissions
CREATE TABLE IF NOT EXISTS BookTrail (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    phone VARCHAR(20) NOT NULL,
    course VARCHAR(255) NOT NULL,
    form_source VARCHAR(100) DEFAULT 'BookTrail Form',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);


-- PTE Students table
CREATE TABLE IF NOT EXISTS pte_students (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    country VARCHAR(255) NOT NULL,
    flag VARCHAR(255),
    image VARCHAR(255),
    gradient TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);


-- NAATI-CCL Students table
CREATE TABLE IF NOT EXISTS naati_ccl_students (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    country VARCHAR(255) NOT NULL,
    flag VARCHAR(255),
    image VARCHAR(255),
    gradient TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);


-- PTE Fame table
CREATE TABLE IF NOT EXISTS pte_fame (
    id INT AUTO_INCREMENT PRIMARY KEY,
    title TEXT NOT NULL,
    student_name VARCHAR(255) NOT NULL,
    band VARCHAR(100) NOT NULL,
    video_url VARCHAR(500),
    video_placeholder_img VARCHAR(255),
    student_img VARCHAR(255),
    flag_img VARCHAR(255),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);


-- NAATI CCL Results table
CREATE TABLE IF NOT EXISTS naati_ccl_results (
    id INT AUTO_INCREMENT PRIMARY KEY,
    title TEXT NOT NULL,
    student_name VARCHAR(255) NOT NULL,
    band VARCHAR(100) NOT NULL,
    video_url VARCHAR(500),
    video_placeholder_img VARCHAR(255),
    student_img VARCHAR(255),
    flag_img VARCHAR(255),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);


-- Testimonial Video table for "Why Students Love Learning With Us" section
CREATE TABLE IF NOT EXISTS testimonial_video (
    id INT AUTO_INCREMENT PRIMARY KEY,
    video_url VARCHAR(500) NOT NULL,
    video_placeholder_img VARCHAR(255),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

-- Testimonial Hero Section table
CREATE TABLE IF NOT EXISTS testimonial_hero_section (
    id INT AUTO_INCREMENT PRIMARY KEY,
    heading TEXT NOT NULL,
    description TEXT,
    student_name VARCHAR(255),
    student_tag VARCHAR(255),
    student_avatar VARCHAR(255),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

-- Free E-book banner section table
CREATE TABLE IF NOT EXISTS free_ebook_banner (
    id INT AUTO_INCREMENT PRIMARY KEY,
    banner_bg_image VARCHAR(255),
    new_tips_image VARCHAR(255),
    expert_text TEXT,
    expert_name VARCHAR(255),
    expert_title VARCHAR(255),
    expert_avatar VARCHAR(255),
    main_heading TEXT,
    main_description TEXT,
    learn_heading VARCHAR(255),
    learn_point_1 TEXT,
    learn_point_2 TEXT,
    learn_point_3 TEXT,
    cta_button_text VARCHAR(255),
    save_text TEXT,
    other_books_heading VARCHAR(255),
    other_books_subheading VARCHAR(255),
    book_1_image VARCHAR(255),
    book_2_image VARCHAR(255),
    book_3_image VARCHAR(255),
    book_4_image VARCHAR(255),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

-- FAQs table for Free E-book page
CREATE TABLE IF NOT EXISTS FAQs (
    id INT AUTO_INCREMENT PRIMARY KEY,
    question TEXT NOT NULL,
    answer TEXT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    UNIQUE KEY unique_question (question(500))
);


-- Insert default data for free ebook banner (only if no record exists)
INSERT IGNORE INTO free_ebook_banner (
    id, expert_text, expert_name, expert_title, main_heading, main_description,
    learn_heading, learn_point_1, learn_point_2, learn_point_3,
    cta_button_text, save_text, other_books_heading, other_books_subheading
) VALUES (
    1,
    'LEARN FROM THE EXPERT + MORE:',
    'Abhishek',
    'PTE Master Trainer',
    'PTE Reading Blanks Free E-book',
    'Learn how to solve PTE Reading Blanks with confidence, master linkers, starters, and connectors, test your skills with an interactive quiz, and boost your score effortlessly',
    'YOU\'LL LEARN HOW TO:',
    'Attempt R&W blanks',
    'Difference b/w linkers, starters and connectors',
    'Quiz to test your learning',
    'Start 7-Day Free Trial',
    'Save $33 by using AI Portal + Prediction File + 6 Books',
    'Other Books',
    'PTE Study Material'
);

-- Book-Box table for managing E-Book and AI Portal box content
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

-- Insert default data for book_box
INSERT IGNORE INTO book_box (
  id, ebook_title, ebook_subtitle, ebook_price,
  aiportal_title, aiportal_subtitle, aiportal_price, aiportal_original_price,
  aiportal_features, prediction_file_title, prediction_file_subtitle, prediction_file_price
) VALUES (
  1,
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
);

-- Insert default FAQs data (only if they don't exist)
INSERT IGNORE INTO FAQs (question, answer) VALUES 
('Why is there a $0.99 charge for Free Trial?', 'The $0.99 charge is a small, one-time fee to help us verify your identity and prevent misuse of our free offer. This minimal amount ensures genuine sign-ups and helps maintain a secure platform. The charge is non-refundable but confirms your access to the free E-Book/ PDF for one week.'),
('Is the E-Book really free?', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt maxime officia esse delectus dolore temporibus ad, repellendus aperiam iste provident veniam aut animi id impedit. Ipsa inventore tenetur dolorem ad?'),
('How long do I have access to the E-Book?', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt maxime officia esse delectus dolore temporibus ad, repellendus aperiam iste provident veniam aut animi id impedit. Ipsa inventore tenetur dolorem ad?'),
('What if I don\'t receive the E-book on email?', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt maxime officia esse delectus dolore temporibus ad, repellendus aperiam iste provident veniam aut animi id impedit. Ipsa inventore tenetur dolorem ad?'),
('Can I use a temporary or disposable email for verification?', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt maxime officia esse delectus dolore temporibus ad, repellendus aperiam iste provident veniam aut animi id impedit. Ipsa inventore tenetur dolorem ad?'),
('How do I cancel or delete my account after downloading the eBook?', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt maxime officia esse delectus dolore temporibus ad, repellendus aperiam iste provident veniam aut animi id impedit. Ipsa inventore tenetur dolorem ad?'),
('What happens after my free 1-week access ends?', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt maxime officia esse delectus dolore temporibus ad, repellendus aperiam iste provident veniam aut animi id impedit. Ipsa inventore tenetur dolorem ad?'),
('Is my information secure?', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt maxime officia esse delectus dolore temporibus ad, repellendus aperiam iste provident veniam aut animi id impedit. Ipsa inventore tenetur dolorem ad?');

-- Video Lessons table
CREATE TABLE IF NOT EXISTS video_lessons (
  id INT AUTO_INCREMENT PRIMARY KEY,
  title VARCHAR(255) NOT NULL,
  thumbnail_img VARCHAR(255),
  video_url VARCHAR(255),
  description TEXT,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);