import styles from './Video.module.css';

const Video = ({ video }) => {
    const key = video?.key;

    if (!key) {
        return <div>No video found</div>;
    }

    return (
        <div className={styles['video-container']}>
            <iframe
                className={styles['video-iframe']}
                src={`https://www.youtube.com/embed/${key}`}
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
            ></iframe>
            <div className={styles['video-description']}>
                {video?.name}
            </div>
        </div>
    );
};

export { Video };
