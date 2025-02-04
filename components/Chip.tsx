import Image from 'next/image'

const Chip = ({ label, imgPath }: { label: string; imgPath?: any }) => {
  return (
    <div className="inline-flex items-center gap-2 rounded-full px-2 py-2 border-2 border-blue-500">
      {imgPath && (
        <Image src={imgPath} alt={label} className="size-8 rounded-full" />
      )}
      <p className="font-semibold me-2 text-lg">{label}</p>
    </div>
  )
}

export default Chip
