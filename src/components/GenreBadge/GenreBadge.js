import css from './GenreBadge.module.css'

const GenreBadge = ({genre, isDarkMode}) => {
    const {name} = genre;
    const badgeStyle = isDarkMode ? css.nameDark : css.nameLight;
    return (
        <div className={css.GenreBadge}>
            <div className={badgeStyle}>{name}</div>
        </div>
    );
};

export {GenreBadge};

