// Test script to create a sample dynamic ebook page
import mysql from 'mysql2/promise';

const createSamplePage = async () => {
  try {
    const pool = mysql.createPool({
      host: 'localhost',
      user: 'root',
      password: 'admin123',
      database: 'language_king'
    });

    const samplePage = {
      page_slug: 'pte-writing-tips',
      page_title: 'PTE Writing Tips E-Book',
      is_active: true,
      main_heading: 'PTE Writing Mastery <span class="text-[#F1CD5A] block">Free E-book</span>',
      main_description: 'Master PTE Writing with expert tips, proven strategies, and practice exercises',
      expert_name: 'Abhishek',
      expert_title: 'PTE Master Trainer',
      expert_text: 'LEARN FROM THE EXPERT + MORE:',
      cta_button_text: 'Start 7-Day Trial',
      cta_button_text_mobile: 'Start Free Trial',
      save_text: 'Save $33 by using AI Portal + Prediction File + 6 Books',
      save_text_mobile: 'Save $33 by using AI Portal',
      other_books_heading: 'Other Books',
      other_books_subheading: 'PTE Study Material',
      learning_points: JSON.stringify([
        'Master essay writing techniques',
        'Learn summarization strategies',
        'Practice with real examples'
      ]),
      ebook_title: 'Writing E-Book Only',
      ebook_subtitle: 'Get 7-days Free Trial',
      ebook_price: '$0.99',
      aiportal_title: '6 Month AI Portal',
      aiportal_subtitle: 'Prediction File + 5 Books',
      aiportal_features: '- 10 Full Mock Tests\n- 20 Sectional Tests\n- 5000+ Exam Questions\n- 5 Books Included',
      aiportal_original_price: '$129',
      aiportal_price: '$99',
      prediction_file_title: 'Prediction File',
      prediction_file_subtitle: 'Get monthly updates for 6 months',
      prediction_file_price: '$9',
      faqs: JSON.stringify([
        {
          question: 'How can I improve my writing score?',
          answer: 'Practice regularly with our structured exercises and follow expert feedback to improve your writing skills.'
        },
        {
          question: 'What topics are covered?',
          answer: 'We cover all PTE writing tasks including essays, summarization, and more with detailed examples.'
        },
        {
          question: 'Is there a money-back guarantee?',
          answer: 'Yes, we offer a 7-day money-back guarantee if you are not satisfied with the content.'
        }
      ])
    };

    const [result] = await pool.query(
      'INSERT INTO dynamic_ebook_pages SET ?',
      [samplePage]
    );

    console.log(' Sample page created successfully!');
    console.log(' Page ID:', result.insertId);
    console.log(' Access at: http://localhost:5173/ebook/pte-writing-tips');
    console.log('  Edit in Admin: FREE-E-BOOK → Dynamic Pages');

    await pool.end();
  } catch (error) {
    console.error(' Error creating sample page:', error.message);
  }
};

createSamplePage();
