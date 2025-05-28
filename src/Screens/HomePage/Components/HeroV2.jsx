import React from 'react'
import hero from '../../../assets/hero.jpg'
import { motion } from 'framer-motion'
import Button1 from '../../../Components/Buttons/Button1'
import HeroVector from '../../../Vectors/HeroVector'
import { useNavigate } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

const HeroV2 = () => {
  const navigate = useNavigate()
  const { t } = useTranslation()

  return (
    <div id='home' className='w-full text-white snap-start relative'>
      <div
        style={{ backgroundImage: `url(${hero})`, backgroundSize: 'cover' }}
        className='text-center bg-center w-full h-screen'
      ></div>

      <div className='top-0 sm:top-10 left-0 absolute text-center bg-center sm:text-left w-full h-[80vh] sm:px-10 lg:px-20'>
        <div className='w-full h-full sm:rounded-[20px] flex justify-center flex-col items-center px-5 sm:px-10 text-center'>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            viewport={{ once: false, amount: 0.4 }}
            className='text-[32px] lg:text-[56px] roboto-700'
          >
            {t('hero_headline_1')}
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            viewport={{ once: false, amount: 0.4 }}
            className='text-[32px] lg:text-[56px] roboto-700 mb-10'
          >
            {t('hero_headline_2')}
          </motion.p>

          <p className='text-[12px] sm:text-[16px] lg:text-[20px] roboto-400'>
            {t('hero_subtext_1')}
          </p>
          <p className='text-[12px] sm:text-[16px] lg:text-[20px] roboto-400 mb-10'>
            {t('hero_subtext_2')}
          </p>

          <div className='flex justify-center sm:justify-start space-x-4'>
            <a href='#services'>
              <Button1
                fullBg={true}
                title={t('explore_button')}
                color={'#00A45A'}
                onClick={() => navigate('/login')}
              />
            </a>

            <Button1
              title={t('learn_more_button')}
              color={'#00A45A'}
              onClick={() => navigate('/login')}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default HeroV2
