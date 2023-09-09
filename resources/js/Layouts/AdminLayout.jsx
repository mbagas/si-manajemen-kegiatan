import Sidebar from "@/Components/Sidebar"

export function AdminLayout({ children, ...props }) {
  return (
    <>
      <div className="w-100">
        <Sidebar user={props.user}>
          {children}
        </Sidebar>
      </div>

    </>
  )
}
