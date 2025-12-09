-- Add mobile fields to free_ebook_banner table
-- Run this SQL in your MySQL database

USE language_king;

-- Add mobile CTA button text field
ALTER TABLE free_ebook_banner 
ADD COLUMN cta_button_text_mobile VARCHAR(100) DEFAULT 'Start 7-Day Free Trial' AFTER cta_button_text;

-- Add mobile save text field
ALTER TABLE free_ebook_banner 
ADD COLUMN save_text_mobile VARCHAR(300) DEFAULT 'Save $33 by using AI Portal' AFTER save_text;

-- Verify the changes
DESCRIBE free_ebook_banner;
