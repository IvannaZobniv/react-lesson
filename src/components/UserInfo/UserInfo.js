import css from './UserInfo.module.css';

const UserInfo = () => {
    return (
        <div className={css['user-info']}>
            {/*<img src={avatarImage} alt="User avatar" />*/}
            <span className={css['user-info__name']}>Ivanna Zobniv</span>
        </div>
    );
};

export { UserInfo };
