import { useEffect } from 'react';

export const SEO = ({ title, description, keywords }) => {
  useEffect(() => {
    const fullTitle = title 
      ? `${title} | Hassanamba Coaching Academy - Hassan` 
      : 'Hassanamba Coaching Academy | Competitive Exam Coaching in Hassan, Karnataka';
    
    document.title = fullTitle;

    if (description) {
      let metaDesc = document.querySelector('meta[name="description"]');
      if (metaDesc) {
        metaDesc.setAttribute('content', description);
      }
    }

    if (keywords) {
      let metaKeywords = document.querySelector('meta[name="keywords"]');
      if (metaKeywords) {
        metaKeywords.setAttribute('content', keywords);
      }
    }
  }, [title, description, keywords]);

  return null;
};
