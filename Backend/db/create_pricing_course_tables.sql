-- Table for course tabs (PTE, NAATI CCL, COMBO, etc.)
CREATE TABLE IF NOT EXISTS pricing_tabs (
  id INT AUTO_INCREMENT PRIMARY KEY,
  tab_name VARCHAR(100) NOT NULL UNIQUE,
  display_order INT DEFAULT 0,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

-- Table for course cards under each tab
CREATE TABLE IF NOT EXISTS pricing_cards (
  id INT AUTO_INCREMENT PRIMARY KEY,
  tab_id INT NOT NULL,
  title VARCHAR(255) NOT NULL,
  price DECIMAL(10,2) NOT NULL,
  badge VARCHAR(100) DEFAULT NULL,
  points JSON NOT NULL,
  display_order INT DEFAULT 0,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  FOREIGN KEY (tab_id) REFERENCES pricing_tabs(id) ON DELETE CASCADE
);

-- Table for course popups (detailed information for each card)
CREATE TABLE IF NOT EXISTS pricing_popups (
  id INT AUTO_INCREMENT PRIMARY KEY,
  card_id INT NOT NULL,
  heading VARCHAR(255) NOT NULL,
  content JSON DEFAULT NULL,
  validity TEXT DEFAULT NULL,
  who_this_for TEXT DEFAULT NULL,
  how_to_access TEXT DEFAULT NULL,
  number_of_devices JSON DEFAULT NULL,
  class_timing JSON DEFAULT NULL,
  exam_fee_covered TEXT DEFAULT NULL,
  contact_info TEXT DEFAULT NULL,
  footer_text TEXT DEFAULT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  FOREIGN KEY (card_id) REFERENCES pricing_cards(id) ON DELETE CASCADE
);

-- Insert default tabs
INSERT INTO pricing_tabs (tab_name, display_order) VALUES 
('PTE', 1),
('NAATI CCL', 2),
('COMBO', 3)
ON DUPLICATE KEY UPDATE display_order=VALUES(display_order);
