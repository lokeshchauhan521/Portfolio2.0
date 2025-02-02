import classNames from 'classnames'

const ConnectIcon = ({ className }: { className?: string }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="13"
      height="13"
      viewBox="0 0 13 13"
      stroke="#454545"
      className={classNames('icon', className)}
    >
      <path
        d="M1 12L12 1M12 1H2.1M12 1V10.9"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export default ConnectIcon
