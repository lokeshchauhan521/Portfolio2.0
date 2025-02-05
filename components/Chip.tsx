import Image from 'next/image'

const Chip = ({ label, imgPath }: { label: string; imgPath?: any }) => {
  return (
    <div className="chip">
      {imgPath && (
        <Image src={imgPath} alt={label} className="size-8 rounded-full" />
      )}
      <p className="font-semibold me-2 text-lg">{label}</p>
    </div>
  )
}

export default Chip
