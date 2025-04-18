import { FC } from 'react';



import '@/components/pages/Maintenance/Maintenance.scss';


const Maintenance: FC = () => {
  return (
    <div className='wrap' id='wrap'>
      <div className='container'>
        <main>
          <div className='header__logo'>
            <img
              src='https://cloud.devtome.top/domains/simpatik.group/forbidden/logo.png'
              alt='simpatik.group'
            />
          </div>
          <h1>сайт закрито</h1>
          <p className='subtitle'>на реконструкцію</p>
        </main>
        {/* <footer>
          <p>
            Проте ми завжди на зв’язку в{' '}
            <span className='nobr'>соціальних мережах!</span> <br />
            Приєднуйтесь, щоб залишатися в курсі подій.
          </p>
          <a href='http://' target='_blank' rel='noopener noreferrer'></a>
          <div className='icons'>
            <a
              href='https://www.facebook.com/holdingsimpatikgroup/'
              target='_blank'
              rel='noopener noreferrer'
              className='icon'
            >
              <img
                src='https://cloud.devtome.top/domains/simpatik.group/forbidden/icon_fb.svg'
                alt='facebook'
                width='24'
                height='24'
              />
            </a>
            <a
              href='https://www.instagram.com/simpatik_group_holding'
              className='icon'
              target='_blank'
              rel='noopener noreferrer'
            >
              <img
                src='https://cloud.devtome.top/domains/simpatik.group/forbidden/icon_insta.svg'
                alt='instagram'
                width='24'
                height='24'
              />
            </a>
            <a
              href='https://www.linkedin.com/company/simpatikgroup/'
              className='icon'
              target='_blank'
              rel='noopener noreferrer'
            >
              <img
                src='https://cloud.devtome.top/domains/simpatik.group/forbidden/icon_linkin.svg'
                alt='linkedin'
                width='24'
                height='24'
              />
            </a>
          </div>
        </footer> */}
        <picture>
          <source
            srcSet='https://cloud.devtome.top/domains/simpatik.group/forbidden/decor--desk.png'
            media='(min-width: 768px)'
          />

          <img
            src='https://cloud.devtome.top/domains/simpatik.group/forbidden/decor.png'
            alt=''
            loading='lazy'
            className='decor'
          />
        </picture>
      </div>
    </div>
  );
};

export default Maintenance;