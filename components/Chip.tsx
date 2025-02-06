import classNames from 'classnames'
import Image from 'next/image'

const Chip = ({
  label,
  imgPath,
  className,
}: {
  label: string
  imgPath?: any
  className?: string
}) => {
  return (
    <div className={classNames('chip', className)}>
      {imgPath && (
        <Image src={imgPath} alt={label} className="size-8 rounded-full" />
      )}
      <p className="font-semibold me-2">{label}</p>
    </div>
  )
}

export default Chip
