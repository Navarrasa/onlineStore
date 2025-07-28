import { imageListClasses, useMediaQuery } from '@mui/material';

export function Banner(){
    
    const isMobile = useMediaQuery('(max-width: 639px)');
    const isTablet = useMediaQuery('(min-width: 640px) and (max-width: 1023px)');
    const isDesktop = useMediaQuery('(min-width: 1024px)');

  
    return (

        <section
        className='w-full flex justify-center items-center pointer-events-none'>
            <div>
                {isMobile && <img src="/600x200.png" alt="Banner OnlineStore" />}
                {isTablet && <img src="/1200x400.png" alt="Banner OnlineStore"/>}
                {isDesktop && <img src='/1875x625.png' alt='Banner OnlineStore'/>}
            </div>
        </section>

    );
}

export default Banner;