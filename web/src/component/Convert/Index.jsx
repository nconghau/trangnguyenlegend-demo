import Menu from "../Menu";

import ConvertProduct from "./ConvertProduct";

export default function Scan() {
  return (
    <div>
      <>
        <div className="flex m-4">
          <Menu />
          <div className="content">
            <ConvertProduct />
           
          </div>
        </div>
      </>
    </div>
  )
}
