// External Imports
import Link from 'next/link';

const Button = ({ href }) => {
    return (
        <Link href={`${href}`}>
            <a className="text-[18px] leading-[1.22em] font-medium text-title transition-all duration-300 ease-in-out lg:p-[19px_82px] p-[16px_25px] min-h-[60px] inline-flex items-center justify-center gap-[10px] bg-primary hover:bg-primary-hover rounded-[100vmax] hover:translate-y-[-5px]">
                <span className="btn-text">Buy Tickets</span>
                <span className="btn-icon">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd" d="M15.5 1.125C15.5 0.95924 15.4341 0.800269 15.3169 0.683058C15.1997 0.565848 15.0408 0.5 14.875 0.5H7.375C7.20924 0.5 7.05026 0.565848 6.93305 0.683058C6.81584 0.800269 6.75 0.95924 6.75 1.125C6.75 1.29076 6.81584 1.44973 6.93305 1.56694C7.05026 1.68415 7.20924 1.75 7.375 1.75H13.3662L0.682496 14.4325C0.624386 14.4906 0.578291 14.5596 0.546842 14.6355C0.515393 14.7114 0.499207 14.7928 0.499207 14.875C0.499207 14.9572 0.515393 15.0386 0.546842 15.1145C0.578291 15.1904 0.624386 15.2594 0.682496 15.3175C0.740606 15.3756 0.809592 15.4217 0.885517 15.4532C0.961441 15.4846 1.04282 15.5008 1.125 15.5008C1.20718 15.5008 1.28855 15.4846 1.36448 15.4532C1.4404 15.4217 1.50939 15.3756 1.5675 15.3175L14.25 2.63375V8.625C14.25 8.79076 14.3158 8.94973 14.4331 9.06694C14.5503 9.18415 14.7092 9.25 14.875 9.25C15.0408 9.25 15.1997 9.18415 15.3169 9.06694C15.4341 8.94973 15.5 8.79076 15.5 8.625V1.125Z" fill="inherit" />
                    </svg>
                </span>
            </a>
        </Link>
    )
}

export default Button