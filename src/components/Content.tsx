import { useEffect } from 'react';

export function Content() {
    useEffect(() => {
        // Load Twitter widget script
        const script = document.createElement('script');
        script.src = 'https://platform.twitter.com/widgets.js';
        script.async = true;
        script.charset = 'utf-8';
        document.body.appendChild(script);

        return () => {
            // Cleanup script on unmount
            document.body.removeChild(script);
        };
    }, []);

    return (
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '2rem',
            padding: '2rem 1rem',
            maxWidth: '900px',
            margin: '0 auto'
        }}>
            {/* YouTube Video */}
            <div style={{ 
                width: '100%',
                aspectRatio: '16 / 9'
            }}>
                <iframe
                    src="https://www.youtube.com/embed/FedPUth6fQY"
                    title="My Video"
                    style={{
                        width: '100%',
                        height: '100%',
                        border: 'none',
                        borderRadius: '0.75rem'
                    }}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen"
                    allowFullScreen
                    loading="lazy"
                />
            </div>

            {/* Twitter/X Embed */}
            <div style={{ 
                width: '100%',
                display: 'flex',
                justifyContent: 'center'
            }}>
                <blockquote 
                    className="twitter-tweet" 
                    data-media-max-width="560"
                >
                    <p lang="en" dir="ltr">
                        When we say onboarding starts at arrival, we&apos;re not kidding.<br/><br/>
                        Welcome, Matthew. <a href="https://t.co/66JmLr92Ov">pic.twitter.com/66JmLr92Ov</a>
                    </p>
                    &mdash; Michael Fester (@michaelfester) <a href="https://twitter.com/michaelfester/status/1973061840625086483?ref_src=twsrc%5Etfw">September 30, 2025</a>
                </blockquote>
            </div>
        </div>
    )
}