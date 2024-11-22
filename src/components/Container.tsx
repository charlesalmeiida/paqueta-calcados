interface ContainerProps {
  children: React.ReactNode
}

export function Container({ children }: ContainerProps) {
  return <div className="max-w-[1356px] px-4 mx-auto">{children}</div>
}
