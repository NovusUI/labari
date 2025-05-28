import React from 'react';
import HomeCard1 from '../../../Components/HomeCard1';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';




const Explorev2 = () => {
    const { t} = useTranslation()


    const content = [
        {
          header: `${t("explore_1_title")}`,
          text:`${t("explore_1_text")}`,
          icon: ()=> <motion.svg
          whileHover={{ rotate: [0, 10, -10, 0] }}
          transition={{ duration: 0.6 }}
           width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="15" cy="15" r="15" fill="#F8C605"/>
          <path d="M18.4 26.3125H11.6C9.6 26.3125 8 24.7125 8 22.7125V7.9125C8 5.9125 9.6 4.3125 11.6 4.3125H18.5C20.5 4.3125 22.1 5.9125 22.1 7.9125V22.8125C22 24.7125 20.4 26.3125 18.4 26.3125ZM11.6 6.3125C10.7 6.3125 10 7.0125 10 7.9125V22.8125C10 23.6125 10.7 24.3125 11.6 24.3125H18.5C19.4 24.3125 20.1 23.6125 20.1 22.7125V7.9125C20 7.0125 19.3 6.3125 18.4 6.3125H11.6Z" fill="#0C1D44"/>
          <path d="M16.2992 9.61133H13.6992C13.0992 9.61133 12.6992 9.21133 12.6992 8.61133C12.6992 8.01133 13.0992 7.61133 13.6992 7.61133H16.3992C16.9992 7.61133 17.3992 8.01133 17.3992 8.61133C17.3992 9.21133 16.8992 9.61133 16.2992 9.61133Z" fill="#0C1D44"/>
          </motion.svg>
          
        },
        {
            header: `${t("explore_2_title")}`,
            text:`${t("explore_2_text")}`,          
            icon: ()=> <motion.svg
          whileHover={{ rotate: [0, 10, -10, 0] }}
          transition={{ duration: 0.6 }} width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="15" cy="15" r="15" fill="#F8C605"/>
          <path d="M19.1673 13C20.5391 13.0491 21.7039 14.078 21.6664 15.4562C21.6577 15.7769 21.5335 16.1732 21.285 16.9659C20.6872 18.8736 19.6824 20.5296 17.4314 20.927C17.0177 21 16.552 21 15.6208 21H14.3805C13.4493 21 12.9837 21 12.5699 20.927C10.3189 20.5296 9.3141 18.8736 8.71622 16.9659C8.4678 16.1732 8.34358 15.7769 8.33486 15.4562C8.2974 14.078 9.46218 13.0491 10.834 13" stroke="#141B34" stroke-width="1.5" stroke-linecap="round"/>
          <path d="M15.0007 16.3333V9M15.0007 16.3333C14.5339 16.3333 13.6617 15.0038 13.334 14.6667M15.0007 16.3333C15.4675 16.3333 16.3397 15.0038 16.6673 14.6667" stroke="#141B34" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          </motion.svg>
      
        },
        {
            header: `${t("explore_3_title")}`,
            text:`${t("explore_3_text")}`,         
             icon: ()=> <motion.svg
          whileHover={{ rotate: [0, 10, -10, 0] }}
          transition={{ duration: 0.6 }} width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="15" cy="15" r="15" fill="#F8C605"/>
          <path d="M21.6673 16.0527V16.1617M21.6673 16.1617C21.6673 15.6128 21.2675 15.1444 20.722 15.0541L19.9703 14.9298V15.4912M21.6673 16.1617V17.5497C21.6673 18.7699 21.6673 19.3799 21.4801 19.8656C21.1937 20.6083 20.6043 21.1951 19.8583 21.4802C19.3705 21.6667 18.7577 21.6667 17.5322 21.6667C16.8895 21.6667 16.5681 21.6667 16.2691 21.6012C15.8127 21.5013 15.3885 21.2902 15.0345 20.9867C14.8025 20.7877 14.6097 20.5318 14.2241 20.0199L12.5248 17.7642C12.2637 17.4176 12.2712 16.9391 12.5431 16.6007C12.8984 16.1586 13.5608 16.1221 13.9629 16.5225L14.8229 17.4349V11.9412C14.8229 11.4214 15.2407 11 15.7562 11C16.2717 11 16.6895 11.4214 16.6895 11.9412V13.807M19.9703 15.4912C19.9703 14.8711 19.4639 14.3684 18.8391 14.3684H18.2734V14.9298M19.9703 15.4912V16.0527M16.6895 13.807H17.1421C17.7669 13.807 18.2734 14.3097 18.2734 14.9298M16.6895 13.807V15.4912M18.2734 14.9298V15.4912" stroke="#141B34" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M21.6673 12.3407C21.6434 10.6849 21.5207 9.74614 20.8917 9.11635C20.1103 8.33398 18.8527 8.33398 16.3375 8.33398H13.6697C11.1544 8.33398 9.89676 8.33398 9.11537 9.11635C8.33398 9.89872 8.33398 11.1579 8.33398 13.6763V15.0119C8.33398 16.2565 8.33398 16.8788 8.53706 17.3697C8.80783 18.0242 9.32718 18.5442 9.98088 18.8153C10.2526 18.9281 10.5647 18.9783 11.0007 19.0007" stroke="#141B34" stroke-width="1.5" stroke-linecap="round"/>
          </motion.svg>
          
        },
        {
            header: `${t("explore_4_title")}`,
            text:`${t("explore_4_text")}`,          
            icon: ()=> <motion.svg
          whileHover={{ rotate: [0, 10, -10, 0] }}
          transition={{ duration: 0.6 }} width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="15" cy="15" r="15" fill="#F8C605"/>
          <path d="M15.0007 21.6673C18.6825 21.6673 21.6673 18.6825 21.6673 15.0007C21.6673 11.3188 18.6825 8.33398 15.0007 8.33398C11.3188 8.33398 8.33398 11.3188 8.33398 15.0007C8.33398 18.6825 11.3188 21.6673 15.0007 21.6673Z" stroke="#141B34" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M16.334 10.8259C16.334 10.8259 15.5906 11.1594 15.0684 10.905C14.4316 10.5948 13.8 9.29811 15.0616 8.33398" stroke="#141B34" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M12.34 13H12.334M17.6673 13H17.6613" stroke="#141B34" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M12.334 17C12.9421 17.8096 13.9102 18.3333 15.0007 18.3333C16.0911 18.3333 17.0593 17.8096 17.6673 17" stroke="#141B34" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          </motion.svg>
        },
      ];
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className='w-full py-16 px-6 md:px-10 lg:px-20 space-y-10 text-white bg-black mb-1'
    >
      <motion.h1
        initial={{ y: 30, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className='capitalize text-xl md:text-[40px] roboto-400 text-center md:text-left'
      >
        {t("explore_title")}
      </motion.h1>

      <div className='flex flex-wrap justify-center gap-6'>
        {content.map((c, index) => (
          <div
            key={index}
            className='w-full sm:w-[45%] lg:w-[22%] lg:min-w-[300px] min-h-[200px] sm:min-h-[280px] flex'
          >
            <HomeCard1 header={c.header} text={c.text} icon={c.icon} />
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default Explorev2;
