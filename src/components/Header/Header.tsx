import styles from './Header.module.scss'


type IconProps = {
    width: string
    height: string
    color?: string
}


export default function Header () {
    return (
        <header className={styles.header}>
            <h1 className={styles.logo}>To do</h1>
            <SettingsIcon width="29" height="30" />
        </header>
    )
}

function SettingsIcon ({ width, height, color = '#F4F4F4' }: IconProps) {
    return (   
        <svg width={width} height={height} viewBox="0 0 29 30" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M15.3258 0C16.4602 0 17.4873 0.63 18.0545 1.56C18.3304 2.01 18.5143 2.565 18.4684 3.15C18.4377 3.6 18.5757 4.05 18.8209 4.47C19.6027 5.745 21.3349 6.225 22.6839 5.505C24.2015 4.635 26.1177 5.16 26.9915 6.645L28.0186 8.415C28.9077 9.9 28.4171 11.805 26.8842 12.66C25.5812 13.425 25.1213 15.12 25.9031 16.41C26.1484 16.815 26.4243 17.16 26.8535 17.37C27.39 17.655 27.8039 18.105 28.0952 18.555C28.6624 19.485 28.6164 20.625 28.0645 21.63L26.9915 23.43C26.4243 24.39 25.3666 24.99 24.2782 24.99C23.7417 24.99 23.1438 24.84 22.6533 24.54C22.2547 24.285 21.7948 24.195 21.3043 24.195C19.7867 24.195 18.5143 25.44 18.4684 26.925C18.4684 28.65 17.0581 30 15.2952 30H13.2104C11.4322 30 10.0219 28.65 10.0219 26.925C9.99122 25.44 8.71888 24.195 7.20128 24.195C6.69541 24.195 6.23553 24.285 5.85229 24.54C5.36175 24.84 4.74858 24.99 4.22738 24.99C3.12367 24.99 2.06594 24.39 1.49876 23.43L0.44103 21.63C-0.126157 20.655 -0.156815 19.485 0.410371 18.555C0.655641 18.105 1.11552 17.655 1.63672 17.37C2.06594 17.16 2.34187 16.815 2.60247 16.41C3.36894 15.12 2.90906 13.425 1.60606 12.66C0.0884544 11.805 -0.402085 9.9 0.471688 8.415L1.49876 6.645C2.38786 5.16 4.2887 4.635 5.82164 5.505C7.15529 6.225 8.88751 5.745 9.6693 4.47C9.91457 4.05 10.0525 3.6 10.0219 3.15C9.99122 2.565 10.1598 2.01 10.4511 1.56C11.0183 0.63 12.0454 0.03 13.1644 0H15.3258ZM14.2681 10.77C11.8614 10.77 9.91457 12.66 9.91457 15.015C9.91457 17.37 11.8614 19.245 14.2681 19.245C16.6748 19.245 18.5757 17.37 18.5757 15.015C18.5757 12.66 16.6748 10.77 14.2681 10.77Z" fill="#F4F4F4"/>
        </svg>
    )
}