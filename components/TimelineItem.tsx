const TimelineItem = ({
  icon,
  children,
}: {
  icon: React.ReactNode
  children: React.ReactNode
}) => {
  return (
    <div className="relative ms-6 pb-10 !border-0 !border-l-[1.5px] border-theme last:border-none">
      <div className="absolute top-0 left-0 z-10 flex items-center justify-center -translate-x-1/2 bg-white rounded-full dark:bg-dark size-14 border-theme">
        {icon}
      </div>
      <div className="ps-12 leading-6">{children}</div>
    </div>
  )
}

export default TimelineItem
