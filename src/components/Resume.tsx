import '../css/Resume.css'
import { useEffect, useState} from 'react';
console.log("Running Resume.tsx")

function Resume() {
  /*  
  const [viewportWidth, setViewportWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => {
          setViewportWidth(window.innerWidth);
        };
        window.addEventListener('resize', handleResize);
    )
    */

    return  <>
             <iframe src='/MMH_082424.pdf' width="100%" height="100%"> </iframe>
            </>
}

export default Resume