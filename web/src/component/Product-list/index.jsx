import Menu from "../Menu/";
import List from "./List";

export default function Product_list() {
  return (
    <div>
      <div className="flex m-4">
        <Menu />
        <div className="content">
          {/* BEGIN: Top Bar */}
         <List/>
          {/* END: Delete Confirmation Modal */}
        </div>
      </div>
    </div>
  )
}
