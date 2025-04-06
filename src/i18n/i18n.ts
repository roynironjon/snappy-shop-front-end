
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// English translations
const enTranslations = {
  about: "About",
  skills: "Skills",
  projects: "Projects",
  contact: "Contact",
  darkMode: "Dark Mode",
  lightMode: "Light Mode",
  changeLanguage: "Change Language",
  languageChanged: "Language Changed",
  languageChangedDesc: "The website language has been updated.",
  heroTitle: "Professional Web & App Developer",
  heroSubtitle: "Building innovative digital experiences with modern technologies",
  viewProjects: "View Projects",
  contactMe: "Contact Me",
  aboutMe: "About Me",
  fullStackDeveloper: "Full Stack Developer",
  aboutDesc: "I'm a passionate full-stack developer with 5+ years of experience in web and mobile application development. I specialize in creating beautiful, responsive, and user-friendly interfaces using modern technologies like React, Next.js, and React Native.",
  experience: "5+ Years of Experience",
  clientSatisfaction: "100% Client Satisfaction",
  qualityWork: "High-Quality Work Delivery",
  mySkills: "My Skills",
  myProjects: "My Projects",
  viewDetails: "View Details",
  getInTouch: "Get In Touch",
  email: "Email",
  phone: "Phone",
  followMe: "Follow Me",
  sendMessage: "Send Message",
  name: "Name",
  subject: "Subject",
  message: "Message",
  footerCopyright: "Portfolio Pro. All Rights Reserved.",
  footerRights: "Designed and Developed with ❤️"
};

// Bengali translations
const bnTranslations = {
  about: "সম্পর্কে",
  skills: "দক্ষতা",
  projects: "প্রকল্প",
  contact: "যোগাযোগ",
  darkMode: "ডার্ক মোড",
  lightMode: "লাইট মোড",
  changeLanguage: "ভাষা পরিবর্তন করুন",
  languageChanged: "ভাষা পরিবর্তন হয়েছে",
  languageChangedDesc: "ওয়েবসাইট ভাষা আপডেট করা হয়েছে।",
  heroTitle: "পেশাদার ওয়েব ও অ্যাপ ডেভেলপার",
  heroSubtitle: "আধুনিক প্রযুক্তি দিয়ে উদ্ভাবনী ডিজিটাল অভিজ্ঞতা তৈরি করি",
  viewProjects: "প্রকল্পগুলি দেখুন",
  contactMe: "যোগাযোগ করুন",
  aboutMe: "আমার সম্পর্কে",
  fullStackDeveloper: "ফুল স্ট্যাক ডেভেলপার",
  aboutDesc: "আমি ওয়েব এবং মোবাইল অ্যাপ্লিকেশন ডেভেলপমেন্টে ৫+ বছরের অভিজ্ঞতা সহ একজন আবেগী ফুল-স্ট্যাক ডেভেলপার। আমি React, Next.js এবং React Native-এর মত আধুনিক প্রযুক্তি ব্যবহার করে সুন্দর, রেসপন্সিভ এবং ব্যবহারকারী-বান্ধব ইন্টারফেস তৈরিতে বিশেষজ্ঞ।",
  experience: "৫+ বছরের অভিজ্ঞতা",
  clientSatisfaction: "১০০% ক্লায়েন্ট সন্তুষ্টি",
  qualityWork: "উচ্চ-মানের কাজ সম্পন্ন",
  mySkills: "আমার দক্ষতা",
  myProjects: "আমার প্রকল্প",
  viewDetails: "বিস্তারিত দেখুন",
  getInTouch: "যোগাযোগ করুন",
  email: "ইমেইল",
  phone: "ফোন",
  followMe: "অনুসরণ করুন",
  sendMessage: "মেসেজ পাঠান",
  name: "নাম",
  subject: "বিষয়",
  message: "বার্তা",
  footerCopyright: "পোর্টফোলিও প্রো। সর্বস্বত্ব সংরক্ষিত।",
  footerRights: "❤️ দিয়ে ডিজাইন এবং ডেভেলপ করা হয়েছে"
};

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: enTranslations
    },
    bn: {
      translation: bnTranslations
    }
  },
  lng: "en",
  fallbackLng: "en",
  interpolation: {
    escapeValue: false
  }
});

export default i18n;
